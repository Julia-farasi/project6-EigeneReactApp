import { useEffect, useState } from "react";
import StockPriceDisplay from "../components/StockPriceDisplay";
import "../styles/StockDisplay.css";
// Favoriten-Seite mit LocalStorage-Anbindung
function FavoritesPage() {
  // State für gespeicherte Favoriten (Ticker-Symbole wie "AAPL")
  const [favorites, setFavorites] = useState([]);
  // Beim ersten Rendern: Favoriten aus localStorage laden
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);
  // Funktion: löscht alle Favoriten aus localStorage & UI
  const clearFavorites = () => {
    localStorage.removeItem("favorites"); // Lösche LocalStorage
    setFavorites([]); // Leere State sofort
  };

  return (
    <div className="favorites-page">
      {/* Button zum Leeren aller Favoriten */}
      <button onClick={clearFavorites} className="button-clear">
        Alle Favoriten löschen 🧹
      </button>
      {/* Überschrift */}
      <h1 className="text-4xl font-bold text-center mb-10">⭐ Favoriten</h1>
      {/* Alle gespeicherten Aktienkarten anzeigen */}
      <div className="stock-container">
        {favorites.length === 0 ? (
          // Wenn kein Inhalt vorhanden
          <p className="text-center text-gray-400">
            Keine Favoriten gespeichert.
          </p>
        ) : (
          // Ansonsten wird für jedes Symbol eine eigene Karte angezeigt
          favorites.map((symbol) => (
            <StockPriceDisplay key={symbol} symbol={symbol} />
          ))
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;

// Die Kommentare sind mit Hilfe von Chatgpt verbessert
// useEffect	Lädt einmalig alle Favoriten beim Start
// clearFavorites	Löscht die Daten aus dem Browser und leert die Anzeige
// favorites.map(...)	Rendert alle gespeicherten Favoriten mit <StockPriceDisplay />
// localStorage	Persistiert die Favoriten zwischen Seitenaufrufen
// .stock-container	Grid-Layout für Aktienkarten

// import { useEffect, useState } from "react";
// import "../styles/StockDisplay.css";

// function FavoritesPage() {
//   const [favorite, setFavorite] = useState([]);

//   useEffect(() => {
//     const dataFromLocalStorage =
//       JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorite(dataFromLocalStorage);
//   }, []);
//   console.log("Check hier", favorite);
//   return (
//     <>
//       <h1 className="text-4xl font-bold text-center mb-8">Favoriten Seite</h1>
//       {favorite.map(
//         (entry, index) => console.log("Hallo hier", entry[0])
//         // <div key={index} className="stock-card"></div>
//         // <div>{entry}</div>
//       )}
//     </>
//   );
// }
// export default FavoritesPage;
