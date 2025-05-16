// import React, { useEffect, useState } from "react";

// const StockPriceDisplay = ({ symbol }) => {
//   const [data, setData] = useState(null);
//   const API_KEY = "27c5f7bf1c6b4c07a032c2a0954ff34e"; // Ersetze mit deinem API-Schlüssel

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}`
//       );
//       const result = await response.json();
//       setData(result);
//     };
//     fetchData();
//   }, [symbol]);

//   if (!data) return <p>Lade Daten...</p>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//       <h2>{symbol} Aktienkurs</h2>
//       <div className="text-red">Aktueller Kurs: {data.values[0].close} €</div>
//       <div className="">Tageshoch: {data.values[0].high} €</div>
//       <div>Tagestief: {data.values[0].low} €</div>
//       <div>Handelsvolumen: {data.values[0].volume}</div>
//     </div>
//   );
// };

// export default StockPriceDisplay;
// import React, { useEffect, useState } from "react";
// import "../styles/StockDisplay.css";

// const StockPriceDisplay = ({ symbol }) => {
//   const [data, setData] = useState(null);
//   const API_KEY = "27c5f7bf1c6b4c07a032c2a0954ff34e"; // Replace with your API key

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}`
//         );
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         console.error("Fehler beim Laden der Daten:", err);
//       }
//     };
//     fetchData();
//   }, [symbol]);

//   if (!data) return <p className="loading">📡 Lade Daten...</p>;

//   const priceData = data.values[0];

//   return (
//     <div className="stock-container">
//       <div className="stock-card">
//         <h2>{symbol} Aktienkurs</h2>
//         <p>
//           <strong>Aktueller Kurs:</strong> {priceData.close} $
//         </p>
//         <p>
//           <strong>Tageshoch:</strong> {priceData.high} $
//         </p>
//         <p>
//           <strong>Tagestief:</strong> {priceData.low} $
//         </p>
//         <p>
//           <strong>Handelsvolumen:</strong> {priceData.volume} $
//         </p>
//       </div>
//     </div>
//   );
// };

// export default StockPriceDisplay;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/StockDisplay.css";

const StockPriceDisplay = ({ symbol }) => {
  const [data, setData] = useState(null);
  const API_KEY = "27c5f7bf1c6b4c07a032c2a0954ff34e";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}`
        );
        setData(response.data);
      } catch (err) {
        console.error("Fehler beim Laden der Daten:", err);
      }
    };
    fetchData();
  }, [symbol]);
  console.log("Neu hier", data);
  if (!data || !data.values) return null;

  const priceData = data.values[0];

  return (
    <div className="stock-card">
      <h2>{symbol} Aktienkurs</h2>
      <p>
        <strong>Aktueller Kurs:</strong> {priceData.close} $
      </p>
      <p>
        <strong>Tageshoch:</strong> {priceData.high} $
      </p>
      <p>
        <strong>Tagestief:</strong> {priceData.low} $
      </p>
      <p>
        <strong>Handelsvolumen:</strong> {priceData.volume} $
      </p>
    </div>
  );
};

export default StockPriceDisplay;
