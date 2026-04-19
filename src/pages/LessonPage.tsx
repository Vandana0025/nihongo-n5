import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getLessonById } from "../data/lessons";
import { useSpeech } from "../hooks/useSpeech";

type Tab = "vocabulary" | "grammar";

export default function LessonPage() {
  const { id } = useParams();
  const lesson = getLessonById(Number(id));
  const [tab, setTab] = useState<Tab>("vocabulary");
  const { speak } = useSpeech();

  if (!lesson) return (
    <div className="flex items-center justify-center min-h-[60vh] text-white/30">
      Lesson not found.
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link to="/" className="text-white/30 hover:text-white text-sm transition-colors">← All Lessons</Link>
          <h1 className="text-2xl font-bold text-white mt-1">{lesson.title}</h1>
          <p className="text-white/50">{lesson.topic}</p>
        </div>
        <Link
          to={`/lesson/${lesson.id}/quiz`}
          className="bg-red-600 hover:bg-red-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors flex-shrink-0"
        >
          Take Quiz →
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-white/10">
        {(["vocabulary", "grammar"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors cursor-pointer capitalize ${
              tab === t ? "border-red-600 text-white" : "border-transparent text-white/40 hover:text-white"
            }`}
          >
            {t === "vocabulary" ? `Vocabulary (${lesson.vocabulary.length})` : `Grammar (${lesson.grammarPoints.length})`}
          </button>
        ))}
      </div>

      {/* Vocabulary tab */}
      {tab === "vocabulary" && (
        <div className="space-y-2">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Click the speaker icon to hear pronunciation</p>
          {lesson.vocabulary.map((v, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-white text-lg font-medium">{v.japanese}</div>
                  {v.kanji && <div className="text-white/40 text-sm">{v.kanji}</div>}
                </div>
                {v.example && <div className="text-white/30 text-xs italic hidden sm:block">{v.example}</div>}
              </div>
              <div className="flex items-center gap-3">
                <div className="text-white/60 text-sm text-right">{v.english}</div>
                <button
                  onClick={() => speak(v.kanji ?? v.japanese)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600/40 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                  title="Listen"
                >
                  🔊
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Grammar tab */}
      {tab === "grammar" && (
        <div className="space-y-6">
          {lesson.grammarPoints.map((gp, i) => (
            <div key={gp.id} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
              {/* Pattern header */}
              <div className="flex items-start gap-3">
                <span className="bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <div className="text-white text-lg font-bold font-mono">{gp.pattern}</div>
                  <div className="text-red-400 font-medium text-sm">{gp.meaning}</div>
                </div>
              </div>

              {/* Explanation */}
              <p className="text-white/60 text-sm leading-relaxed border-l-2 border-white/10 pl-3">{gp.explanation}</p>

              {/* Examples */}
              <div className="space-y-2">
                <div className="text-white/30 text-xs uppercase tracking-widest">Examples</div>
                {gp.examples.map((ex, j) => (
                  <div key={j} className="bg-black/20 rounded-lg px-4 py-3 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-white text-base">{ex.japanese}</div>
                      <div className="text-white/40 text-sm mt-0.5">{ex.english}</div>
                    </div>
                    <button
                      onClick={() => speak(ex.japanese)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600/40 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
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
      )}

      {/* Bottom CTA */}
      <div className="pt-4 border-t border-white/10 flex justify-end">
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
