# Backend (ToDoList)

This folder contains a small Express API that exposes tasks from the PostgreSQL database.

Quick start

1. Install dependencies:

```bash
cd Backend
npm install
```

2. Run in development (uses `ts-node`):

```bash
npm run dev
```

3. Build JavaScript (optional):

```bash
npm run build
node server.js
```

API

- `GET /api/tasks` — returns `{ tasks: [...] }` from the `users` table.

Notes

- Configure database credentials in `postGreesDB.ts` or use environment variables for production.
