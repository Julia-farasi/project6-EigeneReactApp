// 📦 React Router Komponenten importieren
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import StockDashboard from "./components/StockDashboard";
import "./styles/NavBar.css";
import FavoritesPage from "./components/FavoritesPage";
// 🖼 Begrüßungsbild importieren
import welcomeImage from "../public/1.png";
// 🧠 Hauptkomponente der App – enthält Router + Navigation + Seitenrouten
function App() {
  return (
    <Router>
      <header className="navbar">
        <h1>Finanzdaten-Viewer</h1>
        <nav className="navbar-links">
          <NavLink
            to="/"
            // className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/stocks"
            // className={({ isActive }) => (isActive ? "active" : "")}
          >
            Stock Dashboard
          </NavLink>
          <NavLink to="/favorite">Favoriten</NavLink>
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
// 🏠 Home-Komponente mit Begrüßungstext und Bild
const Home = () => (
  <div className="text-center mt-10">
    <h2>Willkommen zum Finanzdaten-Viewer 📈</h2>
    <p>Nutze das Menü, um Aktienkurse zu analysieren.</p>
    <img
      src={welcomeImage}
      alt="Begrüßungsbild"
      className="mx-auto rounded-lg shadow-md welcome-img"
    />
    {/* <div className="image">
      <img src="./src/1.png" alt="Image"></img>
    </div> */}
  </div>
);

export default App;
