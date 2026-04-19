export interface LessonProgress {
  lessonId: number;
  quizBestScore: number;   // 0–100
  quizAttempts: number;
  completed: boolean;
}

const KEY = "nihongo_n5_progress";

export function getProgress(): LessonProgress[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function getLessonProgress(lessonId: number): LessonProgress | undefined {
  return getProgress().find((p) => p.lessonId === lessonId);
}

export function saveQuizResult(lessonId: number, score: number) {
  const all = getProgress();
  const existing = all.find((p) => p.lessonId === lessonId);
  if (existing) {
    existing.quizAttempts += 1;
    existing.quizBestScore = Math.max(existing.quizBestScore, score);
    existing.completed = existing.quizBestScore >= 70;
  } else {
    all.push({
      lessonId,
      quizBestScore: score,
      quizAttempts: 1,
      completed: score >= 70,
    });
  }
  localStorage.setItem(KEY, JSON.stringify(all));
}
