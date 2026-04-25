import { useState, useCallback } from "react";
import { lessons } from "../data/lessons";
import { useSpeech } from "../hooks/useSpeech";
import type { VocabItem } from "../data/types";

type Direction = "next" | "prev";

export default function FlashcardsPage() {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [cards, setCards] = useState<VocabItem[]>([]);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const { speak } = useSpeech();

  const startLesson = useCallback((lessonId: number, doShuffle = false) => {
    const lesson = lessons.find((l) => l.id === lessonId);
    if (!lesson) return;
    let vocab = [...lesson.vocabulary];
    if (doShuffle) vocab = vocab.sort(() => Math.random() - 0.5);
    setCards(vocab);
    setCardIndex(0);
    setFlipped(false);
    setKnown(new Set());
    setSelectedLesson(lessonId);
    setShuffled(doShuffle);
  }, []);

  const navigate = (dir: Direction) => {
    setFlipped(false);
    setTimeout(() => {
      setCardIndex((i) => {
        if (dir === "next") return Math.min(i + 1, cards.length - 1);
        return Math.max(i - 1, 0);
      });
    }, 150);
  };

  const markKnown = () => {
    setKnown((prev) => {
      const next = new Set(prev);
      next.add(cardIndex);
      return next;
    });
    if (cardIndex < cards.length - 1) navigate("next");
  };

  const resetDeck = () => {
    if (selectedLesson !== null) startLesson(selectedLesson, shuffled);
  };

  const current = cards[cardIndex];
  const progress = cards.length ? Math.round(((cardIndex + 1) / cards.length) * 100) : 0;
  const knownCount = known.size;

  // ── Lesson picker ──────────────────────────────────────────────────
  if (selectedLesson === null) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Flashcards</h1>
          <p className="text-gray-900/50 dark:text-white/50 text-sm mt-1">Pick a lesson to drill its vocabulary</p>
        </div>
        <div className="space-y-2">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => startLesson(lesson.id)}
              className="w-full text-left bg-gray-900/5 dark:bg-white/5 hover:bg-red-600/10 dark:hover:bg-red-600/10 border border-gray-900/10 dark:border-white/10 hover:border-red-600/30 rounded-xl px-5 py-4 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-900 dark:text-white font-semibold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {lesson.title}
                  </div>
                  <div className="text-gray-900/40 dark:text-white/40 text-sm mt-0.5">{lesson.topic}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-900/30 dark:text-white/30 text-sm">{lesson.vocabulary.length} words</span>
                  <svg className="text-gray-900/20 dark:text-white/20 group-hover:text-red-500 transition-colors" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Finished state ─────────────────────────────────────────────────
  if (cardIndex === cards.length - 1 && known.has(cardIndex) && knownCount === cards.length) {
    return (
      <div className="max-w-md mx-auto px-6 py-16 text-center space-y-6">
        <div className="text-5xl">🎉</div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All done!</h2>
        <p className="text-gray-900/50 dark:text-white/50">You marked all {cards.length} words as known.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={resetDeck} className="bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Restart
          </button>
          <button onClick={() => setSelectedLesson(null)} className="bg-gray-900/10 dark:bg-white/10 hover:bg-gray-900/20 dark:hover:bg-white/20 text-gray-900 dark:text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Change Lesson
          </button>
        </div>
      </div>
    );
  }

  // ── Card view ──────────────────────────────────────────────────────
  return (
    <div className="max-w-md mx-auto px-6 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelectedLesson(null)}
          className="text-gray-900/40 dark:text-white/40 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
        >
          ← Lessons
        </button>
        <div className="text-gray-900/40 dark:text-white/40 text-sm">
          {cardIndex + 1} / {cards.length}
        </div>
        <button
          onClick={() => startLesson(selectedLesson, !shuffled)}
          className="text-gray-900/40 dark:text-white/40 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
          title={shuffled ? "Show in order" : "Shuffle"}
        >
          {shuffled ? "⇅ Ordered" : "⇅ Shuffle"}
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-900/10 dark:bg-white/10 rounded-full h-1.5">
        <div
          className="bg-red-600 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Known counter */}
      <div className="flex justify-end">
        <span className="text-xs text-gray-900/30 dark:text-white/30">{knownCount} known</span>
      </div>

      {/* Card */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
        className="w-full min-h-[260px] bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 px-8 py-10 cursor-pointer hover:border-red-600/30 transition-colors select-none"
      >
        {!flipped ? (
          <>
            <div className="text-gray-900 dark:text-white text-4xl font-bold tracking-wide">{current?.japanese}</div>
            {current?.kanji && (
              <div className="text-gray-900/40 dark:text-white/40 text-lg">{current.kanji}</div>
            )}
            <div className="text-gray-900/20 dark:text-white/20 text-xs mt-4">tap to reveal</div>
          </>
        ) : (
          <>
            <div className="text-gray-900/40 dark:text-white/40 text-2xl">{current?.japanese}</div>
            <div className="text-gray-900 dark:text-white text-3xl font-semibold text-center">{current?.english}</div>
            <button
              onClick={(e) => { e.stopPropagation(); speak(current?.japanese ?? ""); }}
              className="mt-2 w-9 h-9 rounded-full bg-gray-900/10 dark:bg-white/10 hover:bg-red-600/30 flex items-center justify-center transition-colors cursor-pointer"
              title="Hear pronunciation"
            >
              🔊
            </button>
          </>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={() => navigate("prev")}
          disabled={cardIndex === 0}
          className="flex-1 py-3 rounded-xl border border-gray-900/10 dark:border-white/10 text-gray-900/50 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:border-gray-900/30 dark:hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
        >
          ← Prev
        </button>
        <button
          onClick={markKnown}
          className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
            known.has(cardIndex)
              ? "bg-green-600/20 text-green-600 dark:text-green-400 border border-green-600/30"
              : "bg-red-600 hover:bg-red-500 text-white"
          }`}
        >
          {known.has(cardIndex) ? "✓ Known" : "Got it"}
        </button>
        <button
          onClick={() => navigate("next")}
          disabled={cardIndex === cards.length - 1}
          className="flex-1 py-3 rounded-xl border border-gray-900/10 dark:border-white/10 text-gray-900/50 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:border-gray-900/30 dark:hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
