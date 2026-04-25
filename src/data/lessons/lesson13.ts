import type { Lesson } from "../types";

const lesson13: Lesson = {
  id: 13,
  title: "Lesson 13",
  topic: "Wants & Purpose — ほしい, 〜たいです, 〜に行きます",

  vocabulary: [
    // Verbs
    { japanese: "あそびます",       kanji: "遊びます",       english: "enjoy oneself, play" },
    { japanese: "およぎます",       kanji: "泳ぎます",       english: "swim" },
    { japanese: "むかえます",       kanji: "迎えます",       english: "go to meet, welcome" },
    { japanese: "つかれます",       kanji: "疲れます",       english: "get tired" },
    { japanese: "けっこんします",   kanji: "結婚します",     english: "marry, get married" },
    { japanese: "かいものします",   kanji: "買い物します",   english: "do shopping" },
    { japanese: "しょくじします",   kanji: "食事します",     english: "have a meal, dine" },
    { japanese: "さんぽします",     kanji: "散歩します",     english: "take a walk" },
    // Adjectives
    { japanese: "たいへん[な]",     kanji: "大変[な]",       english: "hard, tough, severe, awful" },
    { japanese: "ほしい",           kanji: "欲しい",         english: "want (something)" },
    { japanese: "ひろい",           kanji: "広い",           english: "wide, spacious" },
    { japanese: "せまい",           kanji: "狭い",           english: "narrow, small (room, etc.)" },
    // Nouns
    { japanese: "プール",                                    english: "swimming pool" },
    { japanese: "かわ",             kanji: "川",             english: "river" },
    { japanese: "びじゅつ",         kanji: "美術",           english: "fine arts" },
    { japanese: "つり",             kanji: "釣り",           english: "fishing (~をします: fish, angle)" },
    { japanese: "スキー",                                    english: "skiing (~をします: ski)" },
    { japanese: "しゅうまつ",       kanji: "週末",           english: "weekend" },
    { japanese: "[お]しょうがつ",   kanji: "[お]正月",       english: "New Year's Day" },
    // Other
    { japanese: "〜ごろ",                                    english: "about 〜 (time)" },
    { japanese: "なにか",           kanji: "何か",           english: "something" },
    { japanese: "どこか",                                    english: "somewhere, some place" },
    // 練習C
    { japanese: "のどが かわきます",                         english: "get thirsty" },
    { japanese: "おなかが すきます",                         english: "get hungry" },
    { japanese: "そう しましょう",                           english: "Let's do that (agreeing with a suggestion)" },
    // 会話
    { japanese: "ごちゅうもんは",   kanji: "ご注文は",       english: "May I take your order?" },
    { japanese: "ていしょく",       kanji: "定食",           english: "set meal, table d'hôte" },
    { japanese: "ぎゅうどん",       kanji: "牛どん",         english: "bowl of rice topped with beef" },
    { japanese: "べつべつに",       kanji: "別々に",         english: "separately" },
  ],

  grammarPoints: [
    {
      id: "l13-g1",
      pattern: "N が ほしいです",
      meaning: "I want N",
      explanation:
        "ほしい is an い-adjective meaning 'want (something)'. The thing wanted is marked with が. " +
        "Note: ほしいです can only express the speaker's or listener's wants — not a third person's. " +
        "Negative: ほしくないです. Past: ほしかったです.",
      examples: [
        { japanese: "わたしは あたらしい けいたいが ほしいです。",  english: "I want a new mobile phone." },
        { japanese: "いま なにが いちばん ほしいですか。",           english: "What do you want most right now?" },
        { japanese: "……くるまが ほしいです。",                       english: "……I want a car." },
        { japanese: "こどもが ほしいですか。",                       english: "Do you want to have children?" },
      ],
    },
    {
      id: "l13-g2",
      pattern: "V ます-form たいです",
      meaning: "I want to do ~",
      explanation:
        "Drop ます from the ます-form and add たいです to express a desire to do something. " +
        "たい inflects like an い-adjective. The object can be marked by を or が. " +
        "Like ほしい, this can only express the speaker's or listener's desires.",
      examples: [
        { japanese: "わたしは おきなわへ いきたいです。",            english: "I want to go to Okinawa." },
        { japanese: "わたしは てんぷらを たべたいです。",            english: "I'd like to eat some tempura." },
        { japanese: "つかれましたから、なにも したくないです。",      english: "I'm tired, so I don't want to do anything." },
        { japanese: "かねで なにを かいたいですか。",                english: "What do you want to buy in Kobe?" },
      ],
    },
    {
      id: "l13-g3",
      pattern: "N(place) へ V ます-form に 行きます／来ます／帰ります",
      meaning: "Go / come / return to [place] to do ~",
      explanation:
        "The purpose of movement is expressed by attaching に to the ます-form (drop ます) of a verb. " +
        "When the verb before に is Nをします (e.g. かいものします), use the N alone: Nに行きます. " +
        "The place is marked by へ.",
      examples: [
        { japanese: "こうべへ インドりょうりを たべに いきます。",    english: "I'm going to Kobe to have some Indian food." },
        { japanese: "かいものに いきます。",                          english: "I'm going shopping." },
        { japanese: "にほんへ びじゅつの べんきょうに きました。",    english: "I came to Japan to study art." },
        { japanese: "あした きょうとの おまつりに いきます。",        english: "I'm going to see a festival in Kyoto tomorrow." },
      ],
    },
    {
      id: "l13-g4",
      pattern: "どこか／なにか",
      meaning: "somewhere / something",
      explanation:
        "どこか means 'somewhere' or 'anywhere'. なにか means 'something' or 'anything'. " +
        "The particle へ comes after どこか; を comes after なにか — but either can be omitted. " +
        "In negative sentences, use どこも and なにも instead.",
      examples: [
        { japanese: "ふゆやすみは どこか[へ] いきましたか。",         english: "Did you go anywhere for your winter holiday?" },
        { japanese: "……はい、ほっかいどうへ スキーに いきました。",   english: "……Yes, I went skiing in Hokkaido." },
        { japanese: "のどが かわきましたから、なにか[を] のみたいです。", english: "I'm thirsty; I'd like something to drink." },
      ],
    },
  ],

  quiz: [
    {
      id: "l13-q1",
      type: "multiple-choice",
      question: "How do you say 'I want a new mobile phone'?",
      options: [
        "あたらしい けいたいが ほしいです",
        "あたらしい けいたいを たべたいです",
        "あたらしい けいたいが すきです",
        "あたらしい けいたいを ほしいです",
      ],
      answer: "あたらしい けいたいが ほしいです",
      explanation: "N が ほしいです = I want N. The object of ほしい is marked with が (not を).",
    },
    {
      id: "l13-q2",
      type: "multiple-choice",
      question: "How do you say 'I want to eat sushi'?",
      options: [
        "すしが ほしいです",
        "すしを たべたいです",
        "すしを たべました",
        "すしを たべますか",
      ],
      answer: "すしを たべたいです",
      explanation: "V ます-form + たいです = want to do ~. たべます → drop ます → たべ + たいです.",
    },
    {
      id: "l13-q3",
      type: "fill-blank",
      question: "I want to go to Okinawa. → わたしは おきなわへ ___たいです。",
      answer: "いき",
      explanation: "いきます → drop ます → いき + たいです = いきたいです (want to go).",
    },
    {
      id: "l13-q4",
      type: "multiple-choice",
      question: "How do you say 'I'm going to Kobe to have Indian food'?",
      options: [
        "こうべへ インドりょうりを たべに いきます",
        "こうべへ インドりょうりが ほしいです",
        "こうべで インドりょうりを たべたいです",
        "こうべに インドりょうりを たべます",
      ],
      answer: "こうべへ インドりょうりを たべに いきます",
      explanation: "Place へ + V ます-form に + 行きます = go to [place] to do ~.",
    },
    {
      id: "l13-q5",
      type: "multiple-choice",
      question: "What does 'どこか へ いきましたか' mean?",
      options: [
        "Did you go anywhere?",
        "Do you want to go somewhere?",
        "Where did you go?",
        "Is there somewhere you want to go?",
      ],
      answer: "Did you go anywhere?",
      explanation: "どこか = somewhere / anywhere. どこか へ いきましたか = Did you go anywhere?",
    },
    {
      id: "l13-q6",
      type: "fill-blank",
      question: "I came to Japan to study art. → にほんへ びじゅつの べんきょうに ___。",
      answer: "きました",
      explanation: "N に + きます (come). The purpose (studying art) uses に to mark the reason for coming.",
    },
    {
      id: "l13-q7",
      type: "multiple-choice",
      question: "Which sentence correctly uses なにか?",
      options: [
        "のどが かわきましたから、なにかを のみたいです",
        "なにかが たべます",
        "なにかが ほしくないです",
        "なにかに いきます",
      ],
      answer: "のどが かわきましたから、なにかを のみたいです",
      explanation: "なにか = something. なにかを のみたいです = I want to drink something.",
    },
    {
      id: "l13-q8",
      type: "multiple-choice",
      question: "What is the meaning of 'おなかが すきました'?",
      options: [
        "I got hungry",
        "I got thirsty",
        "I got tired",
        "I got full",
      ],
      answer: "I got hungry",
      explanation: "おなかが すきます = get hungry. のどが かわきます = get thirsty. つかれます = get tired.",
    },
    {
      id: "l13-q9",
      type: "fill-blank",
      question: "I'm going shopping. → ___に いきます。",
      answer: "かいもの",
      explanation: "かいものします → かいものに いきます. When the verb is Nをします, use N alone before に.",
    },
    {
      id: "l13-q10",
      type: "multiple-choice",
      question: "How do you express 'I don't want to do anything' (because tired)?",
      options: [
        "つかれましたから、なにも したくないです",
        "つかれましたから、なにかを したいです",
        "つかれましたから、なにも ほしいです",
        "つかれましたから、どこかへ いきたいです",
      ],
      answer: "つかれましたから、なにも したくないです",
      explanation: "したくないです = don't want to do (negative of したいです). なにも = nothing / not anything.",
    },
  ],
};

export default lesson13;
