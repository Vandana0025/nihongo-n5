export interface SentenceExercise {
  id: string;
  lesson: number;
  pattern: string;
  english: string;
  parts: string[];        // correct order — also used to generate scrambled tiles
  explanation: string;
}

export const sentenceExercises: SentenceExercise[] = [
  // ── Lesson 1 — N は N です ───────────────────────────────────────
  {
    id: "sb-01", lesson: 1,
    pattern: "N は N です",
    english: "I am a student.",
    parts: ["わたし", "は", "がくせい", "です"],
    explanation: "わたし (I) + は (topic) + がくせい (student) + です (am/is).",
  },
  {
    id: "sb-02", lesson: 1,
    pattern: "N は N じゃ ありません",
    english: "Mr. Santos is not a student.",
    parts: ["サントスさん", "は", "がくせい", "じゃ ありません"],
    explanation: "じゃ ありません is the negative of です — 'is not'.",
  },
  // ── Lesson 2 — これ / それ / あれ ────────────────────────────────
  {
    id: "sb-03", lesson: 2,
    pattern: "これ は N です",
    english: "This is a dictionary.",
    parts: ["これ", "は", "じしょ", "です"],
    explanation: "これ = this thing (near the speaker). は marks the topic.",
  },
  {
    id: "sb-04", lesson: 2,
    pattern: "N は だれ の N ですか",
    english: "Whose bag is this?",
    parts: ["この", "かばん", "は", "だれ", "の", "ですか"],
    explanation: "だれ の = whose. の connects possession.",
  },
  // ── Lesson 3 — どこ / place は N です ────────────────────────────
  {
    id: "sb-05", lesson: 3,
    pattern: "N は どこ ですか",
    english: "Where is the toilet?",
    parts: ["トイレ", "は", "どこ", "ですか"],
    explanation: "どこ = where. Swap どこ with the answer to respond.",
  },
  {
    id: "sb-06", lesson: 3,
    pattern: "N は place です",
    english: "The office is over there.",
    parts: ["じむしょ", "は", "あそこ", "です"],
    explanation: "あそこ = that place over there (far from both speaker and listener).",
  },
  // ── Lesson 4 — V ます / Time に V ────────────────────────────────
  {
    id: "sb-07", lesson: 4,
    pattern: "Time に V ます",
    english: "I get up at six every morning.",
    parts: ["まいあさ", "6じ", "に", "おきます"],
    explanation: "に marks a specific time. まいあさ (every morning) does not take に.",
  },
  {
    id: "sb-08", lesson: 4,
    pattern: "V ましたか",
    english: "Did you study yesterday?",
    parts: ["きのう", "べんきょう", "しました", "か"],
    explanation: "ました = past tense. か turns it into a yes/no question.",
  },
  // ── Lesson 5 — place へ / で いきます ──────────────────────────────
  {
    id: "sb-09", lesson: 5,
    pattern: "Means で place へ いきます",
    english: "I go to school by bus.",
    parts: ["バス", "で", "がっこう", "へ", "いきます"],
    explanation: "で marks the means (by bus). へ marks the destination.",
  },
  {
    id: "sb-10", lesson: 5,
    pattern: "Time に place へ きました",
    english: "I came to Japan last year.",
    parts: ["きょねん", "にほん", "へ", "きました"],
    explanation: "きょねん (last year) does not take に. きました = came (past of きます).",
  },
  // ── Lesson 6 — N を V ─────────────────────────────────────────────
  {
    id: "sb-11", lesson: 6,
    pattern: "N を V ます",
    english: "I drink coffee every morning.",
    parts: ["まいあさ", "コーヒー", "を", "のみます"],
    explanation: "を marks the direct object. のみます = drink.",
  },
  {
    id: "sb-12", lesson: 6,
    pattern: "N を V ませんか",
    english: "Shall we watch a movie tonight?",
    parts: ["こんばん", "いっしょに", "えいが", "を", "みませんか"],
    explanation: "〜ませんか = 'Shall we ~?' / invitation. いっしょに = together.",
  },
  // ── Lesson 7 — あげます / もらいます ──────────────────────────────
  {
    id: "sb-13", lesson: 7,
    pattern: "Person に N を あげます",
    english: "I gave flowers to my teacher.",
    parts: ["せんせい", "に", "はな", "を", "あげました"],
    explanation: "に marks the recipient. あげました = gave (past).",
  },
  {
    id: "sb-14", lesson: 7,
    pattern: "Person から N を もらいます",
    english: "I received a present from my friend.",
    parts: ["ともだち", "から", "プレゼント", "を", "もらいました"],
    explanation: "から marks the giver when using もらいます.",
  },
  // ── Lesson 8 — Adjectives ─────────────────────────────────────────
  {
    id: "sb-15", lesson: 8,
    pattern: "N は い-adj です",
    english: "Mt. Fuji is tall.",
    parts: ["ふじさん", "は", "たかい", "です"],
    explanation: "い-adjectives come directly before です without any change.",
  },
  {
    id: "sb-16", lesson: 8,
    pattern: "N は な-adj な N です",
    english: "Nara is a quiet, beautiful city.",
    parts: ["なら", "は", "しずかで", "きれいな", "まちです"],
    explanation: "しずかで connects two descriptions. な-adj + な before a noun.",
  },
  // ── Lesson 9 — すき / きらい / じょうず ──────────────────────────
  {
    id: "sb-17", lesson: 9,
    pattern: "N は N が すきです",
    english: "I like sushi.",
    parts: ["わたし", "は", "すし", "が", "すきです"],
    explanation: "が marks the object of すきです (like). は marks the topic (the person who likes).",
  },
  {
    id: "sb-18", lesson: 9,
    pattern: "N は N が じょうずです",
    english: "She is good at Japanese.",
    parts: ["かのじょ", "は", "にほんご", "が", "じょうずです"],
    explanation: "が marks the skill. じょうずです = is good at.",
  },
  // ── Lesson 10 — あります / います ─────────────────────────────────
  {
    id: "sb-19", lesson: 10,
    pattern: "Place に N が います",
    english: "There is a cat under the desk.",
    parts: ["つくえ", "の", "した", "に", "ねこ", "が", "います"],
    explanation: "います = exists (animate). に marks location. の した = under.",
  },
  {
    id: "sb-20", lesson: 10,
    pattern: "Place に N が あります",
    english: "Is there a post office near here?",
    parts: ["この", "ちかく", "に", "ゆうびんきょく", "が", "ありますか"],
    explanation: "あります = exists (inanimate). この ちかく = near here.",
  },
  // ── Lesson 11 — Counters ───────────────────────────────────────────
  {
    id: "sb-21", lesson: 11,
    pattern: "N が Counter あります",
    english: "There are three books.",
    parts: ["ほん", "が", "3さつ", "あります"],
    explanation: "さつ is the counter for bound books/magazines.",
  },
  // ── Lesson 12 — Comparisons ───────────────────────────────────────
  {
    id: "sb-22", lesson: 12,
    pattern: "N より N の ほうが adj",
    english: "The train is faster than the bus.",
    parts: ["バス", "より", "でんしゃ", "の", "ほうが", "はやいです"],
    explanation: "より = than. の ほうが = the one that is more ~.",
  },
  {
    id: "sb-23", lesson: 12,
    pattern: "N が いちばん adj",
    english: "Summer is the hottest.",
    parts: ["なつ", "が", "いちばん", "あついです"],
    explanation: "いちばん = most / number one. Used for superlatives.",
  },
  // ── Lesson 13 — ほしい / 〜たいです ──────────────────────────────
  {
    id: "sb-24", lesson: 13,
    pattern: "V-stem たいです",
    english: "I want to go to Japan.",
    parts: ["にほん", "へ", "いきたいです"],
    explanation: "いきたいです = want to go. V-ます stem + たいです.",
  },
  {
    id: "sb-25", lesson: 13,
    pattern: "N が ほしいです",
    english: "I want a new computer.",
    parts: ["あたらしい", "コンピューター", "が", "ほしいです"],
    explanation: "ほしいです = want (a thing). が marks the desired object.",
  },
  // ── Lesson 14 — て-form requests ──────────────────────────────────
  {
    id: "sb-26", lesson: 14,
    pattern: "V て-form ください",
    english: "Please open the window.",
    parts: ["まど", "を", "あけて", "ください"],
    explanation: "あけてください = please open. V て-form + ください = polite request.",
  },
  {
    id: "sb-27", lesson: 14,
    pattern: "V て-form います",
    english: "Mr. Miller is working now.",
    parts: ["ミラーさん", "は", "いま", "はたらいて", "います"],
    explanation: "V て-form + います = is doing ~ (ongoing action).",
  },
  // ── Lesson 15 — Permission / Prohibition ──────────────────────────
  {
    id: "sb-28", lesson: 15,
    pattern: "V て-form も いいですか",
    english: "May I use the electronic dictionary?",
    parts: ["でんしじしょ", "を", "つかっても", "いいですか"],
    explanation: "つかっても いいですか = May I use ~? V て-form + もいいですか.",
  },
  {
    id: "sb-29", lesson: 15,
    pattern: "V て-form は いけません",
    english: "You must not smoke here.",
    parts: ["ここ", "で", "たばこ", "を", "すっては", "いけません"],
    explanation: "すっては いけません = must not smoke. V て-form + はいけません.",
  },
  // ── Lesson 16 — て-form sequence / N₁はN₂がadj ───────────────────
  {
    id: "sb-30", lesson: 16,
    pattern: "V₁ て-form, V₂ て-form, V₃",
    english: "In the morning I go jogging and take a shower.",
    parts: ["あさ", "ジョギングを", "して", "シャワーを", "あびます"],
    explanation: "Actions in sequence using て-form. The last verb sets the tense.",
  },
  {
    id: "sb-31", lesson: 16,
    pattern: "N₁ は N₂ が adj",
    english: "Osaka has delicious food.",
    parts: ["おおさか", "は", "たべもの", "が", "おいしいです"],
    explanation: "N₁はN₂がadj — Osaka (topic) has the property that its food (N₂) is delicious.",
  },
  {
    id: "sb-32", lesson: 16,
    pattern: "V₁ て-form から、V₂",
    english: "After inserting the card, press the button.",
    parts: ["カード", "を", "いれてから", "ボタン", "を", "おしてください"],
    explanation: "V て-form + から = after doing V₁. Precondition before V₂.",
  },
  // ── Lesson 17 — なければ / なくてもいい ───────────────────────────
  {
    id: "sb-33", lesson: 17,
    pattern: "V ない-form なければ なりません",
    english: "I must take medicine.",
    parts: ["くすり", "を", "のまなければ", "なりません"],
    explanation: "のまなければ なりません = must drink/take. V ない-form + なければなりません.",
  },
  {
    id: "sb-34", lesson: 17,
    pattern: "V ない-form なくても いいです",
    english: "You don't have to come tomorrow.",
    parts: ["あした", "こなくても", "いいです"],
    explanation: "こなくても いいです = don't have to come. V ない-form + なくてもいいです.",
  },
  {
    id: "sb-35", lesson: 17,
    pattern: "V ない-form ないで ください",
    english: "Please don't take photographs here.",
    parts: ["ここ", "で", "しゃしん", "を", "とらないで", "ください"],
    explanation: "とらないで ください = please don't take. V ない-form + ないでください.",
  },
];
