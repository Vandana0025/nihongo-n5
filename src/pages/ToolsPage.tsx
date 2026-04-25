import { Link } from "react-router-dom";

const tools = [
  {
    to: "/sentence-builder",
    title: "Sentence Builder",
    description: "Tap word tiles to arrange correct Japanese sentences",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/>
      </svg>
    ),
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
  {
    to: "/flashcards",
    title: "Flashcards",
    description: "Drill vocabulary chapter by chapter with flip cards",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
      </svg>
    ),
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
  {
    to: "/listening",
    title: "Listening Practice",
    description: "Listen to N5 dialogues and answer comprehension questions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    ),
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    to: "/conjugation",
    title: "Verb Conjugation",
    description: "See all conjugated forms for any N5 verb",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
      </svg>
    ),
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    to: "/particles",
    title: "Particles Reference",
    description: "Quick reference for all N5 particles with examples",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    to: "/writing",
    title: "Writing Practice",
    description: "Practice stroke order for hiragana and katakana",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
      </svg>
    ),
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    to: "/counters",
    title: "Counters",
    description: "Japanese counting suffixes — ほん、まい、だい and more",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h4v4H3z"/><path d="M10 3h4v4h-4z"/><path d="M17 3h4v4h-4z"/>
        <path d="M3 10h4v4H3z"/><path d="M10 10h4v4h-4z"/><path d="M17 10h4v4h-4z"/>
        <path d="M3 17h4v4H3z"/><path d="M10 17h4v4h-4z"/>
      </svg>
    ),
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tools</h1>
        <p className="text-gray-900/50 dark:text-white/50 text-sm mt-1">Practice tools and reference guides</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.to}
            to={tool.to}
            className="bg-gray-900/5 dark:bg-white/5 hover:bg-gray-900/10 dark:hover:bg-white/10 border border-gray-900/10 dark:border-white/10 hover:border-gray-900/20 dark:hover:border-white/20 rounded-2xl p-5 flex gap-4 items-start transition-colors group"
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${tool.color}`}>
              {tool.icon}
            </div>
            <div>
              <div className="text-gray-900 dark:text-white font-semibold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {tool.title}
              </div>
              <div className="text-gray-900/50 dark:text-white/50 text-sm mt-0.5 leading-snug">
                {tool.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
