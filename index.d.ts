type UnconjugateResult = {
  base: string;
  derivationSequence: {
    derivations: string[];
    wordFormProgression: string[];
  };
};

export function unconjugate(
  word: string,
  fuzzy?: boolean,
  recursionDepthLimit?: number
): UnconjugateResult[];

export { WordType } from "./word_type";

import linkForDerivationStep from "./grammar_explanations";
export { linkForDerivationStep as GrammarLinkForWordType };
