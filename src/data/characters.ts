export interface KanaChar {
  kana: string;
  romaji: string;
}

export interface KanaRow {
  label: string;
  chars: (KanaChar | null)[];  // null = empty cell
}

export interface YouonGroup {
  base: KanaChar;
  chars: KanaChar[];
}

// ─── Hiragana ────────────────────────────────────────────────────────────────

export const hiraganaBasic: KanaRow[] = [
  { label: "あ", chars: [{ kana: "あ", romaji: "a" }, { kana: "い", romaji: "i" }, { kana: "う", romaji: "u" }, { kana: "え", romaji: "e" }, { kana: "お", romaji: "o" }] },
  { label: "か", chars: [{ kana: "か", romaji: "ka" }, { kana: "き", romaji: "ki" }, { kana: "く", romaji: "ku" }, { kana: "け", romaji: "ke" }, { kana: "こ", romaji: "ko" }] },
  { label: "さ", chars: [{ kana: "さ", romaji: "sa" }, { kana: "し", romaji: "shi" }, { kana: "す", romaji: "su" }, { kana: "せ", romaji: "se" }, { kana: "そ", romaji: "so" }] },
  { label: "た", chars: [{ kana: "た", romaji: "ta" }, { kana: "ち", romaji: "chi" }, { kana: "つ", romaji: "tsu" }, { kana: "て", romaji: "te" }, { kana: "と", romaji: "to" }] },
  { label: "な", chars: [{ kana: "な", romaji: "na" }, { kana: "に", romaji: "ni" }, { kana: "ぬ", romaji: "nu" }, { kana: "ね", romaji: "ne" }, { kana: "の", romaji: "no" }] },
  { label: "は", chars: [{ kana: "は", romaji: "ha" }, { kana: "ひ", romaji: "hi" }, { kana: "ふ", romaji: "fu" }, { kana: "へ", romaji: "he" }, { kana: "ほ", romaji: "ho" }] },
  { label: "ま", chars: [{ kana: "ま", romaji: "ma" }, { kana: "み", romaji: "mi" }, { kana: "む", romaji: "mu" }, { kana: "め", romaji: "me" }, { kana: "も", romaji: "mo" }] },
  { label: "や", chars: [{ kana: "や", romaji: "ya" }, null, { kana: "ゆ", romaji: "yu" }, null, { kana: "よ", romaji: "yo" }] },
  { label: "ら", chars: [{ kana: "ら", romaji: "ra" }, { kana: "り", romaji: "ri" }, { kana: "る", romaji: "ru" }, { kana: "れ", romaji: "re" }, { kana: "ろ", romaji: "ro" }] },
  { label: "わ", chars: [{ kana: "わ", romaji: "wa" }, null, null, null, { kana: "を", romaji: "wo" }] },
  { label: "ん", chars: [{ kana: "ん", romaji: "n" }, null, null, null, null] },
];

export const hiraganaDakuten: KanaRow[] = [
  { label: "が", chars: [{ kana: "が", romaji: "ga" }, { kana: "ぎ", romaji: "gi" }, { kana: "ぐ", romaji: "gu" }, { kana: "げ", romaji: "ge" }, { kana: "ご", romaji: "go" }] },
  { label: "ざ", chars: [{ kana: "ざ", romaji: "za" }, { kana: "じ", romaji: "ji" }, { kana: "ず", romaji: "zu" }, { kana: "ぜ", romaji: "ze" }, { kana: "ぞ", romaji: "zo" }] },
  { label: "だ", chars: [{ kana: "だ", romaji: "da" }, { kana: "ぢ", romaji: "ji" }, { kana: "づ", romaji: "zu" }, { kana: "で", romaji: "de" }, { kana: "ど", romaji: "do" }] },
  { label: "ば", chars: [{ kana: "ば", romaji: "ba" }, { kana: "び", romaji: "bi" }, { kana: "ぶ", romaji: "bu" }, { kana: "べ", romaji: "be" }, { kana: "ぼ", romaji: "bo" }] },
  { label: "ぱ", chars: [{ kana: "ぱ", romaji: "pa" }, { kana: "ぴ", romaji: "pi" }, { kana: "ぷ", romaji: "pu" }, { kana: "ぺ", romaji: "pe" }, { kana: "ぽ", romaji: "po" }] },
];

