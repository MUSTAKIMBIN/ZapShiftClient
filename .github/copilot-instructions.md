<!-- Copilot / AI agent instructions for ZapShiftClient -->

## Purpose

Concise guidance for AI coding agents to be productive in this repo immediately.

## Big picture
- Project: Vite + React single-page app (ESM). See `package.json` and `vite.config.js`.
- Runtime: Browser app mounted at `#root` by `src/main.jsx` which renders `src/App.jsx`.
- Assets: `public/` and root-level assets are served at `/` (e.g. `/vite.svg`); `src/assets/` stores component-local assets.

## Key files (read first)
- `package.json` — scripts (`dev`, `build`, `preview`, `lint`) and deps (React 19, Vite).
- `vite.config.js` — contains `@vitejs/plugin-react` and default Vite config.
- `index.html` — root HTML, ensures `#root` exists and loads `/src/main.jsx`.
- `src/main.jsx` — React bootstrap (StrictMode, `createRoot`).
- `src/App.jsx` — example component; HMR-friendly patterns and asset imports.
- `eslint.config.js` — ESLint setup; note `no-unused-vars` is configured to ignore names that match `^[A-Z_]`.

## Developer workflows (explicit)
- Install deps: `npm install`.
- Start dev server (HMR): `npm run dev` (Vite dev server, default port 5173).
- Build: `npm run build`.
- Preview built output: `npm run build && npm run preview`.
- Lint code: `npm run lint` (uses `eslint.config.js`).

Copy-paste commands:
```
npm install
npm run dev
npm run build && npm run preview
npm run lint
```

## Conventions & patterns specific to this repo
- ESM: `package.json` includes `"type": "module"` — prefer `import`/`export` syntax.
- Asset imports: Assets inside `src` are imported via relative paths; public/root assets referenced with absolute `/` paths (e.g. `/vite.svg`).
- HMR & editing: Files under `src/` use small components and are optimized for Vite HMR — prefer in-place edits to keep Fast Refresh working.
- Lint rule nuance: `eslint.config.js` sets `no-unused-vars` with `varsIgnorePattern: '^[A-Z_]'` — uppercase names or `_` prefixes may intentionally be unused.

## Integration points & external deps
- Vite dev server: local dev, asset resolution, HMR.
- `@vitejs/plugin-react` — enables JSX and Fast Refresh.
- No tests or backend in this repo — changes should be verified in the browser via `npm run dev` or `preview`.

## Typical small tasks and examples
- Add a new component: create `src/components/YourComponent.jsx`, import in `src/App.jsx`, run `npm run dev` to verify HMR.
- Add an image asset: put PNG/SVG in `src/assets/` and import with `import logo from './assets/logo.svg'`.
- Change global CSS: edit `src/index.css` or component-scoped CSS files like `src/App.css`.

## Merge guidance (if updating this file)
- Preserve the `Developer workflows` commands and `Key files` list when merging.
- If adding tooling notes, reference the exact config file (e.g., `eslint.config.js`, `vite.config.js`).

## Questions for maintainers (when unclear)
- Is there a preferred package manager (npm/pnpm/yarn) for CI? Currently `package.json` assumes npm.
- Are there any hidden environment variables or proxy settings used in development? None are present in the repo files.

If anything here is unclear or you want more detail (examples, PR checklist, or CI notes), tell me what to add.
