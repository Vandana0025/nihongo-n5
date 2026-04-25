// Voices ranked by quality — first match wins
const PREFERRED_VOICES = [
  "Google 日本語",                                    // Chrome on Mac/Windows — neural quality
  "Microsoft Nanami Online (Natural)",               // Edge — excellent neural
  "Microsoft Haruka Online (Natural)",               // Edge — alternative neural
  "Microsoft Keita Online (Natural)",                // Edge — male neural
  "O-Ren",                                           // macOS — better built-in
  "Kyoko",                                           // macOS — standard built-in
  "Microsoft Haruka Desktop",                        // Windows — offline fallback
];

let cachedVoice: SpeechSynthesisVoice | null | undefined = undefined; // undefined = not resolved yet

function pickBestJapaneseVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice !== undefined) return cachedVoice;

  const all = window.speechSynthesis.getVoices();
  if (!all.length) return null;   // not loaded yet — caller will retry after voiceschanged

  const japanese = all.filter((v) => v.lang.startsWith("ja"));

  for (const name of PREFERRED_VOICES) {
    const match = japanese.find((v) => v.name.includes(name));
    if (match) { cachedVoice = match; return match; }
  }

  // Generic fallback: prefer "online" or "natural" in the name
  const smart = japanese.find(
    (v) => /online|natural/i.test(v.name)
  );
  cachedVoice = smart ?? japanese[0] ?? null;
  return cachedVoice;
}

// Trigger voice list load as early as possible
if (typeof window !== "undefined" && window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    cachedVoice = undefined; // reset so next call re-picks with full list
    pickBestJapaneseVoice();
  }, { once: false });
}

export function useSpeech() {
  const speak = (text: string) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ja-JP";

    const voice = pickBestJapaneseVoice();
    if (voice) {
      utter.voice = voice;
      // Neural/online voices sound better at slightly faster rate
      const isNeural = /online|natural|google/i.test(voice.name);
      utter.rate  = isNeural ? 0.9 : 0.75;
      utter.pitch = 1.0;
    } else {
      // No voices loaded yet — retry after voiceschanged fires
      window.speechSynthesis.addEventListener(
        "voiceschanged",
        () => speak(text),
        { once: true }
      );
      return;
    }

    window.speechSynthesis.speak(utter);
  };

  return { speak };
}
