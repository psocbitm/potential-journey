import logo from "./logo.svg";
import "./App.css";
import Particle from "./components/particleJS/Particle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Newspage from "./pages/Newspage/Newspage";
function App() {
  return (
    <BrowserRouter>
      <div className="Particle">
        <Particle />
      </div>
      <div className="app-container position-absolute">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<Newspage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
