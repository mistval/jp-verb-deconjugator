const WordType = require("./word_type.js");

const linkForDerivationStep = {};
linkForDerivationStep[WordType.POLITE_MASU] =
  "http://www.guidetojapanese.org/learn/grammar/polite#Not_being_rude_in_Japan";
linkForDerivationStep[WordType.POLITE_DESU_VERB] =
  "http://www.guidetojapanese.org/learn/grammar/polite#Not_being_rude_in_Japan";
linkForDerivationStep[WordType.POLITE_MASEN] =
  "http://www.guidetojapanese.org/learn/grammar/polite#Not_being_rude_in_Japan";
linkForDerivationStep[WordType.POLITE_MASEN_DESHITA] =
  "http://www.guidetojapanese.org/learn/grammar/polite#Not_being_rude_in_Japan";
linkForDerivationStep[WordType.POLITE_MASHITA] =
  "http://www.guidetojapanese.org/learn/grammar/polite#Not_being_rude_in_Japan";
linkForDerivationStep[WordType.POLITE_MASHOU] =
  "http://www.guidetojapanese.org/learn/complete/desire_volition";
linkForDerivationStep[WordType.NEGATIVE_NAI_VERB] =
  "http://www.guidetojapanese.org/learn/grammar/negativeverbs";
linkForDerivationStep[WordType.PLAIN_PAST] =
  "http://www.guidetojapanese.org/learn/grammar/past_tense";
linkForDerivationStep[WordType.TE_FORM] =
  "http://www.guidetojapanese.org/learn/grammar/compound#Expressing_a_sequence_of_verbs_with_the_te-form";
linkForDerivationStep[WordType.POTENTIAL] =
  "http://www.guidetojapanese.org/learn/grammar/potential";
linkForDerivationStep[WordType.POTENTIAL_PASSIVE] =
  "http://www.guidetojapanese.org/learn/grammar/causepass";
linkForDerivationStep[WordType.PASSIVE] =
  "http://www.guidetojapanese.org/learn/grammar/causepass";
linkForDerivationStep[WordType.BA_FORM] =
  "http://www.guidetojapanese.org/learn/grammar/conditionals";
linkForDerivationStep[WordType.IMPERATIVE] =
  "http://www.guidetojapanese.org/learn/grammar/requests";
linkForDerivationStep[WordType.VOLITIONAL] =
  "http://www.guidetojapanese.org/learn/complete/desire_volition";
linkForDerivationStep[WordType.MASU_STEM] =
  "http://www.guidetojapanese.org/learn/grammar/polite#The_stem_of_verbs";
linkForDerivationStep[WordType.HEARSAY] =
  "http://www.guidetojapanese.org/learn/grammar/similarity";
linkForDerivationStep[WordType.CAUSATIVE] =
  "http://www.guidetojapanese.org/learn/grammar/causepass";
linkForDerivationStep[WordType.SHORTENED_CAUSATIVE] =
  "http://www.guidetojapanese.org/learn/grammar/causepass";
linkForDerivationStep[WordType.TARA] =
  "http://www.guidetojapanese.org/learn/grammar/conditionals";
linkForDerivationStep[WordType.NAKYA] =
  "http://www.guidetojapanese.org/learn/grammar/must#Various_short-cuts_for_the_lazy";
linkForDerivationStep[WordType.NAKUCHA] =
  "http://www.guidetojapanese.org/learn/grammar/must#Various_short-cuts_for_the_lazy";
linkForDerivationStep[WordType.AGEKU] =
  "http://www.guidetojapanese.org/learn/grammar/other#Using_to_describe_a_bad_result";
linkForDerivationStep[WordType.TAI] =
  "http://www.guidetojapanese.org/learn/grammar/desire#Verbs_you_want_to_do_with";
linkForDerivationStep[WordType.APPEARANCE] =
  "http://www.guidetojapanese.org/learn/complete/appearance";
linkForDerivationStep[WordType.NAIDE] =
  "http://www.guidetojapanese.org/learn/complete/inaction#Express_8220without_doing8221_with";
linkForDerivationStep[WordType.NA_COMMAND] =
  "http://www.guidetojapanese.org/learn/grammar/requests";
