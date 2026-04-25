export type ListeningCategory = "task" | "point" | "response";

export interface ListeningExercise {
  id: string;
  title: string;
  category: ListeningCategory;
  level: string;
  dialogue: { speaker: string; jp: string; en: string }[];
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const listeningExercises: ListeningExercise[] = [
  // ── Task-Based ──────────────────────────────────────────────────
  {
    id: "l-01",
    title: "Bookstore",
    category: "task",
    level: "Lesson 3–4",
    dialogue: [
      { speaker: "女性", jp: "すみません、子どもの本はどこですか。", en: "Excuse me, where are the children's books?" },
      { speaker: "店員", jp: "二階です。あ、月曜日は二階が休みです。子どもの本は一階です。", en: "They're on the second floor. Oh, but on Mondays the second floor is closed. The children's books are on the first floor." },
    ],
    question: "Where will the woman go to find the children's books?",
    options: ["Second floor", "First floor", "Basement"],
    answer: "First floor",
    explanation: "The clerk corrects himself — on Mondays the children's books are on the first floor.",
  },
  {
    id: "l-02",
    title: "Movie Plans",
    category: "task",
    level: "Lesson 4–5",
    dialogue: [
      { speaker: "男性", jp: "映画を見ましょう。日曜日の午後は？", en: "Let's watch a movie. How about Sunday afternoon?" },
      { speaker: "女性", jp: "午後はだめです。午前は？", en: "Afternoon doesn't work. How about the morning?" },
      { speaker: "男性", jp: "午前はいいです。では、日曜日の11時は？", en: "Morning is fine. Then, how about Sunday at 11 o'clock?" },
      { speaker: "女性", jp: "はい、いいです。", en: "Yes, that works." },
    ],
    question: "When will the two people see a movie?",
    options: ["Sunday afternoon", "Sunday at 11 AM", "Monday morning"],
    answer: "Sunday at 11 AM",
    explanation: "They negotiate: afternoon is out, morning works, and they agree on Sunday at 11.",
  },
  {
    id: "l-03",
    title: "Restaurant Hours",
    category: "task",
    level: "Lesson 4",
    dialogue: [
      { speaker: "女性", jp: "もしもし。駅の近くのレストランですね。", en: "Hello? Is this the restaurant near the station?" },
      { speaker: "店員", jp: "はい、そうです。", en: "Yes, that's right." },
      { speaker: "女性", jp: "夜の営業時間は何時から何時までですか。", en: "What are your evening business hours?" },
      { speaker: "店員", jp: "17時から23時です。", en: "From 5 PM to 11 PM." },
    ],
    question: "What time does the restaurant close in the evening?",
    options: ["10 PM", "11 PM", "9 PM"],
    answer: "11 PM",
    explanation: "The restaurant closes at 23時 (11 PM).",
  },
  {
    id: "l-04",
    title: "Shopping",
    category: "task",
    level: "Lesson 3",
    dialogue: [
      { speaker: "店員", jp: "いらっしゃいませ。", en: "Welcome." },
      { speaker: "客",   jp: "すみません、これはいくらですか。", en: "Excuse me, how much is this?" },
      { speaker: "店員", jp: "こちらは800円です。", en: "This is 800 yen." },
      { speaker: "客",   jp: "では、これを3つください。", en: "Then I'll take 3 of these." },
    ],
    question: "How much will the customer pay in total?",
    options: ["800 yen", "1,600 yen", "2,400 yen"],
    answer: "2,400 yen",
    explanation: "800 yen × 3 = 2,400 yen.",
  },
  // ── Point Comprehension ─────────────────────────────────────────
  {
    id: "l-05",
    title: "Daily Schedule",
    category: "point",
    level: "Lesson 4",
    dialogue: [
      { speaker: "女性", jp: "明日は何をしますか。", en: "What will you do tomorrow?" },
      { speaker: "男性", jp: "朝、学校に行きます。午後、図書館に行きます。", en: "In the morning I'll go to school. In the afternoon I'll go to the library." },
      { speaker: "女性", jp: "夜は？", en: "And in the evening?" },
      { speaker: "男性", jp: "夜は家にいます。", en: "In the evening I'll stay home." },
    ],
    question: "Where will the man go in the afternoon?",
    options: ["School", "Library", "He will stay home"],
    answer: "Library",
    explanation: "午後 (afternoon) → 図書館 (library).",
  },
  {
    id: "l-06",
    title: "Doctor Visit",
    category: "point",
    level: "Lesson 17",
    dialogue: [
      { speaker: "医者",      jp: "どうしましたか。", en: "What seems to be the matter?" },
      { speaker: "まつもと", jp: "きのうから のどが いたいです。それから、すこし ねつも あります。", en: "My throat has been sore since yesterday. And I also have a slight fever." },
      { speaker: "医者",      jp: "かぜですね。2、3にち ゆっくり やすんでください。", en: "You've caught a cold. Please rest for two or three days." },
      { speaker: "まつもと", jp: "でも、あした とうきょうに しゅっちょうしなければ なりません。", en: "But I have to go to Tokyo on business tomorrow." },
      { speaker: "医者",      jp: "では、くすりを のんで、きょうは はやく ねてください。おふろには はいらないでください。", en: "In that case, take your medicine and go to bed early today. Please don't take a bath tonight." },
    ],
    question: "What does the doctor tell Matsumoto NOT to do tonight?",
    options: ["Take medicine", "Go to Tokyo", "Take a bath"],
    answer: "Take a bath",
    explanation: "おふろには はいらないでください = Please don't take a bath. V ない-form + ないでください.",
  },
  {
    id: "l-07",
    title: "At the ATM",
    category: "point",
    level: "Lesson 16",
    dialogue: [
      { speaker: "行員",  jp: "お引き出しですか。", en: "Are you making a withdrawal?" },
      { speaker: "マリア", jp: "はい。", en: "Yes." },
      { speaker: "行員",  jp: "まず、キャッシュカードを入れてください。次に、暗証番号を入れてください。", en: "First, please insert your cash card. Then, please enter your PIN." },
      { speaker: "マリア", jp: "はい、入れました。", en: "OK, done." },
      { speaker: "行員",  jp: "金額を押してから、確認ボタンを押してください。", en: "Press the amount, and then press the confirm button." },
    ],
    question: "What does the customer do AFTER entering the PIN?",
    options: ["Insert the cash card", "Press the amount, then confirm", "Leave the ATM"],
    answer: "Press the amount, then confirm",
    explanation: "The steps are: 1. Insert card → 2. Enter PIN → 3. Press amount → 4. Press confirm.",
  },
  {
    id: "l-08",
    title: "Weekend Activities",
    category: "point",
    level: "Lesson 5–6",
    dialogue: [
      { speaker: "やまだ", jp: "きのうは何をしましたか。", en: "What did you do yesterday?" },
      { speaker: "ミラー", jp: "としょかんへ行って、本を借りました。そして、ともだちに会いました。", en: "I went to the library, borrowed a book, and met some friends." },
      { speaker: "やまだ", jp: "たのしかったですか。", en: "Was it fun?" },
      { speaker: "ミラー", jp: "はい、とても。", en: "Yes, very much." },
    ],
    question: "What did Miller do at the library?",
    options: ["Studied Japanese", "Borrowed a book", "Met friends"],
    answer: "Borrowed a book",
    explanation: "としょかんへ行って、本を借りました = went to the library and borrowed a book.",
  },
  // ── Quick Response ──────────────────────────────────────────────
  {
    id: "l-09",
    title: "Greeting Response",
    category: "response",
    level: "Lesson 1",
    dialogue: [
      { speaker: "A", jp: "はじめまして。やまだけいこです。どうぞよろしく。", en: "How do you do? I'm Keiko Yamada. Pleased to meet you." },
    ],
    question: "What is the most natural response?",
    options: ["ありがとうございます。", "こちらこそ、どうぞよろしく。", "すみません。"],
    answer: "こちらこそ、どうぞよろしく。",
    explanation: "こちらこそ どうぞ よろしく = 'Pleased to meet you too' — the standard reply to a self-introduction.",
  },
  {
    id: "l-10",
    title: "Asking Permission",
    category: "response",
    level: "Lesson 15",
    dialogue: [
      { speaker: "A", jp: "ここで たばこを すっても いいですか。", en: "May I smoke here?" },
    ],
    question: "How would you politely refuse?",
    options: ["はい、どうぞ。", "ちょっと……。", "もちろんです。"],
    answer: "ちょっと……。",
    explanation: "ちょっと…… (trailing off) is the standard polite way to decline a てもいいですか request without directly saying no.",
  },
  {
    id: "l-11",
    title: "Offering Help",
    category: "response",
    level: "Lesson 14",
    dialogue: [
      { speaker: "A", jp: "にもつを もちましょうか。", en: "Shall I carry your luggage?" },
    ],
    question: "How would you gratefully accept?",
    options: ["いいえ、けっこうです。", "ありがとうございます。おねがいします。", "すみません、ちょっと……。"],
    answer: "ありがとうございます。おねがいします。",
    explanation: "ありがとうございます + おねがいします = Thank you, please do. The natural way to accept an offer.",
  },
  {
    id: "l-12",
    title: "Directions",
    category: "task",
    level: "Lesson 3",
    dialogue: [
      { speaker: "男性", jp: "すみません。駅はどこですか。", en: "Excuse me, where is the station?" },
      { speaker: "女性", jp: "えきですか。まっすぐ行って、つぎのかどを右に曲がってください。", en: "The station? Go straight and turn right at the next corner." },
      { speaker: "男性", jp: "どのくらい かかりますか。", en: "How long does it take?" },
      { speaker: "女性", jp: "あるいて 5ふんくらいです。", en: "About 5 minutes on foot." },
    ],
    question: "How does the man get to the station?",
    options: ["Turn left at the next corner", "Go straight then turn right", "Take a bus"],
    answer: "Go straight then turn right",
    explanation: "まっすぐ行って = go straight, つぎのかどを右に = turn right at the next corner.",
  },
];