export const hiraganaYouon: YouonGroup[] = [
  { base: { kana: "き", romaji: "ki" }, chars: [{ kana: "きゃ", romaji: "kya" }, { kana: "きゅ", romaji: "kyu" }, { kana: "きょ", romaji: "kyo" }] },
  { base: { kana: "し", romaji: "shi" }, chars: [{ kana: "しゃ", romaji: "sha" }, { kana: "しゅ", romaji: "shu" }, { kana: "しょ", romaji: "sho" }] },
  { base: { kana: "ち", romaji: "chi" }, chars: [{ kana: "ちゃ", romaji: "cha" }, { kana: "ちゅ", romaji: "chu" }, { kana: "ちょ", romaji: "cho" }] },
  { base: { kana: "に", romaji: "ni" }, chars: [{ kana: "にゃ", romaji: "nya" }, { kana: "にゅ", romaji: "nyu" }, { kana: "にょ", romaji: "nyo" }] },
  { base: { kana: "ひ", romaji: "hi" }, chars: [{ kana: "ひゃ", romaji: "hya" }, { kana: "ひゅ", romaji: "hyu" }, { kana: "ひょ", romaji: "hyo" }] },
  { base: { kana: "み", romaji: "mi" }, chars: [{ kana: "みゃ", romaji: "mya" }, { kana: "みゅ", romaji: "myu" }, { kana: "みょ", romaji: "myo" }] },
  { base: { kana: "り", romaji: "ri" }, chars: [{ kana: "りゃ", romaji: "rya" }, { kana: "りゅ", romaji: "ryu" }, { kana: "りょ", romaji: "ryo" }] },
  { base: { kana: "ぎ", romaji: "gi" }, chars: [{ kana: "ぎゃ", romaji: "gya" }, { kana: "ぎゅ", romaji: "gyu" }, { kana: "ぎょ", romaji: "gyo" }] },
  { base: { kana: "じ", romaji: "ji" }, chars: [{ kana: "じゃ", romaji: "ja" }, { kana: "じゅ", romaji: "ju" }, { kana: "じょ", romaji: "jo" }] },
  { base: { kana: "び", romaji: "bi" }, chars: [{ kana: "びゃ", romaji: "bya" }, { kana: "びゅ", romaji: "byu" }, { kana: "びょ", romaji: "byo" }] },
  { base: { kana: "ぴ", romaji: "pi" }, chars: [{ kana: "ぴゃ", romaji: "pya" }, { kana: "ぴゅ", romaji: "pyu" }, { kana: "ぴょ", romaji: "pyo" }] },
];

// ─── Katakana ─────────────────────────────────────────────────────────────────

export const katakanaBasic: KanaRow[] = [
  { label: "ア", chars: [{ kana: "ア", romaji: "a" }, { kana: "イ", romaji: "i" }, { kana: "ウ", romaji: "u" }, { kana: "エ", romaji: "e" }, { kana: "オ", romaji: "o" }] },
  { label: "カ", chars: [{ kana: "カ", romaji: "ka" }, { kana: "キ", romaji: "ki" }, { kana: "ク", romaji: "ku" }, { kana: "ケ", romaji: "ke" }, { kana: "コ", romaji: "ko" }] },
  { label: "サ", chars: [{ kana: "サ", romaji: "sa" }, { kana: "シ", romaji: "shi" }, { kana: "ス", romaji: "su" }, { kana: "セ", romaji: "se" }, { kana: "ソ", romaji: "so" }] },
  { label: "タ", chars: [{ kana: "タ", romaji: "ta" }, { kana: "チ", romaji: "chi" }, { kana: "ツ", romaji: "tsu" }, { kana: "テ", romaji: "te" }, { kana: "ト", romaji: "to" }] },
  { label: "ナ", chars: [{ kana: "ナ", romaji: "na" }, { kana: "ニ", romaji: "ni" }, { kana: "ヌ", romaji: "nu" }, { kana: "ネ", romaji: "ne" }, { kana: "ノ", romaji: "no" }] },
  { label: "ハ", chars: [{ kana: "ハ", romaji: "ha" }, { kana: "ヒ", romaji: "hi" }, { kana: "フ", romaji: "fu" }, { kana: "ヘ", romaji: "he" }, { kana: "ホ", romaji: "ho" }] },
  { label: "マ", chars: [{ kana: "マ", romaji: "ma" }, { kana: "ミ", romaji: "mi" }, { kana: "ム", romaji: "mu" }, { kana: "メ", romaji: "me" }, { kana: "モ", romaji: "mo" }] },
  { label: "ヤ", chars: [{ kana: "ヤ", romaji: "ya" }, null, { kana: "ユ", romaji: "yu" }, null, { kana: "ヨ", romaji: "yo" }] },
  { label: "ラ", chars: [{ kana: "ラ", romaji: "ra" }, { kana: "リ", romaji: "ri" }, { kana: "ル", romaji: "ru" }, { kana: "レ", romaji: "re" }, { kana: "ロ", romaji: "ro" }] },
  { label: "ワ", chars: [{ kana: "ワ", romaji: "wa" }, null, null, null, { kana: "ヲ", romaji: "wo" }] },
  { label: "ン", chars: [{ kana: "ン", romaji: "n" }, null, null, null, null] },
];

