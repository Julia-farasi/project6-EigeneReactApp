//  React Router Komponenten importieren
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StockDashboard from "./components/StockDashboard";
import "./styles/NavBar.css";
import FavoritesPage from "./components/FavoritesPage";
// Begrüßungsbild importieren
import welcomeImage from "./data/1.png";
// Hauptkomponente der App – enthält Router + Navigation + Seitenrouten
function App() {
  return (
    <Router>
      <header className="navbar">
        <h1>Finanzdaten-Viewer</h1>
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/stocks">Stock Dashboard</Link>
          <Link to="/favorite">Favoriten</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<StockDashboard />} />
        <Route path="/favorite" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}
//  Home-Komponente mit Begrüßungstext und Bild
const Home = () => (
  <div className="text-center mt-10">
    <h2>Willkommen zum Finanzdaten-Viewer 📈</h2>
    <p className="pb-4">Nutze das Menü, um Aktienkurse zu analysieren.</p>
    <Link to="/stocks">
      <img
        src={welcomeImage}
        alt="Begrüßungsbild"
        className="mx-auto rounded-lg shadow-md welcome-img hover:scale-105 transition-transform duration-300 cursor-pointer"
      />
    </Link>
  </div>
);

export default App;

// The Comments are created with help of Chatgpt for better understanding
