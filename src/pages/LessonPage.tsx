import { Link, useParams } from "react-router-dom";
import { getLessonById } from "../data/lessons";
import { useSpeech } from "../hooks/useSpeech";

export default function LessonPage() {
  const { id } = useParams();
  const lesson = getLessonById(Number(id));
  const { speak } = useSpeech();

  if (!lesson) return (
    <div className="flex items-center justify-center min-h-[60vh] text-gray-900/30 dark:text-white/30">
      Lesson not found.
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 space-y-10">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link to="/" className="text-gray-900/30 dark:text-white/30 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
            ← All Lessons
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{lesson.title}</h1>
          <p className="text-gray-900/50 dark:text-white/50">{lesson.topic}</p>
        </div>
        <Link
          to={`/lesson/${lesson.id}/quiz`}
          className="bg-red-600 hover:bg-red-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors flex-shrink-0"
        >
          Take Quiz →
        </Link>
      </div>

      {/* ── Vocabulary ───────────────────────────────────────────── */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900/40 dark:text-white/40">
            Vocabulary
          </h2>
          <span className="text-xs text-gray-900/30 dark:text-white/30 bg-gray-900/5 dark:bg-white/5 px-2 py-0.5 rounded-full">
            {lesson.vocabulary.length} words
          </span>
        </div>

        <div className="space-y-2">
          {lesson.vocabulary.map((v, i) => (
            <div
              key={i}
              className="bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 rounded-xl px-4 py-3 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="text-right flex-shrink-0">
                  <div className="text-gray-900 dark:text-white text-lg font-medium">{v.japanese}</div>
                  {v.kanji && (
                    <div className="text-gray-900/40 dark:text-white/40 text-sm">{v.kanji}</div>
                  )}
                </div>
                {v.example && (
                  <div className="text-gray-900/30 dark:text-white/30 text-xs italic hidden sm:block truncate">
                    {v.example}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="text-gray-900/60 dark:text-white/60 text-sm text-right">{v.english}</div>
                <button
                  onClick={() => speak(v.japanese)}
                  className="w-8 h-8 rounded-full bg-gray-900/10 dark:bg-white/10 hover:bg-red-600/40 flex items-center justify-center transition-colors cursor-pointer"
                  title="Listen"
                >
                  🔊
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Grammar ──────────────────────────────────────────────── */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900/40 dark:text-white/40">
            Grammar
          </h2>
          <span className="text-xs text-gray-900/30 dark:text-white/30 bg-gray-900/5 dark:bg-white/5 px-2 py-0.5 rounded-full">
            {lesson.grammarPoints.length} patterns
          </span>
        </div>

        <div className="space-y-4">
          {lesson.grammarPoints.map((gp, i) => (
            <div
              key={gp.id}
              className="bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 rounded-xl p-5 space-y-4"
            >
              {/* Pattern header */}
              <div className="flex items-start gap-3">
                <span className="bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <div className="text-gray-900 dark:text-white text-lg font-bold font-mono">{gp.pattern}</div>
                  <div className="text-red-500 dark:text-red-400 font-medium text-sm">{gp.meaning}</div>
                </div>
              </div>

              {/* Explanation */}
              <p className="text-gray-900/60 dark:text-white/60 text-sm leading-relaxed border-l-2 border-gray-900/10 dark:border-white/10 pl-3">
                {gp.explanation}
              </p>

              {/* Examples */}
              <div className="space-y-2">
                <div className="text-gray-900/30 dark:text-white/30 text-xs uppercase tracking-widest">Examples</div>
                {gp.examples.map((ex, j) => (
                  <div
                    key={j}
                    className="bg-gray-900/5 dark:bg-black/20 rounded-lg px-4 py-3 flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-gray-900 dark:text-white text-base">{ex.japanese}</div>
                      <div className="text-gray-900/40 dark:text-white/40 text-sm mt-0.5">{ex.english}</div>
                    </div>
                    <button
                      onClick={() => speak(ex.japanese)}
                      className="w-8 h-8 rounded-full bg-gray-900/10 dark:bg-white/10 hover:bg-red-600/40 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                      title="Listen"
                    >
                      🔊
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="pt-4 border-t border-gray-900/10 dark:border-white/10 flex justify-end">
        <Link
          to={`/lesson/${lesson.id}/quiz`}
          className="bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Ready? Take the Quiz →
        </Link>
      </div>

    </div>
  );
}
