import type { Lesson } from "../types";

const lesson16: Lesson = {
  id: 16,
  title: "Lesson 16",
  topic: "Connecting Sentences — て-form Sequence, Appearance & どれ",

  vocabulary: [
    // Verbs – movement / transport
    { japanese: "のります",         kanji: "乗ります",       english: "ride, get on [a train]" },
    { japanese: "おります",         kanji: "降ります",       english: "get off [a train]" },
    { japanese: "のりかえます",     kanji: "乗り換えます",   english: "change (train, etc.)" },
    { japanese: "あびます",         kanji: "浴びます",       english: "take [a shower]" },
    { japanese: "いれます",         kanji: "入れます",       english: "put in, insert" },
    { japanese: "だします",         kanji: "出します",       english: "take out, hand in, send" },
    { japanese: "おろします",       kanji: "下ろします",     english: "withdraw [money]" },
    { japanese: "はいります",       kanji: "入ります",       english: "enter [university]" },
    { japanese: "でます",           kanji: "出ます",         english: "graduate from [university]" },
    { japanese: "おします",         kanji: "押します",       english: "push, press" },
    { japanese: "のみます",         kanji: "飲みます",       english: "drink alcohol" },
    { japanese: "はじめます",       kanji: "始めます",       english: "start, begin" },
    { japanese: "けんがくします",   kanji: "見学します",     english: "tour, visit a place to study it" },
    { japanese: "でんわします",     kanji: "電話します",     english: "phone" },
    // い-adjectives
    { japanese: "わかい",           kanji: "若い",           english: "young" },
    { japanese: "ながい",           kanji: "長い",           english: "long" },
    { japanese: "みじかい",         kanji: "短い",           english: "short" },
    { japanese: "あかるい",         kanji: "明るい",         english: "bright, light" },
    { japanese: "くらい",           kanji: "暗い",           english: "dark" },
    // Body parts
    { japanese: "からだ",           kanji: "体",             english: "body, health" },
    { japanese: "あたま",           kanji: "頭",             english: "head, brain" },
    { japanese: "かみ",             kanji: "髪",             english: "hair" },
    { japanese: "かお",             kanji: "顔",             english: "face" },
    { japanese: "め",               kanji: "目",             english: "eye" },
    { japanese: "みみ",             kanji: "耳",             english: "ear" },
    { japanese: "はな",             kanji: "鼻",             english: "nose" },
    { japanese: "くち",             kanji: "口",             english: "mouth" },
    { japanese: "は",               kanji: "歯",             english: "tooth" },
    { japanese: "おなか",           kanji: "",               english: "stomach" },
    { japanese: "あし",             kanji: "足",             english: "leg, foot" },
    { japanese: "せ",               kanji: "背",             english: "height" },
    // Other nouns / expressions
    { japanese: "ジョギング",       kanji: "",               english: "jogging" },
    { japanese: "シャワー",         kanji: "",               english: "shower" },
    { japanese: "みどり",           kanji: "緑",             english: "green, greenery" },
    { japanese: "おてら",           kanji: "お寺",           english: "Buddhist temple" },
    { japanese: "じんじゃ",         kanji: "神社",           english: "Shinto shrine" },
    { japanese: "ーばん",           kanji: "一番",           english: "number −" },
    { japanese: "どうやって",       kanji: "",               english: "in what way, how" },
    { japanese: "どの〜",           kanji: "",               english: "which ~ (used for three or more)" },
    { japanese: "どれ",             kanji: "",               english: "which one (of three or more things)" },
  ],

  grammarPoints: [
    {
      id: "l16-g1",
      pattern: "V₁ て-form, [V₂ て-form,] V₃",
      meaning: "Do V₁, then V₂, then V₃ — actions in succession",
      explanation:
        "Two or more sentences can be joined using the て-form. " +
        "When listing actions in succession, they are given in order of occurrence and the て-form connects them. " +
        "The tense of the whole sentence is determined by the last verb. " +
        "The same pattern applies to adjectives and nouns: " +
        "い-adj: drop い → くて (e.g. おおきい → おおきくて). " +
        "な-adj: drop な → で (e.g. しずかな → しずかで). " +
        "Noun: N で.",
      examples: [
        { japanese: "あさ ジョギングを して、シャワーを あびて、かいしゃへ いきます。", english: "In the mornings, I go jogging, have a shower, and then go to work." },
        { japanese: "こうべへ いって、えいがを みて、おちゃを のみました。",           english: "I went to Kobe, where I saw a movie and drank some tea." },
        { japanese: "ミラーさんは わかくて、げんきです。",                             english: "Mr. Miller is young and energetic." },
        { japanese: "ならは しずかで、きれいな まちです。",                             english: "Nara is a quiet, beautiful city." },
        { japanese: "カリナさんは インドネシアじんで、ふじだいがくの りゅうがくせいです。", english: "Karina is Indonesian; she's a student at Fuji University." },
      ],
    },
    {
      id: "l16-g2",
      pattern: "V₁ て-form から、V₂",
      meaning: "After doing V₁, V₂",
      explanation:
        "V₂ expresses something done after V₁. " +
        "V₁ is often a precondition for doing V₂. " +
        "The tense of the sentence is determined by the last verb. " +
        "The subject of V₁て-form から is marked with the particle が.",
      examples: [
        { japanese: "おかねを いれてから、ボタンを おして ください。",         english: "Put the money in, please, and then press the button." },
        { japanese: "しごとが おわってから、たべます。",                         english: "I'm going to have it when I've finished this job." },
        { japanese: "シャワーを あびてから、ねます。",                           english: "I go to bed after taking a shower." },
      ],
    },
    {
      id: "l16-g3",
      pattern: "N₁ は N₂ が adj",
      meaning: "N₁ has the characteristic that N₂ is adj",
      explanation:
        "This sentence pattern indicates that the topic (N₁) has the characteristic 'N₂ が adj'. " +
        "It is commonly used to describe physical features of a person or qualities of a place.",
      examples: [
        { japanese: "おおさかは たべものが おいしいです。",     english: "The food in Osaka is very good." },
        { japanese: "マリアさんは かみが ながいです。",         english: "Maria has long hair." },
        { japanese: "サントスさんは せが たかくて、かみが くろい ひとです。", english: "Mr. Santos is the tall man with black hair." },
        { japanese: "ドイツの フランケンは ワインが ゆうめいです。", english: "Franken in Germany is famous for its wine." },
      ],
    },
    {
      id: "l16-g4",
      pattern: "どれ / どの N",
      meaning: "Which one / which ~ (of three or more)",
      explanation:
        "どれ is an interrogative used when asking someone to specify one item out of a list of three or more. " +
        "どれ cannot modify a noun directly. When modifying a noun, どの is used. " +
        "Note: どちら / どちらの N is used for choosing between two items.",
      examples: [
        { japanese: "ミラーさんの かさは どれですか。",             english: "Which is Mr. Miller's umbrella?" },
        { japanese: "……あの あおい かさです。",                   english: "……It's that blue one." },
        { japanese: "サントスさんは どの ひとですか。",             english: "Which person is Mr. Santos?" },
        { japanese: "……あの せが たかくて、かみが くろい ひとです。", english: "……That tall, black-haired man." },
      ],
    },
    {
      id: "l16-g5",
      pattern: "N を V (でます / おります)",
      meaning: "Verbs of departure / disembarkation used with を",
      explanation:
        "Verbs such as でます (leave/graduate) and おります (get off) are used together with the particle を, " +
        "which indicates a starting point.",
      examples: [
        { japanese: "7じに うちを でます。",         english: "I leave home at seven." },
        { japanese: "うめだで でんしゃを おりました。", english: "I got off the train at Umeda." },
      ],
    },
  ],

  quiz: [
    {
      id: "l16-q1",
      type: "multiple-choice",
      question: "How do you connect 'go jogging' and 'take a shower' in succession?",
      options: [
        "ジョギングを して、シャワーを あびます",
        "ジョギングを したら、シャワーを あびます",
        "ジョギングを しながら、シャワーを あびます",
        "ジョギングを したので、シャワーを あびます",
      ],
      answer: "ジョギングを して、シャワーを あびます",
      explanation: "V₁て-form, V₂ = successive actions in order. します → して, あびます → あびて (but last verb keeps its form).",
    },
    {
      id: "l16-q2",
      type: "fill-blank",
      question: "After putting the money in, press the button. → おかねを ___から、ボタンを おして ください。",
      answer: "いれて",
      explanation: "V₁て-form + から = after doing V₁. いれます (Group II) → いれて.",
    },
    {
      id: "l16-q3",
      type: "multiple-choice",
      question: "How do you say 'The food in Osaka is very good'?",
      options: [
        "おおさかは たべものが おいしいです",
        "おおさかの たべものは おいしいです",
        "おおさかが たべものは おいしいです",
        "おおさかで たべものが おいしいです",
      ],
      answer: "おおさかは たべものが おいしいです",
      explanation: "N₁はN₂がadj pattern: the topic (おおさか) has the characteristic that N₂(たべもの) is adj(おいしい).",
    },
    {
      id: "l16-q4",
      type: "multiple-choice",
      question: "Which is correct for 'Maria has long hair'?",
      options: [
        "マリアさんは かみが ながいです",
        "マリアさんが かみは ながいです",
        "マリアさんの かみが ながいです",
        "マリアさんで かみは ながいです",
      ],
      answer: "マリアさんは かみが ながいです",
      explanation: "N₁はN₂がadj. マリアさん = topic (は), かみ = characteristic noun (が), ながい = adj.",
    },
    {
      id: "l16-q5",
      type: "multiple-choice",
      question: "How do you ask 'Which one is Mr. Miller's umbrella?' (choosing from several)",
      options: [
        "ミラーさんの かさは どれですか",
        "ミラーさんの かさは どちらですか",
        "ミラーさんの かさは なんですか",
        "ミラーさんの かさは どのですか",
      ],
      answer: "ミラーさんの かさは どれですか",
      explanation: "どれ is used when choosing from three or more items. どちら is used for two items. どの must modify a noun.",
    },
    {
      id: "l16-q6",
      type: "fill-blank",
      question: "Nara is a quiet, beautiful city. → ならは ___、きれいな まちです。",
      answer: "しずかで",
      explanation: "な-adj connector: しずかな → drop な → しずかで. Then connect to the next description.",
    },
    {
      id: "l16-q7",
      type: "multiple-choice",
      question: "What does 'どうやって' mean?",
      options: ["in what way, how", "why", "when", "where"],
      answer: "in what way, how",
      explanation: "どうやって is used when asking the way or how to do something. e.g. どうやって いきますか = How do you get there?",
    },
    {
      id: "l16-q8",
      type: "multiple-choice",
      question: "Which sentence correctly uses V て-form から?",
      options: [
        "シャワーを あびてから、ねます",
        "シャワーを あびるから、ねます",
        "シャワーを あびたから、ねます",
        "シャワーを あびてから、ねました",
      ],
      answer: "シャワーを あびてから、ねます",
      explanation: "V₁て-form + から = after doing V₁. あびます → あびて + から.",
    },
    {
      id: "l16-q9",
      type: "fill-blank",
      question: "Mr. Miller is young and energetic. → ミラーさんは わか___、げんきです。",
      answer: "くて",
      explanation: "い-adj connector: わかい → drop い → わか + くて.",
    },
    {
      id: "l16-q10",
      type: "multiple-choice",
      question: "Which particle is used with おります (get off)?",
      options: ["を", "に", "で", "へ"],
      answer: "を",
      explanation: "おります and でます are used with を, which marks the starting point. e.g. うめだで でんしゃを おります.",
    },
  ],
};

export default lesson16;
