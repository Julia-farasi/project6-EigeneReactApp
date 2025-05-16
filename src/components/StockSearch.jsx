// import React, { useState } from "react";

// const StockSearch = ({ onSymbolSelect }) => {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSearch = () => {
//     if (inputValue) {
//       onSymbolSelect(inputValue.toUpperCase());
//       setInputValue("");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Aktien-Ticker eingeben (z.B. AAPL)"
//         className="flex justify-center"
//       />
//       <button onClick={handleSearch}>Suchen</button>
//     </div>
//   );
// };

// export default StockSearch;
//--------------------------------------
// import React, { useState } from "react";
// import "../styles/StockDisplay.css";

// const StockSearch = ({ onSymbolSelect }) => {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSearch = () => {
//     if (inputValue.trim()) {
//       onSymbolSelect(inputValue.trim().toUpperCase());
//       setInputValue("");
//     }
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Aktien-Ticker eingeben (z.B. AAPL)"
//       />
//       <button onClick={handleSearch}>Suchen</button>
//     </div>
//   );
// };

// export default StockSearch;
//---------------------
import React from "react";
import Select from "react-select";
import tickerMap from "../data/tickerMap.json";
import "../styles/ReactSelect.css";

const StockSearch = ({ onSymbolSelect }) => {
  const options = Object.entries(tickerMap).map(([symbol, name]) => ({
    value: symbol,
    label: `${symbol} - ${name}`,
  }));

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      onSymbolSelect(selectedOption.value);
    }
  };

  return (
    <div className="search-bar">
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Wähle eine Aktie..."
        isClearable
        className="select-container" // <-- ✨ Wichtig
        classNamePrefix="select"
      />
    </div>
  );
};

export default StockSearch;
