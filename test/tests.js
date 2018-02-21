const Conjugator = require('./../index.js');
const assert = require('assert');
const WordType = require('./../word_type.js');
const derivations = require('./../derivations.js');

/* These tests assume use of the edict 2 dictionary */

function assertDerivationPathMatches() {
  const args = Array.from(arguments);
  const wordToDeconjugate = args[0];
  const expectedDeconjugatedResult = args[1];
  const derivationPath = args.slice(2);

  const results = Conjugator.unconjugate(wordToDeconjugate);
  if (results.length === 0) {
    throw new Error('No results for ' + wordToDeconjugate);
  }

  const bestResult = results[0];
  if (bestResult.base !== expectedDeconjugatedResult) {
    assert.fail('Deconjugated word is not as expected for ' + wordToDeconjugate + '. Expected: ' + expectedDeconjugatedResult + ' Actual: ' + bestResult.base);
  }

  const combinationCharacter = '|';
  const desiredDerivationPathString = derivationPath.join(combinationCharacter);
  const actualDerivationPathString = bestResult.derivationSequence.derivations.join(combinationCharacter);

  for (let derivation of derivationPath.concat(bestResult.derivationSequence.derivations)) {
    if (!derivation) {
      throw new Error('undefined derivation name for word ' + wordToDeconjugate);
    }
  }

  if (desiredDerivationPathString !== actualDerivationPathString) {
    let error = 'Test for wordToDeconjugate: ' + wordToDeconjugate + ' failed.\n';
    error += 'Desired derivation path: ' + JSON.stringify(desiredDerivationPathString.split(combinationCharacter));
    error += 'Actual derivation path: ' + JSON.stringify(actualDerivationPathString.split(combinationCharacter));
    console.log(error);
    assert.fail(error); 
  }
}

