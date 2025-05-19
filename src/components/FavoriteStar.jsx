import React, { useEffect, useState } from "react";

// 💾 LocalStorage-Utils
const getFavorites = () => {
  const stored = localStorage.getItem("favorites");
  return stored ? JSON.parse(stored) : [];
};

const setFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const FavoriteStar = ({ symbol }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.includes(symbol));
  }, [symbol]);

  const toggleFavorite = () => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.includes(symbol)
      ? favorites.filter((fav) => fav !== symbol)
      : [...favorites, symbol];

    setFavorites(updatedFavorites);
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      style={{
        fontSize: "24px",
        color: isFavorite ? "red" : "gray",
        background: "none",
        border: "none",
        cursor: "pointer",
        float: "right",
      }}
      title="Als Favorit markieren"
    >
      ★
    </button>
  );
};

export default FavoriteStar;
