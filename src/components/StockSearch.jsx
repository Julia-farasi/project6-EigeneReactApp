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
import "../styles/StockDisplay.css";
//--------
// MINIMALES override für dark-mode inline styles
const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#1e293b",
    borderColor: state.isFocused ? "#81e4a7" : "#334155",
    boxShadow: state.isFocused ? "0 0 0 2px #81e4a7" : "none",
    color: "white",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#1e293b",
    zIndex: 20,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#334155" : "#1e293b",
    color: state.isFocused ? "#81e4a7" : "#f1f5f9",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#81e4a7",
  }),
  singleValue: (base) => ({
    ...base,
    color: "##81e4a7",
  }),
};
//-------
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
    <div className="select-container">
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Wähle eine Aktie..."
        isClearable
        className="select-container"
        classNamePrefix="select"
        styles={customStyles}
      />
    </div>
  );
};

export default StockSearch;
