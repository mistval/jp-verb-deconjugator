# jp-verb-conjugator

This module deconjugates conjugated Japanese verbs using a set of hundreds of rules.

## Examples

```js
const Conjugator = require('jp-verbs');

let result = Conjugator.unconjugate('言われてみれば');
console.log(JSON.stringify(result, null, 2));
```

Results in the following:

```json
[
  {
    "base": "言う",
    "derivationPath": [
      "Passive Form",
      "て・で Form",
      "みる To Try To Do",
      "ば Conditional Form"
    ],
    "currentDerivationSequence": [
      "言う",
      "言われる",
      "言われて",
      "言われてみる",
      "言われてみれば"
    ]
  }
]
```

Grammar links (mostly from Tae Kim) are also included for almost all of the word types:

```js
const Conjugator = require('jp-verbs');
const grammarLinks = Conjugator.GrammarLinkForWordType;
const wordType = Conjugator.WordType;

console.log(wordType.TE_FORM);
console.log(grammarLinks[wordType.TE_FORM]);
```

Results in the following:

```
て・で Form
http://www.guidetojapanese.org/learn/grammar/compound#Expressing_a_sequence_of_verbs_with_the_te-form
```

## Tests

After installing nyc and mocha globally, run tests with ```npm test```

## About

The dictionary of verbs was created from [EDICT2](http://www.edrdg.org/jmdict/edict.html)