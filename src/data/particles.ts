export interface ParticleEntry {
  particle: string;
  readings?: string;        // alternate readings / notes
  meanings: string[];
  usages: {
    pattern: string;
    explanation: string;
    examples: { jp: string; en: string }[];
  }[];
}

export const particles: ParticleEntry[] = [
  {
    particle: "は",
    readings: "pronounced わ",
    meanings: ["topic marker"],
    usages: [
      {
        pattern: "N は ~",
        explanation: "Marks the topic of the sentence — what the speaker is talking about.",
        examples: [
          { jp: "わたしは がくせいです。",         en: "I am a student." },
          { jp: "これは ほんです。",                en: "This is a book." },
        ],
      },
      {
        pattern: "N₁ は N₂ ですが、…",
        explanation: "Contrasts two items. The は creates emphasis on the contrast.",
        examples: [
          { jp: "コーヒーは のみますが、おちゃは のみません。", en: "I drink coffee, but I don't drink tea." },
        ],
      },
    ],
  },
  {
    particle: "が",
    meanings: ["subject marker", "object of desire/ability/like/dislike"],
    usages: [
      {
        pattern: "N が ~",
        explanation: "Marks the grammatical subject, especially when introducing new information or with verbs like あります/います.",
        examples: [
          { jp: "つくえの うえに ほんが あります。", en: "There is a book on the desk." },
          { jp: "あそこに やまださんが います。",   en: "Mr. Yamada is over there." },
        ],
      },
      {
        pattern: "N が すきです / きらいです / じょうずです",
        explanation: "が marks the object of likes, dislikes, and abilities.",
        examples: [
          { jp: "わたしは すしが すきです。",       en: "I like sushi." },
          { jp: "かれは えいごが じょうずです。",   en: "He is good at English." },
        ],
      },
    ],
  },
  {
    particle: "を",
    meanings: ["direct object marker"],
    usages: [
      {
        pattern: "N を V",
        explanation: "Marks the direct object of a transitive verb.",
        examples: [
          { jp: "コーヒーを のみます。",         en: "I drink coffee." },
          { jp: "ほんを よみます。",             en: "I read a book." },
          { jp: "えいごを べんきょうします。",   en: "I study English." },
        ],
      },
      {
        pattern: "N を でます / おります",
        explanation: "を marks the departure point with verbs like でます (leave) and おります (get off).",
        examples: [
          { jp: "うちを でます。",               en: "I leave home." },
          { jp: "うめだで でんしゃを おります。", en: "I get off the train at Umeda." },
        ],
      },
    ],
  },
  {
    particle: "に",
    meanings: ["time", "destination", "location of existence", "purpose", "indirect object"],
    usages: [
      {
        pattern: "Time に V",
        explanation: "Marks a specific point in time (clock time, days, months, years). Not used with relative time words like きょう, あした, etc.",
        examples: [
          { jp: "6じに おきます。",             en: "I wake up at six." },
          { jp: "にちようびに やすみます。",     en: "I rest on Sundays." },
        ],
      },
      {
        pattern: "Place に いきます / きます / かえります",
        explanation: "Marks the destination of movement verbs.",
        examples: [
          { jp: "がっこうに いきます。",         en: "I go to school." },
          { jp: "にほんに きました。",           en: "I came to Japan." },
        ],
      },
      {
        pattern: "Place に あります / います",
        explanation: "Marks the location where something/someone exists.",
        examples: [
          { jp: "つくえの うえに ほんが あります。", en: "There is a book on the desk." },
          { jp: "こうえんに こどもが います。",       en: "There are children in the park." },
        ],
      },
      {
        pattern: "N に V (indirect object)",
        explanation: "Marks the recipient of giving/receiving verbs.",
        examples: [
          { jp: "ともだちに プレゼントを あげます。", en: "I give a present to my friend." },
          { jp: "せんせいに きょうかしょを もらいました。", en: "I received a textbook from the teacher." },
        ],
      },
    ],
  },
  {
    particle: "で",
    meanings: ["location of action", "means / method", "material", "scope / reason"],
    usages: [
      {
        pattern: "Place で V",
        explanation: "Marks the place where an action occurs (distinct from に, which marks existence).",
        examples: [
          { jp: "としょかんで べんきょうします。", en: "I study at the library." },
          { jp: "レストランで たべます。",         en: "I eat at a restaurant." },
        ],
      },
      {
        pattern: "Method / Means で V",
        explanation: "Marks the means, tool, or method used to perform an action.",
        examples: [
          { jp: "でんしゃで いきます。",           en: "I go by train." },
          { jp: "はしで たべます。",               en: "I eat with chopsticks." },
          { jp: "にほんごで はなします。",         en: "I speak in Japanese." },
        ],
      },
      {
        pattern: "Language / Material で",
        explanation: "Marks the language used or material something is made of.",
        examples: [
          { jp: "えいごで かきました。",           en: "I wrote it in English." },
        ],
      },
    ],
  },
  {
    particle: "へ",
    readings: "pronounced え",
    meanings: ["direction / heading"],
    usages: [
      {
        pattern: "Place へ いきます / きます / かえります",
        explanation: "Marks the direction of movement. Similar to に but emphasises the direction rather than the destination.",
        examples: [
          { jp: "とうきょうへ いきます。",         en: "I am heading to Tokyo." },
          { jp: "うちへ かえります。",             en: "I return home." },
        ],
      },
    ],
  },
  {
    particle: "と",
    meanings: ["and (exhaustive)", "together with (accompaniment)", "quotation"],
    usages: [
      {
        pattern: "N₁ と N₂",
        explanation: "Lists all items — an exhaustive 'and'. Connects two nouns.",
        examples: [
          { jp: "ぎんこうは どようびと にちようびが やすみです。", en: "The bank is closed on Saturdays and Sundays." },
          { jp: "ほんと えんぴつを かいました。",               en: "I bought a book and a pencil." },
        ],
      },
      {
        pattern: "N と V",
        explanation: "Marks a companion — someone you do something together with.",
        examples: [
          { jp: "ともだちと えいがを みました。", en: "I watched a movie with a friend." },
          { jp: "かれと いきます。",              en: "I'm going with him." },
        ],
      },
    ],
  },
  {
    particle: "も",
    meanings: ["also, too, either"],
    usages: [
      {
        pattern: "N も ~",
        explanation: "Replaces は or が to mean 'also' or 'too'. Adds the noun to something already mentioned.",
        examples: [
          { jp: "ミラーさんは かいしゃいんです。グプタさんも かいしゃいんです。", en: "Mr. Miller is a company employee. Mr. Gupta is also a company employee." },
          { jp: "わたしも にほんごを べんきょうしています。", en: "I am also studying Japanese." },
        ],
      },
    ],
  },
  {
    particle: "の",
    meanings: ["possession / connection", "nominaliser", "substitute for a noun"],
    usages: [
      {
        pattern: "N₁ の N₂",
        explanation: "Shows that N₁ modifies N₂ — possession, affiliation, description.",
        examples: [
          { jp: "これは わたしの かばんです。",     en: "This is my bag." },
          { jp: "IMCの しゃいん",                   en: "an employee of IMC" },
          { jp: "にほんごの ほん",                   en: "a Japanese-language book" },
        ],
      },
      {
        pattern: "の (noun substitute)",
        explanation: "の can replace a noun that has already been mentioned, but only for things, not people.",
        examples: [
          { jp: "それは だれの かばんですか。……さとうさんのです。", en: "Whose bag is that? ……It's Ms. Sato's." },
        ],
      },
      {
        pattern: "V-dictionary / N の + まえに",
        explanation: "の nominalises a noun for use before まえに (before).",
        examples: [
          { jp: "しょくじの まえに、てを あらいます。", en: "I wash my hands before a meal." },
        ],
      },
    ],
  },
  {
    particle: "から",
    meanings: ["from (time/place)", "because / since (reason)"],
    usages: [
      {
        pattern: "N から ~",
        explanation: "Marks the starting point of time or place.",
        examples: [
          { jp: "くじから ごじまで はたらきます。",   en: "I work from nine to five." },
          { jp: "にほんから きました。",               en: "I came from Japan." },
        ],
      },
      {
        pattern: "Sentence から、Sentence",
        explanation: "Gives a reason or cause. Equivalent to 'because' or 'so'.",
        examples: [
          { jp: "あした しゅっちょうが ありますから、はやく かえります。", en: "I'm going home early because I have a business trip tomorrow." },
        ],
      },
    ],
  },
  {
    particle: "まで",
    meanings: ["until, up to (time/place)"],
    usages: [
      {
        pattern: "N まで ~",
        explanation: "Marks the end point of time or place.",
        examples: [
          { jp: "くじから ごじまで はたらきます。",     en: "I work from nine to five." },
          { jp: "えきまで あるきました。",               en: "I walked to the station." },
        ],
      },
      {
        pattern: "N までに V",
        explanation: "Marks a deadline — by the time stated, the action must be completed.",
        examples: [
          { jp: "きんようびまでに レポートを だしてください。", en: "Please hand in the report by Friday." },
        ],
      },
    ],
  },
  {
    particle: "か",
    meanings: ["question marker", "or"],
    usages: [
      {
        pattern: "Sentence か",
        explanation: "Added to the end of a sentence to form a question. No rising intonation needed in writing.",
        examples: [
          { jp: "これは じしょですか。",           en: "Is this a dictionary?" },
          { jp: "なんじに おきますか。",           en: "What time do you wake up?" },
        ],
      },
      {
        pattern: "N₁ か N₂",
        explanation: "Presents alternatives — 'or'.",
        examples: [
          { jp: "これは「9」ですか、「7」ですか。", en: "Is this a 9 or a 7?" },
        ],
      },
    ],
  },
  {
    particle: "ね",
    meanings: ["seeking agreement, confirmation", "softener"],
    usages: [
      {
        pattern: "Sentence ね",
        explanation: "Added to the end of a sentence to seek agreement from the listener, or to confirm information. Like 'isn't it?' or 'right?'",
        examples: [
          { jp: "きょうは いい てんきですね。",       en: "It's nice weather today, isn't it?" },
          { jp: "たいへんですね。",                   en: "That's tough, isn't it?" },
          { jp: "でんわばんごうは 871の 6813ですね。", en: "Your phone number is 871-6813, right?" },
        ],
      },
    ],
  },
  {
    particle: "よ",
    meanings: ["assertive — informing the listener of something they don't know"],
    usages: [
      {
        pattern: "Sentence よ",
        explanation: "Asserts information the speaker believes the listener doesn't know. More assertive than ね.",
        examples: [
          { jp: "このみちは あぶないですよ。",         en: "This road is dangerous, you know." },
          { jp: "あそこに ミラーさんが いますよ。",   en: "Mr. Miller is over there, you know." },
        ],
      },
    ],
  },
  {
    particle: "より",
    meanings: ["than (comparison)"],
    usages: [
      {
        pattern: "N₁ より N₂ の ほうが adj",
        explanation: "Compares two things. N₁ is the reference point, N₂ is what is being compared.",
        examples: [
          { jp: "バスより でんしゃの ほうが はやいです。", en: "The train is faster than the bus." },
          { jp: "なつより ふゆの ほうが すきです。",       en: "I like winter more than summer." },
        ],
      },
    ],
  },
  {
    particle: "や",
    meanings: ["and (non-exhaustive — among other things)"],
    usages: [
      {
        pattern: "N₁ や N₂ (など)",
        explanation: "Lists representative examples from a larger set. Unlike と, it does not list everything.",
        examples: [
          { jp: "つくえの うえに ほんや ノートが あります。", en: "There are books and notebooks (and other things) on the desk." },
        ],
      },
    ],
  },
];
