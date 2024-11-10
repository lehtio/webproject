import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cv from './pages/Cv';
import Studies from './pages/Studies';
import Exchange from './pages/Exchange';
import MaailmanSaa from './pages/MaailmanSaa';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Yläreunan navigointipalkki */}
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-item">Home</Link>
            </li>
            <li>
              <Link to="/cv" className="nav-item">Kuka?</Link>
            </li>
            <li>
              <Link to="/exchange" className="nav-item">Vaihtoblogi</Link>
            </li>
            <li>
              <Link to="/studies" className="nav-item">Opiskelukorneri</Link>
            </li>
            <li>
            <Link to="/MaailmanSaa" className="nav-item">Maailmansää</Link>
            </li>
          </ul>
        </nav>

        {/* Reitit eri sivuille */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/MaailmanSaa" element={<MaailmanSaa />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
