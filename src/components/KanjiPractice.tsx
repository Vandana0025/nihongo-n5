import { useEffect, useRef, useState, useCallback } from "react";
import HanziWriter from "hanzi-writer";
import { kanjiGroups } from "../data/kanji";
import type { KanjiItem } from "../data/kanji";

type Mode = "stroke-order" | "write";

const SIZE = 260;

// ─── Grid background SVG ─────────────────────────────────────────────────────

function KanjiGrid({ size }: { size: number }) {
  const h = size / 2;
  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <rect x="1" y="1" width={size - 2} height={size - 2}
        fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-900/20 dark:text-white/20" />
      <line x1={h} y1="0" x2={h} y2={size}
        stroke="currentColor" strokeWidth="0.8" strokeDasharray="5,4"
        className="text-gray-900/15 dark:text-white/15" />
      <line x1="0" y1={h} x2={size} y2={h}
        stroke="currentColor" strokeWidth="0.8" strokeDasharray="5,4"
        className="text-gray-900/15 dark:text-white/15" />
      <line x1="0" y1="0" x2={size} y2={size}
        stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,5"
        className="text-gray-900/10 dark:text-white/10" />
      <line x1={size} y1="0" x2="0" y2={size}
        stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,5"
        className="text-gray-900/10 dark:text-white/10" />
    </svg>
  );
}

// ─── Brush canvas (write mode) ────────────────────────────────────────────────

interface Point { x: number; y: number; t: number }

function BrushCanvas({ kanji }: { kanji: string }) {
  const outlineRef = useRef<HTMLDivElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const drawing    = useRef(false);
  const stroke     = useRef<Point[]>([]);
  const [hasStrokes, setHasStrokes] = useState(false);

  // Render ghost outline via hanzi-writer
  useEffect(() => {
    if (!outlineRef.current) return;
    outlineRef.current.innerHTML = "";
    HanziWriter.create(outlineRef.current, kanji, {
      width: SIZE,
      height: SIZE,
      padding: 12,
      showCharacter: false,
      showOutline: true,
      outlineColor: "rgba(150,150,150,0.18)",
      onLoadCharDataError: () => {},
    } as Parameters<typeof HanziWriter.create>[2]);
  }, [kanji]);

  // Clear canvas
  function clear() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasStrokes(false);
  }

  // ── Brush drawing helpers ──────────────────────────────────────────────────

  function getPos(e: React.PointerEvent<HTMLCanvasElement>): Point {
    const rect = canvasRef.current!.getBoundingClientRect();
    const dpr  = window.devicePixelRatio || 1;
    return {
      x: (e.clientX - rect.left) * dpr,
      y: (e.clientY - rect.top)  * dpr,
      t: Date.now(),
    };
  }

  // Draw a tapered, variable-width brush segment between two points.
  // Width is inversely proportional to speed: slow → thick, fast → thin.
  function drawSegment(
    ctx: CanvasRenderingContext2D,
    p0: Point,
    p1: Point,
    p2: Point,
  ) {
    const dt   = Math.max(1, p2.t - p0.t);
    const dx   = p2.x - p0.x;
    const dy   = p2.y - p0.y;
    const speed = Math.sqrt(dx * dx + dy * dy) / dt; // px/ms

    const MIN_W = 14;
    const MAX_W = 52;
    // Sigmoid-ish: fast strokes thin out, slow strokes are thick
    const width = MIN_W + (MAX_W - MIN_W) / (1 + speed * 1.8);

    ctx.lineWidth   = width;
    ctx.lineCap     = "round";
    ctx.lineJoin    = "round";
    ctx.strokeStyle = "#ef4444";
    ctx.shadowColor = "rgba(239,68,68,0.25)";
    ctx.shadowBlur  = width * 0.8;

    // Quadratic bezier through p1 using p0 and p2 as control points
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    ctx.stroke();
  }

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    drawing.current = true;
    stroke.current  = [getPos(e)];
    setHasStrokes(true);

    // No initial blot — let the first move segment establish width naturally
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    stroke.current.push(getPos(e));
    const pts = stroke.current;

    if (pts.length >= 3) {
      drawSegment(ctx, pts[pts.length - 3], pts[pts.length - 2], pts[pts.length - 1]);
    } else if (pts.length === 2) {
      // Just a short line for the first segment
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      ctx.lineTo(pts[1].x, pts[1].y);
      ctx.lineWidth   = 40;
      ctx.lineCap     = "round";
      ctx.strokeStyle = "#ef4444";
      ctx.shadowColor = "rgba(239,68,68,0.25)";
      ctx.shadowBlur  = 10;
      ctx.stroke();
    }
  }, []);

  const onPointerUp = useCallback(() => {
    drawing.current = false;
    stroke.current  = [];
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-900/10 dark:border-white/10"
        style={{ width: SIZE, height: SIZE }}
      >
        <KanjiGrid size={SIZE} />

        {/* Ghost outline */}
        <div ref={outlineRef} className="absolute inset-0 z-10 pointer-events-none" />

        {/* Brush canvas — device-pixel-ratio aware */}
        <canvas
          ref={canvasRef}
          width={SIZE * (window.devicePixelRatio || 1)}
          height={SIZE * (window.devicePixelRatio || 1)}
          style={{ width: SIZE, height: SIZE, touchAction: "none" }}
          className="absolute inset-0 z-20 cursor-crosshair"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={clear}
          disabled={!hasStrokes}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900/8 dark:bg-white/8 hover:bg-red-600/15 border border-gray-900/10 dark:border-white/10 text-gray-900 dark:text-white text-sm font-medium transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M19 6l-1 14H6L5 6M10 11v6M14 11v6M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/>
          </svg>
          Clear
        </button>
        <p className="text-gray-900/30 dark:text-white/40 text-xs">Draw strokes on the grid</p>
      </div>
    </div>
  );
}

