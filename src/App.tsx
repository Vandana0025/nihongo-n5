import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import LessonList from "./pages/LessonList";
import LessonPage from "./pages/LessonPage";
import QuizPage from "./pages/QuizPage";
import ProgressPage from "./pages/ProgressPage";
import WritingPage from "./pages/WritingPage";
import CountersPage from "./pages/CountersPage";
import FlashcardsPage from "./pages/FlashcardsPage";
import ListeningPage from "./pages/ListeningPage";
import ConjugationPage from "./pages/ConjugationPage";
import ParticlesPage from "./pages/ParticlesPage";
import ToolsPage from "./pages/ToolsPage";
import SentenceBuilderPage from "./pages/SentenceBuilderPage";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f13] text-gray-900 dark:text-white">
        <Nav theme={theme} onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<LessonList />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="/lesson/:id/quiz" element={<QuizPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/counters" element={<CountersPage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/listening" element={<ListeningPage />} />
          <Route path="/conjugation" element={<ConjugationPage />} />
          <Route path="/particles" element={<ParticlesPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/sentence-builder" element={<SentenceBuilderPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
