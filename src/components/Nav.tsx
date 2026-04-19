import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">日</div>
        <div>
          <div className="text-white font-bold tracking-tight">JLPT N5</div>
          <div className="text-white/30 text-xs">Minna no Nihongo</div>
        </div>
      </Link>
      <Link to="/progress" className="text-white/50 hover:text-white text-sm transition-colors">
        My Progress
      </Link>
    </header>
  );
}
