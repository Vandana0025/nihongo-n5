import type { Lesson } from "../types";

const lesson17: Lesson = {
  id: 17,
  title: "Lesson 17",
  topic: "Negative Form — Prohibition, Obligation & Necessity",

  vocabulary: [
    // Verbs
    { japanese: "おぼえます",         kanji: "覚えます",       english: "memorise" },
    { japanese: "わすれます",         kanji: "忘れます",       english: "forget" },
    { japanese: "なくします",         kanji: "",               english: "lose" },
    { japanese: "はらいます",         kanji: "払います",       english: "pay" },
    { japanese: "かえします",         kanji: "返します",       english: "give back, return" },
    { japanese: "でかけます",         kanji: "出かけます",     english: "go out" },
    { japanese: "ぬぎます",           kanji: "脱ぎます",       english: "take off (clothes, shoes, etc.)" },
    { japanese: "もっていきます",     kanji: "持って行きます", english: "take (something)" },
    { japanese: "もってきます",       kanji: "持って来ます",   english: "bring (something)" },
    { japanese: "しんぱいします",     kanji: "心配します",     english: "worry" },
    { japanese: "ざんぎょうします",   kanji: "残業します",     english: "work overtime" },
    { japanese: "しゅっちょうします", kanji: "出張します",     english: "go on a business trip" },
    { japanese: "のみます",           kanji: "飲みます",       english: "take [medicine]" },
    { japanese: "はいります",         kanji: "入ります",       english: "take [a bath]" },
    // Adjectives
    { japanese: "たいせつ[な]",       kanji: "大切[な]",       english: "important, precious" },
    { japanese: "だいじょうぶ[な]",   kanji: "大丈夫[な]",     english: "all right" },
    { japanese: "あぶない",           kanji: "危ない",         english: "dangerous" },
    // Nouns
    { japanese: "きんえん",           kanji: "禁煙",           english: "no smoking" },
    { japanese: "ほけんしょう",       kanji: "保険証",         english: "health insurance card" },
    { japanese: "ねつ",               kanji: "熱",             english: "temperature, fever" },
    { japanese: "びょうき",           kanji: "病気",           english: "illness, disease" },
    { japanese: "くすり",             kanji: "薬",             english: "medicine" },
    { japanese: "おふろ",             kanji: "",               english: "bath" },
    { japanese: "うわぎ",             kanji: "上着",           english: "jacket, outerwear" },
    { japanese: "したぎ",             kanji: "下着",           english: "underwear" },
    // Expressions
    { japanese: "2、3にち",           kanji: "2、3日",         english: "two or three days" },
    { japanese: "〜までに",           kanji: "",               english: "before ~, by ~ (time limit)" },
    { japanese: "ですから",           kanji: "",               english: "therefore, so" },
    { japanese: "のど",               kanji: "",               english: "throat" },
    { japanese: "かぜ",               kanji: "",               english: "cold, flu" },
    { japanese: "それから",           kanji: "",               english: "and, furthermore" },
    { japanese: "おだいじに",         kanji: "",               english: "Take care of yourself. (said to people who are ill)" },
  ],

  grammarPoints: [
    {
      id: "l17-g1",
      pattern: "V ない-form",
      meaning: "The negative plain form of a verb",
      explanation:
        "The ない-form is the base of several negative patterns. It is formed from the ます-form as follows. " +
        "Group I (u-verbs): the final い-column sound changes to the corresponding あ-column sound " +
        "(e.g. かき→かか, よみ→よま). Exception: verbs ending in い change to わ (e.g. かいます→かわない). " +
        "Group II (ru-verbs): the ない-form is the same as the ます-form base — just add ない (e.g. たべます→たべない). " +
        "Group III (irregular): します→しない, きます→こない.",
      examples: [
        { japanese: "かきます → かかない",   english: "write → not write (Group I)" },
        { japanese: "よみます → よまない",   english: "read → not read (Group I)" },
        { japanese: "かいます → かわない",   english: "buy → not buy (Group I, い→わ exception)" },
        { japanese: "たべます → たべない",   english: "eat → not eat (Group II)" },
        { japanese: "します → しない",       english: "do → not do (Group III)" },
        { japanese: "きます → こない",       english: "come → not come (Group III)" },
      ],
    },
    {
      id: "l17-g2",
      pattern: "V ない-form + ないで ください",
      meaning: "Please don't ~",
      explanation:
        "This pattern is used to ask or tell someone not to do something. " +
        "It can also be used to show consideration — telling someone they don't have to do something.",
      examples: [
        { japanese: "ここで しゃしんを とらないで ください。",     english: "Please don't take photographs here." },
        { japanese: "わたしは げんきですから、しんぱいしないで ください。", english: "I'm fine, so please don't worry about me." },
        { japanese: "あしたは こなくても いいです。",             english: "You don't have to come tomorrow." },
      ],
    },
    {
      id: "l17-g3",
      pattern: "V ない-form + なければ なりません",
      meaning: "Must ~, have to ~",
      explanation:
        "This pattern says that something must be done. Note that despite containing ない, the meaning is affirmative — " +
        "it is NOT in the negative. It expresses obligation or necessity.",
      examples: [
        { japanese: "くすりを のまなければ なりません。",             english: "I must take some medicine." },
        { japanese: "パスポートを みせなければ なりません。",         english: "You have to show your passport." },
        { japanese: "あした とうきょうに しゅっちょうしなければ なりません。", english: "I have to go to Tokyo on business tomorrow." },
        { japanese: "どようびまでに ほんを かえさなければ なりません。", english: "I have to return the book by Saturday." },
      ],
    },
    {
      id: "l17-g4",
      pattern: "V ない-form + なくても いいです",
      meaning: "Don't have to ~, need not ~",
      explanation:
        "This pattern says that it is not necessary to do something. " +
        "It is the opposite of なければなりません.",
      examples: [
        { japanese: "あした こなくても いいです。",         english: "You don't have to come tomorrow." },
        { japanese: "こどもは はらわなくても いいです。",   english: "Children don't have to pay." },
        { japanese: "にちようびは はやく おきなくても いいです。", english: "I don't have to get up early on Sundays." },
      ],
    },
    {
      id: "l17-g5",
      pattern: "N (time) までに V",
      meaning: "Do V by [time]",
      explanation:
        "までに indicates a time by which an action must be completed. " +
        "It differs from まで (Lesson 4): まで means 'until' a continuing state, while までに means 'by' a deadline. " +
        "e.g. 5じまで はたらきます = I work until 5. 5じまでに おわります = I will finish by 5.",
      examples: [
        { japanese: "かいぎは 5じまでに おわります。",             english: "The meeting will end by five." },
        { japanese: "どようびまでに ほんを かえさなければ なりません。", english: "I have to return the book by Saturday." },
        { japanese: "レポートは いつまでに だしますか。",           english: "When does the report have to be handed in by?" },
        { japanese: "……きんようびまでに だして ください。",         english: "……[Hand it in] by Friday, please." },
      ],
    },
  ],

  quiz: [
    {
      id: "l17-q1",
      type: "multiple-choice",
      question: "What is the ない-form of かきます?",
      options: ["かかない", "かきない", "かけない", "かわない"],
      answer: "かかない",
      explanation: "Group I: き (い-column) → か (あ-column). かきます → かかない.",
    },
    {
      id: "l17-q2",
      type: "multiple-choice",
      question: "What is the ない-form of かいます (buy)?",
      options: ["かわない", "かかない", "かいない", "かえない"],
      answer: "かわない",
      explanation: "Group I exception: verbs ending in い change い→わ, not い→あ. かいます → かわない.",
    },
    {
      id: "l17-q3",
      type: "fill-blank",
      question: "Please don't take photographs here. → ここで しゃしんを ___ないで ください。",
      answer: "とら",
      explanation: "とります (Group I, り→ら) → ない-form: とらない. Pattern: ない-form + ないでください.",
    },
    {
      id: "l17-q4",
      type: "multiple-choice",
      question: "How do you say 'I must take medicine'?",
      options: [
        "くすりを のまなければ なりません",
        "くすりを のまなくても いいです",
        "くすりを のまないで ください",
        "くすりを のんでも いいです",
      ],
      answer: "くすりを のまなければ なりません",
      explanation: "V ない-form + なければなりません = must do ~. のみます → のまない → のまなければなりません.",
    },
    {
      id: "l17-q5",
      type: "multiple-choice",
      question: "How do you say 'You don't have to come tomorrow'?",
      options: [
        "あした こなくても いいです",
        "あした こなければ なりません",
        "あした こないで ください",
        "あした きても いいです",
      ],
      answer: "あした こなくても いいです",
      explanation: "V ない-form + なくてもいいです = don't have to ~. きます → こない → こなくてもいいです.",
    },
    {
      id: "l17-q6",
      type: "fill-blank",
      question: "I have to show my passport. → パスポートを ___なければ なりません。",
      answer: "みせ",
      explanation: "みせます (Group II) → ない-form: みせない → みせなければなりません.",
    },
    {
      id: "l17-q7",
      type: "multiple-choice",
      question: "What is the difference between 5じまで and 5じまでに?",
      options: [
        "まで = until 5; までに = by 5 (deadline)",
        "まで = by 5 (deadline); までに = until 5",
        "They mean the same thing",
        "まで is for places; までに is for time",
      ],
      answer: "まで = until 5; までに = by 5 (deadline)",
      explanation: "まで marks the end of a continuing state. までに marks a deadline by which an action must be completed.",
    },
    {
      id: "l17-q8",
      type: "multiple-choice",
      question: "What is the ない-form of します?",
      options: ["しない", "しない", "せない", "さない"],
      answer: "しない",
      explanation: "Group III irregular: します → しない.",
    },
    {
      id: "l17-q9",
      type: "fill-blank",
      question: "I don't have to get up early on Sundays. → にちようびは はやく ___なくても いいです。",
      answer: "おき",
      explanation: "おきます (Group II) → ない-form: おきない → おきなくてもいいです.",
    },
    {
      id: "l17-q10",
      type: "multiple-choice",
      question: "What expression is used to say 'Take care of yourself' to someone who is ill?",
      options: ["おだいじに", "おねがいします", "おつかれさまです", "きをつけて"],
      answer: "おだいじに",
      explanation: "おだいじに is the set phrase said to someone who is ill, wishing them a speedy recovery.",
    },
  ],
};

export default lesson17;
