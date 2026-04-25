export interface KanjiExample {
  word: string;
  reading: string;
  meaning: string;
}

export interface KanjiItem {
  kanji: string;
  meaning: string;
  onyomi: string[];   // katakana readings
  kunyomi: string[];  // hiragana readings
  examples: KanjiExample[];
}

export interface KanjiGroup {
  category: string;
  items: KanjiItem[];
}

export const kanjiGroups: KanjiGroup[] = [
  {
    category: "Numbers",
    items: [
      { kanji: "一", meaning: "one",          onyomi: ["イチ", "イツ"],         kunyomi: ["ひと", "ひとつ"],          examples: [{ word: "一つ",    reading: "ひとつ",      meaning: "one (thing)" },      { word: "一月",    reading: "いちがつ",    meaning: "January" },           { word: "一番",    reading: "いちばん",    meaning: "number one / best" }] },
      { kanji: "二", meaning: "two",          onyomi: ["ニ", "ジ"],             kunyomi: ["ふた", "ふたつ"],          examples: [{ word: "二つ",    reading: "ふたつ",      meaning: "two (things)" },     { word: "二月",    reading: "にがつ",      meaning: "February" },          { word: "二人",    reading: "ふたり",      meaning: "two people" }] },
      { kanji: "三", meaning: "three",        onyomi: ["サン"],                 kunyomi: ["み", "みつ", "みっつ"],    examples: [{ word: "三時",    reading: "さんじ",      meaning: "3 o'clock" },        { word: "三月",    reading: "さんがつ",    meaning: "March" },             { word: "三つ",    reading: "みっつ",      meaning: "three (things)" }] },
      { kanji: "四", meaning: "four",         onyomi: ["シ"],                   kunyomi: ["よ", "よん", "よっつ"],   examples: [{ word: "四月",    reading: "しがつ",      meaning: "April" },            { word: "四時",    reading: "よじ",        meaning: "4 o'clock" },         { word: "四つ",    reading: "よっつ",      meaning: "four (things)" }] },
      { kanji: "五", meaning: "five",         onyomi: ["ゴ"],                   kunyomi: ["いつ", "いつつ"],         examples: [{ word: "五月",    reading: "ごがつ",      meaning: "May" },              { word: "五百",    reading: "ごひゃく",    meaning: "500" },               { word: "五つ",    reading: "いつつ",      meaning: "five (things)" }] },
      { kanji: "六", meaning: "six",          onyomi: ["ロク", "リク"],         kunyomi: ["む", "むつ", "むっつ", "むい"], examples: [{ word: "六月",  reading: "ろくがつ",    meaning: "June" },             { word: "六時",    reading: "ろくじ",      meaning: "6 o'clock" },         { word: "六つ",    reading: "むっつ",      meaning: "six (things)" }] },
      { kanji: "七", meaning: "seven",        onyomi: ["シチ"],                 kunyomi: ["なな", "ななつ", "なの"],  examples: [{ word: "七月",    reading: "しちがつ",    meaning: "July" },             { word: "七時",    reading: "しちじ",      meaning: "7 o'clock" },         { word: "七日",    reading: "なのか",      meaning: "7th day / 7 days" }] },
      { kanji: "八", meaning: "eight",        onyomi: ["ハチ", "ハツ"],         kunyomi: ["や", "やつ", "やっつ", "よう"], examples: [{ word: "八月",  reading: "はちがつ",    meaning: "August" },           { word: "八時",    reading: "はちじ",      meaning: "8 o'clock" },         { word: "八つ",    reading: "やっつ",      meaning: "eight (things)" }] },
      { kanji: "九", meaning: "nine",         onyomi: ["キュウ", "ク"],         kunyomi: ["ここの", "ここのつ"],      examples: [{ word: "九月",    reading: "くがつ",      meaning: "September" },        { word: "九時",    reading: "くじ",        meaning: "9 o'clock" },         { word: "九つ",    reading: "ここのつ",    meaning: "nine (things)" }] },
      { kanji: "十", meaning: "ten",          onyomi: ["ジュウ", "ジッ", "ジュッ"], kunyomi: ["とお", "と"],          examples: [{ word: "十月",    reading: "じゅうがつ",  meaning: "October" },          { word: "十時",    reading: "じゅうじ",    meaning: "10 o'clock" },        { word: "二十",    reading: "にじゅう",    meaning: "twenty" }] },
      { kanji: "百", meaning: "hundred",      onyomi: ["ヒャク", "ビャク"],     kunyomi: ["もも"],                   examples: [{ word: "百円",    reading: "ひゃくえん",  meaning: "100 yen" },          { word: "三百",    reading: "さんびゃく",  meaning: "300" },               { word: "何百",    reading: "なんびゃく",  meaning: "hundreds of" }] },
      { kanji: "千", meaning: "thousand",     onyomi: ["セン", "ゼン"],         kunyomi: ["ち"],                     examples: [{ word: "千円",    reading: "せんえん",    meaning: "1,000 yen" },        { word: "三千",    reading: "さんぜん",    meaning: "3,000" },             { word: "千年",    reading: "せんねん",    meaning: "millennium" }] },
      { kanji: "万", meaning: "ten thousand", onyomi: ["マン", "バン"],         kunyomi: ["よろず"],                 examples: [{ word: "一万円",  reading: "いちまんえん",meaning: "10,000 yen" },       { word: "何万",    reading: "なんまん",    meaning: "tens of thousands" }, { word: "万屋",    reading: "よろずや",    meaning: "general store" }] },
    ],
  },
  {
    category: "Time",
    items: [
      { kanji: "年", meaning: "year",              onyomi: ["ネン"],                 kunyomi: ["とし"],                   examples: [{ word: "今年",    reading: "ことし",      meaning: "this year" },        { word: "来年",    reading: "らいねん",    meaning: "next year" },         { word: "去年",    reading: "きょねん",    meaning: "last year" }] },
      { kanji: "月", meaning: "month / moon",      onyomi: ["ゲツ", "ガツ"],         kunyomi: ["つき"],                   examples: [{ word: "月曜日",  reading: "げつようび",  meaning: "Monday" },           { word: "来月",    reading: "らいげつ",    meaning: "next month" },        { word: "今月",    reading: "こんげつ",    meaning: "this month" }] },
      { kanji: "日", meaning: "day / sun",         onyomi: ["ニチ", "ジツ"],         kunyomi: ["ひ", "か"],               examples: [{ word: "今日",    reading: "きょう",      meaning: "today" },            { word: "日曜日",  reading: "にちようび",  meaning: "Sunday" },            { word: "誕生日",  reading: "たんじょうび",meaning: "birthday" }] },
      { kanji: "時", meaning: "time / hour",       onyomi: ["ジ"],                   kunyomi: ["とき"],                   examples: [{ word: "何時",    reading: "なんじ",      meaning: "what time" },        { word: "時間",    reading: "じかん",      meaning: "time / duration" },   { word: "三時",    reading: "さんじ",      meaning: "3 o'clock" }] },
      { kanji: "分", meaning: "minute / part",     onyomi: ["フン", "ブン", "プン"], kunyomi: ["わける", "わかる"],       examples: [{ word: "十分",    reading: "じゅっぷん",  meaning: "10 minutes" },       { word: "何分",    reading: "なんぷん",    meaning: "how many minutes" },  { word: "自分",    reading: "じぶん",      meaning: "oneself" }] },
      { kanji: "週", meaning: "week",              onyomi: ["シュウ"],               kunyomi: [],                         examples: [{ word: "先週",    reading: "せんしゅう",  meaning: "last week" },        { word: "来週",    reading: "らいしゅう",  meaning: "next week" },         { word: "今週",    reading: "こんしゅう",  meaning: "this week" }] },
      { kanji: "今", meaning: "now",               onyomi: ["コン", "キン"],         kunyomi: ["いま"],                   examples: [{ word: "今",      reading: "いま",        meaning: "now" },              { word: "今日",    reading: "きょう",      meaning: "today" },             { word: "今年",    reading: "ことし",      meaning: "this year" }] },
      { kanji: "午", meaning: "noon",              onyomi: ["ゴ"],                   kunyomi: ["うま"],                   examples: [{ word: "午前",    reading: "ごぜん",      meaning: "AM / morning" },     { word: "午後",    reading: "ごご",        meaning: "PM / afternoon" },    { word: "正午",    reading: "しょうご",    meaning: "noon / midday" }] },
      { kanji: "前", meaning: "before / front",    onyomi: ["ゼン"],                 kunyomi: ["まえ"],                   examples: [{ word: "午前",    reading: "ごぜん",      meaning: "AM" },               { word: "前",      reading: "まえ",        meaning: "front / before" },    { word: "名前",    reading: "なまえ",      meaning: "name" }] },
      { kanji: "後", meaning: "after / behind",    onyomi: ["ゴ", "コウ"],           kunyomi: ["のち", "あと", "うしろ", "おくれる"], examples: [{ word: "午後", reading: "ごご",        meaning: "PM" },               { word: "後で",    reading: "あとで",      meaning: "later" },             { word: "後ろ",    reading: "うしろ",      meaning: "behind / back" }] },
      { kanji: "毎", meaning: "every",             onyomi: ["マイ"],                 kunyomi: [],                         examples: [{ word: "毎日",    reading: "まいにち",    meaning: "every day" },        { word: "毎朝",    reading: "まいあさ",    meaning: "every morning" },     { word: "毎週",    reading: "まいしゅう",  meaning: "every week" }] },
      { kanji: "何", meaning: "what / how many",   onyomi: ["カ"],                   kunyomi: ["なに", "なん"],           examples: [{ word: "何",      reading: "なに",        meaning: "what" },             { word: "何時",    reading: "なんじ",      meaning: "what time" },         { word: "何人",    reading: "なんにん",    meaning: "how many people" }] },
    ],
  },
  {
    category: "People",
    items: [
      { kanji: "人", meaning: "person",         onyomi: ["ジン", "ニン"],         kunyomi: ["ひと"],                   examples: [{ word: "人",      reading: "ひと",        meaning: "person" },           { word: "外国人",  reading: "がいこくじん",meaning: "foreigner" },         { word: "日本人",  reading: "にほんじん",  meaning: "Japanese person" }] },
      { kanji: "男", meaning: "man",            onyomi: ["ダン", "ナン"],         kunyomi: ["おとこ", "お"],           examples: [{ word: "男",      reading: "おとこ",      meaning: "man / male" },       { word: "男の人",  reading: "おとこのひと",meaning: "male person" },       { word: "男の子",  reading: "おとこのこ",  meaning: "boy" }] },
      { kanji: "女", meaning: "woman",          onyomi: ["ジョ", "ニョ", "ニョウ"], kunyomi: ["おんな", "め"],         examples: [{ word: "女",      reading: "おんな",      meaning: "woman / female" },   { word: "女の人",  reading: "おんなのひと",meaning: "female person" },     { word: "女房",    reading: "にょうぼう",  meaning: "wife (casual)" }] },
      { kanji: "子", meaning: "child",          onyomi: ["シ", "ス", "ツ"],       kunyomi: ["こ"],                     examples: [{ word: "子ども",  reading: "こども",      meaning: "child / children" }, { word: "様子",    reading: "ようす",      meaning: "state / situation" }, { word: "男の子",  reading: "おとこのこ",  meaning: "boy" }] },
      { kanji: "父", meaning: "father",         onyomi: ["フ"],                   kunyomi: ["ちち"],                   examples: [{ word: "父",      reading: "ちち",        meaning: "my father" },        { word: "お父さん",reading: "おとうさん",  meaning: "father (polite)" },   { word: "父母",    reading: "ふぼ",        meaning: "parents" }] },
      { kanji: "母", meaning: "mother",         onyomi: ["ボ"],                   kunyomi: ["はは", "も"],             examples: [{ word: "母",      reading: "はは",        meaning: "my mother" },        { word: "お母さん",reading: "おかあさん",  meaning: "mother (polite)" },   { word: "父母",    reading: "ふぼ",        meaning: "parents" }] },
      { kanji: "友", meaning: "friend",         onyomi: ["ユウ"],                 kunyomi: ["とも"],                   examples: [{ word: "友だち",  reading: "ともだち",    meaning: "friend" },           { word: "友人",    reading: "ゆうじん",    meaning: "friend (formal)" },   { word: "親友",    reading: "しんゆう",    meaning: "close friend" }] },
      { kanji: "先", meaning: "ahead / previous",onyomi: ["セン"],                kunyomi: ["さき", "まず"],           examples: [{ word: "先生",    reading: "せんせい",    meaning: "teacher" },          { word: "先週",    reading: "せんしゅう",  meaning: "last week" },         { word: "先ず",    reading: "まず",        meaning: "first of all" }] },
      { kanji: "生", meaning: "life / live",    onyomi: ["セイ", "ショウ"],       kunyomi: ["いきる", "うまれる", "なま"], examples: [{ word: "学生",  reading: "がくせい",    meaning: "student" },          { word: "先生",    reading: "せんせい",    meaning: "teacher" },           { word: "生まれる",reading: "うまれる",    meaning: "to be born" }] },
    ],
  },
  {
    category: "Nature",
    items: [
      { kanji: "山", meaning: "mountain",   onyomi: ["サン"],                 kunyomi: ["やま"],                   examples: [{ word: "山",      reading: "やま",        meaning: "mountain" },         { word: "富士山",  reading: "ふじさん",    meaning: "Mt. Fuji" },          { word: "登山",    reading: "とざん",      meaning: "mountain climbing" }] },
      { kanji: "川", meaning: "river",      onyomi: ["セン"],                 kunyomi: ["かわ"],                   examples: [{ word: "川",      reading: "かわ",        meaning: "river" },            { word: "小川",    reading: "おがわ",      meaning: "stream / brook" },    { word: "川岸",    reading: "かわぎし",    meaning: "riverbank" }] },
      { kanji: "木", meaning: "tree / wood",onyomi: ["モク", "ボク"],         kunyomi: ["き", "こ"],               examples: [{ word: "木",      reading: "き",          meaning: "tree / wood" },      { word: "木曜日",  reading: "もくようび",  meaning: "Thursday" },          { word: "木の葉",  reading: "このは",      meaning: "leaves of a tree" }] },
      { kanji: "花", meaning: "flower",     onyomi: ["カ"],                   kunyomi: ["はな"],                   examples: [{ word: "花",      reading: "はな",        meaning: "flower" },           { word: "花見",    reading: "はなみ",      meaning: "cherry blossom viewing" },{ word: "花火",  reading: "はなび",      meaning: "fireworks" }] },
      { kanji: "雨", meaning: "rain",       onyomi: ["ウ"],                   kunyomi: ["あめ", "あま"],           examples: [{ word: "雨",      reading: "あめ",        meaning: "rain" },             { word: "大雨",    reading: "おおあめ",    meaning: "heavy rain" },        { word: "雨天",    reading: "うてん",      meaning: "rainy weather" }] },
      { kanji: "空", meaning: "sky / empty",onyomi: ["クウ"],                 kunyomi: ["そら", "から", "あく"],   examples: [{ word: "空",      reading: "そら",        meaning: "sky" },              { word: "青空",    reading: "あおぞら",    meaning: "blue sky" },          { word: "空港",    reading: "くうこう",    meaning: "airport" }] },
      { kanji: "水", meaning: "water",      onyomi: ["スイ"],                 kunyomi: ["みず"],                   examples: [{ word: "水",      reading: "みず",        meaning: "water" },            { word: "水曜日",  reading: "すいようび",  meaning: "Wednesday" },         { word: "水泳",    reading: "すいえい",    meaning: "swimming" }] },
      { kanji: "火", meaning: "fire",       onyomi: ["カ"],                   kunyomi: ["ひ", "ほ"],               examples: [{ word: "火",      reading: "ひ",          meaning: "fire" },             { word: "火曜日",  reading: "かようび",    meaning: "Tuesday" },           { word: "花火",    reading: "はなび",      meaning: "fireworks" }] },
    ],
  },
  {
    category: "Place & Direction",
    items: [
      { kanji: "国", meaning: "country",       onyomi: ["コク"],                 kunyomi: ["くに"],                   examples: [{ word: "国",      reading: "くに",        meaning: "country" },          { word: "外国",    reading: "がいこく",    meaning: "foreign country" },   { word: "国語",    reading: "こくご",      meaning: "national language" }] },
      { kanji: "外", meaning: "outside",       onyomi: ["ガイ", "ゲ"],           kunyomi: ["そと", "ほか", "はずれる"], examples: [{ word: "外",    reading: "そと",        meaning: "outside" },          { word: "外国語",  reading: "がいこくご",  meaning: "foreign language" },  { word: "海外",    reading: "かいがい",    meaning: "overseas" }] },
      { kanji: "上", meaning: "up / above",    onyomi: ["ジョウ", "ショウ", "シャン"], kunyomi: ["うえ", "うわ", "かみ", "あげる"], examples: [{ word: "上", reading: "うえ",        meaning: "above / on top" },   { word: "上手",    reading: "じょうず",    meaning: "skillful" },          { word: "机の上",  reading: "つくえのうえ", meaning: "on the desk" }] },
      { kanji: "下", meaning: "down / below",  onyomi: ["カ", "ゲ"],             kunyomi: ["した", "しも", "もと", "くだる", "おりる"], examples: [{ word: "下", reading: "した",        meaning: "below / under" },    { word: "地下",    reading: "ちか",        meaning: "underground" },       { word: "下手",    reading: "へた",        meaning: "unskillful" }] },
      { kanji: "中", meaning: "middle / inside",onyomi: ["チュウ"],              kunyomi: ["なか", "うち"],           examples: [{ word: "中",      reading: "なか",        meaning: "inside / middle" },  { word: "中学校",  reading: "ちゅうがっこう",meaning: "middle school" },     { word: "中国",    reading: "ちゅうごく",  meaning: "China" }] },
      { kanji: "右", meaning: "right",         onyomi: ["ウ", "ユウ"],           kunyomi: ["みぎ"],                   examples: [{ word: "右",      reading: "みぎ",        meaning: "right side" },       { word: "右手",    reading: "みぎて",      meaning: "right hand" },        { word: "右折",    reading: "うせつ",      meaning: "right turn" }] },
      { kanji: "左", meaning: "left",          onyomi: ["サ", "シャ"],           kunyomi: ["ひだり"],                 examples: [{ word: "左",      reading: "ひだり",      meaning: "left side" },        { word: "左手",    reading: "ひだりて",    meaning: "left hand" },         { word: "左折",    reading: "させつ",      meaning: "left turn" }] },
      { kanji: "東", meaning: "east",          onyomi: ["トウ"],                 kunyomi: ["ひがし"],                 examples: [{ word: "東京",    reading: "とうきょう",  meaning: "Tokyo" },            { word: "東口",    reading: "ひがしぐち",  meaning: "east exit" },         { word: "東側",    reading: "ひがしがわ",  meaning: "east side" }] },
      { kanji: "西", meaning: "west",          onyomi: ["セイ", "サイ", "ス"],   kunyomi: ["にし"],                   examples: [{ word: "西口",    reading: "にしぐち",    meaning: "west exit" },        { word: "関西",    reading: "かんさい",    meaning: "Kansai region" },     { word: "西側",    reading: "にしがわ",    meaning: "west side" }] },
      { kanji: "南", meaning: "south",         onyomi: ["ナン", "ナ"],           kunyomi: ["みなみ"],                 examples: [{ word: "南",      reading: "みなみ",      meaning: "south" },            { word: "南口",    reading: "みなみぐち",  meaning: "south exit" },        { word: "南国",    reading: "なんごく",    meaning: "southern land / tropics" }] },
      { kanji: "北", meaning: "north",         onyomi: ["ホク"],                 kunyomi: ["きた"],                   examples: [{ word: "北",      reading: "きた",        meaning: "north" },            { word: "北口",    reading: "きたぐち",    meaning: "north exit" },        { word: "北海道",  reading: "ほっかいどう", meaning: "Hokkaido" }] },
    ],
  },
  {
    category: "School & Work",
    items: [
      { kanji: "学", meaning: "study / learn",   onyomi: ["ガク"],                 kunyomi: ["まなぶ"],                 examples: [{ word: "大学",    reading: "だいがく",    meaning: "university" },       { word: "学生",    reading: "がくせい",    meaning: "student" },           { word: "学校",    reading: "がっこう",    meaning: "school" }] },
      { kanji: "校", meaning: "school",          onyomi: ["コウ", "キョウ"],       kunyomi: [],                         examples: [{ word: "学校",    reading: "がっこう",    meaning: "school" },           { word: "高校",    reading: "こうこう",    meaning: "high school" },       { word: "小学校",  reading: "しょうがっこう",meaning: "elementary school" }] },
      { kanji: "会", meaning: "meeting / meet",  onyomi: ["カイ", "エ"],           kunyomi: ["あう"],                   examples: [{ word: "会社",    reading: "かいしゃ",    meaning: "company" },          { word: "会議",    reading: "かいぎ",      meaning: "meeting" },           { word: "会う",    reading: "あう",        meaning: "to meet" }] },
      { kanji: "社", meaning: "company / shrine",onyomi: ["シャ"],                 kunyomi: ["やしろ"],                 examples: [{ word: "会社",    reading: "かいしゃ",    meaning: "company" },          { word: "社員",    reading: "しゃいん",    meaning: "company employee" },  { word: "神社",    reading: "じんじゃ",    meaning: "Shinto shrine" }] },
      { kanji: "語", meaning: "language / word", onyomi: ["ゴ"],                   kunyomi: ["かたる", "かたらう"],     examples: [{ word: "日本語",  reading: "にほんご",    meaning: "Japanese language" }, { word: "英語",    reading: "えいご",      meaning: "English language" },  { word: "語る",    reading: "かたる",      meaning: "to speak / tell" }] },
      { kanji: "文", meaning: "sentence / writing",onyomi: ["ブン", "モン"],       kunyomi: ["ふみ"],                   examples: [{ word: "文法",    reading: "ぶんぽう",    meaning: "grammar" },          { word: "文章",    reading: "ぶんしょう",  meaning: "sentence / text" },   { word: "作文",    reading: "さくぶん",    meaning: "composition / essay" }] },
      { kanji: "字", meaning: "character / letter",onyomi: ["ジ"],                kunyomi: ["あざ"],                   examples: [{ word: "漢字",    reading: "かんじ",      meaning: "kanji" },            { word: "文字",    reading: "もじ",        meaning: "character / letter" },{ word: "数字",    reading: "すうじ",      meaning: "numeral / digit" }] },
    ],
  },
  {
    category: "Things & Transport",
    items: [
      { kanji: "本", meaning: "book / origin",    onyomi: ["ホン"],                 kunyomi: ["もと"],                   examples: [{ word: "本",      reading: "ほん",        meaning: "book" },             { word: "日本",    reading: "にほん",      meaning: "Japan" },             { word: "本当",    reading: "ほんとう",    meaning: "truth / really" }] },
      { kanji: "円", meaning: "yen / circle",     onyomi: ["エン"],                 kunyomi: ["まるい", "まる"],         examples: [{ word: "千円",    reading: "せんえん",    meaning: "1,000 yen" },        { word: "円",      reading: "えん",        meaning: "yen / circle" },      { word: "円高",    reading: "えんだか",    meaning: "strong yen" }] },
      { kanji: "車", meaning: "car / vehicle",    onyomi: ["シャ"],                 kunyomi: ["くるま"],                 examples: [{ word: "車",      reading: "くるま",      meaning: "car" },              { word: "電車",    reading: "でんしゃ",    meaning: "train" },             { word: "自転車",  reading: "じてんしゃ",  meaning: "bicycle" }] },
      { kanji: "電", meaning: "electricity",      onyomi: ["デン"],                 kunyomi: [],                         examples: [{ word: "電話",    reading: "でんわ",      meaning: "telephone" },        { word: "電車",    reading: "でんしゃ",    meaning: "train" },             { word: "電気",    reading: "でんき",      meaning: "electricity / light" }] },
      { kanji: "気", meaning: "spirit / energy",  onyomi: ["キ", "ケ"],             kunyomi: [],                         examples: [{ word: "天気",    reading: "てんき",      meaning: "weather" },          { word: "電気",    reading: "でんき",      meaning: "electricity / light" },{ word: "元気",   reading: "げんき",      meaning: "healthy / energetic" }] },
      { kanji: "駅", meaning: "station",          onyomi: ["エキ"],                 kunyomi: [],                         examples: [{ word: "駅",      reading: "えき",        meaning: "station" },          { word: "駅前",    reading: "えきまえ",    meaning: "in front of the station" },{ word: "終点駅", reading: "しゅうてんえき",meaning: "terminal station" }] },
      { kanji: "道", meaning: "road / way",       onyomi: ["ドウ", "トウ"],         kunyomi: ["みち"],                   examples: [{ word: "道",      reading: "みち",        meaning: "road / way" },       { word: "北海道",  reading: "ほっかいどう", meaning: "Hokkaido" },          { word: "道路",    reading: "どうろ",      meaning: "road / highway" }] },
    ],
  },
  {
    category: "Body",
    items: [
      { kanji: "目", meaning: "eye",    onyomi: ["モク", "ボク"],         kunyomi: ["め", "ま"],               examples: [{ word: "目",      reading: "め",          meaning: "eye" },              { word: "目上",    reading: "めうえ",      meaning: "superior / elder" },  { word: "注目",    reading: "ちゅうもく",  meaning: "attention / focus" }] },
      { kanji: "耳", meaning: "ear",    onyomi: ["ジ"],                   kunyomi: ["みみ"],                   examples: [{ word: "耳",      reading: "みみ",        meaning: "ear" },              { word: "耳鳴り",  reading: "みみなり",    meaning: "ringing in the ears" },{ word: "耳元",   reading: "みみもと",    meaning: "close to the ear" }] },
      { kanji: "口", meaning: "mouth",  onyomi: ["コウ", "ク"],           kunyomi: ["くち"],                   examples: [{ word: "口",      reading: "くち",        meaning: "mouth" },            { word: "入口",    reading: "いりぐち",    meaning: "entrance" },          { word: "出口",    reading: "でぐち",      meaning: "exit" }] },
      { kanji: "手", meaning: "hand",   onyomi: ["シュ"],                 kunyomi: ["て", "た"],               examples: [{ word: "手",      reading: "て",          meaning: "hand" },             { word: "手紙",    reading: "てがみ",      meaning: "letter" },            { word: "上手",    reading: "じょうず",    meaning: "skillful" }] },
      { kanji: "足", meaning: "foot / leg",onyomi: ["ソク"],              kunyomi: ["あし", "たりる"],         examples: [{ word: "足",      reading: "あし",        meaning: "foot / leg" },       { word: "足りる",  reading: "たりる",      meaning: "to be enough" },      { word: "遠足",    reading: "えんそく",    meaning: "excursion / field trip" }] },
    ],
  },
  {
    category: "Adjectives",
    items: [
      { kanji: "大", meaning: "big / large",      onyomi: ["ダイ", "タイ"],         kunyomi: ["おおきい", "おお"],       examples: [{ word: "大きい",  reading: "おおきい",    meaning: "big (adj.)" },       { word: "大学",    reading: "だいがく",    meaning: "university" },        { word: "大好き",  reading: "だいすき",    meaning: "love / like very much" }] },
      { kanji: "小", meaning: "small / little",   onyomi: ["ショウ"],               kunyomi: ["ちいさい", "こ", "お", "さ"],examples: [{ word: "小さい", reading: "ちいさい",    meaning: "small (adj.)" },     { word: "小学校",  reading: "しょうがっこう",meaning: "elementary school" }, { word: "小説",    reading: "しょうせつ",  meaning: "novel / fiction" }] },
      { kanji: "高", meaning: "high / expensive", onyomi: ["コウ"],                 kunyomi: ["たかい", "たか"],         examples: [{ word: "高い",    reading: "たかい",      meaning: "high / expensive" }, { word: "高校",    reading: "こうこう",    meaning: "high school" },       { word: "高速",    reading: "こうそく",    meaning: "high speed" }] },
      { kanji: "安", meaning: "cheap / safe",     onyomi: ["アン"],                 kunyomi: ["やすい", "やすらか"],     examples: [{ word: "安い",    reading: "やすい",      meaning: "cheap / inexpensive" },{ word: "安全",   reading: "あんぜん",    meaning: "safety / safe" },     { word: "不安",    reading: "ふあん",      meaning: "anxiety / uneasy" }] },
      { kanji: "新", meaning: "new",              onyomi: ["シン"],                 kunyomi: ["あたらしい", "あら", "にい"],examples: [{ word: "新しい",reading: "あたらしい",  meaning: "new (adj.)" },       { word: "新幹線",  reading: "しんかんせん", meaning: "Shinkansen" },        { word: "新聞",    reading: "しんぶん",    meaning: "newspaper" }] },
      { kanji: "古", meaning: "old",              onyomi: ["コ"],                   kunyomi: ["ふるい", "ふる"],         examples: [{ word: "古い",    reading: "ふるい",      meaning: "old (adj.)" },       { word: "古本",    reading: "ふるほん",    meaning: "used / secondhand book" },{ word: "中古",  reading: "ちゅうこ",    meaning: "used / secondhand" }] },
      { kanji: "長", meaning: "long",             onyomi: ["チョウ"],               kunyomi: ["ながい", "なが", "おさ"], examples: [{ word: "長い",    reading: "ながい",      meaning: "long (adj.)" },      { word: "校長",    reading: "こうちょう",  meaning: "school principal" },  { word: "長所",    reading: "ちょうしょ",  meaning: "strong point / merit" }] },
      { kanji: "白", meaning: "white",            onyomi: ["ハク", "ビャク"],       kunyomi: ["しろ", "しら", "しろい"], examples: [{ word: "白い",    reading: "しろい",      meaning: "white (adj.)" },     { word: "白紙",    reading: "はくし",      meaning: "blank paper" },       { word: "白黒",    reading: "しろくろ",    meaning: "black and white" }] },
      { kanji: "黒", meaning: "black",            onyomi: ["コク"],                 kunyomi: ["くろ", "くろい"],         examples: [{ word: "黒い",    reading: "くろい",      meaning: "black (adj.)" },     { word: "黒板",    reading: "こくばん",    meaning: "blackboard" },        { word: "白黒",    reading: "しろくろ",    meaning: "black and white" }] },
      { kanji: "赤", meaning: "red",              onyomi: ["セキ", "シャク"],       kunyomi: ["あか", "あかい"],         examples: [{ word: "赤い",    reading: "あかい",      meaning: "red (adj.)" },       { word: "赤ちゃん",reading: "あかちゃん",  meaning: "baby" },              { word: "赤信号",  reading: "あかしんごう", meaning: "red traffic light" }] },
      { kanji: "青", meaning: "blue / green",     onyomi: ["セイ", "ショウ"],       kunyomi: ["あお", "あおい"],         examples: [{ word: "青い",    reading: "あおい",      meaning: "blue / green (adj.)" },{ word: "青空",  reading: "あおぞら",    meaning: "blue sky" },          { word: "青信号",  reading: "あおしんごう", meaning: "green traffic light" }] },
    ],
  },
  {
    category: "Actions",
    items: [
      { kanji: "見", meaning: "see / look",     onyomi: ["ケン"],                 kunyomi: ["みる", "みえる", "みせる"], examples: [{ word: "見る",  reading: "みる",        meaning: "to see / watch" },   { word: "見せる",  reading: "みせる",      meaning: "to show" },           { word: "意見",    reading: "いけん",      meaning: "opinion" }] },
      { kanji: "聞", meaning: "hear / ask",     onyomi: ["ブン", "モン"],         kunyomi: ["きく", "きこえる"],       examples: [{ word: "聞く",    reading: "きく",        meaning: "to listen / ask" },  { word: "聞こえる",reading: "きこえる",    meaning: "to be audible" },     { word: "新聞",    reading: "しんぶん",    meaning: "newspaper" }] },
      { kanji: "読", meaning: "read",           onyomi: ["ドク", "トク", "トウ"], kunyomi: ["よむ"],                   examples: [{ word: "読む",    reading: "よむ",        meaning: "to read" },          { word: "読書",    reading: "どくしょ",    meaning: "reading (books)" },   { word: "音読",    reading: "おんどく",    meaning: "reading aloud" }] },
      { kanji: "書", meaning: "write",          onyomi: ["ショ"],                 kunyomi: ["かく"],                   examples: [{ word: "書く",    reading: "かく",        meaning: "to write" },         { word: "書類",    reading: "しょるい",    meaning: "documents / papers" },{ word: "辞書",    reading: "じしょ",      meaning: "dictionary" }] },
      { kanji: "話", meaning: "speak / talk",   onyomi: ["ワ"],                   kunyomi: ["はなす", "はなし"],       examples: [{ word: "話す",    reading: "はなす",      meaning: "to speak / talk" },  { word: "電話",    reading: "でんわ",      meaning: "telephone" },         { word: "会話",    reading: "かいわ",      meaning: "conversation" }] },
      { kanji: "来", meaning: "come",           onyomi: ["ライ", "タイ"],         kunyomi: ["くる", "きたる", "き"],   examples: [{ word: "来る",    reading: "くる",        meaning: "to come" },          { word: "来年",    reading: "らいねん",    meaning: "next year" },         { word: "来週",    reading: "らいしゅう",  meaning: "next week" }] },
      { kanji: "行", meaning: "go",             onyomi: ["コウ", "ギョウ", "アン"],kunyomi: ["いく", "ゆく", "おこなう"],examples: [{ word: "行く",   reading: "いく",        meaning: "to go" },            { word: "旅行",    reading: "りょこう",    meaning: "travel" },            { word: "銀行",    reading: "ぎんこう",    meaning: "bank" }] },
      { kanji: "出", meaning: "exit / come out",onyomi: ["シュツ", "スイ"],       kunyomi: ["でる", "だす"],           examples: [{ word: "出る",    reading: "でる",        meaning: "to exit / come out" },{ word: "出口",   reading: "でぐち",      meaning: "exit" },              { word: "出発",    reading: "しゅっぱつ",  meaning: "departure" }] },
      { kanji: "入", meaning: "enter",          onyomi: ["ニュウ", "ジュ"],       kunyomi: ["いる", "はいる"],         examples: [{ word: "入る",    reading: "はいる",      meaning: "to enter" },         { word: "入口",    reading: "いりぐち",    meaning: "entrance" },          { word: "入学",    reading: "にゅうがく",  meaning: "school enrollment" }] },
      { kanji: "食", meaning: "eat / food",     onyomi: ["ショク", "ジキ"],       kunyomi: ["たべる", "くう"],         examples: [{ word: "食べる",  reading: "たべる",      meaning: "to eat" },           { word: "食事",    reading: "しょくじ",    meaning: "meal" },              { word: "食堂",    reading: "しょくどう",  meaning: "cafeteria / dining hall" }] },
      { kanji: "飲", meaning: "drink",          onyomi: ["イン"],                 kunyomi: ["のむ"],                   examples: [{ word: "飲む",    reading: "のむ",        meaning: "to drink" },         { word: "飲み物",  reading: "のみもの",    meaning: "drink / beverage" },  { word: "飲食",    reading: "いんしょく",  meaning: "food and drink" }] },
      { kanji: "買", meaning: "buy",            onyomi: ["バイ"],                 kunyomi: ["かう"],                   examples: [{ word: "買う",    reading: "かう",        meaning: "to buy" },           { word: "買い物",  reading: "かいもの",    meaning: "shopping" },          { word: "売買",    reading: "ばいばい",    meaning: "buying and selling" }] },
      { kanji: "休", meaning: "rest",           onyomi: ["キュウ"],               kunyomi: ["やすむ", "やすまる", "やすめる"], examples: [{ word: "休む",  reading: "やすむ",      meaning: "to rest / take a day off" },{ word: "休日", reading: "きゅうじつ",  meaning: "holiday / day off" }, { word: "夏休み",  reading: "なつやすみ",  meaning: "summer vacation" }] },
    ],
  },
];
