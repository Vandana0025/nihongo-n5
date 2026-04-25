import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getLessonById } from "../data/lessons";
import { saveQuizResult } from "../lib/progress";
import { useSpeech } from "../hooks/useSpeech";
import type { QuizQuestion } from "../data/types";
import { toHiragana } from "wanakana";

// Particles whose pronunciation differs from their spelling.
// Maps the canonical answer → all accepted inputs (romaji + phonetic kana).
const PARTICLE_ALTS: Record<string, string[]> = {
  "は": ["wa", "わ"],
  "へ": ["e", "he", "え"],
  "を": ["o", "wo", "お"],
};

function normalize(s: string): string {
  return s.trim().replace(/\s+/g, "");
}

function isCorrect(given: string, answer: string): boolean {
  const g = normalize(given);
  const a = normalize(answer);
  if (g === a) return true;

  // Romaji → hiragana via wanakana
  const gKana = normalize(toHiragana(g, { passRomaji: false }));
  if (gKana === a) return true;

  // Particle phonetic alternatives (direct or after kana conversion)
  const alts = PARTICLE_ALTS[a];
  if (alts) {
    if (alts.includes(g.toLowerCase()) || alts.includes(gKana)) return true;
  }

  return false;
}

type State = "quiz" | "results";

interface Answer {
  questionId: string;
  given: string;
  correct: boolean;
}

