'use strict'
const derivationTable = require('./derivations.js');
const WordType = require('./word_type.js');
const DerivationAttribute = require('./derivation_attribute.js');
const dictionary = require('./dictionary.json');
const VerbType = require('./verb_type.js');

// Create separate sets for suru verbs and non suru verbs.

let suruVerbSet = {};
let ichiGoDanVerbSet = {};
for (let wordInformation of dictionary) {
  if (wordInformation.verbType === VerbType.NON_SURU_VERB) {
    ichiGoDanVerbSet[wordInformation.verb] = true;
  } else {
    suruVerbSet[wordInformation.verb] = true;
  }
}

// For performance, map each rule to the conjugated word type that it can follow.

let derivationRulesForConjugatedWordType = {};

for (let rule of derivationTable) {
  let conjugatedWordType = rule.conjugatedWordType;
  if (!derivationRulesForConjugatedWordType[conjugatedWordType]) {
    derivationRulesForConjugatedWordType[conjugatedWordType] = [];
  }
  derivationRulesForConjugatedWordType[conjugatedWordType].push(rule);
}

function isSuru(result) {
  return result.base === 'する';
}

// This is almost always, but not always, an accurate heuristic.
function isSuruVerb(result) {
  return result.base.endsWith('する');
}

function preferTrue(a, b) {
  if (a && !b) {
    return -1;
  } else if (b && !a) {
    return 1;
  } else {
    return 0;
  }
}

function preferSuru(a, b) {
  return preferTrue(isSuru(a), isSuru(b));
}

function preferNonSuruVerb(a, b) {
  return preferTrue(!isSuruVerb(a), !isSuruVerb(b));
}

const impossibleSequences = [
  [WordType.POTENTIAL, WordType.POTENTIAL_PASSIVE],
];

function hasImpossibleSequence(result) {
  const separator = '|';
  let pathString = result.derivationPath.join(separator);
  for (let impossibleSequence of impossibleSequences) {
    let impossibleSequenceString = impossibleSequence.join('|');
    if (pathString.indexOf(impossibleSequenceString) !== -1) {
      return true;
    }
  }
  return false;
}

function filterResultsWithImpossibleSequences(results) {
  return results.filter(result => !hasImpossibleSequence(result));
}

// This heuristic improves the results,
// but still makes a lot of mistakes.
// I think it might be best to sort
// results by the ranking of the base
// word in a word frequency list. That's
// TODO
function sortByLikelihood(results) {
  results = results.sort((a, b) => {
    let preference = 0;
    preference = preferSuru(a, b);
    if (preference) {
      return preference;
    }
    preference = preferNonSuruVerb(a, b);
    if (preference) {
      return preference;
    }
    return a.derivationPath.length - b.derivationPath.length;
  });
  return results;
}

function getCandidateDerivationsForWordType(wordType) {
  if (wordType === WordType.SENTENCE) {
    return derivationTable;
  }
  return derivationRulesForConjugatedWordType[wordType];
}

function canTakeDerivationPath(word, nextCandidateDerivation) {
  return word.endsWith(nextCandidateDerivation.conjugatedEnding);
}

function reduceResultDerivationsToWordTypes(results) {
  for (let result of results) {
    result.derivationPath = result.derivationPath.map(derivation => derivation.conjugatedWordType);
  }
  return results;
}

function derivationIsSilent(derivation) {
  return derivation.attributes && derivation.attributes.indexOf(DerivationAttribute.SILENT) !== -1;
}

class DerivationInformation {
  constructor(derivationPath, derivationSequence) {
    if (derivationPath) {
      this.derivationPath = derivationPath.slice();
    } else {
      this.derivationPath = [];
    }

    if (derivationSequence) {
      this.derivationSequence = derivationSequence.slice();
    } else {
      this.derivationSequence = [];
    }
  }

  tryPushDerivation(derivation, word) {
    if (!derivation) {
      this.derivationSequence.push(word);
      return;
    }
    if (!derivationIsSilent(derivation)) {
      this.derivationPath.push(derivation);
      this.derivationSequence.push(word);
    };
  }

  copy() {
    return new DerivationInformation(this.derivationPath, this.derivationSequence);
  }

  getDerivationPathFinalForm() {
    return this.derivationPath.slice().reverse();
  }

  getDerivationSequenceFinalForm() {
    return this.derivationSequence.slice().reverse();
  }
}

function unconjugateRecursive(word, wordType, derivationInformation, level, levelLimit) {
  // Invalid base cases
  if (level > levelLimit) {
    return [];
  }

  // Valid base case
  let results = [];
  let isIchiGoDanVerb = ichiGoDanVerbSet[word] === true;
  let isSuruVerb = word.endsWith('する') && suruVerbSet[word.replace('する', '')] === true;
  let isDictionaryForm = wordType === WordType.GODAN_VERB || wordType === WordType.ICHIDAN_VERB || wordType === WordType.SENTENCE;
  if ((isIchiGoDanVerb || isSuruVerb) && isDictionaryForm) {
    let nextDerivationInformation = derivationInformation.copy();
    nextDerivationInformation.tryPushDerivation(undefined, word);
    results.push({
      base: word,
      derivationPath: nextDerivationInformation.getDerivationPathFinalForm(),
      derivationSequence: nextDerivationInformation.getDerivationSequenceFinalForm()});
  }

  // Take possible derivation paths
  for (let candidateDerivation of getCandidateDerivationsForWordType(wordType)) {
    if (canTakeDerivationPath(word, candidateDerivation)) {
      let nextDerivationInformation = derivationInformation.copy();
      nextDerivationInformation.tryPushDerivation(candidateDerivation, word);
      let unconjugatedWord = word.substring(0, word.length - candidateDerivation.conjugatedEnding.length) + candidateDerivation.unconjugatedEnding;
      results = results.concat(unconjugateRecursive(unconjugatedWord, candidateDerivation.unconjugatedWordType, nextDerivationInformation, level + 1, levelLimit));
    }
  }
  return results;
}

module.exports.unconjugate = function(word, fuzzy, recursionDepthLimit) {
  if (typeof fuzzy === typeof 1) {
    recursionDepthLimit = fuzzy;
    fuzzy = undefined;
  }
  fuzzy = !!fuzzy;
  recursionDepthLimit = recursionDepthLimit || 999999;
  let results = unconjugateRecursive(word, WordType.SENTENCE, new DerivationInformation(), 0, recursionDepthLimit);

  if (fuzzy && results.length === 0) {
    // Chop off the last character one by one and see if we can get a substring that has results
    let truncatedWord = word.substring(0, word.length - 1);
    while (truncatedWord && results.length === 0) {
      results = unconjugateRecursive(truncatedWord, WordType.SENTENCE, new DerivationInformation(), 0, recursionDepthLimit);
      truncatedWord = truncatedWord.substring(0, truncatedWord.length - 1);
    }
  }

  results = reduceResultDerivationsToWordTypes(results);
  results = filterResultsWithImpossibleSequences(results);
  return sortByLikelihood(results);
}

module.exports.WordType = WordType;
module.exports.GrammarLinkForWordType = require('./grammar_explanations.js');
