import type { Lesson } from "../types";

const lesson14: Lesson = {
  id: 14,
  title: "Lesson 14",
  topic: "て-form — Requests, Progressive & Offers",

  vocabulary: [
    // Verbs
    { japanese: "つけます",           kanji: "",         english: "turn on" },
    { japanese: "けします",           kanji: "消します",   english: "turn off" },
    { japanese: "あけます",           kanji: "開けます",   english: "open" },
    { japanese: "しめます",           kanji: "閉めます",   english: "close, shut" },
    { japanese: "いそぎます",         kanji: "急ぎます",   english: "hurry" },
    { japanese: "まちます",           kanji: "待ちます",   english: "wait" },
    { japanese: "もちます",           kanji: "持ちます",   english: "hold" },
    { japanese: "とります",           kanji: "取ります",   english: "take, pass" },
    { japanese: "てつだいます",       kanji: "手伝います", english: "help (with a task)" },
    { japanese: "よびます",           kanji: "呼びます",   english: "call" },
    { japanese: "はなします",         kanji: "話します",   english: "speak, talk" },
    { japanese: "つかいます",         kanji: "使います",   english: "use" },
    { japanese: "とめます",           kanji: "止めます",   english: "stop, park" },
    { japanese: "みせます",           kanji: "見せます",   english: "show" },
    { japanese: "おしえます",         kanji: "教えます",   english: "tell [an address]" },
    { japanese: "すわります",         kanji: "座ります",   english: "sit down" },
    { japanese: "たちます",           kanji: "立ちます",   english: "stand up" },
    { japanese: "はいります",         kanji: "入ります",   english: "enter [a café]" },
    { japanese: "でます",             kanji: "出ます",     english: "go out [of a café]" },
    { japanese: "ふります",           kanji: "降ります",   english: "rain (雨が～)" },
    { japanese: "コピーします",       kanji: "",           english: "copy" },
    // Things
    { japanese: "でんき",             kanji: "電気",       english: "electricity, light" },
    { japanese: "エアコン",           kanji: "",           english: "air conditioner" },
    { japanese: "パスポート",         kanji: "",           english: "passport" },
    { japanese: "なまえ",             kanji: "名前",       english: "name" },
    { japanese: "じゅうしょ",         kanji: "住所",       english: "address" },
    { japanese: "ちず",               kanji: "地図",       english: "map" },
    { japanese: "しお",               kanji: "塩",         english: "salt" },
    { japanese: "さとう",             kanji: "砂糖",       english: "sugar" },
    { japanese: "もんだい",           kanji: "問題",       english: "question, problem, trouble" },
    { japanese: "こたえ",             kanji: "答え",       english: "answer" },
    { japanese: "よみかた",           kanji: "読み方",     english: "how to read, way of reading" },
    { japanese: "〜かた",             kanji: "〜方",       english: "how to ~, way of ~ing" },
    // Adverbs
    { japanese: "まっすぐ",           kanji: "",           english: "straight" },
    { japanese: "ゆっくり",           kanji: "",           english: "slowly, leisurely" },
    { japanese: "すぐ",               kanji: "",           english: "immediately" },
    { japanese: "また",               kanji: "",           english: "again" },
    { japanese: "あとで",             kanji: "",           english: "later" },
    { japanese: "もう すこし",        kanji: "もう 少し",  english: "a little more" },
    { japanese: "もう〜",             kanji: "",           english: "~ more, another ~" },
    // 練習C
    { japanese: "さあ",               kanji: "",           english: "right (encouraging a course of action)" },
    { japanese: "あれ？",             kanji: "",           english: "Oh! Eh? (surprise or wonder)" },
  ],

  grammarPoints: [
    {
      id: "l14-g1",
      pattern: "て-form conjugation",
      meaning: "The conjunctive / gerund form of verbs",
      explanation:
        "Group I (u-verbs): " +
        "い/ち/り → って (かいます→かって, まちます→まって, とります→とって). " +
        "み/び/に → んで (のみます→のんで, よびます→よんで, しにます→しんで). " +
        "き → いて (かきます→かいて). Exception: いきます→いって. " +
        "ぎ → いで (いそぎます→いそいで). " +
        "し → して (はなします→はなして). " +
        "Group II (ru-verbs): drop る, add て (たべます→たべて, みせます→みせて). " +
        "Group III (irregular): します→して, きます→きて, さんぽします→さんぽして.",
      examples: [
        { japanese: "かきます → かいて",     english: "write (Group I き→いて)" },
        { japanese: "まちます → まって",     english: "wait (Group I ち→って)" },
        { japanese: "たべます → たべて",     english: "eat (Group II)" },
        { japanese: "いそぎます → いそいで", english: "hurry (Group I ぎ→いで)" },
      ],
    },
    {
      id: "l14-g2",
      pattern: "V て-form ください",
      meaning: "Please do ~",
      explanation:
        "Attach ください to the て-form to make a polite request or instruction. " +
        "It is often softened by adding すみませんが at the start. " +
        "Used for requesting, telling, and inviting.",
      examples: [
        { japanese: "すみませんが、この かんじの よみかたを おしえて ください。", english: "Excuse me, could you tell me how to read this kanji?" },
        { japanese: "ボールペンで なまえを かいて ください。",                   english: "Please write your name with a ballpoint pen." },
        { japanese: "どうぞ たくさん たべて ください。",                         english: "Please eat as much as you want." },
        { japanese: "すこし まって ください。",                                   english: "Please wait a moment." },
      ],
    },
    {
      id: "l14-g3",
      pattern: "V て-form います",
      meaning: "Is / are doing ~ (action in progress)",
      explanation:
        "The て-form + います indicates that an action is currently in progress, " +
        "similar to the English present continuous (-ing). " +
        "Negative: て-form + いません.",
      examples: [
        { japanese: "ミラーさんは いま でんわを かけて います。",  english: "Mr. Miller is making a phone call now." },
        { japanese: "いま あめが ふって いますか。",               english: "Is it raining now?" },
        { japanese: "……はい、ふって います。",                     english: "……Yes, it is [raining]." },
        { japanese: "……いいえ、ふって いません。",                 english: "……No, it isn't [raining]." },
      ],
    },
    {
      id: "l14-g4",
      pattern: "V ます-form ましょうか",
      meaning: "Shall I ~?",
      explanation:
        "This expression is used when the speaker offers to do something for the listener. " +
        "It is formed by replacing ます with ましょうか. " +
        "A typical affirmative reply is すみません、おねがいします. " +
        "A polite refusal is いいえ、けっこうです.",
      examples: [
        { japanese: "あしたも きましょうか。",         english: "Shall I come tomorrow, too?" },
        { japanese: "かさを かしましょうか。",         english: "Shall I lend you my umbrella?" },
        { japanese: "……すみません、おねがいします。", english: "……Yes, please." },
        { japanese: "にもつを もちましょうか。",       english: "Shall I carry your bag?" },
      ],
    },
  ],

  quiz: [
    {
      id: "l14-q1",
      type: "multiple-choice",
      question: "What is the て-form of 'かきます' (to write)?",
      options: ["かいて", "かきて", "かって", "かして"],
      answer: "かいて",
      explanation: "かきます is Group I ending in き. き → いて, so かきます → かいて.",
    },
    {
      id: "l14-q2",
      type: "multiple-choice",
      question: "What is the て-form of 'まちます' (to wait)?",
      options: ["まいて", "まんで", "まちて", "まって"],
      answer: "まって",
      explanation: "まちます is Group I ending in ち. ち → って, so まちます → まって.",
    },
    {
      id: "l14-q3",
      type: "fill-blank",
      question: "Please write your name. → なまえを ___ください。",
      answer: "かいて",
      explanation: "かきます → て-form: かいて. かいてください = Please write.",
    },
    {
      id: "l14-q4",
      type: "multiple-choice",
      question: "How do you say 'Mr. Miller is making a phone call now'?",
      options: [
        "ミラーさんは いま でんわを かけて います",
        "ミラーさんは いま でんわを かけました",
        "ミラーさんは いま でんわを かけたいです",
        "ミラーさんは いま でんわを かけて ください",
      ],
      answer: "ミラーさんは いま でんわを かけて います",
      explanation: "V て-form + います = is doing ~. Describes an action currently in progress.",
    },
    {
      id: "l14-q5",
      type: "multiple-choice",
      question: "What is the て-form of 'いそぎます' (to hurry)?",
      options: ["いそいで", "いそぎて", "いそいて", "いそんで"],
      answer: "いそいで",
      explanation: "いそぎます is Group I ending in ぎ. ぎ → いで, so いそぎます → いそいで.",
    },
    {
      id: "l14-q6",
      type: "fill-blank",
      question: "Is it raining? → あめが ___いますか。",
      answer: "ふって",
      explanation: "ふります (Group I, り→って) → て-form: ふって. ふっています = is raining.",
    },
    {
      id: "l14-q7",
      type: "multiple-choice",
      question: "How do you offer 'Shall I carry your bag?'",
      options: [
        "にもつを もちましょうか",
        "にもつを もってください",
        "にもつを もちたいですか",
        "にもつを もっています",
      ],
      answer: "にもつを もちましょうか",
      explanation: "V ます-form + ましょうか = Shall I ~? Used to offer to do something for the listener.",
    },
    {
      id: "l14-q8",
      type: "multiple-choice",
      question: "What is the て-form of 'はなします' (to speak)?",
      options: ["はなして", "はなんで", "はないて", "はなって"],
      answer: "はなして",
      explanation: "はなします is Group I ending in し. し → して, so はなします → はなして.",
    },
    {
      id: "l14-q9",
      type: "fill-blank",
      question: "Please wait a moment. → ちょっと ___ください。",
      answer: "まって",
      explanation: "まちます (Group I, ち→って) → て-form: まって. まってください = Please wait.",
    },
    {
      id: "l14-q10",
      type: "multiple-choice",
      question: "Which is the correct polite reply when someone offers ましょうか?",
      options: [
        "すみません、おねがいします",
        "てはいけません",
        "どこか いきました",
        "ほしくないです",
      ],
      answer: "すみません、おねがいします",
      explanation: "すみません、おねがいします = Yes, please (polite acceptance of an offer). いいえ、けっこうです = No, thank you.",
    },
  ],
};

export default lesson14;
