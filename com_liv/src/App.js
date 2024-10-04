import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Planos from './pages/Planos';

const App = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Planos" element={<Planos />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;

