# PC Parts Store

Ecommerce-style web app για επιλογή και διαχείριση PC parts με δικό μου backend.

## Features
- Browse / filter / search parts (CPU, GPU, RAM, κλπ)
- Προσθήκη στο cart / wishlist
- Υπολογισμός συνολικού κόστους
- Validation & error states
- Responsive layout για κινητό / tablet / desktop

## Tech Stack
- Frontend: React, TypeScript, Vite
- Styling: HTML, CSS
- Backend: Node.js, Express
- Database: PostgreSQL

## Architecture
- `frontend/` – React SPA
- `backend/` – REST API (endpoints: /parts, /cart, κλπ)
- `public/` – static assets

## Getting Started
```bash
# backend
cd backend
npm install
npm run dev

# frontend
cd frontend
npm install
npm run dev

