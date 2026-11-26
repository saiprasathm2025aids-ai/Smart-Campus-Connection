import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Project from "./pages/project";
import Tasks from "./pages/tasks";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;