import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import "../styles/StockDisplay.css";

const SymbolSearch = ({ onSymbolSelect }) => {
  const [options, setOptions] = useState([]);
  console.log(InputValue);
  const handleInputChange = async (inputValue) => {
    if (!inputValue) return;

    try {
      const res = await axios.get(
        `https://api.twelvedata.com/symbol_search?symbol=${inputValue}&apikey=27c5f7bf1c6b4c07a032c2a0954ff34e`
      );
      console.log("Hier bin ich", res.data.data);
      const parsedOptions = res.data.data.map((entry) => ({
        label: `${entry.name} (${entry.symbol})`,
        value: entry.symbol,
      }));

      setOptions(parsedOptions);
    } catch (error) {
      console.error("Fehler beim Symbol-Suchen:", error);
    }
  };

  const handleChange = (selected) => {
    if (selected) {
      onSymbolSelect({
        symbol: selected.value,
        name: selected.label.split(" (")[0],
      });
    }
  };

  return (
    <div className="symbol-select">
      <Select
        onInputChange={handleInputChange}
        onChange={handleChange}
        options={options}
        placeholder="Aktienname oder Ticker suchen..."
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default SymbolSearch;
