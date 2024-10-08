import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cv from './pages/Cv';
import Studies from './pages/Studies';
import './App.css'; // Tuodaan CSS

// App.jsx hoitaa reitityksestä ja rakenteesta

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigointivalikko */}
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-item">Home</Link>
            </li>
            <li>
              <Link to="/cv" className="nav-item">CV</Link>
            </li>
            <li>
              <Link to="/studies" className="nav-item">Studies</Link>
            </li>
          </ul>
        </nav>

        {/* Reitit eri sivuille */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/studies" element={<Studies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
