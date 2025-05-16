// import React, { useState } from "react";
// import StockPriceDisplay from "./components/StockPriceDisplay";
// import StockSearch from "./components/StockSearch";
// import StockDashboard from "./components/StockDashboard";

// function App() {
//   const [selectedSymbol, setSelectedSymbol] = useState();

//   const handleSymbolSelect = (symbol) => {
//     setSelectedSymbol(symbol);
//   };
//   console.log("Here bin ich", selectedSymbol);
//   return (
//     <>
//       <h1 className="text-3xl font-bold underline text-center">
//         Finanzdaten-Viewer
//       </h1>
//       <StockSearch onSymbolSelect={handleSymbolSelect} />
//       {selectedSymbol && <StockPriceDisplay symbol={selectedSymbol} />}

//       {/* {selectedSymbol.length > 0 ? (
//         <div className="diary-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//           {selectedSymbol.map((entry, index) => (
//             <div
//               key={index}
//               className="flex flex-col mx-auto items-start   rounded-lg  bg-slate-200 w-[300px] cursor-pointer"
//             >
//               <div className="p-4">Aktie: {entry.meta.symbol}</div>
//               <div className="text-lg md:text-xl font-bold p-4">
//                 Währung: {entry.meta.currency}
//               </div>
//               <div className="text-lg md:text-xl font-bold p-4">
//                 Aktueller Kurs: {entry.values.close}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center m-8">
//           Keine Einträge vorhanden. Füge welche hinzu!
//         </p> // Fallback
//       )} */}
//     </>
//   );
// }

// export default App;
// //   <>
// //       <h1>Finanzdaten-Viewer</h1>
// //       {/* Hier wird StockSearch mit der Funktion handleSymbolSelect verknüpft */}
// //       {/* Stelle sicher, dass StockSearch die onSymbolSelect-Prop korrekt verwendet */}
// //       <StockSearch onSymbolSelect={handleSymbolSelect} />

// //       {/* Wenn ein Symbol ausgewählt wurde, zeige StockPriceDisplay */}
// //       {/* Stelle sicher, dass StockPriceDisplay das Symbol korrekt verwendet */}
// //       {selectedSymbol && <StockPriceDisplay symbol={selectedSymbol} />}

// //       <div className="diary-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
// //         {/* Wenn selectedSymbol ein Array ist, verwende .map() */}
// //         {Array.isArray(selectedSymbol) && selectedSymbol.map((entry, index) => (
// //           <div key={index} className="flex flex-col mx-auto items-start rounded-lg bg-slate-200 w-[300px] cursor-pointer">
// //             <div className="p-4">{entry.meta.symbol}</div>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // }

// // export default App;
// import React from "react";
// import StockDashboard from "./components/StockDashboard";

// function App() {
//   return (
//     <>
//       <h1 className="text-3xl font-bold text-center font-segoe mt-4">
//         Finanzdaten-Viewer
//       </h1>
//       <StockDashboard />
//     </>
//   );
// }

// export default App;
//------------------
// src/App.jsx
// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import StockDashboard from "./components/StockDashboard";
import "./styles/NavBar.css";

function App() {
  return (
    <Router>
      <header className="navbar">
        <h1>Finanzdaten-Viewer</h1>
        <nav className="navbar-links">
          <NavLink
            to="/"
            // className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/stocks"
            // className={({ isActive }) => (isActive ? "active" : "")}
          >
            Stock Dashboard
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<StockDashboard />} />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <div className="text-center mt-10">
    <h2>Willkommen zum Finanzdaten-Viewer 📈</h2>
    <p>Nutze das Menü, um Aktienkurse zu analysieren.</p>
  </div>
);

export default App;
