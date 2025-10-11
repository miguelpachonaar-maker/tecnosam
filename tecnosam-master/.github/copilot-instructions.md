# Copilot instructions for this repository

- Project type: Create React App (see `package.json` - uses `react-scripts`).
- Entry point: `src/index.js` boots `src/indexApp.jsx` which mounts the React tree to `#root` in `public/index.html`.

What to prioritize when editing code:
- Keep changes small and localized to a single component or CSS file.
- Match existing file conventions: components in `src/` use default exports (e.g., `src/Inicio/Inicio.jsx` exports default component `inicio`).
- Styling is plain CSS under `src/estilos/` and imported by components (e.g., `import './estilos/inicio.css'`).

Build & dev workflows (explicit commands):
- Start dev server: `npm start` (runs `react-scripts start`, serves at http://localhost:3000).
- Run tests: `npm test` (creates interactive test runner via `react-scripts test`).
- Production build: `npm run build` (outputs to `build/`).

Project-specific notes and patterns:
- This repo was scaffolded with Create React App; avoid ejecting unless necessary (`npm run eject` is irreversible).
- Files use JSX and modern React (React 19). Use `React.StrictMode` as in `src/index.js`.
- Project uses default `react-scripts` tooling; prefer those scripts for consistency.
- The app currently renders a single top-level component `IndexApp` (in `src/indexApp.jsx`) which simply returns `<Inicio />` inside a `body` tag — avoid adding additional `body` tags inside components. Prefer returning element trees rooted in `div` or fragments.

Common fixes and quick patterns:
- If a component fails to render, check that the file default-export matches the import (e.g., `import Inicio from './Inicio/Inicio.jsx'` and `export default inicio;` — note: the exported function name `inicio` is lowercase; keep default export but prefer PascalCase component names for new components).
- CSS imports should use relative paths from the importing file (see `src/indexApp.jsx` and `src/Inicio/Inicio.jsx`).

Files to inspect for context when making changes:
- `package.json` — scripts & dependencies.
- `public/index.html` — root element `id="root"`.
- `src/index.js`, `src/indexApp.jsx`, `src/Inicio/Inicio.jsx`, `src/estilos/*.css`.

Examples to follow:
- `src/Inicio/Inicio.jsx` shows a minimal component: import CSS, return JSX fragment, export default.
- `src/index.js` shows root mounting pattern using `ReactDOM.createRoot`.

Edge cases and gotchas for AI agents:
- Component function names may be lowercase (e.g., `inicio`) but JSX conventions expect PascalCase; do not change exported names without also updating imports.
- The project relies on `react-scripts@5.0.1`; do not upgrade dependencies unless you update build scripts/tests and verify locally.

If unsure, make minimal, reversible edits and include a short test plan in your PR (how to run `npm start` and what to check).

Please ask for clarification if any component or workflow is unclear.
