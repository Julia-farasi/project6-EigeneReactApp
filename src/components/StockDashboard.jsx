import StockSearch from "./StockSearch";
import StockPriceDisplay from "./StockPriceDisplay";
import "../styles/StockDisplay.css";

// StockDashboard zeigt alle ausgewählten Aktien als Karten an
const StockDashboard = () => {
  // Zustand zur Speicherung aller ausgewählten Tickersymbole
  const [symbols, setSymbols] = useState([]);
  // Funktion zur Aufnahme eines neuen Symbols (aus Dropdown)
  const handleSymbolSelect = (newSymbol) => {
    // Nur hinzufügen, wenn noch nicht in der Liste
    if (newSymbol && !symbols.includes(newSymbol)) {
      setSymbols((prev) => [...prev, newSymbol]);
    }
  };
  // 🐞 Debug-Ausgabe aller aktuellen Symbole
  console.log("here entlang", symbols);
  return (
    <div className="dashboard-container">
      {/*  Dropdown zur Symbolauswahl */}
      <StockSearch onSymbolSelect={handleSymbolSelect} />
      {/* Anzeige der Stock Cards */}
      <div className="stock-container">
        {symbols.map((symbol) => (
          // Jede Karte zeigt Kursinfos für ein Symbol
          <StockPriceDisplay key={symbol} symbol={symbol} />
        ))}
      </div>
    </div>
  );
};

export default StockDashboard;

// The Comments are created with help of Chatgpt
// symbols	Zustand mit Liste der ausgewählten Aktien-Ticker (z. B. "AAPL")
// handleSymbolSelect	Wird aufgerufen, wenn du im Dropdown ein neues Symbol auswählst
// StockSearch	Dropdown mit react-select
// StockPriceDisplay	Zeigt die Kursdaten + Chart + Stern pro Aktie
// .stock-container	Layout-Wrapper für alle Karten im Grid
