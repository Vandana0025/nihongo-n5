import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";
import { getLessonProgress } from "../lib/progress";

export default function LessonList() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Lessons</h1>
        <p className="text-gray-900/40 dark:text-white/40 text-sm mt-1">Study grammar, vocabulary, then take a quiz to test yourself.</p>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson) => {
          const progress = getLessonProgress(lesson.id);
          const score = progress?.quizBestScore ?? null;
          const done = progress?.completed ?? false;

          return (
            <div key={lesson.id} className="bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${done ? "bg-green-600 text-white" : "bg-gray-900/10 dark:bg-white/10 text-gray-900/60 dark:text-white/60"}`}>
                  {done ? "✓" : lesson.id}
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white font-semibold">{lesson.title}</div>
                  <div className="text-gray-900/40 dark:text-white/40 text-sm">{lesson.topic}</div>
                  <div className="text-gray-900/30 dark:text-white/30 text-xs mt-0.5">
                    {lesson.vocabulary.length} words · {lesson.grammarPoints.length} grammar points · {lesson.quiz.length} quiz questions
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {score !== null && (
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${score >= 70 ? "bg-green-500/20 text-green-600 dark:text-green-400" : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"}`}>
                    {score}%
                  </span>
                )}
                <Link
                  to={`/lesson/${lesson.id}`}
                  className="bg-red-600 hover:bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  {progress ? "Review" : "Study"}
                </Link>
              </div>
            </div>
          );
        })}

        {/* Placeholder for upcoming lessons */}
        {Array.from({ length: Math.max(0, 25 - lessons.length) }, (_, i) => (
          <div key={i} className="bg-gray-900/[0.02] dark:bg-white/[0.02] border border-gray-900/5 dark:border-white/5 rounded-xl p-4 flex items-center gap-4 opacity-40">
            <div className="w-10 h-10 rounded-lg bg-gray-900/5 dark:bg-white/5 flex items-center justify-center text-gray-900/30 dark:text-white/30 font-bold text-sm flex-shrink-0">
              {lessons.length + i + 1}
            </div>
            <div>
              <div className="text-gray-900/40 dark:text-white/40 font-semibold">Lesson {lessons.length + i + 1}</div>
              <div className="text-gray-900/20 dark:text-white/20 text-xs">Coming soon</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
