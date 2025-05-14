import React, { useEffect, useState } from "react";

const StockPriceDisplay = ({ symbol }) => {
  const [data, setData] = useState(null);
  const API_KEY = "27c5f7bf1c6b4c07a032c2a0954ff34e"; // Ersetze mit deinem API-Schlüssel

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}`
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, [symbol]);

  if (!data) return <p>Lade Daten...</p>;

  return (
    <div>
      <h2>{symbol} Aktienkurs</h2>
      <p>Aktueller Kurs: {data.values[0].close} €</p>
      <p>Tageshoch: {data.values[0].high} €</p>
      <p>Tagestief: {data.values[0].low} €</p>
      <p>Handelsvolumen: {data.values[0].volume}</p>
    </div>
  );
};

export default StockPriceDisplay;
