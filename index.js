'use strict'
const derivationTable = require('./derivations.js');
const WordType = require('./word_type.js');
const DerivationAttribute = require('./derivation_attribute.js');
const frequencyForWord = require('./frequencyForWord.json');

// For performance, map each rule to the conjugated word type that it can follow.

const derivationRulesForConjugatedWordType = {};

for (let rule of derivationTable) {
  const conjugatedWordType = rule.conjugatedWordType;
  if (!derivationRulesForConjugatedWordType[conjugatedWordType]) {
    derivationRulesForConjugatedWordType[conjugatedWordType] = [];
  }
  derivationRulesForConjugatedWordType[conjugatedWordType].push(rule);
}

function getFrequencyForSuruVerb(word) {
  if (word.endsWith('する')) {
    const suruBase = word.substring(0, word.length - 2);
    return frequencyForWord[suruBase];
  }
  return undefined;
}

function compareFrequency(frequencyA, frequencyB) {
  if (frequencyA && frequencyB) {
    return frequencyA - frequencyB;
  }
  if (frequencyA) {
    return -1;
  }
  if (frequencyB) {
    return 1;
  }
  return 0;
}

// Sort by the frequency of the base word.
function sortByLikelihood(results) {
  const resultsCopy = results.slice();
  return resultsCopy.sort((a, b) => {
    const aBase = a.base;
    const bBase = b.base;

    const strictCompare = compareFrequency(frequencyForWord[aBase], frequencyForWord[bBase]);
    if (strictCompare) {
      return strictCompare;
    }

    const suruVerbCompare = compareFrequency(getFrequencyForSuruVerb(aBase), getFrequencyForSuruVerb(bBase));
    if (suruVerbCompare) {
      return suruVerbCompare;
    }

    return aBase.length - bBase.length;
  });
}

function filterWordEndsWithConjugatedWordEnding(word, derivations) {
  return derivations.filter(derivation => word.endsWith(derivation.conjugatedEnding));
}

function getCandidateDerivations(wordType, word) {
  // SENTENCE is a special word type that allows any
  // derivation whose conjugated word ending matches its
  // ending.
  let candidateDerivations;
  if (wordType === WordType.SENTENCE) {
    candidateDerivations = derivationTable;
  } else {
    candidateDerivations = derivationRulesForConjugatedWordType[wordType];
  }

  return filterWordEndsWithConjugatedWordEnding(word, candidateDerivations);
}

function derivationIsSilent(derivation) {
  return derivation.attributes && derivation.attributes.indexOf(DerivationAttribute.SILENT) !== -1;
}

function createNewDerivationSequence() {
  return {
    nonSilentDerivationsTaken: [],
    nonSilentWordFormProgression: [],
    allDerivationsTaken: [],
  };
}

function copyDerivationSequence(derivationSequence) {
  const copy = {};
  for (let key of Object.keys(derivationSequence)) {
    const array = derivationSequence[key];
    copy[key] = array.slice();
  }
  return copy;
}

function addDerivationToSequence(derivationSequence, derivation, derivedWord) {
  derivationSequence = copyDerivationSequence(derivationSequence);
  if (!derivationIsSilent(derivation)) {
    derivationSequence.nonSilentDerivationsTaken.push(derivation);
    derivationSequence.nonSilentWordFormProgression.push(derivedWord);
  }

  derivationSequence.allDerivationsTaken.push(derivation);
  return derivationSequence;
}

function addWordToWordFormProgression(derivationSequence, word) {
  derivationSequence = copyDerivationSequence(derivationSequence);
  derivationSequence.nonSilentWordFormProgression.push(word);
  return derivationSequence;
}

function createDerivationSequenceOutputForm(derivationSequence) {
  derivationSequence = copyDerivationSequence(derivationSequence);

  derivationSequence.derivations = derivationSequence.nonSilentDerivationsTaken.reverse().map(derivation => derivation.conjugatedWordType);
  derivationSequence.wordFormProgression = derivationSequence.nonSilentWordFormProgression.reverse();

  delete derivationSequence.nonSilentDerivationsTaken;
  delete derivationSequence.nonSilentWordFormProgression;
  delete derivationSequence.allDerivationsTaken;
  
  return derivationSequence;
}

