import type { Lesson } from "../types";

const lesson15: Lesson = {
  id: 15,
  title: "Lesson 15",
  topic: "Permission, Prohibition & States",

  vocabulary: [
    // Verbs
    { japanese: "おきます",         kanji: "置きます",     english: "put, place" },
    { japanese: "つくります",       kanji: "作ります",     english: "make, produce" },
    { japanese: "うります",         kanji: "売ります",     english: "sell" },
    { japanese: "しります",         kanji: "知ります",     english: "come to know" },
    { japanese: "すみます",         kanji: "住みます",     english: "live, reside" },
    { japanese: "けんきゅうします", kanji: "研究します",   english: "research, study" },
    { japanese: "かいます",         kanji: "飼います",     english: "keep (a pet)" },
    { japanese: "すいます",         kanji: "吸います",     english: "smoke (cigarette)" },
    { japanese: "はきます",         kanji: "履きます",     english: "wear (shoes/trousers)" },
    // Nouns – things
    { japanese: "しりょう",         kanji: "資料",         english: "materials, documents" },
    { japanese: "カタログ",         kanji: "",             english: "catalogue" },
    { japanese: "じこくひょう",     kanji: "時刻表",       english: "timetable, schedule" },
    { japanese: "ふく",             kanji: "服",           english: "clothes" },
    { japanese: "せいひん",         kanji: "製品",         english: "product, goods" },
    { japanese: "ソフト",           kanji: "",             english: "software" },
    { japanese: "でんしじしょ",     kanji: "電子辞書",     english: "electronic dictionary" },
    { japanese: "けいざい",         kanji: "経済",         english: "economics, economy" },
    { japanese: "せんもん",         kanji: "専門",         english: "specialty, major field" },
    { japanese: "プレイガイド",     kanji: "",             english: "ticket agency" },
    // Nouns – places & people
    { japanese: "しやくしょ",       kanji: "市役所",       english: "city hall" },
    { japanese: "こうこう",         kanji: "高校",         english: "high school" },
    { japanese: "はいしゃ",         kanji: "歯医者",       english: "dentist" },
    { japanese: "とこや",           kanji: "床屋",         english: "barber shop" },
    { japanese: "どくしん",         kanji: "独身",         english: "single, unmarried" },
    // Adverb / expression
    { japanese: "とくに",           kanji: "特に",         english: "especially, particularly" },
    { japanese: "もちろん",         kanji: "",             english: "of course" },
    { japanese: "ちょっと",         kanji: "",             english: "a little; (excuse to refuse)" },
  ],

  grammarPoints: [
    {
      id: "l15-g1",
      pattern: "V て-form も いいですか",
      meaning: "May I ~? / Is it OK to ~?",
      explanation:
        "Attach もいいですか to the て-form to ask for permission. " +
        "The listener grants permission with はい、どうぞ or もいいですよ, " +
        "and politely declines with ちょっと… (leaving the refusal implied). " +
        "To grant permission without being asked, use V て-form も いいです / どうぞ.",
      examples: [
        { japanese: "ここで たばこを すっても いいですか。",    english: "May I smoke here?" },
        { japanese: "でんしじしょを つかっても いいですか。",   english: "May I use the electronic dictionary?" },
        { japanese: "この カタログを もらっても いいですか。",  english: "May I have this catalogue?" },
        { japanese: "はい、どうぞ。",                           english: "Yes, please go ahead." },
        { japanese: "ちょっと……。",                             english: "(I'm afraid that's a bit…) — polite refusal" },
      ],
    },
    {
      id: "l15-g2",
      pattern: "V て-form は いけません",
      meaning: "Must not ~, You cannot ~",
      explanation:
        "Attach てはいけません to the て-form to express prohibition — something that is not allowed or is against the rules. " +
        "Note that は is pronounced わ in this pattern. " +
        "It is stronger and more formal than ちょっと… and is used for rules and signs.",
      examples: [
        { japanese: "ここで たばこを すっては いけません。",    english: "You must not smoke here." },
        { japanese: "びじゅつかんで しゃしんを とっては いけません。", english: "You must not take photos in the museum." },
        { japanese: "しけんちゅうに じしょを つかっては いけません。", english: "You must not use a dictionary during the exam." },
        { japanese: "この みちに くるまを とめては いけません。", english: "You must not park your car on this road." },
      ],
    },
    {
      id: "l15-g3",
      pattern: "V て-form います ② — resultant state",
      meaning: "Describes a state resulting from a past action",
      explanation:
        "In Lesson 14, て-form + います described an ongoing action (is doing ~). " +
        "In Lesson 15 it also describes a state that continues after an action has been completed. " +
        "Key verbs: 知っています (I know), 住んでいます (I live in), 結婚しています (I am married), " +
        "持っています (I have), 着ています (I am wearing), 飼っています (I keep a pet). " +
        "Negative: 知りません (not 知っていません) is the natural form for 'I don't know'.",
      examples: [
        { japanese: "ミラーさんは けっこんして います。",          english: "Mr. Miller is married." },
        { japanese: "わたしは おおさかに すんで います。",        english: "I live in Osaka." },
        { japanese: "ワンさんの でんわばんごうを しって いますか。", english: "Do you know Ms. Wang's phone number?" },
        { japanese: "……はい、しって います。",                   english: "……Yes, I know (it)." },
        { japanese: "……いいえ、しりません。",                    english: "……No, I don't know." },
        { japanese: "IMCは コンピューターを つくって います。",   english: "IMC makes computers (as its business)." },
      ],
    },
    {
      id: "l15-g4",
      pattern: "N に V",
      meaning: "Direction / goal particle に with verbs of movement",
      explanation:
        "The particle に marks the destination or goal of movement verbs such as 行きます, 来ます, 帰ります, 入ります, 乗ります. " +
        "In Lesson 15 contexts this particle appears frequently in sentences describing where someone lives (〜に すんでいます) " +
        "or moves to/from (〜に いきます).",
      examples: [
        { japanese: "にほんに すんで います。",    english: "I live in Japan." },
        { japanese: "しやくしょに いきます。",      english: "I am going to city hall." },
        { japanese: "こうこうに はいりました。",    english: "I entered high school." },
      ],
    },
    {
      id: "l15-g5",
      pattern: "N₁ に N₂ を V",
      meaning: "Doing something (N₂) at/to a place or person (N₁)",
      explanation:
        "When a sentence includes both a location/recipient (marked by に) and a direct object (marked by を), " +
        "the pattern is N₁(に) N₂(を) V. " +
        "This reinforces the roles of both particles together.",
      examples: [
        { japanese: "テーブルの うえに ほんを おきます。",     english: "I put the book on the table." },
        { japanese: "みせで ふくを うって います。",           english: "They sell clothes at the shop." },
        { japanese: "だいがくで けいざいを けんきゅうして います。", english: "I am researching economics at university." },
      ],
    },
  ],

  quiz: [
    {
      id: "l15-q1",
      type: "multiple-choice",
      question: "How do you ask 'May I use the electronic dictionary?'",
      options: [
        "でんしじしょを つかっても いいですか",
        "でんしじしょを つかっては いけません",
        "でんしじしょを つかって います",
        "でんしじしょを つかいましょうか",
      ],
      answer: "でんしじしょを つかっても いいですか",
      explanation: "V て-form + もいいですか = asking for permission. つかいます → つかって + もいいですか.",
    },
    {
      id: "l15-q2",
      type: "multiple-choice",
      question: "How do you say 'You must not smoke here'?",
      options: [
        "ここで たばこを すっては いけません",
        "ここで たばこを すっても いいです",
        "ここで たばこを すって います",
        "ここで たばこを すいましょうか",
      ],
      answer: "ここで たばこを すっては いけません",
      explanation: "V て-form + てはいけません = prohibition. すいます → すって + はいけません.",
    },
    {
      id: "l15-q3",
      type: "fill-blank",
      question: "I live in Tokyo. → とうきょうに ___います。",
      answer: "すんで",
      explanation: "すみます (Group I, み→んで) → て-form: すんで. すんでいます = am living (resultant state).",
    },
    {
      id: "l15-q4",
      type: "multiple-choice",
      question: "Which sentence correctly expresses 'I am married'?",
      options: [
        "けっこんして います",
        "けっこんしても いいです",
        "けっこんしては いけません",
        "けっこんして ください",
      ],
      answer: "けっこんして います",
      explanation: "けっこんしています = state resulting from the action of getting married → I am married.",
    },
    {
      id: "l15-q5",
      type: "multiple-choice",
      question: "How do you say 'Do you know Mr. Miller's address?'",
      options: [
        "ミラーさんの じゅうしょを しって いますか",
        "ミラーさんの じゅうしょを しりますか",
        "ミラーさんの じゅうしょを しっても いいですか",
        "ミラーさんの じゅうしょを しりましたか",
      ],
      answer: "ミラーさんの じゅうしょを しって いますか",
      explanation: "知っていますか = Do you know ~? (resultant state of the act of learning). しりますか is not natural Japanese.",
    },
    {
      id: "l15-q6",
      type: "fill-blank",
      question: "I don't know. → _________。",
      answer: "しりません",
      explanation: "The negative of 知っています is 知りません (not 知っていません). This is a fixed natural form.",
    },
    {
      id: "l15-q7",
      type: "multiple-choice",
      question: "What does 'IMCは コンピューターを つくって います' mean?",
      options: [
        "IMC makes computers (as its business)",
        "IMC is currently assembling a computer",
        "IMC must not make computers",
        "May IMC make computers?",
      ],
      answer: "IMC makes computers (as its business)",
      explanation: "V ています here describes a habitual/professional activity, not a momentary ongoing action.",
    },
    {
      id: "l15-q8",
      type: "multiple-choice",
      question: "A polite way to decline when someone asks てもいいですか is:",
      options: [
        "ちょっと……",
        "はい、どうぞ",
        "おねがいします",
        "もちろん",
      ],
      answer: "ちょっと……",
      explanation: "ちょっと…… (trailing off) is the standard polite way to refuse permission without directly saying no.",
    },
    {
      id: "l15-q9",
      type: "fill-blank",
      question: "I put the book on the table. → テーブルの うえに ほんを ___ます。",
      answer: "おき",
      explanation: "おきます (置きます) = to put/place. Particle pattern: N に N を V.",
    },
    {
      id: "l15-q10",
      type: "multiple-choice",
      question: "What is the meaning of 'でんしじしょ'?",
      options: ["electronic dictionary", "timetable", "catalogue", "software"],
      answer: "electronic dictionary",
      explanation: "でんしじしょ (電子辞書) = electronic dictionary. でんし = electronic, じしょ = dictionary.",
    },
  ],
};

export default lesson15;
