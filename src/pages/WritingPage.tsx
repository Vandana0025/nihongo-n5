import { useState } from "react";
import { useSpeech } from "../hooks/useSpeech";
import type { KanaChar, KanaRow, YouonGroup } from "../data/characters";
import {
  hiraganaBasic, hiraganaDakuten, hiraganaYouon,
  katakanaBasic, katakanaDakuten, katakanaYouon,
  colHeaders,
} from "../data/characters";
import { kanjiGroups } from "../data/kanji";
import type { KanjiItem } from "../data/kanji";
import KanjiPractice from "../components/KanjiPractice";

type Tab = "hiragana" | "katakana" | "kanji" | "practice";

// Katakana → hiragana so the TTS reads the exact sound we want
function toHiragana(str: string): string {
  return str.replace(/[\u30A1-\u30F6]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) - 0x60)
  );
}

// ─── Kana card ───────────────────────────────────────────────────────────────

function KanaCard({ char, onSpeak }: { char: KanaChar; onSpeak: (k: string) => void }) {
  return (
    <button
      onClick={() => onSpeak(char.kana)}
      className="flex flex-col items-center justify-center gap-1 w-full aspect-square rounded-xl bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 hover:bg-red-600/10 hover:border-red-500/40 active:scale-95 transition-all cursor-pointer group"
    >
      <span className="text-2xl font-medium text-gray-900 dark:text-white leading-none">{char.kana}</span>
      <span className="text-[10px] text-gray-900/40 dark:text-white/40 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors font-mono">{char.romaji}</span>
    </button>
  );
}

function EmptyCell() {
  return <div className="w-full aspect-square rounded-xl bg-gray-900/[0.02] dark:bg-white/[0.02] border border-gray-900/5 dark:border-white/5" />;
}

// ─── Kana table ──────────────────────────────────────────────────────────────

