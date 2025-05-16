import React, { useState } from "react";
import StockSearch from "./StockSearch";
import StockPriceDisplay from "./StockPriceDisplay";
import "../styles/StockDisplay.css";

const StockDashboard = () => {
  const [symbols, setSymbols] = useState([]);

  const handleSymbolSelect = (newSymbol) => {
    // Nur hinzufügen, wenn nicht schon vorhanden
    if (!symbols.includes(newSymbol)) {
      setSymbols((prev) => [...prev, newSymbol]);
    }
  };

  return (
    <div className="dashboard-container">
      <StockSearch onSymbolSelect={handleSymbolSelect} />
      <div className="stock-container">
        {symbols.map((symbol) => (
          <StockPriceDisplay key={symbol} symbol={symbol} />
        ))}
      </div>
    </div>
  );
};

export default StockDashboard;
