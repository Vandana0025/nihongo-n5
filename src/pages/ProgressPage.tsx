import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";
import { getProgress } from "../lib/progress";

export default function ProgressPage() {
  const progress = getProgress();
  const attempted = progress.length;
  const completed = progress.filter((p) => p.completed).length;
  const avgScore = attempted > 0
    ? Math.round(progress.reduce((s, p) => s + p.quizBestScore, 0) / attempted)
    : 0;

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 space-y-8">
      <div>
        <Link to="/" className="text-white/30 hover:text-white text-sm transition-colors">← All Lessons</Link>
        <h1 className="text-2xl font-bold text-white mt-1">My Progress</h1>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Completed", value: `${completed} / 25` },
          { label: "Attempted", value: attempted },
          { label: "Avg Score", value: attempted ? `${avgScore}%` : "—" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-white/40 text-xs uppercase tracking-widest mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Per-lesson */}
      <div className="space-y-2">
        {lessons.map((lesson) => {
          const p = progress.find((x) => x.lessonId === lesson.id);
          const score = p?.quizBestScore ?? null;
          return (
            <div key={lesson.id} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${p?.completed ? "bg-green-600 text-white" : "bg-white/10 text-white/50"}`}>
                  {p?.completed ? "✓" : lesson.id}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{lesson.title} — {lesson.topic}</div>
                  {p && <div className="text-white/30 text-xs">{p.quizAttempts} attempt{p.quizAttempts > 1 ? "s" : ""}</div>}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {score !== null && (
                  <span className={`text-sm font-bold ${score >= 70 ? "text-green-400" : "text-yellow-400"}`}>{score}%</span>
                )}
                <Link to={`/lesson/${lesson.id}/quiz`} className="text-white/30 hover:text-white text-xs transition-colors">
                  {p ? "Retry" : "Start"} →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
