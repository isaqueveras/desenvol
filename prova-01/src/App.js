import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import CreateStudent from "./components/students/CreateStudent";
import EditStudent from "./components/students/EditStudent";
import ListStudent from "./components/students/ListStudent";

export default function App() {
  return (
    <div className="p-0 bg-dark">
      <Menu theme="dark" />
      <div className="container d-flex w-100 h-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="student/create" element={<CreateStudent />} />
          <Route path="student/list" element={<ListStudent />} />
          <Route path="student/edit" element={<EditStudent />} />
        </Routes>
      </div>
    </div>
  );
}
