export interface VocabItem {
  japanese: string;   // hiragana/katakana
  kanji?: string;     // kanji form if exists
  english: string;
  example?: string;   // example usage
}

export interface GrammarPoint {
  id: string;
  pattern: string;           // e.g. "N₁はN₂です"
  meaning: string;           // English explanation
  explanation: string;       // longer description
  examples: {
    japanese: string;
    reading?: string;        // furigana hint if helpful
    english: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  type: "multiple-choice" | "fill-blank";
  question: string;
  context?: string;          // Japanese sentence for fill-blank
  options?: string[];        // for multiple-choice
  answer: string;
  explanation: string;
}

export interface Lesson {
  id: number;
  title: string;             // e.g. "Lesson 1"
  topic: string;             // e.g. "Introducing yourself"
  vocabulary: VocabItem[];
  grammarPoints: GrammarPoint[];
  quiz: QuizQuestion[];
}
