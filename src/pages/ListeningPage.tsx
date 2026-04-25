import { useState } from "react";
import { listeningExercises, type ListeningCategory } from "../data/listening";
import { useSpeech } from "../hooks/useSpeech";

const CATEGORY_LABELS: Record<ListeningCategory, string> = {
  task: "Task-Based",
  point: "Point Comprehension",
  response: "Quick Response",
};

const CATEGORY_COLORS: Record<ListeningCategory, string> = {
  task: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  point: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  response: "bg-green-500/10 text-green-600 dark:text-green-400",
};

type State = "list" | "playing" | "answered";

export default function ListeningPage() {
  const [filter, setFilter] = useState<ListeningCategory | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [state, setState] = useState<State>("list");
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const { speak } = useSpeech();

  const exercises = filter === "all"
    ? listeningExercises
    : listeningExercises.filter((e) => e.category === filter);

  const current = listeningExercises.find((e) => e.id === selectedId);

  const playDialogue = () => {
    if (!current) return;
    const fullText = current.dialogue.map((d) => d.jp).join("。");
    speak(fullText);
    setState("playing");
  };

  const answer = (option: string) => {
    if (!current) return;
    setChosen(option);
    setAttempted((n) => n + 1);
    if (option === current.answer) setScore((n) => n + 1);
    setState("answered");
  };

  const reset = () => {
    setSelectedId(null);
    setChosen(null);
    setState("list");
  };

  // ── Exercise detail ──────────────────────────────────────────────
  if (current && state !== "list") {
    const correct = chosen === current.answer;
    return (
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
        {/* Back */}
        <button onClick={reset} className="text-gray-900/40 dark:text-white/40 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
          ← All Exercises
        </button>

        {/* Title + badge */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{current.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[current.category]}`}>
                {CATEGORY_LABELS[current.category]}
              </span>
              <span className="text-xs text-gray-900/30 dark:text-white/30">{current.level}</span>
            </div>
          </div>
          <div className="text-sm text-gray-900/40 dark:text-white/40">{score}/{attempted} correct</div>
        </div>

        {/* Dialogue (revealed after answering) */}
        {state === "answered" && (
          <div className="space-y-2">
            <div className="text-xs text-gray-900/30 dark:text-white/30 uppercase tracking-widest">Dialogue</div>
            {current.dialogue.map((line, i) => (
              <div key={i} className="bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 rounded-xl px-4 py-3">
                <div className="text-xs text-red-500 dark:text-red-400 font-medium mb-1">{line.speaker}</div>
                <div className="text-gray-900 dark:text-white">{line.jp}</div>
                <div className="text-gray-900/40 dark:text-white/40 text-sm mt-0.5">{line.en}</div>
              </div>
            ))}
          </div>
        )}

        {/* Play button */}
        <button
          onClick={playDialogue}
          className="w-full py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-semibold flex items-center justify-center gap-3 transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          {state === "playing" ? "Play Again" : "Play Dialogue"}
        </button>

        {state === "playing" && (
          <p className="text-center text-gray-900/40 dark:text-white/40 text-sm">
            Listen carefully, then answer the question below
          </p>
        )}

        {/* Question */}
        <div className="space-y-3">
          <div className="text-gray-900 dark:text-white font-semibold">{current.question}</div>
          <div className="space-y-2">
            {current.options.map((opt) => {
              let style = "bg-gray-900/5 dark:bg-white/5 border-gray-900/10 dark:border-white/10 text-gray-900 dark:text-white";
              if (state === "answered") {
                if (opt === current.answer) style = "bg-green-500/10 border-green-500/40 text-green-700 dark:text-green-400";
                else if (opt === chosen) style = "bg-red-500/10 border-red-500/40 text-red-700 dark:text-red-400";
                else style = "bg-gray-900/5 dark:bg-white/5 border-gray-900/10 dark:border-white/10 text-gray-900/30 dark:text-white/30";
              }
              return (
                <button
                  key={opt}
                  onClick={() => state === "playing" && answer(opt)}
                  disabled={state !== "playing"}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${style} ${state === "playing" ? "hover:border-red-600/40 cursor-pointer" : "cursor-default"}`}
                >
                  <div className="flex items-center justify-between">
                    {opt}
                    {state === "answered" && opt === current.answer && <span>✓</span>}
                    {state === "answered" && opt === chosen && opt !== current.answer && <span>✗</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {state === "answered" && (
          <div className={`rounded-xl px-4 py-3 border ${correct ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"}`}>
            <div className={`font-semibold mb-1 ${correct ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
              {correct ? "Correct!" : "Incorrect"}
            </div>
            <p className="text-gray-900/70 dark:text-white/70 text-sm">{current.explanation}</p>
          </div>
        )}

        {state === "answered" && (
          <button onClick={reset} className="w-full py-3 rounded-xl bg-gray-900/10 dark:bg-white/10 hover:bg-gray-900/20 dark:hover:bg-white/20 text-gray-900 dark:text-white font-medium transition-colors cursor-pointer">
            Back to Exercises
          </button>
        )}
      </div>
    );
  }

  // ── Exercise list ────────────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Listening Practice</h1>
          <p className="text-gray-900/50 dark:text-white/50 text-sm mt-1">Listen to dialogues and answer comprehension questions</p>
        </div>
        {attempted > 0 && (
          <div className="text-sm text-gray-900/50 dark:text-white/50">{score}/{attempted} correct</div>
        )}
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {(["all", "task", "point", "response"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
              filter === cat
                ? "bg-red-600 text-white"
                : "bg-gray-900/5 dark:bg-white/5 text-gray-900/60 dark:text-white/60 hover:bg-gray-900/10 dark:hover:bg-white/10"
            }`}
          >
            {cat === "all" ? "All" : CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Exercise list */}
      <div className="space-y-2">
        {exercises.map((ex) => (
          <button
            key={ex.id}
            onClick={() => { setSelectedId(ex.id); setState("playing"); setChosen(null); }}
            className="w-full text-left bg-gray-900/5 dark:bg-white/5 hover:bg-red-600/10 dark:hover:bg-red-600/10 border border-gray-900/10 dark:border-white/10 hover:border-red-600/30 rounded-xl px-5 py-4 transition-colors group"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-gray-900 dark:text-white font-semibold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {ex.title}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[ex.category]}`}>
                    {CATEGORY_LABELS[ex.category]}
                  </span>
                  <span className="text-xs text-gray-900/30 dark:text-white/30">{ex.level}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="text-gray-900/20 dark:text-white/20 group-hover:text-red-500 transition-colors" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
