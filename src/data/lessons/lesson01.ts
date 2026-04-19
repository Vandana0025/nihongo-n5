import type { Lesson } from "../types";

const lesson01: Lesson = {
  id: 1,
  title: "Lesson 1",
  topic: "Introducing Yourself",

  vocabulary: [
    { japanese: "わたし",           english: "I, me" },
    { japanese: "あなた",           english: "you" },
    { japanese: "あのひと",         kanji: "あの人",      english: "that person, he, she" },
    { japanese: "あのかた",         kanji: "あの方",      english: "that person (polite)" },
    { japanese: "〜さん",                                 english: "Mr. / Ms. ~ (honorific suffix)" },
    { japanese: "〜ちゃん",                               english: "~ (suffix for children, close friends)" },
    { japanese: "〜じん",           kanji: "〜人",        english: "national of ~  (e.g. アメリカじん = American)" },
    { japanese: "せんせい",         kanji: "先生",        english: "teacher (not used for yourself)" },
    { japanese: "きょうし",         kanji: "教師",        english: "teacher, instructor" },
    { japanese: "がくせい",         kanji: "学生",        english: "student" },
    { japanese: "かいしゃいん",     kanji: "会社員",      english: "company employee" },
    { japanese: "しゃいん",         kanji: "社員",        english: "employee of ~ company" },
    { japanese: "ぎんこういん",     kanji: "銀行員",      english: "bank employee" },
    { japanese: "いしゃ",           kanji: "医者",        english: "doctor" },
    { japanese: "けんきゅうしゃ",   kanji: "研究者",      english: "researcher, scholar" },
    { japanese: "だいがく",         kanji: "大学",        english: "university" },
    { japanese: "びょういん",       kanji: "病院",        english: "hospital" },
    { japanese: "だれ",                                   english: "who" },
    { japanese: "どなた",                                 english: "who (polite)" },
    { japanese: "〜さい",           kanji: "〜歳",        english: "~ years old" },
    { japanese: "なんさい",         kanji: "何歳",        english: "how old" },
    { japanese: "おいくつ",                               english: "how old (polite)" },
    { japanese: "はい",                                   english: "yes" },
    { japanese: "いいえ",                                 english: "no" },
    { japanese: "アメリカ",                               english: "U.S.A." },
    { japanese: "イギリス",                               english: "U.K." },
    { japanese: "インド",                                 english: "India" },
    { japanese: "インドネシア",                           english: "Indonesia" },
    { japanese: "かんこく",         kanji: "韓国",        english: "South Korea" },
    { japanese: "タイ",                                   english: "Thailand" },
    { japanese: "ちゅうごく",       kanji: "中国",        english: "China" },
    { japanese: "ドイツ",                                 english: "Germany" },
    { japanese: "にほん",           kanji: "日本",        english: "Japan" },
    { japanese: "ブラジル",                               english: "Brazil" },
    { japanese: "はじめまして",                           english: "How do you do? (first meeting)" },
    { japanese: "どうぞよろしく",                         english: "Pleased to meet you." },
    { japanese: "しつれいですが",   kanji: "失礼ですが",  english: "Excuse me, but… (politely asking personal info)" },
    { japanese: "おなまえは？",     kanji: "お名前は？",  english: "May I have your name?" },
    { japanese: "こちらは〜さんです",                     english: "This is Mr./Ms. ~." },
  ],

  grammarPoints: [
    {
      id: "g1-1",
      pattern: "N₁ は N₂ です",
      meaning: "N₁ is N₂",
      explanation:
        "は (wa) marks the topic of the sentence — what you are talking about. です is the copula meaning 'is/am/are'. Together this pattern states that N₁ is N₂. It is the most fundamental sentence structure in Japanese.",
      examples: [
        { japanese: "わたしは マイク・ミラーです。",  english: "I'm Mike Miller." },
        { japanese: "わたしは がくせいです。",        english: "I'm a student." },
        { japanese: "あのひとは せんせいです。",      english: "That person is a teacher." },
      ],
    },
    {
      id: "g1-2",
      pattern: "N₁ は N₂ じゃありません",
      meaning: "N₁ is not N₂",
      explanation:
        "じゃありません is the negative form of です. It means 'is not'. In formal writing you may also see ではありません, but じゃありません is natural in everyday speech.",
      examples: [
        { japanese: "ミラーさんは がくせいじゃありません。", english: "Mr. Miller is not a student." },
        { japanese: "わたしは せんせいじゃありません。",     english: "I'm not a teacher." },
      ],
    },
    {
      id: "g1-3",
      pattern: "N₁ は N₂ ですか",
      meaning: "Is N₁ N₂?",
      explanation:
        "Adding か to the end of a sentence turns it into a yes/no question. The word order stays the same as a statement — just add か with a rising intonation. Reply with はい (yes) or いいえ (no).",
      examples: [
        { japanese: "ミラーさんは アメリカじんですか。",        english: "Is Mr. Miller American?" },
        { japanese: "……はい、アメリカじんです。",              english: "……Yes, he is American." },
        { japanese: "……いいえ、アメリカじんじゃありません。",   english: "……No, he isn't American." },
        { japanese: "あのひとは せんせいですか。",             english: "Is that person a teacher?" },
      ],
    },
    {
      id: "g1-4",
      pattern: "N₁ も N₂ です",
      meaning: "N₁ is also N₂",
      explanation:
        "も replaces は when the same statement applies to a second subject. It means 'also' or 'too'. If は would be used in the positive statement, replace it with も.",
      examples: [
        {
          japanese: "ミラーさんは かいしゃいんです。グプタさんも かいしゃいんです。",
          english: "Mr. Miller is a company employee. Mr. Gupta is also a company employee.",
        },
        { japanese: "わたしも がくせいです。",  english: "I am also a student." },
      ],
    },
    {
      id: "g1-5",
      pattern: "N₁ の N₂",
      meaning: "N₂ of N₁ / N₁'s N₂",
      explanation:
        "の connects two nouns. N₁ modifies or belongs to N₂. It can show possession (わたしの本 = my book), affiliation (IMCのしゃいん = an employee of IMC), or category (にほんごの せんせい = a Japanese-language teacher).",
      examples: [
        { japanese: "ミラーさんは IMCの しゃいんです。",        english: "Mr. Miller is an employee of IMC." },
        { japanese: "あのひとは さくら大学の がくせいです。",   english: "That person is a student of Sakura University." },
      ],
    },
    {
      id: "g1-6",
      pattern: "〜さん",
      meaning: "Mr. / Ms. ~ (honorific)",
      explanation:
        "さん is added after a person's name or title to show respect. It is equivalent to 'Mr.' or 'Ms.' in English. Important: never use さん after your own name.",
      examples: [
        { japanese: "ミラーさん",    english: "Mr. Miller" },
        { japanese: "さとうさん",    english: "Ms. Sato" },
      ],
    },
  ],

  quiz: [
    // --- Multiple choice ---
    {
      id: "q1-1",
      type: "multiple-choice",
      question: "What does 'わたし' mean?",
      options: ["You", "I / me", "He", "She"],
      answer: "I / me",
      explanation: "わたし means 'I' or 'me'. It is the first-person singular pronoun in Japanese.",
    },
    {
      id: "q1-2",
      type: "multiple-choice",
      question: "Which particle marks the topic of a sentence?",
      options: ["も", "の", "は", "か"],
      answer: "は",
      explanation: "は (wa) is the topic marker particle. It tells the listener what the sentence is about.",
    },
    {
      id: "q1-3",
      type: "multiple-choice",
      question: "How do you say 'I am not a student' in Japanese?",
      options: [
        "わたしは がくせいです。",
        "わたしは がくせいですか。",
        "わたしは がくせいじゃありません。",
        "わたしも がくせいです。",
      ],
      answer: "わたしは がくせいじゃありません。",
      explanation: "じゃありません is the negative form of です, meaning 'is not'.",
    },
    {
      id: "q1-4",
      type: "multiple-choice",
      question: "What does adding か to the end of a sentence do?",
      options: [
        "Makes it negative",
        "Turns it into a question",
        "Means 'also'",
        "Shows possession",
      ],
      answer: "Turns it into a question",
      explanation: "か at the end of a sentence turns it into a yes/no question, like a question mark in English.",
    },
    {
      id: "q1-5",
      type: "multiple-choice",
      question: "Which particle means 'also' or 'too'?",
      options: ["は", "の", "か", "も"],
      answer: "も",
      explanation: "も replaces は when the same fact applies to another subject. It means 'also' or 'too'.",
    },
    {
      id: "q1-6",
      type: "multiple-choice",
      question: "What is the polite word for 'who'?",
      options: ["だれ", "どなた", "なに", "どこ"],
      answer: "どなた",
      explanation: "どなた is the polite form of だれ (who). Use どなた in formal situations.",
    },
    {
      id: "q1-7",
      type: "multiple-choice",
      question: "Mr. Miller is an employee of IMC. How is this expressed in Japanese?",
      options: [
        "ミラーさんは IMCが しゃいんです。",
        "ミラーさんは IMCの しゃいんです。",
        "ミラーさんは IMCも しゃいんです。",
        "ミラーさんは IMCは しゃいんです。",
      ],
      answer: "ミラーさんは IMCの しゃいんです。",
      explanation: "の connects the two nouns: IMC (organization) の しゃいん (employee). の shows belonging or affiliation.",
    },
    // --- Fill in the blank ---
    {
      id: "q1-8",
      type: "fill-blank",
      question: "Fill in the blank: わたし ___ マイク・ミラーです。",
      context: "わたし ___ マイク・ミラーです。",
      answer: "は",
      explanation: "は (wa) is the topic-marking particle. The sentence means 'I am Mike Miller'.",
    },
    {
      id: "q1-9",
      type: "fill-blank",
      question: "Fill in the blank to make a question: あのひとは せんせい ___。",
      context: "あのひとは せんせい ___。",
      answer: "ですか",
      explanation: "Adding ですか to the end turns it into 'Is that person a teacher?'",
    },
    {
      id: "q1-10",
      type: "fill-blank",
      question: "Fill in the blank: ミラーさんは がくせい___。(Mr. Miller is not a student.)",
      context: "ミラーさんは がくせい ___。",
      answer: "じゃありません",
      explanation: "じゃありません is the negative of です. The sentence means 'Mr. Miller is not a student.'",
    },
    {
      id: "q1-11",
      type: "fill-blank",
      question: "Fill in the blank: わたし___ がくせいです。(I am also a student.)",
      context: "わたし ___ がくせいです。",
      answer: "も",
      explanation: "も replaces は when saying 'also'. The sentence means 'I am also a student.'",
    },
  ],
};

export default lesson01;
