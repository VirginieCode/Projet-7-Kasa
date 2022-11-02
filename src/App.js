import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Acceuil/Accueil";
import About from "./components/APropos/APropos";
import Logement from "./components/Logement/Logement";
import Erreur from "./components/Erreur404/Erreur404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acceuil" element={<Home />} />
        <Route path="/APropos" element={<About />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
