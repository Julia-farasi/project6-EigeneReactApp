# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Verbesserungen to do for me:

- Lass den StrictMode drin
- Bei Tailwind 4 andere import Regel in der index.css
- header (navbar) und Home Component in eigne Dateien.
- Nutze eher ein Layout als Elemente außerhalb der Routes
- Link statt NavLink, wenn du nicht das isActive für das styling nutzt
- /pages Ordner
- API keys in die .env
- StockPriceDiplay.jsx: Mogliche Alternative zu [...data.values].reversed(): data.values.toReversed()
- StockPriceDiplay.jsx: chartOptions sind nicht dynamisch und können daher außerhalb der Component sein. (Wie customStyles in StockSearch)
- FavoritesPage.jsx: useEffect nicht unbedingt nötig, useState kann zur initialisierung auch eine Funktion ausführen, die den localStorage checkt
