'use strict'
const derivationTable = require('./derivations.js');
const WordType = require('./word_type.js');
const DerivationAttribute = require('./derivation_attribute.js');
const frequencyForWord = require('./frequencyForWord.json');
const VerbType = require('./verb_type.js');

// For performance, map each rule to the conjugated word type that it can follow.

let derivationRulesForConjugatedWordType = {};

for (let rule of derivationTable) {
  let conjugatedWordType = rule.conjugatedWordType;
  if (!derivationRulesForConjugatedWordType[conjugatedWordType]) {
    derivationRulesForConjugatedWordType[conjugatedWordType] = [];
  }
  derivationRulesForConjugatedWordType[conjugatedWordType].push(rule);
}

function frequencyRankExistsForWord(word) {
  return frequencyForWord[word] !== undefined;
}

// Sort by the frequency of the base word.
function sortByLikelihood(results) {
  let resultsCopy = results.slice();
  return resultsCopy.sort((a, b) => {
    let aBase = a.base;
    let bBase = b.base;

    let aHasFrequency = frequencyRankExistsForWord(aBase);
    let bHasFrequency = frequencyRankExistsForWord(bBase);

    if (!aHasFrequency && !bHasFrequency) {
      return 0;
    }
    if (!aHasFrequency) {
      return 1;
    }
    if (!bHasFrequency) {
      return -1;
    }
    return frequencyForWord[bBase] - frequencyForWord[aBase];
  });
}

function filterWordEndsWithConjugatedWordEnding(word, derivations) {
  return derivations.filter(derivation => word.endsWith(derivation.conjugatedEnding));
}

function getCandidateDerivations(wordType, word, previousNonSilentDerivation) {
  // SENTENCE is a special word type that allows any
  // derivation whose conjugated word ending matches its/
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
  return {
    nonSilentDerivationsTaken: derivationSequence.nonSilentDerivationsTaken.slice(),
    nonSilentWordFormProgression: derivationSequence.nonSilentWordFormProgression.slice(),
    allDerivationsTaken: derivationSequence.allDerivationsTaken.slice(),
  };
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

function addWordToDerivationSequence(derivationSequence, word) {
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
  
  return derivationSequence;
}

function unconjugateWord(word, derivation) {
  return word.substring(0, word.length - derivation.conjugatedEnding.length) + derivation.unconjugatedEnding;
}

function wordEndsWithDerivationsConjugatedEnding(word, derivation) {
  return word.endsWith(derivation.conjugatedEnding);
}

function tookInvalidDerivationPath(derivationSequence) {
  let allDerivationsTaken = derivationSequence.allDerivationsTaken;
  let lastDerivation = allDerivationsTaken[allDerivationsTaken.length - 1];
  let secondToLastDerivation = allDerivationsTaken[allDerivationsTaken.length - 2];

  if (!lastDerivation || !secondToLastDerivation) {
    return false;
  }
  if (lastDerivation.cannotFollow && ~lastDerivation.cannotFollow.indexOf(secondToLastDerivation.conjugatedWordType)) {
    return true;
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

  let previousNonSilentDerivation = derivationSequence.nonSilentDerivationsTaken[derivationSequence.nonSilentDerivationsTaken.length - 1];

  // Check if we have reached a potentially valid result.
  let results = [];
  let isDictionaryForm = wordType === WordType.GODAN_VERB || wordType === WordType.ICHIDAN_VERB || wordType === WordType.SENTENCE;
  if (isDictionaryForm) {
    let derivationSequenceOutputForm = createDerivationSequenceOutputForm(addWordToDerivationSequence(derivationSequence, word));
    results.push({
      base: word,
      derivationSequence: derivationSequenceOutputForm,
    });
  }

  // Take possible derivation paths
  for (let candidateDerivation of getCandidateDerivations(wordType, word, previousNonSilentDerivation)) {
    let nextDerivationSequence = addDerivationToSequence(derivationSequence, candidateDerivation, word);
    let unconjugatedWord = unconjugateWord(word, candidateDerivation);
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
  let results = unconjugateRecursive(word, WordType.SENTENCE, createNewDerivationSequence(), 0, recursionDepthLimit);

  // If there are no results but the search should be fuzzy, chop off the last character one by one and see if we can get a substring that has results
  if (fuzzy && results.length === 0) {
    let truncatedWord = removeLastCharacter(word);
    while (truncatedWord && results.length === 0) {
      results = unconjugateRecursive(truncatedWord, WordType.SENTENCE, createNewDerivationSequence(), 0, recursionDepthLimit);
      truncatedWord = removeLastCharacter(truncatedWord);
    }
  }

  return sortByLikelihood(results);
}

module.exports.WordType = WordType;
module.exports.GrammarLinkForWordType = require('./grammar_explanations.js');