// ─── Stroke order canvas (animation mode) ────────────────────────────────────

function StrokeOrderCanvas({ kanji }: { kanji: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef    = useRef<HanziWriter | null>(null);
  const [status, setStatus] = useState<"loading" | "animating" | "complete" | "error">("loading");

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";
    setStatus("loading");

    const writer = HanziWriter.create(containerRef.current, kanji, {
      width: SIZE,
      height: SIZE,
      padding: 12,
      showOutline: true,
      strokeColor: "#ef4444",
      radicalColor: "#f97316",
      outlineColor: "rgba(150,150,150,0.18)",
      showCharacter: true,
      strokeAnimationSpeed: 0.9,
      delayBetweenStrokes: 300,
      highlightOnComplete: true,
      highlightColor: "#22c55e",
      onLoadCharDataSuccess: () => {
        setStatus("animating");
        writer.animateCharacter({ onComplete: () => setStatus("complete") });
      },
      onLoadCharDataError: () => setStatus("error"),
    } as Parameters<typeof HanziWriter.create>[2]);

    writerRef.current = writer;
  }, [kanji]);

  function replay() {
    if (!writerRef.current) return;
    setStatus("animating");
    writerRef.current.animateCharacter({ onComplete: () => setStatus("complete") });
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-900/10 dark:border-white/10"
        style={{ width: SIZE, height: SIZE }}
      >
        <KanjiGrid size={SIZE} />
        {status === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-900/20 dark:text-white/20 text-sm z-20">
            Loading…
          </div>
        )}
        {status === "error" && (
          <div className="absolute inset-0 flex items-center justify-center text-red-500/60 text-sm text-center px-4 z-20">
            Stroke data unavailable.
          </div>
        )}
        <div ref={containerRef} className="relative z-10" />
      </div>

      {status !== "loading" && status !== "error" && (
        <button
          onClick={replay}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900/8 dark:bg-white/8 hover:bg-red-600/15 border border-gray-900/10 dark:border-white/10 text-gray-900 dark:text-white text-sm font-medium transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
          </svg>
          Replay
        </button>
      )}
    </div>
  );
}

// ─── Detail modal ─────────────────────────────────────────────────────────────

function KanjiDetail({ item, onClose }: { item: KanjiItem; onClose: () => void }) {
  const [mode, setMode] = useState<Mode>("stroke-order");

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white dark:bg-gray-950 rounded-2xl p-6 w-full max-w-sm space-y-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-5xl font-medium text-gray-900 dark:text-white leading-none">{item.kanji}</span>
            <div className="text-base font-semibold text-gray-900/70 dark:text-white/70 mt-1">{item.meaning}</div>
            <div className="flex flex-wrap gap-1 mt-2">
              {item.onyomi.map((r) => (
                <span key={r} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-300">{r}</span>
              ))}
              {item.kunyomi.map((r) => (
                <span key={r} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-green-500/10 text-green-700 dark:text-green-300">{r}</span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-900/8 dark:bg-white/8 hover:bg-gray-900/15 dark:hover:bg-white/15 flex items-center justify-center text-gray-500 dark:text-white/50 transition-colors cursor-pointer flex-shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Mode tabs */}
        <div className="flex gap-1 border-b border-gray-900/10 dark:border-white/10">
          {(["stroke-order", "write"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors cursor-pointer ${
                mode === m
                  ? "border-red-600 text-gray-900 dark:text-white"
                  : "border-transparent text-gray-900/40 dark:text-white/40 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {m === "stroke-order" ? "Stroke Order" : "Practice Writing"}
            </button>
          ))}
        </div>

        {mode === "stroke-order"
          ? <StrokeOrderCanvas key={item.kanji} kanji={item.kanji} />
          : <BrushCanvas key={item.kanji} kanji={item.kanji} />
        }
      </div>
    </div>
  );
}

// ─── Kanji selector grid ──────────────────────────────────────────────────────

export default function KanjiPractice() {
  const [selected, setSelected] = useState<KanjiItem | null>(null);
  const total = kanjiGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <div className="space-y-8">
        <p className="text-xs text-gray-900/40 dark:text-white/40 -mt-4">
          {total} kanji · tap any character to view stroke order or practice writing.
        </p>

        {kanjiGroups.map((group) => (
          <section key={group.category}>
            <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              {group.category}
              <span className="text-xs font-normal text-gray-900/30 dark:text-white/30">{group.items.length}</span>
            </h2>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-1.5">
              {group.items.map((item) => (
                <button
                  key={item.kanji}
                  onClick={() => setSelected(item)}
                  className="aspect-square rounded-xl bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 hover:bg-red-600/10 hover:border-red-500/40 active:scale-95 transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5"
                  title={item.meaning}
                >
                  <span className="text-xl font-medium text-gray-900 dark:text-white leading-none">{item.kanji}</span>
                  <span className="text-[8px] text-gray-900/30 dark:text-white/30 leading-none truncate px-1 w-full text-center">{item.meaning}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {selected && <KanjiDetail item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
