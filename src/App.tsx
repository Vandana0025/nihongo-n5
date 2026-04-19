import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import LessonList from "./pages/LessonList";
import LessonPage from "./pages/LessonPage";
import QuizPage from "./pages/QuizPage";
import ProgressPage from "./pages/ProgressPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0f0f13] text-white">
        <Nav />
        <Routes>
          <Route path="/" element={<LessonList />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="/lesson/:id/quiz" element={<QuizPage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