function KanaTable({ rows, onSpeak }: { rows: KanaRow[]; onSpeak: (k: string) => void }) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[320px]">
        <div className="grid grid-cols-[2rem_1fr_1fr_1fr_1fr_1fr] gap-1.5 mb-1.5 pl-1">
          <div />
          {colHeaders.map((h) => (
            <div key={h} className="text-center text-xs text-gray-900/30 dark:text-white/30 font-mono pb-1">{h}</div>
          ))}
        </div>
        <div className="space-y-1.5">
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-[2rem_1fr_1fr_1fr_1fr_1fr] gap-1.5 items-center">
              <div className="text-center text-xs text-gray-900/30 dark:text-white/30 font-medium">{row.label}</div>
              {row.chars.map((char, i) =>
                char ? <KanaCard key={i} char={char} onSpeak={onSpeak} /> : <EmptyCell key={i} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Youon table ─────────────────────────────────────────────────────────────

function YouonTable({ groups, onSpeak }: { groups: YouonGroup[]; onSpeak: (k: string) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {groups.map((group) => (
        <div key={group.base.kana} className="flex items-center gap-2">
          <div className="w-10 flex-shrink-0 text-center">
            <div className="text-sm font-medium text-gray-900/50 dark:text-white/50">{group.base.kana}</div>
            <div className="text-[10px] text-gray-900/30 dark:text-white/30 font-mono">{group.base.romaji}</div>
          </div>
          <div className="text-gray-900/20 dark:text-white/20 text-xs">→</div>
          <div className="flex gap-1.5 flex-1">
            {group.chars.map((char) => (
              <div key={char.kana} className="flex-1">
                <KanaCard char={char} onSpeak={onSpeak} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Kanji card ──────────────────────────────────────────────────────────────

function KanjiCard({ item, onSpeak }: { item: KanjiItem; onSpeak: (k: string) => void }) {
  const [flipped, setFlipped] = useState(false);

  function handleClick() {
    if (!flipped) {
      // Speak the primary reading explicitly in hiragana — avoids TTS misreading bare kanji
      const raw = item.onyomi[0] ?? item.kunyomi[0] ?? item.kanji;
      onSpeak(toHiragana(raw));
    }
    setFlipped((f) => !f);
  }

  return (
    <div
      onClick={handleClick}
      className="w-full rounded-xl bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 hover:bg-red-600/10 hover:border-red-500/40 active:scale-[0.98] transition-all cursor-pointer text-left p-3 group"
    >
      {!flipped ? (
        /* Front: kanji + meaning + readings as tappable chips */
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <span className="text-4xl font-medium text-gray-900 dark:text-white leading-none">{item.kanji}</span>
            <span className="text-[10px] text-gray-900/30 dark:text-white/30 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors mt-1 font-mono">tap</span>
          </div>
          <div className="text-xs font-semibold text-gray-900/70 dark:text-white/70">{item.meaning}</div>
          <div className="space-y-1.5">
            {item.onyomi.length > 0 && (
              <div className="flex flex-wrap items-center gap-1">
                <span className="text-[9px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-wide w-4 flex-shrink-0">on</span>
                {item.onyomi.map((r) => (
                  <button
                    key={r}
                    onClick={(e) => { e.stopPropagation(); onSpeak(r); }}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-300 hover:bg-blue-500/25 transition-colors cursor-pointer"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
            {item.kunyomi.length > 0 && (
              <div className="flex flex-wrap items-center gap-1">
                <span className="text-[9px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wide w-4 flex-shrink-0">kun</span>
                {item.kunyomi.map((r) => (
                  <button
                    key={r}
                    onClick={(e) => { e.stopPropagation(); onSpeak(r); }}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-green-500/10 text-green-700 dark:text-green-300 hover:bg-green-500/25 transition-colors cursor-pointer"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Back: examples */
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-base font-bold text-gray-900 dark:text-white">{item.kanji}</span>
            <span className="text-[9px] text-gray-900/30 dark:text-white/30 font-mono">tap to close</span>
          </div>
          {item.examples.map((ex) => (
            <div
              key={ex.word}
              onClick={(e) => { e.stopPropagation(); onSpeak(ex.reading); }}
              className="bg-gray-900/5 dark:bg-white/5 rounded-lg px-2.5 py-2 cursor-pointer hover:bg-red-600/10 transition-colors"
              title="Tap to hear"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{ex.word}</span>
                <span className="text-[10px] text-gray-900/40 dark:text-white/40 font-mono">{ex.reading}</span>
              </div>
              <div className="text-[10px] text-gray-900/50 dark:text-white/50 mt-0.5">{ex.meaning}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Kanji tab content ───────────────────────────────────────────────────────

function KanjiTab({ onSpeak }: { onSpeak: (k: string) => void }) {
  return (
    <div className="space-y-8">
      <p className="text-xs text-gray-900/40 dark:text-white/40 -mt-4">
        {kanjiGroups.reduce((n, g) => n + g.items.length, 0)} kanji · tap a card to hear the example word, tap again to flip back.
      </p>
      {kanjiGroups.map((group) => (
        <section key={group.category}>
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            {group.category}
            <span className="text-xs font-normal text-gray-900/30 dark:text-white/30">{group.items.length}</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {group.items.map((item) => (
              <KanjiCard key={item.kanji} item={item} onSpeak={onSpeak} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

// ─── Section header ──────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-base font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-xs text-gray-900/40 dark:text-white/40 mt-0.5">{subtitle}</p>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

const TAB_LABELS: Record<Tab, { full: string; short: string }> = {
  hiragana: { full: "Hiragana (ひらがな)", short: "あいう" },
  katakana: { full: "Katakana (カタカナ)", short: "アイウ" },
  kanji:    { full: "Kanji (漢字)",        short: "漢字"  },
  practice: { full: "Kanji Practice",      short: "練習"  },
};

export default function WritingPage() {
  const [tab, setTab] = useState<Tab>("hiragana");
  const { speak } = useSpeech();

  const basic   = tab === "hiragana" ? hiraganaBasic   : katakanaBasic;
  const dakuten = tab === "hiragana" ? hiraganaDakuten : katakanaDakuten;
  const youon   = tab === "hiragana" ? hiraganaYouon   : katakanaYouon;

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Writing Systems</h1>
        <p className="text-gray-900/40 dark:text-white/40 text-sm mt-1">
          {tab === "kanji" ? "Tap any card to hear the example word pronounced." : tab === "practice" ? "Tap a kanji to view stroke order or practice writing." : "Click any character to hear it pronounced."}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-900/10 dark:border-white/10">
        {(Object.keys(TAB_LABELS) as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 sm:px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors cursor-pointer ${
              tab === t
                ? "border-red-600 text-gray-900 dark:text-white"
                : "border-transparent text-gray-900/40 dark:text-white/40 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <span className="sm:hidden">{TAB_LABELS[t].short}</span>
            <span className="hidden sm:inline">{TAB_LABELS[t].full}</span>
          </button>
        ))}
      </div>

      {/* Kana tabs */}
      {tab !== "kanji" && tab !== "practice" && (
        <>
          <section>
            <SectionHeader
              title="Basic Characters"
              subtitle={tab === "hiragana"
                ? "46 characters used for native Japanese words and grammar particles."
                : "46 characters used mainly for foreign loanwords and emphasis."}
            />
            <KanaTable rows={basic} onSpeak={speak} />
          </section>

          <section>
            <SectionHeader
              title="Voiced & Semi-voiced"
              subtitle="Dakuten (゛) adds voicing; handakuten (゜) creates p-sounds."
            />
            <KanaTable rows={dakuten} onSpeak={speak} />
          </section>

          <section>
            <SectionHeader
              title="Combination Sounds"
              subtitle="Youon — an i-column character + small や, ゆ, or よ to form a single sound."
            />
            <YouonTable groups={youon} onSpeak={speak} />
          </section>
        </>
      )}

      {/* Kanji tab */}
      {tab === "kanji" && <KanjiTab onSpeak={speak} />}

      {/* Practice tab */}
      {tab === "practice" && <KanjiPractice />}
    </div>
  );
}
