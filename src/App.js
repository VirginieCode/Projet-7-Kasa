
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Acceuil/Accueil';
import About from './components/APropos/APropos';
import Logement from './components/Acceuil/Logement';
import Erreur from './components/Erreur404/Erreur404';
import NavBar from './components/Acceuil/BarreNavigation/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/APropos' element={<About />} />
        <Route path='/Logement/:id' element={<Logement />} />
        <Route path='*' element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
