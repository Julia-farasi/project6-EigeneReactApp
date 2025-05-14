import React, { useState } from "react";
import StockPriceDisplay from "./components/StockPriceDisplay";
import StockSearch from "./components/StockSearch";

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const handleSymbolSelect = (symbol) => {
    setSelectedSymbol(symbol);
  };

  return (
    <div>
      <h1>Finanzdaten-Viewer</h1>
      <StockSearch onSymbolSelect={handleSymbolSelect} />
      {selectedSymbol && <StockPriceDisplay symbol={selectedSymbol} />}
    </div>
  );
}

export default App;