linkForDerivationStep[WordType.NEGATIVE_VOLITIONAL] =
  "http://www.guidetojapanese.org/learn/grammar/volitional2#Negative_Volitional";
linkForDerivationStep[WordType.NASAI] =
  "http://www.guidetojapanese.org/learn/grammar/requests";
linkForDerivationStep[WordType.ZU] =
  "http://www.guidetojapanese.org/learn/complete/inaction#Express_8220without_doing8221_with-2";
linkForDerivationStep[WordType.ADVERB] =
  "http://www.guidetojapanese.org/learn/complete/adverbs";
linkForDerivationStep[WordType.WA_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/particlesintro#The_topic_particle";
linkForDerivationStep[WordType.IRU] =
  "http://www.guidetojapanese.org/learn/grammar/teform#Using_for_enduring_states";
linkForDerivationStep[WordType.ARU] =
  "http://www.guidetojapanese.org/learn/grammar/teform#Using_for_resultant_states";
linkForDerivationStep[WordType.ORU] =
  "http://www.guidetojapanese.org/learn/grammar/teform#Using_for_enduring_states";
linkForDerivationStep[WordType.KUDASAI] =
  "http://www.guidetojapanese.org/learn/grammar/requests";
linkForDerivationStep[WordType.NU] =
  "http://www.guidetojapanese.org/learn/grammar/negativeverbs2#A_classical_negative_verb_that_ends_in";
linkForDerivationStep[WordType.FEMININE_WA_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/sentence_ending#Gender-specific_sentence-ending_particles";
linkForDerivationStep[WordType.YO_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/adverbs#_sentence_ending";
linkForDerivationStep[WordType.NE_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/adverbs#_sentence_ending";
linkForDerivationStep[WordType.NA_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/sentence_ending#_and_sentence-ending_particles";
linkForDerivationStep[WordType.ZO_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/sentence_ending#Gender-specific_sentence-ending_particles";
linkForDerivationStep[WordType.ZE_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/sentence_ending#Gender-specific_sentence-ending_particles";
linkForDerivationStep[WordType.KA_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/question";
linkForDerivationStep[WordType.GA_PARTICLE] =
  "http://www.guidetojapanese.org/learn/complete/conjunctions#Combining_two_sentences_with_8220but8221";
linkForDerivationStep[WordType.SA_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/sentence_ending#_and_sentence-ending_particles";
linkForDerivationStep[WordType.MADE_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/verbparticles#The_target_particle";
linkForDerivationStep[WordType.KARA_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/verbparticles#The_target_particle";
linkForDerivationStep[WordType.KEDO_PARTICLE] =
  "http://www.guidetojapanese.org/learn/complete/conjunctions#Combining_two_sentences_with_8220but8221";
linkForDerivationStep[WordType.NONI_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/compound#Using_to_mean_8220despite8221";
linkForDerivationStep[WordType.POLITE_DESHOU] =
  "http://www.guidetojapanese.org/learn/grammar/certainty#Using_and_to_express_strong_amount_of_certainty_casual";
linkForDerivationStep[WordType.DAROU] =
  "http://www.guidetojapanese.org/learn/grammar/certainty#Using_and_to_express_strong_amount_of_certainty_casual";
linkForDerivationStep[WordType.POLITE_ITADAKU] =
  "http://www.guidetojapanese.org/learn/grammar/honorific";
linkForDerivationStep[WordType.MORAU] =
  "http://www.guidetojapanese.org/favor.html#part4";
linkForDerivationStep[WordType.BEKI] =
  "http://www.guidetojapanese.org/learn/grammar/should#Using_to_describe_actions_one_should_do";
linkForDerivationStep[WordType.OKU] =
  "http://www.guidetojapanese.org/learn/grammar/teform#Using_the_form_as_preparation_for_the_future";
linkForDerivationStep[WordType.KURERU] =
  "http://www.guidetojapanese.org/learn/grammar/favors#When_to_use-2";
linkForDerivationStep[WordType.AGERU] =
  "http://www.guidetojapanese.org/learn/grammar/favors#When_to_use";
linkForDerivationStep[WordType.WA_AFTER_TE] =
  "http://japanesetest4you.com/flashcard/learn-jlpt-n2-grammar-%E3%81%A6%E3%81%AF-tewa/";
linkForDerivationStep[WordType.MO_AFTER_TE] =
  "http://www.guidetojapanese.org/learn/complete/consequences#Asking_for_permission";
linkForDerivationStep[WordType.II] = undefined;
linkForDerivationStep[WordType.DA] =
  "http://www.guidetojapanese.org/copula.html#part1";
linkForDerivationStep[WordType.OCCASIONAL_OCCURANCE_ARU] =
  "http://japanesetest4you.com/flashcard/learn-jlpt-n3-grammar-%E3%81%93%E3%81%A8%E3%81%8C%E3%81%82%E3%82%8B-koto-ga-aru/";
linkForDerivationStep[WordType.EXPLANATORY_NO_PARTICLE] =
  "http://www.guidetojapanese.org/learn/grammar/nounparticles#The_particle_as_explanation";
linkForDerivationStep[WordType.KOTO_NOMINALIZER] =
  "http://www.guidetojapanese.org/genericnoun.html#part3";
linkForDerivationStep[WordType.KOTO_NI_SURU] =
  "http://japanesetest4you.com/flashcard/learn-jlpt-n3-grammar-%E3%81%93%E3%81%A8%E3%81%AB%E3%81%99%E3%82%8B-koto-ni-suru/";
linkForDerivationStep[WordType.KOTO_NI_NARU] =
  "http://japanesetest4you.com/flashcard/learn-jlpt-n3-grammar-%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%82%8B-koto-ni-naru/";
linkForDerivationStep[WordType.MAE] =
  "http://www.guidetojapanese.org/learn/complete/verb_sequences#Before_and_after";
linkForDerivationStep[WordType.GA_HAYAI_KA] =
  "http://www.jgram.org/pages/viewOne.php?tagE=gahayaika";
linkForDerivationStep[WordType.MITAI] =
  "http://www.guidetojapanese.org/similar.html#part3";
linkForDerivationStep[WordType.RASHII] =
  "http://www.guidetojapanese.org/similar.html#part6";
linkForDerivationStep[WordType.GARU] =
  "http://www.guidetojapanese.org/signs.html#part2";
linkForDerivationStep[WordType.MASU_STEM_WA_SHINAI] =
  "http://maggiesensei.com/2017/06/26/verb-%E2%86%92noun-%E3%80%9C%E3%81%AF%E3%81%97%E3%81%AA%E3%81%84-%E3%80%9C%E3%82%82%E3%81%97%E3%81%AA%E3%81%84-%E3%80%9C%E3%82%84%E3%81%97%E3%81%AA%E3%81%84-wa-shinai-mo-shinai-y/";
linkForDerivationStep[WordType.NAGARA] =
  "http://www.guidetojapanese.org/timeaction2.html#part5";
linkForDerivationStep[WordType.GACHI] =
  "http://www.guidetojapanese.org/learn/grammar/tendency#Saying_something_is_prone_to_occur_using";
linkForDerivationStep[WordType.KATA] =
  "http://www.guidetojapanese.org/learn/grammar/comparison#Using_to_express_a_way_to_do_something";
linkForDerivationStep[WordType.NIKUI] =
  "http://www.guidetojapanese.org/easyhard.html#part1";
linkForDerivationStep[WordType.YASUI] =
  "http://www.guidetojapanese.org/easyhard.html#part1";
linkForDerivationStep[WordType.SUGI] =
  "http://www.guidetojapanese.org/learn/grammar/amount#Saying_there8217s_too_much_of_something_using";
linkForDerivationStep[WordType.SUGIRU] =
  "http://www.guidetojapanese.org/learn/grammar/amount#Saying_there8217s_too_much_of_something_using";
linkForDerivationStep[WordType.MASU_STEM_NI] =
  "http://www.guidetojapanese.org/learn/grammar/polite#The_stem_of_verbs";
linkForDerivationStep[WordType.NAKUTE_NAKEREBA_IKENAI_NARANAI] =
  "http://www.guidetojapanese.org/learn/grammar/must#Expressing_things_that_must_be_done";
linkForDerivationStep[WordType.TE_IKENAI_NARANAI] =
  "http://www.guidetojapanese.org/learn/grammar/must#Using__and_for_things_that_must_not_be_done";
linkForDerivationStep[WordType.TE_DAME] =
  "http://www.guidetojapanese.org/learn/grammar/must#Using__and_for_things_that_must_not_be_done";
linkForDerivationStep[WordType.NAKUTE_NAKEREBA_DAME] =
  "http://www.guidetojapanese.org/learn/grammar/must#Expressing_things_that_must_be_done";
linkForDerivationStep[WordType.SHIMAU] =
  "http://www.guidetojapanese.org/learn/grammar/unintended#Using_with_other_verbs";
linkForDerivationStep[WordType.CHAU] =
  "http://www.guidetojapanese.org/learn/grammar/unintended#Using_the_casual_version_of";
linkForDerivationStep[WordType.MIRU] =
  "http://www.guidetojapanese.org/learn/grammar/try#To_try_something_out";
linkForDerivationStep[WordType.HOSHII] =
  "http://www.guidetojapanese.org/learn/grammar/desire#Indicating_things_you_want_or_want_done_using";
linkForDerivationStep[WordType.TE_KARA] =
  "http://www.jgram.org/pages/viewOne.php?tagE=kara-2";
linkForDerivationStep[WordType.TE_KURU] =
  "http://www.guidetojapanese.org/learn/grammar/teform#Using_motion_verbs_with_the_te-form";
linkForDerivationStep[WordType.TE_IKU] =
  "http://www.guidetojapanese.org/learn/grammar/teform#Using_motion_verbs_with_the_te-form";
linkForDerivationStep[WordType.KAMAU] =
  "http://www.guidetojapanese.org/learn/grammar/must#Saying_something_is_ok_to_do_or_not_do";
linkForDerivationStep[WordType.SUMANAI] =
  "https://www.japandict.com/%E6%B8%88%E3%81%BE%E3%81%AA%E3%81%84";
linkForDerivationStep[WordType.SUMIMASEN] =
  "http://www.guidetojapanese.org/learn/grammar/honorific";
linkForDerivationStep[WordType.JIMAU] =
  "http://www.guidetojapanese.org/learn/grammar/unintended#Using_the_casual_version_of";
linkForDerivationStep[WordType.CHIMAU] =
  "http://www.guidetojapanese.org/learn/grammar/unintended#Using_the_casual_version_of";
linkForDerivationStep[WordType.JAU] =
  "http://www.guidetojapanese.org/learn/grammar/unintended#Using_the_casual_version_of";
linkForDerivationStep[WordType.TARI] =
  "http://www.guidetojapanese.org/learn/grammar/compound#Expressing_multiple_actions_or_states_using";
linkForDerivationStep[WordType.TA_BAKARI] =
  "http://www.guidetojapanese.org/learn/grammar/timeactions#Expressing_what_just_happened_with";
linkForDerivationStep[WordType.HOU_GA_II] =
  "http://www.guidetojapanese.org/learn/grammar/comparison#Using_for_comparisons";
linkForDerivationStep[WordType.YOU] =
  "http://www.guidetojapanese.org/learn/complete/appearance";
linkForDerivationStep[WordType.HAZU] =
  "http://www.guidetojapanese.org/learn/grammar/should#Using_to_describe_an_expectation";
linkForDerivationStep[WordType.NARU] =
  "http://www.guidetojapanese.org/surunaru.html";
linkForDerivationStep[WordType.DE_ARU] =
  "http://www.guidetojapanese.org/formal.html#part2";
linkForDerivationStep[WordType.TSUTSU_ARU] =
  "http://www.guidetojapanese.org/tendency.html#part3";
linkForDerivationStep[WordType.GATAI] =
  "http://www.guidetojapanese.org/learn/grammar/easyhard";
linkForDerivationStep[WordType.SHIDAI] =
  "http://japanesetest4you.com/flashcard/learn-jlpt-n3-grammar-%E3%81%97%E3%81%A0%E3%81%84-shidai/";
linkForDerivationStep[WordType.YAGARU] =
  "http://www.guidetojapanese.org/learn/grammar/slang#Showing_contempt_for_an_action_with";
linkForDerivationStep[WordType.BEKU] =
  "http://www.guidetojapanese.org/learn/grammar/should#Using_to_describe_what_one_tries_to_do";

module.exports = linkForDerivationStep;
