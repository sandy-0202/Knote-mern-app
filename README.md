# Knote — MERN Note App (Frontend)

Knote is a simple MERN (MongoDB, Express, React, Node) note-taking application. The frontend is built with React + Vite and Tailwind CSS; the backend (in `../backend`) provides a REST API with rate limiting (Upstash/Redis).

Quick links
- Frontend entry: `src/main.jsx`
- App component: `src/App.jsx`
- Backend server: `../backend/src/server.js`

Prerequisites
- Node.js (LTS recommended)
- npm or yarn
- A running MongoDB instance and its connection string
- Optional: Upstash/Redis credentials for rate limiting (configured in the backend)

Development — run both servers locally

1) Start the backend

```bash
cd backend
npm install
# create a .env with at least MONGO_URI and PORT (see backend/config/db.js)
npm run dev
```

2) Start the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend dev server (Vite) will open at http://localhost:5173 by default; the frontend expects the backend API to be running (default backend port is configured in `backend/src/server.js`).

Build for production

- Frontend: from `frontend` run `npm run build` and serve the `dist` folder with your chosen static server.
- Backend: build/pack or run `node src/server.js` with production env variables (use a process manager like PM2 or a container in production).

Environment variables
- Backend expects at minimum: `MONGO_URI`, `PORT` (optional), and Upstash/Redis values if rate limiting is enabled. See `backend/config/db.js` and `backend/config/upstash.js` for details.

Notes
- API routes and controllers live in `backend/controllers` and `backend/routes`.
- Rate limiting implementation is in `backend/middleware/rateLimiter.js` and uses the Upstash Redis client if configured.