export const katakanaDakuten: KanaRow[] = [
  { label: "ガ", chars: [{ kana: "ガ", romaji: "ga" }, { kana: "ギ", romaji: "gi" }, { kana: "グ", romaji: "gu" }, { kana: "ゲ", romaji: "ge" }, { kana: "ゴ", romaji: "go" }] },
  { label: "ザ", chars: [{ kana: "ザ", romaji: "za" }, { kana: "ジ", romaji: "ji" }, { kana: "ズ", romaji: "zu" }, { kana: "ゼ", romaji: "ze" }, { kana: "ゾ", romaji: "zo" }] },
  { label: "ダ", chars: [{ kana: "ダ", romaji: "da" }, { kana: "ヂ", romaji: "ji" }, { kana: "ヅ", romaji: "zu" }, { kana: "デ", romaji: "de" }, { kana: "ド", romaji: "do" }] },
  { label: "バ", chars: [{ kana: "バ", romaji: "ba" }, { kana: "ビ", romaji: "bi" }, { kana: "ブ", romaji: "bu" }, { kana: "ベ", romaji: "be" }, { kana: "ボ", romaji: "bo" }] },
  { label: "パ", chars: [{ kana: "パ", romaji: "pa" }, { kana: "ピ", romaji: "pi" }, { kana: "プ", romaji: "pu" }, { kana: "ペ", romaji: "pe" }, { kana: "ポ", romaji: "po" }] },
];

export const katakanaYouon: YouonGroup[] = [
  { base: { kana: "キ", romaji: "ki" }, chars: [{ kana: "キャ", romaji: "kya" }, { kana: "キュ", romaji: "kyu" }, { kana: "キョ", romaji: "kyo" }] },
  { base: { kana: "シ", romaji: "shi" }, chars: [{ kana: "シャ", romaji: "sha" }, { kana: "シュ", romaji: "shu" }, { kana: "ショ", romaji: "sho" }] },
  { base: { kana: "チ", romaji: "chi" }, chars: [{ kana: "チャ", romaji: "cha" }, { kana: "チュ", romaji: "chu" }, { kana: "チョ", romaji: "cho" }] },
  { base: { kana: "ニ", romaji: "ni" }, chars: [{ kana: "ニャ", romaji: "nya" }, { kana: "ニュ", romaji: "nyu" }, { kana: "ニョ", romaji: "nyo" }] },
  { base: { kana: "ヒ", romaji: "hi" }, chars: [{ kana: "ヒャ", romaji: "hya" }, { kana: "ヒュ", romaji: "hyu" }, { kana: "ヒョ", romaji: "hyo" }] },
  { base: { kana: "ミ", romaji: "mi" }, chars: [{ kana: "ミャ", romaji: "mya" }, { kana: "ミュ", romaji: "myu" }, { kana: "ミョ", romaji: "myo" }] },
  { base: { kana: "リ", romaji: "ri" }, chars: [{ kana: "リャ", romaji: "rya" }, { kana: "リュ", romaji: "ryu" }, { kana: "リョ", romaji: "ryo" }] },
  { base: { kana: "ギ", romaji: "gi" }, chars: [{ kana: "ギャ", romaji: "gya" }, { kana: "ギュ", romaji: "gyu" }, { kana: "ギョ", romaji: "gyo" }] },
  { base: { kana: "ジ", romaji: "ji" }, chars: [{ kana: "ジャ", romaji: "ja" }, { kana: "ジュ", romaji: "ju" }, { kana: "ジョ", romaji: "jo" }] },
  { base: { kana: "ビ", romaji: "bi" }, chars: [{ kana: "ビャ", romaji: "bya" }, { kana: "ビュ", romaji: "byu" }, { kana: "ビョ", romaji: "byo" }] },
  { base: { kana: "ピ", romaji: "pi" }, chars: [{ kana: "ピャ", romaji: "pya" }, { kana: "ピュ", romaji: "pyu" }, { kana: "ピョ", romaji: "pyo" }] },
];

export const colHeaders = ["a", "i", "u", "e", "o"];
