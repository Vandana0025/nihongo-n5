import { useState } from "react";
import { particles } from "../data/particles";
import { useSpeech } from "../hooks/useSpeech";

export default function ParticlesPage() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const { speak } = useSpeech();

  const filtered = particles.filter((p) => {
    const q = search.toLowerCase();
    return (
      !q ||
      p.particle.includes(q) ||
      p.meanings.some((m) => m.toLowerCase().includes(q)) ||
      p.usages.some(
        (u) =>
          u.pattern.toLowerCase().includes(q) ||
          u.explanation.toLowerCase().includes(q)
      )
    );
  });

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Particles Reference</h1>
        <p className="text-gray-900/50 dark:text-white/50 text-sm mt-1">
          Quick reference for all N5 particles — tap a card to see usage & examples
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search particle or meaning…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-gray-900 dark:text-white placeholder:text-gray-900/30 dark:placeholder:text-white/30 outline-none focus:border-red-600/50"
      />

      {filtered.length === 0 && (
        <p className="text-gray-900/30 dark:text-white/30 text-sm text-center py-6">No particles found.</p>
      )}

      {/* Particle cards */}
      <div className="space-y-3">
        {filtered.map((p) => {
          const isOpen = expanded === p.particle;
          return (
            <div
              key={p.particle}
              className="border border-gray-900/10 dark:border-white/10 rounded-2xl overflow-hidden"
            >
              {/* Card header */}
              <button
                onClick={() => setExpanded(isOpen ? null : p.particle)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-900/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 dark:bg-red-600/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 dark:text-red-400 font-bold text-xl">{p.particle}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.meanings.map((m) => (
                        <span key={m} className="text-gray-900 dark:text-white text-sm font-medium">
                          {m}
                        </span>
                      ))}
                    </div>
                    {p.readings && (
                      <div className="text-gray-900/40 dark:text-white/40 text-xs mt-0.5">{p.readings}</div>
                    )}
                  </div>
                </div>
                <svg
                  className={`text-gray-900/30 dark:text-white/30 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div className="px-5 pb-5 space-y-5 border-t border-gray-900/10 dark:border-white/10 pt-4">
                  {p.usages.map((u, i) => (
                    <div key={i} className="space-y-3">
                      {/* Pattern */}
                      <div className="flex items-start gap-2">
                        <span className="bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <div className="text-gray-900 dark:text-white font-bold font-mono">{u.pattern}</div>
                          <div className="text-gray-900/60 dark:text-white/60 text-sm mt-1 leading-relaxed">
                            {u.explanation}
                          </div>
                        </div>
                      </div>

                      {/* Examples */}
                      <div className="space-y-2 ml-7">
                        {u.examples.map((ex, j) => (
                          <div
                            key={j}
                            className="bg-gray-900/5 dark:bg-black/20 rounded-xl px-4 py-3 flex items-center justify-between gap-3 group"
                          >
                            <div>
                              <div className="text-gray-900 dark:text-white text-base">{ex.jp}</div>
                              <div className="text-gray-900/40 dark:text-white/40 text-sm mt-0.5">{ex.en}</div>
                            </div>
                            <button
                              onClick={() => speak(ex.jp)}
                              className="w-8 h-8 rounded-full bg-gray-900/10 dark:bg-white/10 hover:bg-red-600/30 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 opacity-60 group-hover:opacity-100"
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
