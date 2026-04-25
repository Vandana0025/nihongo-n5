import { Link, useLocation } from "react-router-dom";

interface NavProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Nav({ theme, onToggleTheme }: NavProps) {
  const { pathname } = useLocation();

  const linkClass = (paths: string[]) => {
    const active = paths.some((p) => pathname === p || (p !== "/" && pathname.startsWith(p)));
    return `flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
      active
        ? "bg-red-600/10 text-red-600 dark:text-red-400"
        : "text-gray-900/50 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/5"
    }`;
  };

  return (
    <header className="border-b border-gray-900/10 dark:border-white/10 px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">日</div>
        <div className="hidden sm:block">
          <div className="text-gray-900 dark:text-white font-bold tracking-tight leading-none">JLPT N5</div>
          <div className="text-gray-900/30 dark:text-white/30 text-xs">Minna no Nihongo</div>
        </div>
      </Link>

      {/* Nav links */}
      <nav className="flex items-center gap-1">
        <Link to="/" className={linkClass(["/", "/lesson"])}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          </svg>
          <span>Lessons</span>
        </Link>

        <Link to="/tools" className={linkClass(["/tools", "/flashcards", "/listening", "/conjugation", "/particles", "/writing", "/counters", "/sentence-builder"])}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          <span>Tools</span>
        </Link>

        <Link to="/progress" className={linkClass(["/progress"])}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
          <span>Progress</span>
        </Link>
      </nav>

      {/* Theme toggle */}
      <button
        onClick={onToggleTheme}
        className="w-8 h-8 rounded-full bg-gray-900/5 dark:bg-white/10 hover:bg-gray-900/10 dark:hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer text-gray-600 dark:text-white/70"
        title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>
        )}
      </button>
    </header>
  );
}
