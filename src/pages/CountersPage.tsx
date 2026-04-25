const COUNTERS = [
  {
    counter: "〜つ",
    reading: "ひとつ / ふたつ…",
    use: "General objects (native counting)",
    rows: [
      ["1","ひとつ"],["2","ふたつ"],["3","みっつ"],["4","よっつ"],["5","いつつ"],
      ["6","むっつ"],["7","ななつ"],["8","やっつ"],["9","ここのつ"],["10","とお"],
    ],
  },
  {
    counter: "〜本 (ほん)",
    reading: "いっぽん / にほん…",
    use: "Long thin objects — pens, bottles, umbrellas, roads",
    rows: [
      ["1","いっぽん"],["2","にほん"],["3","さんぼん"],["4","よんほん"],["5","ごほん"],
      ["6","ろっぽん"],["7","ななほん"],["8","はっぽん"],["9","きゅうほん"],["10","じっぽん"],
    ],
  },
  {
    counter: "〜枚 (まい)",
    reading: "いちまい / にまい…",
    use: "Flat, thin objects — paper, stamps, shirts, plates",
    rows: [
      ["1","いちまい"],["2","にまい"],["3","さんまい"],["4","よんまい"],["5","ごまい"],
      ["6","ろくまい"],["7","ななまい"],["8","はちまい"],["9","きゅうまい"],["10","じゅうまい"],
    ],
  },
  {
    counter: "〜冊 (さつ)",
    reading: "いっさつ / にさつ…",
    use: "Bound objects — books, notebooks, magazines",
    rows: [
      ["1","いっさつ"],["2","にさつ"],["3","さんさつ"],["4","よんさつ"],["5","ごさつ"],
      ["6","ろくさつ"],["7","ななさつ"],["8","はっさつ"],["9","きゅうさつ"],["10","じゅっさつ"],
    ],
  },
  {
    counter: "〜台 (だい)",
    reading: "いちだい / にだい…",
    use: "Machines & vehicles — cars, TVs, computers, bikes",
    rows: [
      ["1","いちだい"],["2","にだい"],["3","さんだい"],["4","よんだい"],["5","ごだい"],
      ["6","ろくだい"],["7","ななだい"],["8","はちだい"],["9","きゅうだい"],["10","じゅうだい"],
    ],
  },
  {
    counter: "〜個 (こ)",
    reading: "いっこ / にこ…",
    use: "Small compact objects — apples, erasers, eggs, buttons",
    rows: [
      ["1","いっこ"],["2","にこ"],["3","さんこ"],["4","よんこ"],["5","ごこ"],
      ["6","ろっこ"],["7","ななこ"],["8","はっこ"],["9","きゅうこ"],["10","じっこ"],
    ],
  },
  {
    counter: "〜杯 (はい)",
    reading: "いっぱい / にはい…",
    use: "Cups and glasses — coffee, tea, water, sake",
    rows: [
      ["1","いっぱい"],["2","にはい"],["3","さんばい"],["4","よんはい"],["5","ごはい"],
      ["6","ろっぱい"],["7","ななはい"],["8","はっぱい"],["9","きゅうはい"],["10","じっぱい"],
    ],
  },
  {
    counter: "〜匹 (ひき)",
    reading: "いっぴき / にひき…",
    use: "Small / medium animals — dogs, cats, fish, insects",
    rows: [
      ["1","いっぴき"],["2","にひき"],["3","さんびき"],["4","よんひき"],["5","ごひき"],
      ["6","ろっぴき"],["7","ななひき"],["8","はっぴき"],["9","きゅうひき"],["10","じっぴき"],
    ],
  },
  {
    counter: "〜頭 (とう)",
    reading: "いっとう / にとう…",
    use: "Large animals — horses, cows, elephants, whales",
    rows: [
      ["1","いっとう"],["2","にとう"],["3","さんとう"],["4","よんとう"],["5","ごとう"],
      ["6","ろくとう"],["7","ななとう"],["8","はっとう"],["9","きゅうとう"],["10","じゅっとう"],
    ],
  },
  {
    counter: "〜羽 (わ)",
    reading: "いちわ / にわ…",
    use: "Birds and rabbits",
    rows: [
      ["1","いちわ"],["2","にわ"],["3","さんわ"],["4","よんわ"],["5","ごわ"],
      ["6","ろくわ"],["7","ななわ"],["8","はちわ"],["9","きゅうわ"],["10","じゅうわ"],
    ],
  },
  {
    counter: "〜人 (にん)",
    reading: "ひとり / ふたり / さんにん…",
    use: "People — note special forms for 1 and 2",
    rows: [
      ["1","ひとり"],["2","ふたり"],["3","さんにん"],["4","よにん"],["5","ごにん"],
      ["6","ろくにん"],["7","ななにん"],["8","はちにん"],["9","きゅうにん"],["10","じゅうにん"],
    ],
  },
  {
    counter: "〜階 (かい)",
    reading: "いっかい / にかい…",
    use: "Floors of a building",
    rows: [
      ["1","いっかい"],["2","にかい"],["3","さんかい"],["4","よんかい"],["5","ごかい"],
      ["6","ろっかい"],["7","ななかい"],["8","はっかい"],["9","きゅうかい"],["10","じゅっかい"],
    ],
  },
  {
    counter: "〜回 (かい)",
    reading: "いっかい / にかい…",
    use: "Number of times / occurrences",
    rows: [
      ["1","いっかい"],["2","にかい"],["3","さんかい"],["4","よんかい"],["5","ごかい"],
      ["6","ろっかい"],["7","ななかい"],["8","はっかい"],["9","きゅうかい"],["10","じゅっかい"],
    ],
  },
  {
    counter: "〜番 (ばん)",
    reading: "いちばん / にばん…",
    use: "Ordinal numbers & rankings — 1st, 2nd, platform numbers",
    rows: [
      ["1","いちばん"],["2","にばん"],["3","さんばん"],["4","よんばん"],["5","ごばん"],
      ["6","ろくばん"],["7","ななばん"],["8","はちばん"],["9","きゅうばん"],["10","じゅうばん"],
    ],
  },
];

