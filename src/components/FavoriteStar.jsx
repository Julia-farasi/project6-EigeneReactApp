import React, { useEffect, useState } from "react";

//  Holt Favoritenliste aus localStorage (oder leeres Array wenn nichts gespeichert ist)
const getFavorites = () => {
  const stored = localStorage.getItem("favorites");
  return stored ? JSON.parse(stored) : [];
};
//  Speichert übergebenes Array als Favoritenliste im localStorage
const setFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
//  Komponente zum Anzeigen + Verwalten des Favoritensterns
const FavoriteStar = ({ symbol }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  //  Beim Laden prüfen: Ist das aktuelle Symbol in der gespeicherten Favoritenliste?
  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.includes(symbol));
  }, [symbol]);
  //  Favoritenstatus toggeln (hinzufügen oder entfernen)
  const toggleFavorite = () => {
    const favorites = getFavorites();

    const updatedFavorites = favorites.includes(symbol)
      ? favorites.filter((fav) => fav !== symbol) //  Entfernen
      : [...favorites, symbol]; //  Hinzufügen
    // console.log("Hallo", updatedFavorites);
    setFavorites(updatedFavorites); //  Aktualisiere localStorage
    setIsFavorite(!isFavorite); //  Toggle Zustand für Stern
  };

  return (
    <button
      onClick={toggleFavorite} //  Klick: Toggle Favoritenstatus
      style={{
        fontSize: "24px",
        color: isFavorite ? "red" : "gray", // rot oder grau je nach Status
        background: "none",
        border: "none",
        cursor: "pointer",
        float: "right",
      }}
      title="Als Favorit markieren"
    >
      ★ {/* Unicode Sternsymbol */}
    </button>
  );
};

export default FavoriteStar;

// Die Kommentare sind mit Hilfe von Chatgpt eingefügt zum Verständnis
// getFavorites()	Liest die aktuelle Favoritenliste aus dem Speicher
// setFavorites()	Speichert ein neues Favoritenarray
// useEffect()	Prüft beim Rendern, ob das Symbol favorisiert ist
// toggleFavorite()	Fügt das Symbol hinzu oder entfernt es
// ★ Button	Zeigt visuell den Status (rot/grau) + macht klickbar
// Vorteile dieser Lösung
// 🔁 Synchron mit LocalStorage
// ✅ Unabhängig wiederverwendbar auf jeder Karte
// ⚡ Reaktiv: UI ändert sich sofort
// 💾 Persistenz: bleibt gespeichert nach Reload
