import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Notes from "./pages/notes/Notes";
import Project from "./pages/projects/Project";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/projects" element={<Project />} />
    </Routes>
  );
}
