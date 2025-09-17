import "./App.css";
import NavBar from "./components/NavBar";
import Favs from "./pages/Favs";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Favs" element={<Favs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
