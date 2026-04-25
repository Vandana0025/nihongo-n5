import { useState } from "react";
import { toRomaji } from "wanakana";
import { verbs, type VerbGroup } from "../data/verbs";
import { useSpeech } from "../hooks/useSpeech";

const FORM_ROWS: { key: keyof typeof verbs[0]; label: string; color: string }[] = [
  { key: "dictionary",      label: "Dictionary (plain)",         color: "text-red-500 dark:text-red-400" },
  { key: "masu",            label: "ます  (polite non-past)",    color: "" },
  { key: "masen",           label: "ません  (polite negative)",  color: "" },
  { key: "mashita",         label: "ました  (polite past)",      color: "" },
  { key: "masendeshita",    label: "ませんでした  (past neg.)",  color: "" },
  { key: "te",              label: "て-form",                    color: "text-blue-500 dark:text-blue-400" },
  { key: "nai",             label: "ない-form  (plain neg.)",   color: "" },
  { key: "ta",              label: "た-form  (plain past)",      color: "" },
  { key: "potential",       label: "Potential  (can ~)",         color: "text-green-600 dark:text-green-400" },
  { key: "teKudasai",       label: "てください  (please do)",   color: "" },
  { key: "naiDeKudasai",    label: "ないでください  (please don't)", color: "" },
  { key: "nakereba",        label: "なければなりません  (must)", color: "" },
];

export default function ConjugationPage() {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState<VerbGroup>("all");
  const [selected, setSelected] = useState<typeof verbs[0] | null>(null);
  const { speak } = useSpeech();

  const filtered = verbs.filter((v) => {
    const matchGroup = group === "all" || v.group === group;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      v.dictionary.includes(q) ||
      v.kanji.includes(q) ||
      v.english.toLowerCase().includes(q) ||
      v.masu.includes(q);
    return matchGroup && matchSearch;
  });

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Verb Conjugation</h1>
        <p className="text-gray-900/50 dark:text-white/50 text-sm mt-1">
          Select a verb to see all its forms
        </p>
      </div>

      {/* Search + Group filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search by Japanese or English…"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setSelected(null); }}
          className="flex-1 bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-gray-900 dark:text-white placeholder:text-gray-900/30 dark:placeholder:text-white/30 outline-none focus:border-red-600/50"
        />
        <div className="flex gap-2">
          {([
            { val: "all", label: "All" },
            { val: 1,     label: "U-verb" },
            { val: 2,     label: "Ru-verb" },
            { val: 3,     label: "Irregular" },
          ] as { val: VerbGroup; label: string }[]).map(({ val, label }) => (
            <button
              key={val}
              onClick={() => { setGroup(val); setSelected(null); }}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                group === val
                  ? "bg-red-600 text-white"
                  : "bg-gray-900/5 dark:bg-white/5 text-gray-900/60 dark:text-white/60 hover:bg-gray-900/10 dark:hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Group legend */}
      <div className="flex flex-wrap gap-4 text-xs text-gray-900/40 dark:text-white/40">
        <span><span className="text-orange-500 font-semibold">U-verb</span> — ends in u-sound (かく, のむ, かう). ます-stem ends in い-row.</span>
        <span><span className="text-blue-500 font-semibold">Ru-verb</span> — drop る to conjugate (たべる, みる, おきる).</span>
        <span><span className="text-purple-500 font-semibold">Irregular</span> — する and くる only.</span>
      </div>

      {/* Verb list */}
      {!selected && (
        <div className="space-y-2">
          {filtered.length === 0 && (
            <p className="text-gray-900/30 dark:text-white/30 text-sm py-4 text-center">No verbs found.</p>
          )}
          {filtered.map((v) => (
            <button
              key={v.dictionary}
              onClick={() => setSelected(v)}
              className="w-full text-left bg-gray-900/5 dark:bg-white/5 hover:bg-red-600/10 dark:hover:bg-red-600/10 border border-gray-900/10 dark:border-white/10 hover:border-red-600/30 rounded-xl px-5 py-3.5 transition-colors group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-gray-900 dark:text-white font-semibold text-lg">{v.masu}</div>
                    <div className="text-gray-900/30 dark:text-white/30 text-xs">{toRomaji(v.masu)}</div>
                  </div>
                  <span className="text-gray-900/40 dark:text-white/40 text-sm">{v.kanji}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-900/60 dark:text-white/60 text-sm">{v.english}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium hidden sm:inline ${
                    v.group === 1 ? "bg-orange-500/10 text-orange-600 dark:text-orange-400" :
                    v.group === 2 ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" :
                    "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                  }`}>
                    {v.group === 1 ? "U-verb" : v.group === 2 ? "Ru-verb" : "Irregular"}
                  </span>
                  <svg className="text-gray-900/20 dark:text-white/20 group-hover:text-red-500 transition-colors flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Conjugation table */}
      {selected && (
        <div className="space-y-4">
          {/* Back + verb header */}
          <button
            onClick={() => setSelected(null)}
            className="text-gray-900/40 dark:text-white/40 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
          >
            ← Back to list
          </button>

          <div className="bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{selected.masu}</div>
                <div className="text-gray-900/40 dark:text-white/40 text-base mt-0.5">{selected.kanji}</div>
              </div>
              <div className="text-right">
                <div className="text-gray-900/60 dark:text-white/60">{selected.english}</div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium mt-1 inline-block ${
                  selected.group === 1 ? "bg-orange-500/10 text-orange-600 dark:text-orange-400" :
                  selected.group === 2 ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" :
                  "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                }`}>
                  {selected.group === 1 ? "U-verb (Group I)" : selected.group === 2 ? "Ru-verb (Group II)" : "Irregular (Group III)"}
                </span>
              </div>
            </div>
          </div>

          {/* Forms table */}
          <div className="space-y-1">
            {FORM_ROWS.map(({ key, label, color }) => {
              const value = selected[key as keyof typeof selected] as string;
              if (value === "—") return (
                <div key={key} className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-900/5 dark:bg-white/5 opacity-30">
                  <span className="text-sm text-gray-900/50 dark:text-white/50">{label}</span>
                  <span className="text-sm">—</span>
                </div>
              );
              return (
                <div
                  key={key}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-900/5 dark:bg-white/5 border border-transparent hover:border-gray-900/10 dark:hover:border-white/10 transition-colors group"
                >
                  <span className="text-sm text-gray-900/50 dark:text-white/50">{label}</span>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className={`text-base font-medium ${color || "text-gray-900 dark:text-white"}`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-900/30 dark:text-white/30 mt-0.5">
                        {toRomaji(value)}
                      </div>
                    </div>
                    <button
                      onClick={() => speak(value)}
                      className="w-7 h-7 rounded-full bg-gray-900/10 dark:bg-white/10 hover:bg-red-600/30 flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 text-sm cursor-pointer"
                    >
                      🔊
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
