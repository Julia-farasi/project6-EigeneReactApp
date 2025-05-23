import { useEffect, useState } from "react";
import StockPriceDisplay from "../components/StockPriceDisplay";
import "../styles/StockDisplay.css";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const clearFavorites = () => {
    localStorage.removeItem("favorites"); // 💾 Lösche LocalStorage
    setFavorites([]); // 🔁 Leere State sofort
  };

  return (
    <div className="favorites-page">
      <button onClick={clearFavorites} className="button-clear">
        Alle Favoriten löschen 🧹
      </button>
      <h1 className="text-4xl font-bold text-center mb-10">⭐ Favoriten</h1>
      <div className="stock-container">
        {favorites.length === 0 ? (
          <p className="text-center text-gray-400">
            Keine Favoriten gespeichert.
          </p>
        ) : (
          favorites.map((symbol) => (
            <StockPriceDisplay key={symbol} symbol={symbol} />
          ))
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;

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