describe('Grammar rules', function () {
  it('Works for all grammar rules', function() {
    assertDerivationPathMatches('言ってもいいですよ', '言う', WordType.TE_FORM, WordType.MO_AFTER_TE, WordType.II, WordType.POLITE_DESU_VERB, WordType.YO_PARTICLE);
    assertDerivationPathMatches('遊べそうじゃないね', '遊ぶ', WordType.POTENTIAL, WordType.MASU_STEM, WordType.APPEARANCE, WordType.DA, WordType.NEGATIVE_NAI_VERB, WordType.NE_PARTICLE);
    assertDerivationPathMatches('誘ってもらわれてくれなかった', '誘う', WordType.TE_FORM, WordType.MORAU, WordType.PASSIVE, WordType.TE_FORM, WordType.KURERU, WordType.NEGATIVE_NAI_VERB, WordType.PLAIN_PAST);
    assertDerivationPathMatches('遊んでるべく', '遊ぶ', WordType.TE_FORM, WordType.SHORT_IRU, WordType.BEKU);
    assertDerivationPathMatches('敷きやがりなさい', '敷く', WordType.MASU_STEM, WordType.YAGARU, WordType.MASU_STEM, WordType.NASAI);
    assertDerivationPathMatches('重なり次第だ', '重なる', WordType.MASU_STEM, WordType.SHIDAI, WordType.DA);
    assertDerivationPathMatches('生き過ぎだ', '生きる', WordType.MASU_STEM, WordType.SUGI, WordType.DA);
    assertDerivationPathMatches('覚え難いの', '覚える', WordType.MASU_STEM, WordType.GATAI, WordType.EXPLANATORY_NO_PARTICLE);
    assertDerivationPathMatches('覚えがたいよ', '覚える', WordType.MASU_STEM, WordType.GATAI, WordType.YO_PARTICLE);
    assertDerivationPathMatches('飛びつつあった', '飛ぶ', WordType.MASU_STEM, WordType.TSUTSU_ARU, WordType.PLAIN_PAST);
    assertDerivationPathMatches('笑いたいのでありたい', '笑う', WordType.MASU_STEM, WordType.TAI, WordType.EXPLANATORY_NO_PARTICLE, WordType.DA, WordType.DE_ARU, WordType.MASU_STEM, WordType.TAI);
    assertDerivationPathMatches('笑いたくなった', '笑う', WordType.MASU_STEM, WordType.TAI, WordType.ADVERB, WordType.NARU, WordType.PLAIN_PAST);
    assertDerivationPathMatches('笑うはずです', '笑う', WordType.HAZU, WordType.DA, WordType.POLITE_DESU_VERB);
    assertDerivationPathMatches('笑わないようだろう', '笑う', WordType.NEGATIVE_NAI_VERB, WordType.YOU, WordType.DA, WordType.DAROU);
    assertDerivationPathMatches('笑ったようね', '笑う', WordType.PLAIN_PAST, WordType.YOU, WordType.NE_PARTICLE);
    assertDerivationPathMatches('来たばかりです', '来る', WordType.PLAIN_PAST, WordType.TA_BAKARI, WordType.DA, WordType.POLITE_DESU_VERB);
    assertDerivationPathMatches('死んじゃったりして', '死ぬ', WordType.TE_FORM, WordType.SHIMAU, WordType.JAU, WordType.TARI, WordType.TE_FORM);
    assertDerivationPathMatches('死んじゃったら', '死ぬ', WordType.TE_FORM, WordType.SHIMAU, WordType.JAU, WordType.TARA);
    assertDerivationPathMatches('叫んですみませんでした', '叫ぶ', WordType.TE_FORM, WordType.SUMANAI, WordType.SUMIMASEN, WordType.POLITE_MASEN_DESHITA);
    assertDerivationPathMatches('沈んでもかまわない', '沈む', WordType.TE_FORM, WordType.MO_AFTER_TE, WordType.KAMAU, WordType.NEGATIVE_NAI_VERB);
    assertDerivationPathMatches('沈んでいった', '沈む', WordType.TE_FORM, WordType.TE_IKU, WordType.PLAIN_PAST);
    assertDerivationPathMatches('上がってくよ', '上がる', WordType.TE_FORM, WordType.TE_IKU, WordType.YO_PARTICLE);
    assertDerivationPathMatches('話してこないだろう', '話す', WordType.TE_FORM, WordType.TE_KURU, WordType.NEGATIVE_NAI_VERB, WordType.DAROU);
    assertDerivationPathMatches('終わらせてからでしょうね', '終わる', WordType.CAUSATIVE, WordType.TE_FORM, WordType.TE_KARA, WordType.DA, WordType.DAROU, WordType.POLITE_DESHOU, WordType.NE_PARTICLE);
    assertDerivationPathMatches('名乗って欲しかったな', '名乗る', WordType.TE_FORM, WordType.HOSHII, WordType.PLAIN_PAST, WordType.NA_PARTICLE);
    assertDerivationPathMatches('試してみてね', '試す', WordType.TE_FORM, WordType.MIRU, WordType.TE_FORM, WordType.NE_PARTICLE);
    assertDerivationPathMatches('忘れちゃったね', '忘れる', WordType.TE_FORM, WordType.SHIMAU, WordType.CHAU, WordType.PLAIN_PAST, WordType.NE_PARTICLE);
    assertDerivationPathMatches('見てあげなさい', '見る', WordType.TE_FORM, WordType.AGERU, WordType.MASU_STEM, WordType.NASAI);
    assertDerivationPathMatches('下がってくれよ', '下がる', WordType.TE_FORM, WordType.KURERU, WordType.IMPERATIVE, WordType.YO_PARTICLE);
    assertDerivationPathMatches('笑わなくてはいけないよ', '笑う', WordType.NEGATIVE_NAI_VERB, WordType.NAKUTE_NAKEREBA_IKENAI_NARANAI, WordType.YO_PARTICLE);
    assertDerivationPathMatches('笑っては駄目なのよ', '笑う', WordType.TE_FORM, WordType.TE_DAME, WordType.DA, WordType.EXPLANATORY_NO_PARTICLE, WordType.YO_PARTICLE);
    assertDerivationPathMatches('笑ってはいけないのだ', '笑う', WordType.TE_FORM, WordType.TE_IKENAI_NARANAI, WordType.EXPLANATORY_NO_PARTICLE, WordType.DA);
    assertDerivationPathMatches('笑ってはいけないんだ', '笑う', WordType.TE_FORM, WordType.TE_IKENAI_NARANAI, WordType.EXPLANATORY_NO_PARTICLE, WordType.DA);
    assertDerivationPathMatches('笑ってはいけないのだ', '笑う', WordType.TE_FORM, WordType.TE_IKENAI_NARANAI, WordType.EXPLANATORY_NO_PARTICLE, WordType.DA);
    assertDerivationPathMatches('笑わなくてはいけないよ', '笑う', WordType.NEGATIVE_NAI_VERB, WordType.NAKUTE_NAKEREBA_IKENAI_NARANAI, WordType.YO_PARTICLE);
    assertDerivationPathMatches('笑わされる', '笑う', WordType.CAUSATIVE, WordType.SHORTENED_CAUSATIVE, WordType.PASSIVE);
    assertDerivationPathMatches('逃げてもいい', '逃げる', WordType.TE_FORM, WordType.MO_AFTER_TE, WordType.II);
    assertDerivationPathMatches('食べなくてよいよ', '食べる', WordType.NEGATIVE_NAI_VERB, WordType.TE_FORM, WordType.II, WordType.II, WordType.YO_PARTICLE);
    assertDerivationPathMatches('食べなくていいよ', '食べる', WordType.NEGATIVE_NAI_VERB, WordType.TE_FORM, WordType.II, WordType.YO_PARTICLE);
    assertDerivationPathMatches('食べなくてはいいよ', '食べる', WordType.NEGATIVE_NAI_VERB, WordType.TE_FORM, WordType.WA_AFTER_TE, WordType.II, WordType.YO_PARTICLE);
    assertDerivationPathMatches('食べに', '食べる', WordType.MASU_STEM, WordType.MASU_STEM_NI);
    assertDerivationPathMatches('逃げなよ', '逃げる', WordType.MASU_STEM, WordType.NASAI, WordType.YO_PARTICLE);
    assertDerivationPathMatches('逃げるなよ', '逃げる', WordType.NA_COMMAND, WordType.YO_PARTICLE);
    assertDerivationPathMatches('逃げやすいですね', '逃げる', WordType.MASU_STEM, WordType.YASUI, WordType.POLITE_DESU_VERB, WordType.NE_PARTICLE);
    assertDerivationPathMatches('逃げにくいですね', '逃げる', WordType.MASU_STEM, WordType.NIKUI, WordType.POLITE_DESU_VERB, WordType.NE_PARTICLE);
    assertDerivationPathMatches('逃げられすぎた', '逃げる', WordType.POTENTIAL_PASSIVE, WordType.MASU_STEM, WordType.SUGIRU, WordType.PLAIN_PAST);
    assertDerivationPathMatches('逃げられ過ぎた', '逃げる', WordType.POTENTIAL_PASSIVE, WordType.MASU_STEM, WordType.SUGIRU, WordType.PLAIN_PAST);
    assertDerivationPathMatches('逃げ方ですね', '逃げる', WordType.MASU_STEM, WordType.KATA, WordType.DA, WordType.POLITE_DESU_VERB, WordType.NE_PARTICLE);
    assertDerivationPathMatches('逃げかたですね', '逃げる', WordType.MASU_STEM, WordType.KATA, WordType.DA, WordType.POLITE_DESU_VERB, WordType.NE_PARTICLE);
    assertDerivationPathMatches('逃げがちですね', '逃げる', WordType.MASU_STEM, WordType.GACHI, WordType.DA, WordType.POLITE_DESU_VERB, WordType.NE_PARTICLE);
    assertDerivationPathMatches('追われながら', '追う', WordType.PASSIVE, WordType.MASU_STEM, WordType.NAGARA);
    assertDerivationPathMatches('出しはしないよ', '出す', WordType.MASU_STEM, WordType.MASU_STEM_WA_SHINAI, WordType.YO_PARTICLE);
    assertDerivationPathMatches('行きたがっていますね', '行く', WordType.MASU_STEM, WordType.TAI, WordType.GARU, WordType.TE_FORM, WordType.IRU, WordType.MASU_STEM, WordType.POLITE_MASU, WordType.NE_PARTICLE);
    assertDerivationPathMatches('行くらしくないですね', '行く', WordType.RASHII, WordType.NEGATIVE_NAI_VERB, WordType.POLITE_DESU_VERB, WordType.NE_PARTICLE);
    assertDerivationPathMatches('信じられないみたいだね', '信じる', WordType.POTENTIAL_PASSIVE, WordType.NEGATIVE_NAI_VERB, WordType.MITAI, WordType.DA, WordType.NE_PARTICLE);
    assertDerivationPathMatches('信じられるが早いか', '信じる', WordType.POTENTIAL_PASSIVE, WordType.GA_HAYAI_KA);
    assertDerivationPathMatches('信じられるがはやいか', '信じる', WordType.POTENTIAL_PASSIVE, WordType.GA_HAYAI_KA, WordType.GA_HAYAI_KA);
    assertDerivationPathMatches('言われるまえだよ', '言う', WordType.PASSIVE, WordType.MAE, WordType.DA, WordType.YO_PARTICLE);
    assertDerivationPathMatches('言われる前だよ', '言う', WordType.PASSIVE, WordType.MAE, WordType.DA, WordType.YO_PARTICLE);
    assertDerivationPathMatches('言わないよ', '言う', WordType.NEGATIVE_NAI_VERB, WordType.YO_PARTICLE);
    assertDerivationPathMatches('おいておいたことになったのだ', 'おく', WordType.TE_FORM, WordType.OKU, WordType.PLAIN_PAST, WordType.KOTO_NI_NARU, WordType.PLAIN_PAST, WordType.EXPLANATORY_NO_PARTICLE, WordType.DA);
    assertDerivationPathMatches('おいておくことにした', 'おく', WordType.TE_FORM, WordType.OKU, WordType.KOTO_NI_SURU, WordType.PLAIN_PAST);
    assertDerivationPathMatches('返したことなのですよ', '返す', WordType.PLAIN_PAST, WordType.KOTO_NOMINALIZER, WordType.DA, WordType.EXPLANATORY_NO_PARTICLE, WordType.DA, WordType.POLITE_DESU_VERB, WordType.YO_PARTICLE);
    assertDerivationPathMatches('帰ったのだよ', '帰る', WordType.PLAIN_PAST, WordType.EXPLANATORY_NO_PARTICLE, WordType.DA, WordType.YO_PARTICLE);
    assertDerivationPathMatches('殺されるな', '殺す', WordType.PASSIVE, WordType.NA_PARTICLE);
    assertDerivationPathMatches('はしゃぐことがあることがあるだろうよ', 'はしゃぐ', WordType.OCCASIONAL_OCCURANCE_ARU, WordType.OCCASIONAL_OCCURANCE_ARU, WordType.DAROU, WordType.YO_PARTICLE);
    assertDerivationPathMatches('止めることができる', '止める', WordType.POTENTIAL);
    assertDerivationPathMatches('止めることができているよ', '止める', WordType.POTENTIAL, WordType.TE_FORM, WordType.IRU, WordType.YO_PARTICLE);
    assertDerivationPathMatches('止められるまでだよね', '止める', WordType.POTENTIAL_PASSIVE, WordType.MADE_PARTICLE, WordType.DA, WordType.YO_PARTICLE, WordType.NE_PARTICLE);
    assertDerivationPathMatches('停止せよ', '停止する', WordType.IMPERATIVE);
    assertDerivationPathMatches('書ければ', '書く', WordType.POTENTIAL, WordType.BA_FORM);
    assertDerivationPathMatches('離さなくない', '離す', WordType.NEGATIVE_NAI_VERB, WordType.NEGATIVE_NAI_VERB);
    assertDerivationPathMatches('離さなくなさそうです', '離す', WordType.NEGATIVE_NAI_VERB, WordType.NEGATIVE_NAI_VERB, WordType.APPEARANCE, WordType.DA, WordType.POLITE_DESU_VERB);
    assertDerivationPathMatches('離さなかろう', '離す', WordType.NEGATIVE_NAI_VERB, WordType.VOLITIONAL);
    assertDerivationPathMatches('離さないべき', '離す', WordType.NEGATIVE_NAI_VERB, WordType.BEKI);
    assertDerivationPathMatches('離さなかったらよければ', '離す', WordType.NEGATIVE_NAI_VERB, WordType.TARA, WordType.II, WordType.II, WordType.BA_FORM);
    assertDerivationPathMatches('来る', '来る');
    assertDerivationPathMatches('来ない', '来る', WordType.NEGATIVE_NAI_VERB);
    assertDerivationPathMatches('来た', '来る', WordType.PLAIN_PAST);
    assertDerivationPathMatches('来い', '来る', WordType.IMPERATIVE);
    assertDerivationPathMatches('せず', 'する', WordType.ZU);
    assertDerivationPathMatches('しない', 'する', WordType.NEGATIVE_NAI_VERB);
    assertDerivationPathMatches('しなければ', 'する', WordType.NEGATIVE_NAI_VERB, WordType.BA_FORM);
    assertDerivationPathMatches('言っとけた', '言う', WordType.TE_FORM, WordType.OKU, WordType.POTENTIAL, WordType.PLAIN_PAST);
    assertDerivationPathMatches('言って置かれた', '言う', WordType.TE_FORM, WordType.OKU, WordType.OKU, WordType.PASSIVE, WordType.PLAIN_PAST);
    assertDerivationPathMatches('確認すべきです', '確認する', WordType.BEKI, WordType.DA, WordType.POLITE_DESU_VERB);
    assertDerivationPathMatches('書けなさそうです', '書く', WordType.POTENTIAL, WordType.NEGATIVE_NAI_VERB, WordType.APPEARANCE, WordType.DA, WordType.POLITE_DESU_VERB);
    assertDerivationPathMatches('離れていただけないでしょうか', '離れる', WordType.TE_FORM, WordType.MORAU, WordType.POLITE_ITADAKU, WordType.POTENTIAL, WordType.NEGATIVE_NAI_VERB, WordType.DAROU, WordType.POLITE_DESHOU, WordType.KA_PARTICLE);
    assertDerivationPathMatches('離れてもらえないでしょうか', '離れる', WordType.TE_FORM, WordType.MORAU, WordType.POTENTIAL, WordType.NEGATIVE_NAI_VERB, WordType.DAROU, WordType.POLITE_DESHOU, WordType.KA_PARTICLE);
    assertDerivationPathMatches('離れてもらいたいです', '離れる', WordType.TE_FORM, WordType.MORAU, WordType.MASU_STEM, WordType.TAI, WordType.POLITE_DESU_VERB);
    assertDerivationPathMatches('励ます', '励ます');
    assertDerivationPathMatches('話します', '話す', WordType.MASU_STEM, WordType.POLITE_MASU);
    assertDerivationPathMatches('話すです', '話す', WordType.POLITE_DESU_VERB);
    assertDerivationPathMatches('信じます', '信じる', WordType.MASU_STEM, WordType.POLITE_MASU);
    assertDerivationPathMatches('信じるです', '信じる', WordType.POLITE_DESU_VERB);
    assertDerivationPathMatches('行きません', '行く', WordType.MASU_STEM, WordType.POLITE_MASEN);
    assertDerivationPathMatches('得ません', '得る', WordType.MASU_STEM, WordType.POLITE_MASEN);
    assertDerivationPathMatches('語らないです', '語る', WordType.NEGATIVE_NAI_VERB, WordType.POLITE_DESU_VERB);
    assertDerivationPathMatches('語らないです', '語る', WordType.NEGATIVE_NAI_VERB, WordType.POLITE_DESU_VERB);
    assertDerivationPathMatches('弾けない', '弾く', WordType.POTENTIAL, WordType.NEGATIVE_NAI_VERB);
    assertDerivationPathMatches('集まりました', '集まる', WordType.MASU_STEM, WordType.POLITE_MASU, WordType.POLITE_MASHITA);
    assertDerivationPathMatches('信じました', '信じる', WordType.MASU_STEM, WordType.POLITE_MASU, WordType.POLITE_MASHITA);
    assertDerivationPathMatches('笑いませんでした', '笑う', WordType.MASU_STEM, WordType.POLITE_MASEN, WordType.POLITE_MASEN_DESHITA);
    assertDerivationPathMatches('放った', '放る', WordType.PLAIN_PAST);
    assertDerivationPathMatches('覚えた', '覚える', WordType.PLAIN_PAST);
    assertDerivationPathMatches('言わなかった', '言う', WordType.NEGATIVE_NAI_VERB, WordType.PLAIN_PAST);
    assertDerivationPathMatches('照らなかった', '照る', WordType.NEGATIVE_NAI_VERB, WordType.PLAIN_PAST);
    assertDerivationPathMatches('咲いて', '咲く', WordType.TE_FORM);
    assertDerivationPathMatches('消えて', '消える', WordType.TE_FORM);
    assertDerivationPathMatches('解きまして', '解く', WordType.MASU_STEM, WordType.POLITE_MASU, WordType.TE_FORM);
    assertDerivationPathMatches('変わらなくて', '変わる', WordType.NEGATIVE_NAI_VERB, WordType.TE_FORM);
    assertDerivationPathMatches('打てば', '打つ', WordType.BA_FORM);
    assertDerivationPathMatches('打たなければ', '打つ', WordType.NEGATIVE_NAI_VERB, WordType.BA_FORM);
    assertDerivationPathMatches('置かれる', '置く', WordType.PASSIVE);
    assertDerivationPathMatches('置かれることがあるよ', '置く', WordType.PASSIVE, WordType.OCCASIONAL_OCCURANCE_ARU, WordType.YO_PARTICLE);
    assertDerivationPathMatches('得られる', '得る', WordType.POTENTIAL_PASSIVE);
    assertDerivationPathMatches('帰れる', '帰る', WordType.POTENTIAL);
    assertDerivationPathMatches('帰れなくて', '帰る', WordType.POTENTIAL, WordType.NEGATIVE_NAI_VERB, WordType.TE_FORM);
    assertDerivationPathMatches('帰れなければ', '帰る', WordType.POTENTIAL, WordType.NEGATIVE_NAI_VERB, WordType.BA_FORM);
    assertDerivationPathMatches('帰れました', '帰る', WordType.POTENTIAL, WordType.MASU_STEM, WordType.POLITE_MASU, WordType.POLITE_MASHITA);
    assertDerivationPathMatches('放たれました', '放つ', WordType.PASSIVE, WordType.MASU_STEM, WordType.POLITE_MASU, WordType.POLITE_MASHITA);
    assertDerivationPathMatches('黙れ', '黙る', WordType.IMPERATIVE);
    //assertDerivationPathMatches('いろ', 'いる', WordType.IMPERATIVE);
    assertDerivationPathMatches('食べよう', '食べる', WordType.VOLITIONAL);
    assertDerivationPathMatches('殺されましょう', '殺す', WordType.PASSIVE, WordType.MASU_STEM, WordType.POLITE_MASU, WordType.POLITE_MASHOU);
    assertDerivationPathMatches('降りそう', '降りる', WordType.MASU_STEM, WordType.APPEARANCE);
    assertDerivationPathMatches('走れそう', '走る', WordType.POTENTIAL, WordType.MASU_STEM, WordType.APPEARANCE);
    assertDerivationPathMatches('殴られそう', '殴る', WordType.POTENTIAL_PASSIVE, WordType.MASU_STEM, WordType.APPEARANCE);
    assertDerivationPathMatches('買えそう', '買う', WordType.POTENTIAL, WordType.MASU_STEM, WordType.APPEARANCE);
    assertDerivationPathMatches('書かれそう', '書く', WordType.PASSIVE, WordType.MASU_STEM, WordType.APPEARANCE);
    assertDerivationPathMatches('走るそう', '走る', WordType.HEARSAY);
    assertDerivationPathMatches('得られるそう', '得る', WordType.POTENTIAL_PASSIVE, WordType.HEARSAY);
    assertDerivationPathMatches('押されるそう', '押す', WordType.PASSIVE, WordType.HEARSAY);
    assertDerivationPathMatches('食べれるそう', '食べる', WordType.POTENTIAL, WordType.HEARSAY);
    assertDerivationPathMatches('行かないそう', '行く', WordType.NEGATIVE_NAI_VERB, WordType.HEARSAY);
    assertDerivationPathMatches('行かなかったそう', '行く', WordType.NEGATIVE_NAI_VERB, WordType.PLAIN_PAST, WordType.HEARSAY);
    assertDerivationPathMatches('歌わせる', '歌う', WordType.CAUSATIVE);
    assertDerivationPathMatches('歌わせた', '歌う', WordType.CAUSATIVE, WordType.PLAIN_PAST);
    assertDerivationPathMatches('歌わす', '歌う', WordType.CAUSATIVE, WordType.SHORTENED_CAUSATIVE);
    assertDerivationPathMatches('歌わせられた', '歌う', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.PLAIN_PAST);
    assertDerivationPathMatches('歌わせない', '歌う', WordType.CAUSATIVE, WordType.NEGATIVE_NAI_VERB);
    assertDerivationPathMatches('歌わせたら', '歌う', WordType.CAUSATIVE, WordType.TARA);
    assertDerivationPathMatches('歌わせられたら', '歌う', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.TARA);
    assertDerivationPathMatches('歌わせなかったら', '歌う', WordType.CAUSATIVE, WordType.NEGATIVE_NAI_VERB, WordType.TARA);
    assertDerivationPathMatches('放たれましたら', '放つ', WordType.PASSIVE, WordType.MASU_STEM, WordType.POLITE_MASU, WordType.TARA);
    assertDerivationPathMatches('帰れたら', '帰る', WordType.POTENTIAL, WordType.TARA);
    assertDerivationPathMatches('置かれたら', '置く', WordType.PASSIVE, WordType.TARA);
    assertDerivationPathMatches('歌わせられなきゃ', '歌う', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.NEGATIVE_NAI_VERB, WordType.NAKYA);
    assertDerivationPathMatches('歌わせなきゃ', '歌う', WordType.CAUSATIVE, WordType.NEGATIVE_NAI_VERB, WordType.NAKYA);
    assertDerivationPathMatches('放たれなきゃ', '放つ', WordType.PASSIVE, WordType.NEGATIVE_NAI_VERB, WordType.NAKYA);
    assertDerivationPathMatches('放たれなくちゃ', '放つ', WordType.PASSIVE, WordType.NEGATIVE_NAI_VERB, WordType.NAKUCHA);
    assertDerivationPathMatches('歌わせられた挙句', '歌う', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.PLAIN_PAST, WordType.AGEKU);
    assertDerivationPathMatches('歌いたい', '歌う', WordType.MASU_STEM, WordType.TAI);
    assertDerivationPathMatches('歌いたくない', '歌う', WordType.MASU_STEM, WordType.TAI, WordType.NEGATIVE_NAI_VERB);
    assertDerivationPathMatches('歌いたくはない', '歌う', WordType.MASU_STEM, WordType.TAI, WordType.NEGATIVE_NAI_VERB);
    assertDerivationPathMatches('歌わせられたい', '歌う', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.MASU_STEM, WordType.TAI);
    assertDerivationPathMatches('歌わせたい', '歌う', WordType.CAUSATIVE, WordType.MASU_STEM, WordType.TAI);
    assertDerivationPathMatches('歌わせないで', '歌う', WordType.CAUSATIVE, WordType.NEGATIVE_NAI_VERB, WordType.NAIDE);
    assertDerivationPathMatches('食べさせられたかった', '食べる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.MASU_STEM, WordType.TAI, WordType.PLAIN_PAST);
    assertDerivationPathMatches('行くな', '行く', WordType.NA_COMMAND);
    assertDerivationPathMatches('信じるな', '信じる', WordType.NA_COMMAND);
    assertDerivationPathMatches('行くまい', '行く', WordType.NEGATIVE_VOLITIONAL);
    assertDerivationPathMatches('信じるまい', '信じる', WordType.NEGATIVE_VOLITIONAL);
    assertDerivationPathMatches('話している', '話す', WordType.TE_FORM, WordType.IRU);
    assertDerivationPathMatches('話してある', '話す', WordType.TE_FORM, WordType.ARU);
    assertDerivationPathMatches('話しておる', '話す', WordType.TE_FORM, WordType.ORU);
    assertDerivationPathMatches('話していさせて', '話す', WordType.TE_FORM, WordType.IRU, WordType.CAUSATIVE, WordType.TE_FORM);
    assertDerivationPathMatches('離されて', '離す', WordType.PASSIVE, WordType.TE_FORM);
    assertDerivationPathMatches('離せて', '離す', WordType.POTENTIAL, WordType.TE_FORM);
    assertDerivationPathMatches('得られて', '得る', WordType.POTENTIAL_PASSIVE, WordType.TE_FORM);
    assertDerivationPathMatches('撫でさせられていさせて', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.TE_FORM, WordType.IRU, WordType.CAUSATIVE, WordType.TE_FORM);
    assertDerivationPathMatches('書かれてあった', '書く', WordType.PASSIVE, WordType.TE_FORM, WordType.ARU, WordType.PLAIN_PAST);
    assertDerivationPathMatches('書かれてなかった', '書く', WordType.PASSIVE, WordType.TE_FORM, WordType.ARU, WordType.NEGATIVE_NAI_VERB, WordType.PLAIN_PAST);
    assertDerivationPathMatches('撫でさせられていさせなさい', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.TE_FORM, WordType.IRU, WordType.CAUSATIVE, WordType.MASU_STEM, WordType.NASAI);
    assertDerivationPathMatches('撫でさせられていさせな', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.TE_FORM, WordType.IRU, WordType.CAUSATIVE, WordType.MASU_STEM, WordType.NASAI);
    assertDerivationPathMatches('撫でさせられてはいさせな', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.TE_FORM, WordType.WA_AFTER_TE, WordType.IRU, WordType.CAUSATIVE, WordType.MASU_STEM, WordType.NASAI);
    assertDerivationPathMatches('書かず', '書く', WordType.ZU);
    assertDerivationPathMatches('書けず', '書く', WordType.POTENTIAL, WordType.ZU);
    assertDerivationPathMatches('書かれず', '書く', WordType.PASSIVE, WordType.ZU);
    assertDerivationPathMatches('撫でさせられていさせず', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.TE_FORM, WordType.IRU, WordType.CAUSATIVE, WordType.ZU);
    assertDerivationPathMatches('撫でさせられず', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.ZU);
    assertDerivationPathMatches('撫でさせられたく', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.MASU_STEM, WordType.TAI, WordType.ADVERB);
    assertDerivationPathMatches('撫でさせられたくなく', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.MASU_STEM, WordType.TAI, WordType.NEGATIVE_NAI_VERB, WordType.ADVERB);
    assertDerivationPathMatches('撫でさせられたくはなく', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.MASU_STEM, WordType.TAI, WordType.NEGATIVE_NAI_VERB, WordType.ADVERB);
    assertDerivationPathMatches('座ってはいる', '座る', WordType.TE_FORM, WordType.WA_AFTER_TE, WordType.IRU);
    assertDerivationPathMatches('されたくない', 'する', WordType.PASSIVE, WordType.MASU_STEM, WordType.TAI, WordType.NEGATIVE_NAI_VERB);
    assertDerivationPathMatches('書きません', '書く', WordType.MASU_STEM, WordType.POLITE_MASEN);
    assertDerivationPathMatches('しませんでした', 'する', WordType.MASU_STEM, WordType.POLITE_MASEN, WordType.POLITE_MASEN_DESHITA);
    assertDerivationPathMatches('為さいませんでした', '為さる', WordType.MASU_STEM, WordType.POLITE_MASEN, WordType.POLITE_MASEN_DESHITA);
    assertDerivationPathMatches('書いてください', '書く', WordType.TE_FORM, WordType.KUDASAI);
    assertDerivationPathMatches('撫でさせられぬ', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.NEGATIVE_NAI_VERB, WordType.NU);
    assertDerivationPathMatches('撫でさせられぬよ', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.NEGATIVE_NAI_VERB, WordType.NU, WordType.YO_PARTICLE);
    assertDerivationPathMatches('撫でさせられぬよね', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.NEGATIVE_NAI_VERB, WordType.NU, WordType.YO_PARTICLE, WordType.NE_PARTICLE);
    assertDerivationPathMatches('仰いませんでした', '仰る', WordType.MASU_STEM, WordType.POLITE_MASEN, WordType.POLITE_MASEN_DESHITA);
    assertDerivationPathMatches('話してあるだろう', '話す', WordType.TE_FORM, WordType.ARU, WordType.DAROU);
    assertDerivationPathMatches('話してあるでしょう', '話す', WordType.TE_FORM, WordType.ARU, WordType.DAROU, WordType.POLITE_DESHOU);
    assertDerivationPathMatches('行った方が良くないよ', '行う', WordType.PLAIN_PAST, WordType.HOU_GA_II, WordType.NEGATIVE_NAI_VERB, WordType.YO_PARTICLE);
  }).timeout(10000);
  it('Fuzzy derivation works', function() {
    let results = Conjugator.unconjugate('仰いませんでしたじゃやらぱが', true);
    assert(results.length > 0);
  });
  it('They all have valid word types', function() {
    for (let rule of derivations) {
      assert(rule.unconjugatedWordType, 'No unconjugated word type for ' + rule.unconjugatedEnding + ' -> ' + rule.conjugatedEnding);
      assert(rule.conjugatedWordType, 'No conjugated word type for ' + rule.unconjugatedEnding + ' -> ' + rule.conjugatedEnding);
      assert(rule.conjugatedEnding !== undefined, 'No conjugated ending for ' + rule.unconjugatedEnding + ' -> ' + rule.conjugatedEnding);
      assert(rule.unconjugatedEnding !== undefined, 'No unconjugated word type for ' + rule.unconjugatedEnding + ' -> ' + rule.conjugatedEnding);
    }
  });
  it('Respects maximum recursion depth', function() {
    //assertDerivationPathMatches('撫でさせられぬよね', '撫でる', WordType.CAUSATIVE, WordType.POTENTIAL_PASSIVE, WordType.NEGATIVE_NAI_VERB, WordType.NU, WordType.YO_PARTICLE, WordType.NE_PARTICLE);
    //let resultsWithMaximumRecursionDepth = Conjugator.unconjugate('撫でさせられぬよね', 3);
    //assert(resultsWithMaximumRecursionDepth.length === 0);
  });
});