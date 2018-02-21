'use strict'
const WordType = require('./word_type.js');
const DerivationAttribute = require('./derivation_attribute.js');

const VERB = 'verb';
const ADJECTIVE = 'adjective';

module.exports = [
  /*
   * Dictionary form rules
   */

  // Negative
  {unconjugatedEnding: 'う', conjugatedEnding: 'わない', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'く', conjugatedEnding: 'かない', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'がない', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'す', conjugatedEnding: 'さない', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'たない', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'なない', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ばない', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'む', conjugatedEnding: 'まない', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'る', conjugatedEnding: 'らない', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ない', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},

  // Desu
  {unconjugatedEnding: 'う', conjugatedEnding: 'うです', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POLITE_DESU_VERB},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くです', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POLITE_DESU_VERB},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐです', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POLITE_DESU_VERB},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すです', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POLITE_DESU_VERB},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つです', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POLITE_DESU_VERB},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬです', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POLITE_DESU_VERB},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶです', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POLITE_DESU_VERB},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むです', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POLITE_DESU_VERB},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るです', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POLITE_DESU_VERB},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るです', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.POLITE_DESU_VERB},

  // Past form
  {unconjugatedEnding: 'う', conjugatedEnding: 'った', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'く', conjugatedEnding: 'いた', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'いだ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'す', conjugatedEnding: 'した', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'った', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'んだ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'んだ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'む', conjugatedEnding: 'んだ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'る', conjugatedEnding: 'った', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'る', conjugatedEnding: 'た', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.PLAIN_PAST},

  // Te form
  {unconjugatedEnding: 'う', conjugatedEnding: 'って', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'く', conjugatedEnding: 'いて', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'いで', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'す', conjugatedEnding: 'して', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'って', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'んで', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'んで', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'む', conjugatedEnding: 'んで', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'る', conjugatedEnding: 'って', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'る', conjugatedEnding: 'て', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.TE_FORM},

  // Ba form
  {unconjugatedEnding: 'う', conjugatedEnding: 'えば', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BA_FORM},
  {unconjugatedEnding: 'く', conjugatedEnding: 'けば', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BA_FORM},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'げば', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BA_FORM},
  {unconjugatedEnding: 'す', conjugatedEnding: 'せば', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BA_FORM},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'てば', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BA_FORM},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ねば', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BA_FORM},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'べば', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BA_FORM},
  {unconjugatedEnding: 'む', conjugatedEnding: 'めば', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BA_FORM},
  {unconjugatedEnding: 'る', conjugatedEnding: 'れば', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BA_FORM},
  {unconjugatedEnding: 'る', conjugatedEnding: 'れば', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.BA_FORM},

  // Potentional form
  {unconjugatedEnding: 'う', conjugatedEnding: 'える', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'く', conjugatedEnding: 'ける', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'げる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'す', conjugatedEnding: 'せる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL, cannotFollow: [[WordType.SHORTENED_CAUSATIVE, WordType.GODAN_VERB]]},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'てる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ねる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'べる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'む', conjugatedEnding: 'める', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'る', conjugatedEnding: 'れる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'る', conjugatedEnding: 'れる', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.POTENTIAL},

  // Potential koto ga dekiru
  {unconjugatedEnding: 'う', conjugatedEnding: 'うことができる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くことができる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐことができる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すことができる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つことができる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬことができる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶことができる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むことができる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることができる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることができる', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.POTENTIAL},

  {unconjugatedEnding: 'う', conjugatedEnding: 'うことできる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くことできる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐことできる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すことできる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つことできる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬことできる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶことできる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むことできる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることできる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.POTENTIAL},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることできる', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.POTENTIAL},

  // Occasional occurance koto ga aru
  {unconjugatedEnding: 'う', conjugatedEnding: 'うことがある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くことがある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐことがある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すことがある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つことがある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬことがある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶことがある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むことがある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることがある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることがある', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},

  {unconjugatedEnding: 'う', conjugatedEnding: 'うことある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くことある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐことある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すことある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つことある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬことある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶことある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むことある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることある', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることある', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},

  // Ambiguous potential/passive
  {unconjugatedEnding: 'る', conjugatedEnding: 'られる', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.POTENTIAL_PASSIVE},

  // Passive form
  {unconjugatedEnding: 'う', conjugatedEnding: 'われる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PASSIVE},
  {unconjugatedEnding: 'く', conjugatedEnding: 'かれる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PASSIVE},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'がれる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PASSIVE},
  {unconjugatedEnding: 'す', conjugatedEnding: 'される', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PASSIVE},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'たれる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PASSIVE},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'なれる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PASSIVE},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ばれる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PASSIVE},
  {unconjugatedEnding: 'む', conjugatedEnding: 'まれる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PASSIVE},

  // Imperative form
  {unconjugatedEnding: 'う', conjugatedEnding: 'え', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'く', conjugatedEnding: 'け', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'げ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'す', conjugatedEnding: 'せ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'て', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ね', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'べ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'む', conjugatedEnding: 'め', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'る', conjugatedEnding: 'れ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ろ', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.IMPERATIVE},

  // Volitional form
  {unconjugatedEnding: 'う', conjugatedEnding: 'おう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'く', conjugatedEnding: 'こう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ごう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'す', conjugatedEnding: 'そう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'とう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'のう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぼう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'む', conjugatedEnding: 'もう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ろう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'る', conjugatedEnding: 'よう', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.VOLITIONAL},

  // Masu stem form
  {unconjugatedEnding: 'る', conjugatedEnding: '', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.MASU_STEM, cannotFollow: [[WordType.SHORT_IRU, WordType.ICHIDAN_VERB]]},
  {unconjugatedEnding: 'う', conjugatedEnding: 'い', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: 'く', conjugatedEnding: 'き', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぎ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: 'す', conjugatedEnding: 'し', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'ち', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'に', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'び', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: 'む', conjugatedEnding: 'み', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: 'る', conjugatedEnding: 'り', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},

  // Causative form
  {unconjugatedEnding: 'う', conjugatedEnding: 'わせる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.CAUSATIVE},
  {unconjugatedEnding: 'く', conjugatedEnding: 'かせる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.CAUSATIVE},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'がせる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.CAUSATIVE},
  {unconjugatedEnding: 'す', conjugatedEnding: 'させる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.CAUSATIVE},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'たせる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.CAUSATIVE},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'なせる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.CAUSATIVE},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ばせる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.CAUSATIVE},
  {unconjugatedEnding: 'む', conjugatedEnding: 'ませる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.CAUSATIVE},
  {unconjugatedEnding: 'る', conjugatedEnding: 'らせる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.CAUSATIVE},
  {unconjugatedEnding: 'る', conjugatedEnding: 'させる', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.CAUSATIVE},

  // Tara form
  {unconjugatedEnding: 'う', conjugatedEnding: 'ったら', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'く', conjugatedEnding: 'いたら', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'いだら', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'す', conjugatedEnding: 'したら', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'ったら', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'んだら', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'んだら', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'む', conjugatedEnding: 'んだら', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ったら', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'る', conjugatedEnding: 'たら', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.TARA},

  // Tari form
  {unconjugatedEnding: 'う', conjugatedEnding: 'ったり', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARI},
  {unconjugatedEnding: 'く', conjugatedEnding: 'いたり', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARI},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'いだり', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARI},
  {unconjugatedEnding: 'す', conjugatedEnding: 'したり', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARI},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'ったり', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARI},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'んだり', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARI},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'んだり', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARI},
  {unconjugatedEnding: 'む', conjugatedEnding: 'んだり', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARI},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ったり', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARI},
  {unconjugatedEnding: 'る', conjugatedEnding: 'たり', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.TARI},

  // Zu form
  {unconjugatedEnding: 'う', conjugatedEnding: 'わず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.ZU},
  {unconjugatedEnding: 'く', conjugatedEnding: 'かず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.ZU},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'がず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.ZU},
  {unconjugatedEnding: 'す', conjugatedEnding: 'さず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.ZU},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'たず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.ZU},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'なず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.ZU},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ばず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.ZU},
  {unconjugatedEnding: 'む', conjugatedEnding: 'まず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.ZU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'らず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.ZU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ず', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.ZU},

  // Beki
  {unconjugatedEnding: 'う', conjugatedEnding: 'うべき', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKI},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くべき', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKI},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐべき', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKI},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すべき', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKI},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つべき', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKI},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬべき', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKI},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶべき', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKI},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むべき', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKI},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るべき', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKI},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るべき', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.BEKI},

  // SURU
  {unconjugatedEnding: 'する', conjugatedEnding: 'せず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.ZU},
  {unconjugatedEnding: 'する', conjugatedEnding: 'し', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: 'する', conjugatedEnding: 'して', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'する', conjugatedEnding: 'した', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'する', conjugatedEnding: 'しない', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'する', conjugatedEnding: 'しよう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'する', conjugatedEnding: 'させる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.CAUSATIVE},
  {unconjugatedEnding: 'する', conjugatedEnding: 'される', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.PASSIVE},
  {unconjugatedEnding: 'する', conjugatedEnding: 'しろ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'する', conjugatedEnding: 'せよ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'する', conjugatedEnding: 'すれば', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BA_FORM},
  {unconjugatedEnding: 'する', conjugatedEnding: 'したら', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'する', conjugatedEnding: 'すべき', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKI},

  // Hearsay
  {unconjugatedEnding: 'う', conjugatedEnding: 'うそう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くそう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐそう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すそう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つそう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬそう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶそう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むそう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るそう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るそう', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.HEARSAY},

  // Na command
  {unconjugatedEnding: 'う', conjugatedEnding: 'うな', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NA_COMMAND},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くな', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NA_COMMAND},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐな', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NA_COMMAND},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すな', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NA_COMMAND},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つな', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NA_COMMAND},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬな', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NA_COMMAND},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶな', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NA_COMMAND},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むな', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NA_COMMAND},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るな', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NA_COMMAND},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るな', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.NA_COMMAND},

  // Negative volitional
  {unconjugatedEnding: 'う', conjugatedEnding: 'うまい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_VOLITIONAL},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くまい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_VOLITIONAL},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐまい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_VOLITIONAL},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すまい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_VOLITIONAL},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つまい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_VOLITIONAL},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬまい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_VOLITIONAL},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶまい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_VOLITIONAL},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むまい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_VOLITIONAL},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るまい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.NEGATIVE_VOLITIONAL},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るまい', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.NEGATIVE_VOLITIONAL},

  // Koto ni suru
  {unconjugatedEnding: 'う', conjugatedEnding: 'うことにする', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_SURU},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くことにする', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_SURU},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐことにする', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_SURU},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すことにする', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_SURU},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つことにする', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_SURU},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬことにする', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_SURU},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶことにする', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_SURU},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むことにする', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_SURU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることにする', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_SURU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることにする', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.KOTO_NI_SURU},

  // Koto ni naru
  {unconjugatedEnding: 'う', conjugatedEnding: 'うことになる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くことになる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐことになる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すことになる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つことになる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬことになる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶことになる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むことになる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることになる', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ることになる', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.KOTO_NI_NARU},

  // Koto nominalizer
  {unconjugatedEnding: 'う', conjugatedEnding: 'うこと', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くこと', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐこと', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すこと', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つこと', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬこと', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶこと', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むこと', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ること', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ること', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.KOTO_NOMINALIZER},

  // Koto nominalizer
  {unconjugatedEnding: 'う', conjugatedEnding: 'う前', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MAE},
  {unconjugatedEnding: 'く', conjugatedEnding: 'く前', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MAE},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐ前', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MAE},
  {unconjugatedEnding: 'す', conjugatedEnding: 'す前', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MAE},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つ前', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MAE},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬ前', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MAE},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶ前', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MAE},
  {unconjugatedEnding: 'む', conjugatedEnding: 'む前', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MAE},
  {unconjugatedEnding: 'る', conjugatedEnding: 'る前', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MAE},
  {unconjugatedEnding: 'る', conjugatedEnding: 'る前', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.MAE},

  // Darou
  {unconjugatedEnding: 'う', conjugatedEnding: 'うだろう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.DAROU},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くだろう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.DAROU},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐだろう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.DAROU},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すだろう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.DAROU},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つだろう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.DAROU},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬだろう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.DAROU},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶだろう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.DAROU},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むだろう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.DAROU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るだろう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.DAROU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るだろう', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.DAROU},

  // Ga hayai ka
  {unconjugatedEnding: 'う', conjugatedEnding: 'うが早いか', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.GA_HAYAI_KA},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くが早いか', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.GA_HAYAI_KA},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐが早いか', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.GA_HAYAI_KA},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すが早いか', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.GA_HAYAI_KA},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つが早いか', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.GA_HAYAI_KA},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬが早いか', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.GA_HAYAI_KA},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶが早いか', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.GA_HAYAI_KA},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むが早いか', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.GA_HAYAI_KA},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るが早いか', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.GA_HAYAI_KA},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るが早いか', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.GA_HAYAI_KA},

  // Mitai
  {unconjugatedEnding: 'う', conjugatedEnding: 'うみたい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くみたい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐみたい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すみたい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つみたい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬみたい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶみたい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むみたい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るみたい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るみたい', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.MITAI},

  // Rashii
  {unconjugatedEnding: 'う', conjugatedEnding: 'うらしい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.RASHII},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くらしい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.RASHII},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐらしい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.RASHII},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すらしい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.RASHII},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つらしい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.RASHII},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬらしい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.RASHII},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶらしい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.RASHII},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むらしい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.RASHII},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るらしい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.RASHII},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るらしい', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.RASHII},

  // Rashii
  {unconjugatedEnding: 'う', conjugatedEnding: 'うほうがいい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HOU_GA_II},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くほうがいい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HOU_GA_II},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐほうがいい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HOU_GA_II},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すほうがいい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HOU_GA_II},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つほうがいい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HOU_GA_II},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬほうがいい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HOU_GA_II},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶほうがいい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HOU_GA_II},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むほうがいい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HOU_GA_II},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るほうがいい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HOU_GA_II},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るほうがいい', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.HOU_GA_II},

  // YOU
  {unconjugatedEnding: 'う', conjugatedEnding: 'うよう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くよう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐよう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すよう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つよう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬよう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶよう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むよう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るよう', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るよう', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.YOU},

  // HAZU
  {unconjugatedEnding: 'う', conjugatedEnding: 'うはず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HAZU},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くはず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HAZU},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐはず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HAZU},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すはず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HAZU},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つはず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HAZU},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬはず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HAZU},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶはず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HAZU},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むはず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HAZU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るはず', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.HAZU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るはず', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.HAZU},

  // BEKU
  {unconjugatedEnding: 'う', conjugatedEnding: 'うべく', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKU},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くべく', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKU},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐべく', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKU},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すべく', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKU},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つべく', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKU},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬべく', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKU},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶべく', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKU},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むべく', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るべく', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.BEKU},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るべく', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.BEKU},

  // KURU
  {unconjugatedEnding: '来る', conjugatedEnding: '来い', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.IMPERATIVE},

  // NASARU
  {unconjugatedEnding: 'なさる', conjugatedEnding: 'なさい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: '為さる', conjugatedEnding: '為さい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},

  // Irrassharu and ossharu
  {unconjugatedEnding: 'いらっしゃる', conjugatedEnding: 'いらっしゃい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: '居らっしゃる', conjugatedEnding: '居らっしゃい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: 'おっしゃる', conjugatedEnding: 'おっしゃい', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},
  {unconjugatedEnding: '仰る', conjugatedEnding: '仰い', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.MASU_STEM},

  // Special transformation to sentence end
  {unconjugatedEnding: 'う', conjugatedEnding: 'う', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'く', conjugatedEnding: 'く', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'す', conjugatedEnding: 'す', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶ', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'む', conjugatedEnding: 'む', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'る', conjugatedEnding: 'る', unconjugatedWordType: WordType.GODAN_VERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'る', conjugatedEnding: 'る', unconjugatedWordType: WordType.ICHIDAN_VERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Advjective rules
   */
  {unconjugatedEnding: 'い', conjugatedEnding: 'かった', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'い', conjugatedEnding: 'くない', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'い', conjugatedEnding: 'くはない', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'い', conjugatedEnding: 'くて', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'い', conjugatedEnding: 'く', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.ADVERB},
  {unconjugatedEnding: 'い', conjugatedEnding: 'ければ', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.BA_FORM},
  {unconjugatedEnding: 'い', conjugatedEnding: 'かったら', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いそう', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いです', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.POLITE_DESU_VERB},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いことがある', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いことある', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いこと', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'い', conjugatedEnding: 'かろう', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いべき', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.BEKI},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いそう', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'い', conjugatedEnding: 'そう', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.APPEARANCE},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いだろう', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.DAROU},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いことがある', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いことある', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いことにする', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.KOTO_NI_SURU},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いこと', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'い', conjugatedEnding: 'い', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いみたい', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いらしい', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.RASHII},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いよう', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'い', conjugatedEnding: 'いはず', unconjugatedWordType: WordType.ADJECTIVE, conjugatedWordType: WordType.HAZU},

  /*
   * Plain past form rules
   */
  {unconjugatedEnding: 'た', conjugatedEnding: 'たそう', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだそう', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.HEARSAY},
  {unconjugatedEnding: 'た', conjugatedEnding: 'たあげく', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.AGEKU},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだあげく', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.AGEKU},
  {unconjugatedEnding: 'た', conjugatedEnding: 'た挙句', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.AGEKU},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだ挙句', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.AGEKU},
  {unconjugatedEnding: 'た', conjugatedEnding: 'たこと', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだこと', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'た', conjugatedEnding: 'たことになる', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだことになる', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'た', conjugatedEnding: 'たみたい', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだみたい', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'た', conjugatedEnding: 'たばかり', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.TA_BAKARI},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだばかり', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.TA_BAKARI},
  {unconjugatedEnding: 'た', conjugatedEnding: 'たほうがいい', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.HOU_GA_II},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだほうがいい', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.HOU_GA_II},
  {unconjugatedEnding: 'た', conjugatedEnding: 'た', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだ', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'た', conjugatedEnding: 'たよう', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだよう', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.YOU},
  {unconjugatedEnding: 'た', conjugatedEnding: 'たはず', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.HAZU},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだはず', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.HAZU},
  {unconjugatedEnding: 'た', conjugatedEnding: 'たばっか', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.TA_BAKARI},
  {unconjugatedEnding: 'んだ', conjugatedEnding: 'んだばっか', unconjugatedWordType: WordType.PLAIN_PAST, conjugatedWordType: WordType.TA_BAKARI},

  /*
   * Masu stem rules
   */
  {unconjugatedEnding: '', conjugatedEnding: 'ます', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.POLITE_MASU},
  {unconjugatedEnding: '', conjugatedEnding: 'ません', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.POLITE_MASEN},
  {unconjugatedEnding: '', conjugatedEnding: 'そう', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.APPEARANCE},
  {unconjugatedEnding: '', conjugatedEnding: 'たい', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.TAI},
  {unconjugatedEnding: '', conjugatedEnding: 'なさい', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.NASAI},
  {unconjugatedEnding: '', conjugatedEnding: 'な', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.NASAI},
  {unconjugatedEnding: '', conjugatedEnding: 'はしない', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.MASU_STEM_WA_SHINAI},
  {unconjugatedEnding: '', conjugatedEnding: 'ながら', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.NAGARA},
  {unconjugatedEnding: '', conjugatedEnding: 'がち', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.GACHI},
  {unconjugatedEnding: '', conjugatedEnding: 'かた', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.KATA},
  {unconjugatedEnding: '', conjugatedEnding: '方', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.KATA},
  {unconjugatedEnding: '', conjugatedEnding: 'やすい', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.YASUI},
  {unconjugatedEnding: '', conjugatedEnding: 'にくい', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.NIKUI},
  {unconjugatedEnding: '', conjugatedEnding: 'すぎる', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.SUGIRU},
  {unconjugatedEnding: '', conjugatedEnding: '過ぎる', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.SUGIRU},
  {unconjugatedEnding: '', conjugatedEnding: 'すぎ', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.SUGI},
  {unconjugatedEnding: '', conjugatedEnding: '過ぎ', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.SUGI},
  {unconjugatedEnding: '', conjugatedEnding: 'に', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.MASU_STEM_NI},
  {unconjugatedEnding: '', conjugatedEnding: 'つつある', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.TSUTSU_ARU},
  {unconjugatedEnding: '', conjugatedEnding: 'がたい', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.GATAI},
  {unconjugatedEnding: '', conjugatedEnding: '難い', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.GATAI},
  {unconjugatedEnding: '', conjugatedEnding: '次第', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.SHIDAI},
  {unconjugatedEnding: '', conjugatedEnding: 'しだい', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.SHIDAI},
  {unconjugatedEnding: '', conjugatedEnding: 'やがる', unconjugatedWordType: WordType.MASU_STEM, conjugatedWordType: WordType.YAGARU},

  /*
   *  Te form rules
   */
  {unconjugatedEnding: 'て', conjugatedEnding: 'てください', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.KUDASAI},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でください', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.KUDASAI},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.NEGATIVE_ARU_OR_IRU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.NEGATIVE_ARU_OR_IRU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ている', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.IRU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でいる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.IRU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.SHORT_IRU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.SHORT_IRU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てある', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.ARU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'である', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.ARU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ておる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.ORU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でおる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.ORU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'とる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.ORU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'どる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.ORU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ておく', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.OKU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'とく', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.OKU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でおく', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.OKU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'どく', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.OKU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てもらう', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.MORAU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でもらう', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.MORAU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てくれる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.KURERU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でくれる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.KURERU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てあげる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.AGERU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'であげる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.AGERU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ては', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.WA_AFTER_TE},
  {unconjugatedEnding: 'で', conjugatedEnding: 'では', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.WA_AFTER_TE},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ても', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.MO_AFTER_TE},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でも', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.MO_AFTER_TE},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ていい', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.II},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でいい', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.II},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ていけない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKENAI_NARANAI},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でいけない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKENAI_NARANAI},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てはいけない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKENAI_NARANAI},
  {unconjugatedEnding: 'で', conjugatedEnding: 'ではいけない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKENAI_NARANAI},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てならない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKENAI_NARANAI},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でならない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKENAI_NARANAI},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てはならない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKENAI_NARANAI},
  {unconjugatedEnding: 'で', conjugatedEnding: 'ではならない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKENAI_NARANAI},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てだめ', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_DAME},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でだめ', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_DAME},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てはだめ', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_DAME},
  {unconjugatedEnding: 'で', conjugatedEnding: 'ではだめ', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_DAME},
  {unconjugatedEnding: 'て', conjugatedEnding: 'て駄目', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_DAME},
  {unconjugatedEnding: 'で', conjugatedEnding: 'で駄目', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_DAME},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ては駄目', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_DAME},
  {unconjugatedEnding: 'で', conjugatedEnding: 'では駄目', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_DAME},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てしまう', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.SHIMAU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でしまう', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.SHIMAU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てみる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.MIRU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でみる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.MIRU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てほしい', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.HOSHII},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でほしい', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.HOSHII},
  {unconjugatedEnding: 'て', conjugatedEnding: 'て欲しい', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.HOSHII},
  {unconjugatedEnding: 'で', conjugatedEnding: 'で欲しい', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.HOSHII},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てから', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_KARA},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でから', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_KARA},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てくる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_KURU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でくる', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_KURU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ていく', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でいく', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てく', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKU},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でく', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.TE_IKU},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てすまない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.SUMANAI},
  {unconjugatedEnding: 'で', conjugatedEnding: 'ですまない', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.SUMANAI},











  /*
   * Kudasai rules
   */
   {unconjugatedEnding: 'ください', conjugatedEnding: 'ください', unconjugatedWordType: WordType.KUDASAI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Negative aru or iru rules
   */
  {unconjugatedEnding: 'ない', conjugatedEnding: 'ない', unconjugatedWordType: WordType.NEGATIVE_ARU_OR_IRU, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},

  /*
   * Beku rules
   */
  {unconjugatedEnding: 'べく', conjugatedEnding: 'べく', unconjugatedWordType: WordType.BEKU, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Yagaru
   */
  {unconjugatedEnding: 'やがる', conjugatedEnding: 'やがる', unconjugatedWordType: WordType.YAGARU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Shidai rules
   */
  {unconjugatedEnding: '次第', conjugatedEnding: '次第だ', unconjugatedWordType: WordType.SHIDAI, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: 'しだい', conjugatedEnding: 'しだいだ', unconjugatedWordType: WordType.SHIDAI, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: '次第', conjugatedEnding: '次第', unconjugatedWordType: WordType.SHIDAI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'しだい', conjugatedEnding: 'しだい', unconjugatedWordType: WordType.SHIDAI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Gatai rules
   */
  {unconjugatedEnding: 'がたい', conjugatedEnding: 'がたい', unconjugatedWordType: WordType.GATAI, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: '難い', conjugatedEnding: '難い', unconjugatedWordType: WordType.GATAI, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},

  /*
   * Tsutsu aru rules
   */
  {unconjugatedEnding: 'つつある', conjugatedEnding: 'つつある', unconjugatedWordType: WordType.TSUTSU_ARU, conjugatedWordType: WordType.ARU, attributes: [DerivationAttribute.SILENT]},

  /*
   * Adverb rules
   */
  {unconjugatedEnding: 'く', conjugatedEnding: 'く', unconjugatedWordType: WordType.ADVERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くなる', unconjugatedWordType: WordType.ADVERB, conjugatedWordType: WordType.NARU},

  /*
   * Naru rules
   */
  {unconjugatedEnding: 'なる', conjugatedEnding: 'なる', unconjugatedWordType: WordType.NARU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Hazu rules
   */
  {unconjugatedEnding: 'はず', conjugatedEnding: 'はず', unconjugatedWordType: WordType.HAZU, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'はず', conjugatedEnding: 'はずだ', unconjugatedWordType: WordType.HAZU, conjugatedWordType: WordType.DA},

  /*
   * You rules
   */
  {unconjugatedEnding: 'よう', conjugatedEnding: 'よう', unconjugatedWordType: WordType.YOU, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'よう', conjugatedEnding: 'ようだ', unconjugatedWordType: WordType.YOU, conjugatedWordType: WordType.DA},

  /*
   * Kamau rules
   */
  {unconjugatedEnding: 'かまう', conjugatedEnding: 'かまう', unconjugatedWordType: WordType.KAMAU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Te iku rules
   */
  {unconjugatedEnding: 'いく', conjugatedEnding: 'いった', unconjugatedWordType: WordType.TE_IKU, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'いく', conjugatedEnding: 'いく', unconjugatedWordType: WordType.TE_IKU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'く', conjugatedEnding: 'く', unconjugatedWordType: WordType.TE_IKU, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Te kuru rules
   */
  {unconjugatedEnding: 'くる', conjugatedEnding: 'きた', unconjugatedWordType: WordType.TE_KURU, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'きたら', unconjugatedWordType: WordType.TE_KURU, conjugatedWordType: WordType.TARA},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こい', unconjugatedWordType: WordType.TE_KURU, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こない', unconjugatedWordType: WordType.TE_KURU, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こよう', unconjugatedWordType: WordType.TE_KURU, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こられる', unconjugatedWordType: WordType.TE_KURU, conjugatedWordType: WordType.POTENTIAL_PASSIVE},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こさせる', unconjugatedWordType: WordType.TE_KURU, conjugatedWordType: WordType.CAUSATIVE},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こよう', unconjugatedWordType: WordType.TE_KURU, conjugatedWordType: WordType.VOLITIONAL},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'き', unconjugatedWordType: WordType.TE_KURU, conjugatedWordType: WordType.MASU_STEM},

  /*
   * Te kara rules
   */
  {unconjugatedEnding: 'から', conjugatedEnding: 'からだ', unconjugatedWordType: WordType.TE_KARA, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: 'から', conjugatedEnding: 'から', unconjugatedWordType: WordType.TE_KARA, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Hoshii rules
   */
  {unconjugatedEnding: '欲しい', conjugatedEnding: '欲しい', unconjugatedWordType: WordType.HOSHII, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'ほしい', conjugatedEnding: 'ほしい', unconjugatedWordType: WordType.HOSHII, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},

  /*
   * Miru rules
   */
  {unconjugatedEnding: 'みる', conjugatedEnding: 'みる', unconjugatedWordType: WordType.MIRU, conjugatedWordType: WordType.ICHIDAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Shimau rules
   */
  {unconjugatedEnding: 'てしまう', conjugatedEnding: 'ちゃう', unconjugatedWordType: WordType.SHIMAU, conjugatedWordType: WordType.CHAU},
  {unconjugatedEnding: 'でしまう', conjugatedEnding: 'じゃう', unconjugatedWordType: WordType.SHIMAU, conjugatedWordType: WordType.JAU},
  {unconjugatedEnding: 'てしまう', conjugatedEnding: 'ちまう', unconjugatedWordType: WordType.SHIMAU, conjugatedWordType: WordType.CHIMAU},
  {unconjugatedEnding: 'でしまう', conjugatedEnding: 'じまう', unconjugatedWordType: WordType.SHIMAU, conjugatedWordType: WordType.JIMAU},
  {unconjugatedEnding: 'しまう', conjugatedEnding: 'しまう', unconjugatedWordType: WordType.SHIMAU, conjugatedWordType: WordType.GODAN_VERB, attributes:[DerivationAttribute.SILENT]},

  /*
   * Chau rules
   */
  {unconjugatedEnding: 'ちゃう', conjugatedEnding: 'ちゃう', unconjugatedWordType: WordType.CHAU, conjugatedWordType: WordType.GODAN_VERB, attributes:[DerivationAttribute.SILENT]},

  /*
   * Jau rules
   */
  {unconjugatedEnding: 'じゃう', conjugatedEnding: 'じゃう', unconjugatedWordType: WordType.JAU, conjugatedWordType: WordType.GODAN_VERB, attributes:[DerivationAttribute.SILENT]},

  /*
   * Chimau rules
   */
  {unconjugatedEnding: 'ちまう', conjugatedEnding: 'ちまう', unconjugatedWordType: WordType.CHIMAU, conjugatedWordType: WordType.GODAN_VERB, attributes:[DerivationAttribute.SILENT]},

  /*
   * Jimau rules
   */
  {unconjugatedEnding: 'じまう', conjugatedEnding: 'じまう', unconjugatedWordType: WordType.JIMAU, conjugatedWordType: WordType.GODAN_VERB, attributes:[DerivationAttribute.SILENT]},

  /*
   * Imperative rules
   */
  {unconjugatedEnding: 'え', conjugatedEnding: 'え', unconjugatedWordType: WordType.IMPERATIVE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes:[DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'け', conjugatedEnding: 'け', unconjugatedWordType: WordType.IMPERATIVE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes:[DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'げ', conjugatedEnding: 'げ', unconjugatedWordType: WordType.IMPERATIVE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes:[DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'せ', conjugatedEnding: 'せ', unconjugatedWordType: WordType.IMPERATIVE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes:[DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'て', conjugatedEnding: 'て', unconjugatedWordType: WordType.IMPERATIVE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes:[DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'ね', conjugatedEnding: 'ね', unconjugatedWordType: WordType.IMPERATIVE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes:[DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'べ', conjugatedEnding: 'べ', unconjugatedWordType: WordType.IMPERATIVE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes:[DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'め', conjugatedEnding: 'め', unconjugatedWordType: WordType.IMPERATIVE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes:[DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'れ', conjugatedEnding: 'れ', unconjugatedWordType: WordType.IMPERATIVE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes:[DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'ろ', conjugatedEnding: 'ろ', unconjugatedWordType: WordType.IMPERATIVE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes:[DerivationAttribute.SILENT]},

  /*
   * Masu stem ni rules
   */
  {unconjugatedEnding: 'に', conjugatedEnding: 'に', unconjugatedWordType: WordType.MASU_STEM_NI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Na command rules
   */
  {unconjugatedEnding: 'な', conjugatedEnding: 'な', unconjugatedWordType: WordType.NA_COMMAND, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Nasai rules
   */
  {unconjugatedEnding: 'なさい', conjugatedEnding: 'なさい', unconjugatedWordType: WordType.NASAI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'な', conjugatedEnding: 'な', unconjugatedWordType: WordType.NASAI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Yasui rules
   */
  {unconjugatedEnding: 'やすい', conjugatedEnding: 'やすい', unconjugatedWordType: WordType.YASUI, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},

  /*
   * Nikui rules
   */
  {unconjugatedEnding: 'にくい', conjugatedEnding: 'にくい', unconjugatedWordType: WordType.NIKUI, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},

  /*
   * Sugiru rules
   */
  {unconjugatedEnding: 'すぎる', conjugatedEnding: 'すぎる', unconjugatedWordType: WordType.SUGIRU, conjugatedWordType: WordType.ICHIDAN_VERB, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: '過ぎる', conjugatedEnding: '過ぎる', unconjugatedWordType: WordType.SUGIRU, conjugatedWordType: WordType.ICHIDAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Sugiru rules
   */
  {unconjugatedEnding: 'すぎ', conjugatedEnding: 'すぎだ', unconjugatedWordType: WordType.SUGI, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: '過ぎ', conjugatedEnding: '過ぎだ', unconjugatedWordType: WordType.SUGI, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: 'すぎ', conjugatedEnding: 'すぎ', unconjugatedWordType: WordType.SUGI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: '過ぎ', conjugatedEnding: '過ぎ', unconjugatedWordType: WordType.SUGI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Kata rules
   */
  {unconjugatedEnding: 'かた', conjugatedEnding: 'かただ', unconjugatedWordType: WordType.KATA, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: '方', conjugatedEnding: '方だ', unconjugatedWordType: WordType.KATA, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: 'かた', conjugatedEnding: 'かた', unconjugatedWordType: WordType.KATA, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: '方', conjugatedEnding: '方', unconjugatedWordType: WordType.KATA, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Gachi rules
   */
  {unconjugatedEnding: 'がち', conjugatedEnding: 'がち', unconjugatedWordType: WordType.GACHI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'がち', conjugatedEnding: 'がちだ', unconjugatedWordType: WordType.GACHI, conjugatedWordType: WordType.DA},

  /*
   * Wa shinai rules
   */
  {unconjugatedEnding: 'はしない', conjugatedEnding: 'はしない', unconjugatedWordType: WordType.MASU_STEM_WA_SHINAI, conjugatedWordType: WordType.NEGATIVE_NAI_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Garu rules
   */
  {unconjugatedEnding: 'がる', conjugatedEnding: 'がる', unconjugatedWordType: WordType.GARU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Rashii rules
   */
  {unconjugatedEnding: 'らしい', conjugatedEnding: 'らしい', unconjugatedWordType: WordType.RASHII, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},

  /*
   * Mitai rules
   */
  {unconjugatedEnding: 'みたい', conjugatedEnding: 'みたいだ', unconjugatedWordType: WordType.MITAI, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: 'みたい', conjugatedEnding: 'みたい', unconjugatedWordType: WordType.MITAI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Ga hayai ka rules
   */
  {unconjugatedEnding: 'が早いか', conjugatedEnding: 'がはやいか', unconjugatedWordType: WordType.GA_HAYAI_KA, conjugatedWordType: WordType.GA_HAYAI_KA},

  /*
   * Mae rules
   */
  {unconjugatedEnding: '前', conjugatedEnding: 'まえだ', unconjugatedWordType: WordType.MAE, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: '前', conjugatedEnding: '前だ', unconjugatedWordType: WordType.MAE, conjugatedWordType: WordType.DA},

  /*
   * Occasional occurance aru rules
   */
  {unconjugatedEnding: 'ある', conjugatedEnding: 'ある', unconjugatedWordType: WordType.OCCASIONAL_OCCURANCE_ARU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Nai negative form rules
   */
  {unconjugatedEnding: 'ない', conjugatedEnding: 'ぬ', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NU},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なきゃ', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKYA},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なくちゃ', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUCHA},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'ないで', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAIDE},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なさそう', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.APPEARANCE},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なくていけない', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_IKENAI_NARANAI},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なくてならない', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_IKENAI_NARANAI},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なくてはいけない', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_IKENAI_NARANAI},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なくてはならない', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_IKENAI_NARANAI},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なければいけない', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_IKENAI_NARANAI},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なければならない', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_IKENAI_NARANAI},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なくてだめ', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_DAME},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なくてはだめ', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_DAME},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なければだめ', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_DAME},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なくて駄目', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_DAME},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なくては駄目', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_DAME},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'なければ駄目', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.NAKUTE_NAKEREBA_DAME},
  {unconjugatedEnding: 'ない', conjugatedEnding: 'ない', unconjugatedWordType: WordType.NEGATIVE_NAI_VERB, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},

  /*
   * Te dame rules
   */
  {unconjugatedEnding: 'だめ', conjugatedEnding: 'だめだ', unconjugatedWordType: WordType.NAKUTE_NAKEREBA_DAME, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: '駄目', conjugatedEnding: '駄目だ', unconjugatedWordType: WordType.NAKUTE_NAKEREBA_DAME, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: 'だめ', conjugatedEnding: 'だめ', unconjugatedWordType: WordType.NAKUTE_NAKEREBA_DAME, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: '駄目', conjugatedEnding: '駄目', unconjugatedWordType: WordType.NAKUTE_NAKEREBA_DAME, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Nakute nakereba ikenai naranai rules
   */
  {unconjugatedEnding: 'ならない', conjugatedEnding: 'ならない', unconjugatedWordType: WordType.NAKUTE_NAKEREBA_IKENAI_NARANAI, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'いけない', conjugatedEnding: 'いけない', unconjugatedWordType: WordType.NAKUTE_NAKEREBA_IKENAI_NARANAI, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},

  /*
   * Nu rules
   */
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬことにする', unconjugatedWordType: WordType.NU, conjugatedWordType: WordType.KOTO_NI_SURU},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬことになる', unconjugatedWordType: WordType.NU, conjugatedWordType: WordType.KOTO_NI_NARU},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬこと', unconjugatedWordType: WordType.NU, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬみたい', unconjugatedWordType: WordType.NU, conjugatedWordType: WordType.MITAI},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬ', unconjugatedWordType: WordType.NU, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Hou ga ii rules
   */
  {unconjugatedEnding: 'ほうがいい', conjugatedEnding: '方がいい', unconjugatedWordType: WordType.HOU_GA_II, conjugatedWordType: WordType.II, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'ほうがいい', conjugatedEnding: 'ほうが良い', unconjugatedWordType: WordType.HOU_GA_II, conjugatedWordType: WordType.II, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'ほうがいい', conjugatedEnding: '方が良い', unconjugatedWordType: WordType.HOU_GA_II, conjugatedWordType: WordType.II, attributes: [DerivationAttribute.SILENT]},

  /*
   * Ta bakari rules
   */
  {unconjugatedEnding: 'ばかり', conjugatedEnding: 'ばかりだ', unconjugatedWordType: WordType.TA_BAKARI, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: 'ばかり', conjugatedEnding: 'ばかり', unconjugatedWordType: WordType.TA_BAKARI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  // Special transformation to sentence end
  {unconjugatedEnding: 'て', conjugatedEnding: 'て', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'で', conjugatedEnding: 'で', unconjugatedWordType: WordType.TE_FORM, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},


  /*
   * Sumanai rules
   */
  {unconjugatedEnding: 'すまない', conjugatedEnding: 'すみません', unconjugatedWordType: WordType.SUMANAI, conjugatedWordType: WordType.SUMIMASEN},

  /*
   * Sumimasen rules
   */
  {unconjugatedEnding: 'すみません', conjugatedEnding: 'すみません', unconjugatedWordType: WordType.SUMIMASEN, conjugatedWordType: WordType.POLITE_MASEN, attributes: [DerivationAttribute.SILENT]},

  /*
   * Te dame rules
   */
  {unconjugatedEnding: 'だめ', conjugatedEnding: 'だめだ', unconjugatedWordType: WordType.TE_DAME, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: '駄目', conjugatedEnding: '駄目だ', unconjugatedWordType: WordType.TE_DAME, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: 'だめ', conjugatedEnding: 'だめ', unconjugatedWordType: WordType.TE_DAME, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: '駄目', conjugatedEnding: '駄目', unconjugatedWordType: WordType.TE_DAME, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Te ikenai naranai rules
   */
  {unconjugatedEnding: 'いけない', conjugatedEnding: 'いけない', unconjugatedWordType: WordType.TE_IKENAI_NARANAI, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'ならない', conjugatedEnding: 'ならない', unconjugatedWordType: WordType.TE_IKENAI_NARANAI, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},

  /*
   * Wa after te rules
   */
  {unconjugatedEnding: 'は', conjugatedEnding: 'はいい', unconjugatedWordType: WordType.WA_AFTER_TE, conjugatedWordType: WordType.II},
  {unconjugatedEnding: 'は', conjugatedEnding: 'はない', unconjugatedWordType: WordType.WA_AFTER_TE, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'は', conjugatedEnding: 'はいる', unconjugatedWordType: WordType.WA_AFTER_TE, conjugatedWordType: WordType.IRU},
  {unconjugatedEnding: 'は', conjugatedEnding: 'はある', unconjugatedWordType: WordType.WA_AFTER_TE, conjugatedWordType: WordType.ARU},

  /*
   * Mo after te rules
   */
  {unconjugatedEnding: 'も', conjugatedEnding: 'もいい', unconjugatedWordType: WordType.MO_AFTER_TE, conjugatedWordType: WordType.II},
  {unconjugatedEnding: 'も', conjugatedEnding: 'もかまう', unconjugatedWordType: WordType.MO_AFTER_TE, conjugatedWordType: WordType.KAMAU},

  /*
   * Ba form rules
   */
  {unconjugatedEnding: 'ば', conjugatedEnding: 'ばいい', unconjugatedWordType: WordType.BA_FORM, conjugatedWordType: WordType.II},

  /*
   * Potential form rules
   */
  {unconjugatedEnding: 'る', conjugatedEnding: 'る', unconjugatedWordType: WordType.POTENTIAL, conjugatedWordType: WordType.ICHIDAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Potential/passive form rules
   */
  {unconjugatedEnding: 'られる', conjugatedEnding: 'られる', unconjugatedWordType: WordType.POTENTIAL_PASSIVE, conjugatedWordType: WordType.ICHIDAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Passive form rules
   */
  {unconjugatedEnding: 'れる', conjugatedEnding: 'れる', unconjugatedWordType: WordType.PASSIVE, conjugatedWordType: WordType.ICHIDAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Causative form rules
   */
  {unconjugatedEnding: 'せる', conjugatedEnding: 'せる', unconjugatedWordType: WordType.CAUSATIVE, conjugatedWordType: WordType.ICHIDAN_VERB, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'せる', conjugatedEnding: 'す', unconjugatedWordType: WordType.CAUSATIVE, conjugatedWordType: WordType.SHORTENED_CAUSATIVE},

  /*
   * Shorted causative form rules
   */
  {unconjugatedEnding: 'す', conjugatedEnding: 'す', unconjugatedWordType: WordType.SHORTENED_CAUSATIVE, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * ii rules
   */
  {unconjugatedEnding: 'いい', conjugatedEnding: 'よい', unconjugatedWordType: WordType.II, conjugatedWordType: WordType.II},
  {unconjugatedEnding: 'いい', conjugatedEnding: '良い', unconjugatedWordType: WordType.II, conjugatedWordType: WordType.II},
  {unconjugatedEnding: 'よい', conjugatedEnding: 'よい', unconjugatedWordType: WordType.II, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: '良い', conjugatedEnding: '良い', unconjugatedWordType: WordType.II, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'いい', conjugatedEnding: 'いい', unconjugatedWordType: WordType.II, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},

  /*
   * Tai form rules
   */
  {unconjugatedEnding: 'たい', conjugatedEnding: 'たい', unconjugatedWordType: WordType.TAI, conjugatedWordType: WordType.ADJECTIVE, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'たい', conjugatedEnding: 'たがる', unconjugatedWordType: WordType.TAI, conjugatedWordType: WordType.GARU},

  /*
   * Tara rules
   */
  {unconjugatedEnding: 'たら', conjugatedEnding: 'たらいい', unconjugatedWordType: WordType.TARA, conjugatedWordType: WordType.II},

  /*
   * Tari rules
   */
  {unconjugatedEnding: 'たり', conjugatedEnding: 'たりする', unconjugatedWordType: WordType.TARI, conjugatedWordType: WordType.GODAN_VERB, attributes:[DerivationAttribute.SILENT]},

  /*
   * Ba rules
   */
  {unconjugatedEnding: 'ば', conjugatedEnding: 'ばいい', unconjugatedWordType: WordType.BA_FORM, conjugatedWordType: WordType.II},

  /*
   * Nakya rules
   */
  {unconjugatedEnding: 'なきゃ', conjugatedEnding: 'なきゃいい', unconjugatedWordType: WordType.NAKYA, conjugatedWordType: WordType.II},

  // Special transformation to sentence end
  {unconjugatedEnding: 'なきゃ', conjugatedEnding: 'なきゃ', unconjugatedWordType: WordType.NAKYA, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Nakucha rules
   */
  {unconjugatedEnding: 'なくちゃ', conjugatedEnding: 'なくちゃいい', unconjugatedWordType: WordType.NAKUCHA, conjugatedWordType: WordType.II},

  // Special transformation to sentence end
  {unconjugatedEnding: 'なくちゃ', conjugatedEnding: 'なくちゃ', unconjugatedWordType: WordType.NAKUCHA, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Da rules
   */
  {unconjugatedEnding: 'だ', conjugatedEnding: 'です', unconjugatedWordType: WordType.DA, conjugatedWordType: WordType.POLITE_DESU_VERB},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'じゃない', unconjugatedWordType: WordType.DA, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'ではない', unconjugatedWordType: WordType.DA, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'だろう', unconjugatedWordType: WordType.DA, conjugatedWordType: WordType.DAROU},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'なの', unconjugatedWordType: WordType.DA, conjugatedWordType: WordType.EXPLANATORY_NO_PARTICLE},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'だった', unconjugatedWordType: WordType.DA, conjugatedWordType: WordType.PLAIN_PAST},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'である', unconjugatedWordType: WordType.DA, conjugatedWordType: WordType.DE_ARU},

  /*
   * De aru rules
   */
  {unconjugatedEnding: 'である', conjugatedEnding: 'である', unconjugatedWordType: WordType.DE_ARU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  // Special transformation to sentence end
  {unconjugatedEnding: 'だ', conjugatedEnding: 'だ', unconjugatedWordType: WordType.DA, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Polite desu rules
   */

  // Special transformation to sentence end
  {conjugatedEnding: 'です', unconjugatedEnding: 'です', unconjugatedWordType: WordType.POLITE_DESU_VERB, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Beki rules
   */
  {unconjugatedEnding: 'べき', conjugatedEnding: 'べきだ', unconjugatedWordType: WordType.BEKI, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: 'べき', conjugatedEnding: 'べきこと', unconjugatedWordType: WordType.BEKI, conjugatedWordType: WordType.KOTO_NOMINALIZER},
  {unconjugatedEnding: 'べき', conjugatedEnding: 'べきことになる', unconjugatedWordType: WordType.BEKI, conjugatedWordType: WordType.KOTO_NI_NARU},

  // Special transformation to sentence end
  {unconjugatedEnding: 'べき', conjugatedEnding: 'べき', unconjugatedWordType: WordType.BEKI, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Hearsay rules
   */
  {unconjugatedEnding: 'そう', conjugatedEnding: 'そうだ', unconjugatedWordType: WordType.HEARSAY, conjugatedWordType: WordType.DA},

  // Special transformation to sentence end
  {unconjugatedEnding: 'そう', conjugatedEnding: 'そう', unconjugatedWordType: WordType.HEARSAY, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Appearance rules
   */
  {unconjugatedEnding: 'そう', conjugatedEnding: 'そうだ', unconjugatedWordType: WordType.APPEARANCE, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: 'そう', conjugatedEnding: 'そうなこと', unconjugatedWordType: WordType.APPEARANCE, conjugatedWordType: WordType.KOTO_NOMINALIZER},

  // Special transformation to sentence end
  {unconjugatedEnding: 'そう', conjugatedEnding: 'そう', unconjugatedWordType: WordType.APPEARANCE, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Polite masu rules
   */
  {unconjugatedEnding: 'ます', conjugatedEnding: 'ました', unconjugatedWordType: WordType.POLITE_MASU, conjugatedWordType: WordType.POLITE_MASHITA},
  {unconjugatedEnding: 'ます', conjugatedEnding: 'まして', unconjugatedWordType: WordType.POLITE_MASU, conjugatedWordType: WordType.TE_FORM},
  {unconjugatedEnding: 'ます', conjugatedEnding: 'ましょう', unconjugatedWordType: WordType.POLITE_MASU, conjugatedWordType: WordType.POLITE_MASHOU},
  {unconjugatedEnding: 'ます', conjugatedEnding: 'ましたら', unconjugatedWordType: WordType.POLITE_MASU, conjugatedWordType: WordType.TARA},

  // Special transformation to sentence end
  {unconjugatedEnding: 'ます', conjugatedEnding: 'ます', unconjugatedWordType: WordType.POLITE_MASU, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Polite masen rules
   */
  {unconjugatedEnding: 'ません', conjugatedEnding: 'ませんでした', unconjugatedWordType: WordType.POLITE_MASEN, conjugatedWordType: WordType.POLITE_MASEN_DESHITA},
  {unconjugatedEnding: 'ません', conjugatedEnding: 'ませんでしたら', unconjugatedWordType: WordType.POLITE_MASEN, conjugatedWordType: WordType.TARA},

  // Special transformation to sentence end
  {unconjugatedEnding: 'ません', conjugatedEnding: 'ません', unconjugatedWordType: WordType.POLITE_MASEN, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Aru rules
   */
  {unconjugatedEnding: 'ある', conjugatedEnding: 'ない', unconjugatedWordType: WordType.ARU, conjugatedWordType: WordType.NEGATIVE_NAI_VERB},
  {unconjugatedEnding: 'ある', conjugatedEnding: 'ある', unconjugatedWordType: WordType.ARU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Iru rules
   */
  {unconjugatedEnding: 'いる', conjugatedEnding: 'いる', unconjugatedWordType: WordType.IRU, conjugatedWordType: WordType.ICHIDAN_VERB, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'る', conjugatedEnding: 'る', unconjugatedWordType: WordType.SHORT_IRU, conjugatedWordType: WordType.ICHIDAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Darou rules
   */
  {unconjugatedEnding: 'だろう', conjugatedEnding: 'でしょう', unconjugatedWordType: WordType.DAROU, conjugatedWordType: WordType.POLITE_DESHOU},

  // Special transformation to sentence end
  {unconjugatedEnding: 'だろう', conjugatedEnding: 'だろう', unconjugatedWordType: WordType.DAROU, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Deshou rules
   */

  // Special transformation to sentence end
  {unconjugatedEnding: 'でしょう', conjugatedEnding: 'でしょう', unconjugatedWordType: WordType.POLITE_DESHOU, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Morau rules
   */
  {unconjugatedEnding: 'もらう', conjugatedEnding: 'いただく', unconjugatedWordType: WordType.MORAU, conjugatedWordType: WordType.POLITE_ITADAKU},
  {unconjugatedEnding: 'もらう', conjugatedEnding: 'もらう', unconjugatedWordType: WordType.MORAU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},
  {unconjugatedEnding: 'いただく', conjugatedEnding: 'いただく', unconjugatedWordType: WordType.POLITE_ITADAKU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Kureru rules
   */
  {unconjugatedEnding: 'くれる', conjugatedEnding: 'くれ', unconjugatedWordType: WordType.KURERU, conjugatedWordType: WordType.IMPERATIVE},
  {unconjugatedEnding: 'くれる', conjugatedEnding: 'くれる', unconjugatedWordType: WordType.KURERU, conjugatedWordType: WordType.ICHIDAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Ageru rules
   */
  {unconjugatedEnding: 'あげる', conjugatedEnding: 'あげる', unconjugatedWordType: WordType.AGERU, conjugatedWordType: WordType.ICHIDAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Oku rules
   */
  {unconjugatedEnding: 'おく', conjugatedEnding: '置く', unconjugatedWordType: WordType.OKU, conjugatedWordType: WordType.OKU},
  {unconjugatedEnding: 'く', conjugatedEnding: 'く', unconjugatedWordType: WordType.OKU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Koto nominalizer rules
   */
  {unconjugatedEnding: 'こと', conjugatedEnding: 'ことだ', unconjugatedWordType: WordType.KOTO_NOMINALIZER, conjugatedWordType: WordType.DA},

  // Special transformation to sentence end
  {unconjugatedEnding: 'こと', conjugatedEnding: 'こと', unconjugatedWordType: WordType.KOTO_NOMINALIZER, conjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, attributes: [DerivationAttribute.SILENT]},

  /*
   * Koto ni suru rules
   */
  {unconjugatedEnding: 'ことにする', conjugatedEnding: 'ことにする', unconjugatedWordType: WordType.KOTO_NI_SURU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Koto ni naru rules
   */
  {unconjugatedEnding: 'ことになる', conjugatedEnding: 'ことになる', unconjugatedWordType: WordType.KOTO_NI_NARU, conjugatedWordType: WordType.GODAN_VERB, attributes: [DerivationAttribute.SILENT]},

  /*
   * Sentence ending particles rules
   */
  {unconjugatedEnding: '', conjugatedEnding: 'わ', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.FEMININE_WA_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'の', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.EXPLANATORY_NO_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'ん', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.EXPLANATORY_NO_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'よ', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.YO_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'ね', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.NE_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'な', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.NA_PARTICLE, cannotFollow: [[WordType.IMPERATIVE, WordType.SENTENCE_ENDING_PARTICLES]]},
  {unconjugatedEnding: '', conjugatedEnding: 'ぞ', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.ZO_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'ぜ', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.ZE_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'か', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.KA_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'が', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.GA_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'さ', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.SA_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'けど', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.KEDO_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'けれど', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.KEDO_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'けれども', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.KEDO_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'のに', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.NONI_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'まで', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.MADE_PARTICLE},
  {unconjugatedEnding: '', conjugatedEnding: 'から', unconjugatedWordType: WordType.SENTENCE_ENDING_PARTICLES, conjugatedWordType: WordType.KARA_PARTICLE, cannotFollow: [[WordType.TE_FORM, WordType.SENTENCE_ENDING_PARTICLES]]},

  /*
   * No particle rules
   */
  {unconjugatedEnding: 'の', conjugatedEnding: 'のよ', unconjugatedWordType: WordType.EXPLANATORY_NO_PARTICLE, conjugatedWordType: WordType.YO_PARTICLE},
  {unconjugatedEnding: 'の', conjugatedEnding: 'のね', unconjugatedWordType: WordType.EXPLANATORY_NO_PARTICLE, conjugatedWordType: WordType.NE_PARTICLE},
  {unconjugatedEnding: 'の', conjugatedEnding: 'のか', unconjugatedWordType: WordType.EXPLANATORY_NO_PARTICLE, conjugatedWordType: WordType.KA_PARTICLE},
  {unconjugatedEnding: 'の', conjugatedEnding: 'のさ', unconjugatedWordType: WordType.EXPLANATORY_NO_PARTICLE, conjugatedWordType: WordType.SA_PARTICLE},
  {unconjugatedEnding: 'の', conjugatedEnding: 'のだ', unconjugatedWordType: WordType.EXPLANATORY_NO_PARTICLE, conjugatedWordType: WordType.DA},
  {unconjugatedEnding: 'ん', conjugatedEnding: 'んだ', unconjugatedWordType: WordType.EXPLANATORY_NO_PARTICLE, conjugatedWordType: WordType.DA},

  /*
   * Made particle rules
   */
  {unconjugatedEnding: 'まで', conjugatedEnding: 'までわ', unconjugatedWordType: WordType.MADE_PARTICLE, conjugatedWordType: WordType.FEMININE_WA_PARTICLE},
  {unconjugatedEnding: 'まで', conjugatedEnding: 'までよ', unconjugatedWordType: WordType.MADE_PARTICLE, conjugatedWordType: WordType.YO_PARTICLE},
  {unconjugatedEnding: 'まで', conjugatedEnding: 'までね', unconjugatedWordType: WordType.MADE_PARTICLE, conjugatedWordType: WordType.NE_PARTICLE},
  {unconjugatedEnding: 'まで', conjugatedEnding: 'までさ', unconjugatedWordType: WordType.MADE_PARTICLE, conjugatedWordType: WordType.SA_PARTICLE},
  {unconjugatedEnding: 'まで', conjugatedEnding: 'までだ', unconjugatedWordType: WordType.MADE_PARTICLE, conjugatedWordType: WordType.DA},

  /*
   * Kara particle rules
   */
  {unconjugatedEnding: 'から', conjugatedEnding: 'からわ', unconjugatedWordType: WordType.KARA_PARTICLE, conjugatedWordType: WordType.FEMININE_WA_PARTICLE},
  {unconjugatedEnding: 'から', conjugatedEnding: 'からよ', unconjugatedWordType: WordType.KARA_PARTICLE, conjugatedWordType: WordType.YO_PARTICLE},
  {unconjugatedEnding: 'から', conjugatedEnding: 'からね', unconjugatedWordType: WordType.KARA_PARTICLE, conjugatedWordType: WordType.NE_PARTICLE},
  {unconjugatedEnding: 'から', conjugatedEnding: 'からさ', unconjugatedWordType: WordType.KARA_PARTICLE, conjugatedWordType: WordType.SA_PARTICLE},
  {unconjugatedEnding: 'から', conjugatedEnding: 'からだ', unconjugatedWordType: WordType.KARA_PARTICLE, conjugatedWordType: WordType.DA},


  /*
   * Feminine wa particle rules
   */
  {unconjugatedEnding: 'わ', conjugatedEnding: 'わよ', unconjugatedWordType: WordType.FEMININE_WA_PARTICLE, conjugatedWordType: WordType.YO_PARTICLE},
  {unconjugatedEnding: 'わ', conjugatedEnding: 'わね', unconjugatedWordType: WordType.FEMININE_WA_PARTICLE, conjugatedWordType: WordType.NE_PARTICLE},

  /*
   * Yo particle rules
   */
  {unconjugatedEnding: 'よ', conjugatedEnding: 'よね', unconjugatedWordType: WordType.YO_PARTICLE, conjugatedWordType: WordType.NE_PARTICLE},
  {unconjugatedEnding: 'よ', conjugatedEnding: 'よな', unconjugatedWordType: WordType.YO_PARTICLE, conjugatedWordType: WordType.NA_PARTICLE},

  /*
   * Ka particle rules
   */
  {unconjugatedEnding: 'か', conjugatedEnding: 'かよ', unconjugatedWordType: WordType.KA_PARTICLE, conjugatedWordType: WordType.YO_PARTICLE},
  {unconjugatedEnding: 'か', conjugatedEnding: 'かな', unconjugatedWordType: WordType.KA_PARTICLE, conjugatedWordType: WordType.NA_PARTICLE},
  {unconjugatedEnding: 'か', conjugatedEnding: 'かね', unconjugatedWordType: WordType.KA_PARTICLE, conjugatedWordType: WordType.NE_PARTICLE},

  /*
   * Kedo particle rules
   */
  {unconjugatedEnding: 'けど', conjugatedEnding: 'けどね', unconjugatedWordType: WordType.KEDO_PARTICLE, conjugatedWordType: WordType.NE_PARTICLE},
  {unconjugatedEnding: 'けれど', conjugatedEnding: 'けれどね', unconjugatedWordType: WordType.KEDO_PARTICLE, conjugatedWordType: WordType.NE_PARTICLE},
  {unconjugatedEnding: 'けれども', conjugatedEnding: 'けれども', unconjugatedWordType: WordType.KEDO_PARTICLE, conjugatedWordType: WordType.NE_PARTICLE},
  {unconjugatedEnding: 'けど', conjugatedEnding: 'けどな', unconjugatedWordType: WordType.KEDO_PARTICLE, conjugatedWordType: WordType.NA_PARTICLE},
  {unconjugatedEnding: 'けれど', conjugatedEnding: 'けれどな', unconjugatedWordType: WordType.KEDO_PARTICLE, conjugatedWordType: WordType.NA_PARTICLE},
  {unconjugatedEnding: 'けれども', conjugatedEnding: 'けれどもな', unconjugatedWordType: WordType.KEDO_PARTICLE, conjugatedWordType: WordType.NA_PARTICLE},

  /*
   * Noni particle rules
   */
  {unconjugatedEnding: 'のに', conjugatedEnding: 'のにね', unconjugatedWordType: WordType.NONI_PARTICLE, conjugatedWordType: WordType.NE_PARTICLE},
  {unconjugatedEnding: 'のに', conjugatedEnding: 'のにな', unconjugatedWordType: WordType.NONI_PARTICLE, conjugatedWordType: WordType.NA_PARTICLE},
];
