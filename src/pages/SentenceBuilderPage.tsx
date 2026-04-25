import { useState, useCallback } from "react";
import { sentenceExercises } from "../data/sentenceBuilder";
import { useSpeech } from "../hooks/useSpeech";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

// Group exercises by lesson for the picker
const byLesson = sentenceExercises.reduce<Record<number, typeof sentenceExercises>>((acc, ex) => {
  (acc[ex.lesson] ??= []).push(ex);
  return acc;
}, {});

type Screen = "list" | "exercise";

export default function SentenceBuilderPage() {
  const [screen, setScreen] = useState<Screen>("list");
  const [lessonFilter, setLessonFilter] = useState<number | "all">("all");
  const [exerciseId, setExerciseId] = useState<string | null>(null);

  // ── Exercise state ──────────────────────────────────────────────
  const [tiles, setTiles] = useState<{ id: number; text: string }[]>([]);
  const [answer, setAnswer] = useState<{ id: number; text: string }[]>([]);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const { speak } = useSpeech();

  const current = sentenceExercises.find((e) => e.id === exerciseId);

  const startExercise = useCallback((id: string) => {
    const ex = sentenceExercises.find((e) => e.id === id);
    if (!ex) return;
    const shuffled = shuffle(ex.parts.map((text, i) => ({ id: i, text })));
    setTiles(shuffled);
    setAnswer([]);
    setStatus("idle");
    setExerciseId(id);
    setScreen("exercise");
  }, []);

  const addTile = (tile: { id: number; text: string }) => {
    if (status !== "idle") return;
    setTiles((t) => t.filter((x) => x.id !== tile.id));
    setAnswer((a) => [...a, tile]);
  };

  const removeTile = (tile: { id: number; text: string }) => {
    if (status !== "idle") return;
    setAnswer((a) => a.filter((x) => x.id !== tile.id));
    setTiles((t) => [...t, tile]);
  };

  const check = () => {
    if (!current || answer.length === 0) return;
    const userSentence = answer.map((t) => t.text).join(" ");
    const correct = current.parts.join(" ");
    const isCorrect = userSentence === correct;
    setStatus(isCorrect ? "correct" : "wrong");
    setAttempted((n) => n + 1);
    if (isCorrect) {
      setScore((n) => n + 1);
      speak(correct);
    }
  };

  const reset = () => {
    if (!current) return;
    const shuffled = shuffle(current.parts.map((text, i) => ({ id: i, text })));
    setTiles(shuffled);
    setAnswer([]);
    setStatus("idle");
  };

  const exercises = lessonFilter === "all"
    ? sentenceExercises
    : sentenceExercises.filter((e) => e.lesson === lessonFilter);

  // ── Exercise screen ─────────────────────────────────────────────
  if (screen === "exercise" && current) {
    const correctSentence = current.parts.join(" ");
    return (
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setScreen("list")}
            className="text-gray-900/40 dark:text-white/40 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
          >
            ← All Exercises
          </button>
          <span className="text-sm text-gray-900/40 dark:text-white/40">{score}/{attempted} correct</span>
        </div>

        {/* Pattern + prompt */}
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-widest text-red-500 dark:text-red-400">
            {current.pattern}
          </div>
          <div className="text-gray-900/40 dark:text-white/40 text-xs">Lesson {current.lesson}</div>
          <div className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
            {current.english}
          </div>
        </div>

        {/* Answer tray */}
        <div
          className={`min-h-[64px] rounded-2xl border-2 border-dashed px-4 py-3 flex flex-wrap gap-2 items-center transition-colors ${
            status === "correct"
              ? "border-green-500/50 bg-green-500/5"
              : status === "wrong"
              ? "border-red-500/50 bg-red-500/5"
              : "border-gray-900/15 dark:border-white/15 bg-gray-900/5 dark:bg-white/5"
          }`}
        >
          {answer.length === 0 && status === "idle" && (
            <span className="text-gray-900/20 dark:text-white/20 text-sm select-none">
              Tap words below to build the sentence
            </span>
          )}
          {answer.map((tile) => (
            <button
              key={tile.id}
              onClick={() => removeTile(tile)}
              disabled={status !== "idle"}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                status !== "idle"
                  ? "bg-gray-900/10 dark:bg-white/10 text-gray-900 dark:text-white cursor-default"
                  : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-red-600 dark:hover:bg-red-500"
              }`}
            >
              {tile.text}
            </button>
          ))}
        </div>

        {/* Feedback */}
        {status !== "idle" && (
          <div className={`rounded-xl px-4 py-3 space-y-2 ${
            status === "correct"
              ? "bg-green-500/10 border border-green-500/20"
              : "bg-red-500/10 border border-red-500/20"
          }`}>
            <div className={`font-semibold flex items-center gap-2 ${
              status === "correct" ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400"
            }`}>
              {status === "correct" ? "✓ Correct!" : "✗ Not quite"}
              {status === "correct" && (
                <button
                  onClick={() => speak(correctSentence)}
                  className="w-7 h-7 rounded-full bg-green-500/20 hover:bg-green-500/30 flex items-center justify-center text-sm transition-colors cursor-pointer"
                >
                  🔊
                </button>
              )}
            </div>
            {status === "wrong" && (
              <div className="text-sm text-gray-900/70 dark:text-white/70">
                <span className="text-gray-900/40 dark:text-white/40">Correct: </span>
                {correctSentence}
              </div>
            )}
            <p className="text-sm text-gray-900/60 dark:text-white/60">{current.explanation}</p>
          </div>
        )}

        {/* Tile bank */}
        <div className="space-y-2">
          <div className="text-xs text-gray-900/30 dark:text-white/30 uppercase tracking-widest">Word tiles</div>
          <div className="flex flex-wrap gap-2">
            {tiles.map((tile) => (
              <button
                key={tile.id}
                onClick={() => addTile(tile)}
                className="px-3 py-1.5 bg-gray-900/10 dark:bg-white/10 hover:bg-red-600/20 dark:hover:bg-red-600/20 hover:text-red-700 dark:hover:text-red-300 border border-gray-900/10 dark:border-white/10 rounded-xl text-sm font-medium text-gray-900 dark:text-white transition-colors cursor-pointer"
              >
                {tile.text}
              </button>
            ))}
            {tiles.length === 0 && status === "idle" && (
              <span className="text-gray-900/20 dark:text-white/20 text-sm">All tiles placed</span>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          {status === "idle" ? (
            <>
              <button
                onClick={reset}
                className="flex-1 py-3 rounded-xl border border-gray-900/10 dark:border-white/10 text-gray-900/60 dark:text-white/60 hover:bg-gray-900/5 dark:hover:bg-white/5 font-medium transition-colors cursor-pointer"
              >
                Reset
              </button>
              <button
                onClick={check}
                disabled={answer.length === 0}
                className="flex-2 flex-grow py-3 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold transition-colors cursor-pointer"
              >
                Check Answer
              </button>
            </>
          ) : (
            <>
              <button
                onClick={reset}
                className="flex-1 py-3 rounded-xl border border-gray-900/10 dark:border-white/10 text-gray-900/60 dark:text-white/60 hover:bg-gray-900/5 dark:hover:bg-white/5 font-medium transition-colors cursor-pointer"
              >
                Try Again
              </button>
              <button
                onClick={() => {
                  // Find next exercise
                  const list = exercises;
                  const idx = list.findIndex((e) => e.id === current.id);
                  const next = list[idx + 1];
                  if (next) startExercise(next.id);
                  else setScreen("list");
                }}
                className="flex-2 flex-grow py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition-colors cursor-pointer"
              >
                Next →
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // ── Exercise list ────────────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sentence Builder</h1>
          <p className="text-gray-900/50 dark:text-white/50 text-sm mt-1">
            Tap word tiles to build the correct Japanese sentence
          </p>
        </div>
        {attempted > 0 && (
          <div className="text-sm text-gray-900/40 dark:text-white/40">{score}/{attempted} correct</div>
        )}
      </div>

      {/* Lesson filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setLessonFilter("all")}
          className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
            lessonFilter === "all"
              ? "bg-red-600 text-white"
              : "bg-gray-900/5 dark:bg-white/5 text-gray-900/60 dark:text-white/60 hover:bg-gray-900/10 dark:hover:bg-white/10"
          }`}
        >
          All
        </button>
        {Object.keys(byLesson).map((l) => (
          <button
            key={l}
            onClick={() => setLessonFilter(Number(l))}
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
              lessonFilter === Number(l)
                ? "bg-red-600 text-white"
                : "bg-gray-900/5 dark:bg-white/5 text-gray-900/60 dark:text-white/60 hover:bg-gray-900/10 dark:hover:bg-white/10"
            }`}
          >
            L{l}
          </button>
        ))}
      </div>

      {/* Exercise list */}
      <div className="space-y-2">
        {exercises.map((ex) => (
          <button
            key={ex.id}
            onClick={() => startExercise(ex.id)}
            className="w-full text-left bg-gray-900/5 dark:bg-white/5 hover:bg-red-600/10 dark:hover:bg-red-600/10 border border-gray-900/10 dark:border-white/10 hover:border-red-600/30 rounded-xl px-5 py-4 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="text-gray-900 dark:text-white font-medium group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {ex.english}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-red-500 dark:text-red-400 font-mono">{ex.pattern}</span>
                  <span className="text-xs text-gray-900/30 dark:text-white/30">· L{ex.lesson}</span>
                </div>
              </div>
              <svg
                className="text-gray-900/20 dark:text-white/20 group-hover:text-red-500 transition-colors flex-shrink-0 mt-1"
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