function unconjugateWord(word, derivation) {
  return word.substring(0, word.length - derivation.conjugatedEnding.length) + derivation.unconjugatedEnding;
}

function tookInvalidDerivationPath(derivationSequence) {
  const allDerivationsTaken = derivationSequence.allDerivationsTaken;

  for (let i = 0; i < allDerivationsTaken.length; ++i) {
    const derivation = allDerivationsTaken[i];
    if (!derivation.cannotFollow) {
      continue;
    }
    for (let forbiddenSuccessorSequence of derivation.cannotFollow) {
      let nextDerivationOffset = 1;
      for (let g = forbiddenSuccessorSequence.length - 1; g >= 0; --g, ++nextDerivationOffset) {
        const nextDerivation = allDerivationsTaken[i + nextDerivationOffset];
        if (!nextDerivation || nextDerivation.conjugatedWordType !== forbiddenSuccessorSequence[g]) {
          break;
        }
        if (g === 0) {
          return true;
        }
      }
    }
  }

  return false;
}

function unconjugateRecursive(word, wordType, derivationSequence, level, levelLimit) {
  if (tookInvalidDerivationPath(derivationSequence)) {
    return [];
  }

  // Recursion is going too deep, abort.
  //
  // There should not be any potential for infinite recursion,
  // however it is difficult to verify with certainty that
  // there is none. Therefore, this is provided for safety.
  if (level > levelLimit) {
    return [];
  }
  // Check if we have reached a potentially valid result.
  let results = [];
  const isDictionaryForm = wordType === WordType.GODAN_VERB || wordType === WordType.ICHIDAN_VERB || wordType === WordType.SENTENCE;
  if (isDictionaryForm) {
    const derivationSequenceOutputForm = createDerivationSequenceOutputForm(addWordToWordFormProgression(derivationSequence, word));
    results.push({
      base: word,
      derivationSequence: derivationSequenceOutputForm,
    });
  }

  // Take possible derivation paths
  for (let candidateDerivation of getCandidateDerivations(wordType, word)) {
    const nextDerivationSequence = addDerivationToSequence(derivationSequence, candidateDerivation, word);
    const unconjugatedWord = unconjugateWord(word, candidateDerivation);
    results = results.concat(unconjugateRecursive(unconjugatedWord, candidateDerivation.unconjugatedWordType, nextDerivationSequence, level + 1, levelLimit));
  }
  return results;
}

function removeLastCharacter(str) {
  return str.substring(0, str.length - 1);
}

module.exports.unconjugate = function(word, fuzzy, recursionDepthLimit) {
  // Handle the 'recursionDepthLimit' argument being passed as the second argument, and the 'fuzzy' argument being omitted.
  if (typeof fuzzy === typeof 1) {
    recursionDepthLimit = fuzzy;
    fuzzy = undefined;
  }

  fuzzy = !!fuzzy;
  recursionDepthLimit = recursionDepthLimit || Math.MAX_SAFE_INTEGER;
  const results = unconjugateRecursive(word, WordType.SENTENCE, createNewDerivationSequence(), 0, recursionDepthLimit);

  // If there are no results but the search should be fuzzy, chop off the last character one by one and see if we can get a substring that has results
  if (fuzzy && results.length === 0) {
    const truncatedWord = removeLastCharacter(word);
    while (truncatedWord && results.length === 0) {
      results = unconjugateRecursive(truncatedWord, WordType.SENTENCE, createNewDerivationSequence(), 0, recursionDepthLimit);
      truncatedWord = removeLastCharacter(truncatedWord);
    }
  }

  return sortByLikelihood(results);
}

module.exports.WordType = WordType;
module.exports.GrammarLinkForWordType = require('./grammar_explanations.js');
