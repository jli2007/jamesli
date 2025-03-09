import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Notes from "./pages/notes/Notes";
import Project from "./pages/projects/Project";
import PostNote from "./pages/notes/PostNotes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/notes/:slug" element={<PostNote />}/>
    </Routes>
  );
}