const TIPS = [
  { label: "1, 6, 8, 10", tip: "Often cause sound changes: いっ〜, ろっ〜, はっ〜, じっ〜 (gemination / double consonant)" },
  { label: "3 + は/ひ/ふ", tip: "Becomes さんぼん, さんびき, さんぱい (voiced consonant)" },
  { label: "People", tip: "ひとり (1) and ふたり (2) are native Japanese — all others use 〜にん" },
  { label: "〜階 vs 〜回", tip: "Same reading かい but different kanji: 階 = floor, 回 = times/occurrences" },
];

import { useSpeech } from "../hooks/useSpeech";

export default function CountersPage() {
  const { speak } = useSpeech();
  // は is read as "wa" by TTS when it looks like a particle.
  // Counters always use は as "ha" (e.g. はっぽん, にはい), so swap to katakana ハ to force the correct reading.
  const speakCounter = (text: string) => speak(text.replace(/は/g, "ハ"));

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Japanese Counters</h1>
        <p className="text-gray-500 dark:text-white/40 text-sm">Appendix — counting words by shape, size and type · tap any cell to hear it</p>
      </div>

      {/* Tips */}
      <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl p-5 space-y-3">
        <div className="text-amber-700 dark:text-amber-400 font-semibold text-sm">Sound-change tips</div>
        {TIPS.map(t => (
          <div key={t.label} className="flex gap-4 text-sm">
            <span className="text-amber-600 dark:text-amber-400 font-mono min-w-[130px] shrink-0">{t.label}</span>
            <span className="text-gray-700 dark:text-white/60">{t.tip}</span>
          </div>
        ))}
      </div>

      {/* Counter cards */}
      <div className="space-y-6">
        {COUNTERS.map(c => (
          <div key={c.counter} className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gray-100 dark:bg-white/5 px-5 py-4 flex flex-wrap gap-x-4 gap-y-1 items-baseline">
              <span className="text-gray-900 dark:text-white font-bold text-lg">{c.counter}</span>
              <span className="text-gray-500 dark:text-white/50 text-sm font-mono">{c.reading}</span>
              <span className="text-gray-500 dark:text-white/40 text-xs ml-auto">{c.use}</span>
            </div>
            {/* Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-10 divide-x divide-y divide-gray-100 dark:divide-white/5">
              {c.rows.map(([num, form]) => (
                <button
                  key={num}
                  onClick={() => speakCounter(form)}
                  className="flex flex-col items-center py-4 px-2 bg-white dark:bg-transparent hover:bg-red-50 dark:hover:bg-red-500/10 active:scale-95 transition-all cursor-pointer group"
                  title={`Speak: ${form}`}
                >
                  <span className="text-gray-400 dark:text-white/30 text-xs mb-1">{num}</span>
                  <span className="text-gray-900 dark:text-white text-sm font-medium text-center leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{form}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-400 dark:text-white/20 text-xs pb-4">
        Source: Minna no Nihongo Appendix — Counters reference
      </p>
    </div>
  );
}
