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

import React, { useState } from "react";
import "../styles/StockDisplay.css";

const StockSearch = ({ onSymbolSelect }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSymbolSelect(inputValue.trim().toUpperCase());
      setInputValue("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Aktien-Ticker eingeben (z.B. AAPL)"
      />
      <button onClick={handleSearch}>Suchen</button>
    </div>
  );
};

export default StockSearch;
