import '../assets/WestwoodSans-Regular.ttf';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import AppWrapper from './shared/AppWrapper';
import HomePage from '../pages/HomePage';
import AnooshkhaPage from '../pages/AnooshkhaPage';
import JenniferPage from '../pages/JenniferPage';
import ShreyaPage from '../pages/ShreyaPage';
import AnushaPage from '../pages/AnushaPage';
import MeganPage from '../pages/MeganPage'; 
// Import other person pages here

function App(): JSX.Element {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AnooshkhaPage" element={<AnooshkhaPage />} />
          <Route path="/JenniferPage" element={<JenniferPage />} />
          <Route path="/ShreyaPage" element={<ShreyaPage />} />
          <Route path="/AnushaPage" element={<AnushaPage />} />
          <Route path="/MeganPage" element={<MeganPage />} />
        </Routes>
    </Router>
  )
}

export default App;