export default function QuizPage() {
  const { id } = useParams();
  const lesson = getLessonById(Number(id));
  const { speak } = useSpeech();

  const [state, setState] = useState<State>("quiz");
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  if (!lesson) return (
    <div className="flex items-center justify-center min-h-[60vh] text-gray-900/30 dark:text-white/30">Lesson not found.</div>
  );

  const questions = lesson.quiz;
  const q: QuizQuestion = questions[current];

  function submit(given: string) {
    const correct = isCorrect(given, q.answer);
    const updated = [...answers, { questionId: q.id, given, correct }];
    setAnswers(updated);
    setRevealed(true);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setInput("");
        setSelected(null);
        setRevealed(false);
      } else {
        const score = Math.round((updated.filter((a) => a.correct).length / questions.length) * 100);
        saveQuizResult(lesson!.id, score);
        setState("results");
      }
    }, 1500);
  }

  if (state === "results") {
    const correct = answers.filter((a) => a.correct).length;
    const score = Math.round((correct / questions.length) * 100);
    const passed = score >= 70;

    return (
      <div className="max-w-2xl mx-auto px-6 py-10 space-y-6">
        <div className={`rounded-2xl p-8 text-center border ${passed ? "bg-green-900/20 border-green-700/40" : "bg-yellow-900/20 border-yellow-700/40"}`}>
          <div className="text-6xl font-bold text-gray-900 dark:text-white mb-2">{score}%</div>
          <div className={`text-lg font-semibold ${passed ? "text-green-600 dark:text-green-400" : "text-yellow-600 dark:text-yellow-400"}`}>
            {passed ? "Well done! 🎉" : "Keep practising! 💪"}
          </div>
          <div className="text-gray-900/40 dark:text-white/40 text-sm mt-1">{correct} / {questions.length} correct</div>
        </div>

        {/* Answer review */}
        <div className="space-y-3">
          <div className="text-gray-900/30 dark:text-white/30 text-xs uppercase tracking-widest">Review</div>
          {questions.map((question, i) => {
            const ans = answers[i];
            return (
              <div key={question.id} className={`rounded-xl border p-4 ${ans.correct ? "border-green-700/30 bg-green-900/10" : "border-red-700/30 bg-red-900/10"}`}>
                <div className="flex items-start gap-2">
                  <span className="text-sm mt-0.5">{ans.correct ? "✅" : "❌"}</span>
                  <div className="flex-1 space-y-1">
                    <div className="text-gray-900/70 dark:text-white/70 text-sm">{question.question}</div>
                    {!ans.correct && (
                      <div className="text-sm">
                        <span className="text-red-600 dark:text-red-400">Your answer: </span>
                        <span className="text-gray-900/60 dark:text-white/60">{ans.given || "(blank)"}</span>
                      </div>
                    )}
                    <div className="text-sm">
                      <span className="text-green-600 dark:text-green-400">Correct: </span>
                      <span className="text-gray-900 dark:text-white font-medium">{question.answer}</span>
                    </div>
                    <div className="text-gray-900/40 dark:text-white/40 text-xs">{question.explanation}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={() => { setAnswers([]); setCurrent(0); setInput(""); setSelected(null); setRevealed(false); setState("quiz"); }}
            className="flex-1 bg-gray-900/10 dark:bg-white/10 hover:bg-gray-900/20 dark:hover:bg-white/20 text-gray-900 dark:text-white font-medium py-3 rounded-xl transition-colors cursor-pointer"
          >
            Retry Quiz
          </button>
          <Link to="/" className="flex-1 bg-red-600 hover:bg-red-500 text-white font-medium py-3 rounded-xl transition-colors text-center">
            Back to Lessons
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-10 space-y-6">
      {/* Progress bar */}
      <div>
        <div className="flex justify-between text-gray-900/30 dark:text-white/30 text-xs mb-2">
          <span>Question {current + 1} of {questions.length}</span>
          <span>{Math.round((current / questions.length) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-gray-900/10 dark:bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-600 rounded-full transition-all duration-300"
            style={{ width: `${(current / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 rounded-2xl p-6 space-y-5">
        <div className="flex items-start justify-between gap-2">
          <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-widest ${q.type === "multiple-choice" ? "bg-blue-500/20 text-blue-600 dark:text-blue-300" : "bg-purple-500/20 text-purple-600 dark:text-purple-300"}`}>
            {q.type === "multiple-choice" ? "Multiple Choice" : "Fill in the Blank"}
          </span>
          <button
            onClick={() => speak(q.context ?? q.question)}
            className="w-8 h-8 rounded-full bg-gray-900/10 dark:bg-white/10 hover:bg-red-600/40 flex items-center justify-center transition-colors cursor-pointer"
            title="Listen"
          >
            🔊
          </button>
        </div>

        <p className="text-gray-900 dark:text-white text-lg leading-relaxed">{q.question}</p>

        {/* Multiple choice */}
        {q.type === "multiple-choice" && q.options && (
          <div className="space-y-2">
            {q.options.map((opt) => {
              let style = "bg-gray-900/5 dark:bg-white/5 border-gray-900/10 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-900/10 dark:hover:bg-white/10";
              if (revealed) {
                if (opt === q.answer) style = "bg-green-600/30 border-green-500/50 text-green-700 dark:text-green-300";
                else if (opt === selected) style = "bg-red-600/30 border-red-500/50 text-red-700 dark:text-red-300";
                else style = "bg-gray-900/5 dark:bg-white/5 border-gray-900/10 dark:border-white/10 text-gray-900/30 dark:text-white/30";
              } else if (opt === selected) {
                style = "bg-gray-900/15 dark:bg-white/15 border-gray-900/30 dark:border-white/30 text-gray-900 dark:text-white";
              }
              return (
                <button
                  key={opt}
                  disabled={revealed}
                  onClick={() => {
                    if (revealed) return;
                    setSelected(opt);
                    submit(opt);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all cursor-pointer disabled:cursor-default ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        )}

        {/* Fill in the blank */}
        {q.type === "fill-blank" && (
          <div className="space-y-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && input.trim() && !revealed) submit(input.trim()); }}
              disabled={revealed}
              placeholder="Japanese or romaji (e.g. kaite)…"
              className="w-full bg-gray-900/5 dark:bg-black/30 border border-gray-900/20 dark:border-white/20 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-900/20 dark:placeholder-white/20 focus:outline-none focus:border-red-500 transition-colors disabled:opacity-50"
            />
            {!revealed && (
              <button
                onClick={() => { if (input.trim()) submit(input.trim()); }}
                disabled={!input.trim()}
                className="w-full bg-red-600 hover:bg-red-500 disabled:opacity-40 text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer disabled:cursor-default"
              >
                Submit
              </button>
            )}
            {revealed && (
              <div className={`rounded-xl px-4 py-3 text-sm ${isCorrect(input, q.answer) ? "bg-green-600/20 text-green-700 dark:text-green-300" : "bg-red-600/20 text-red-700 dark:text-red-300"}`}>
                {isCorrect(input, q.answer) ? "Correct! ✅" : `Correct answer: ${q.answer}`}
              </div>
            )}
          </div>
        )}

        {/* Explanation on reveal */}
        {revealed && (
          <div className="bg-gray-900/5 dark:bg-black/30 rounded-xl px-4 py-3 text-gray-900/50 dark:text-white/50 text-sm">
            💡 {q.explanation}
          </div>
        )}
      </div>
    </div>
  );
}
