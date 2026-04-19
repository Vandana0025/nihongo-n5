import type { Lesson } from "../types";
import lesson01 from "./lesson01";

export const lessons: Lesson[] = [lesson01];

export function getLessonById(id: number): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}
