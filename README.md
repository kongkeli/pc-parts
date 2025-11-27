# PC Parts Store

A simple e-commerce style web application for selecting and managing PC components, powered by a custom backend.

## Features
- Browse / filter / search PC parts (CPU, GPU, RAM, etc.)
- Add items to cart or wishlist
- Automatic total cost calculation
- Proper validation and error states
- Fully responsive layout (mobile / tablet / desktop)


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

