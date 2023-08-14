import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Views/Home";
import Admin from "./Views/Admin";
import Landing from "./Views/Landing";
import FormLogin from "./Views/FormLogin";
function App() {
  return (
    <div className="App back">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/administrador" element={<FormLogin />} />
      </Routes>
    </div>
  );
}

export default App;
