# TokTickIT — Lab 2 (Requester Ticketing MVP)

Requester-facing IT support ticketing app: create tickets, browse "My Tickets", inspect Ticket
Detail, and manage attachments — built with a temporary Development Requester selector standing
in for authentication (see docs/lab-02/specification.md, BR-03).

## Stack
- **server/**: Node.js + Express + TypeScript + Prisma + PostgreSQL. Tests: Vitest + Supertest.
- **client/**: React + TypeScript + Vite. Tests: Vitest + Testing Library.
- **e2e/**: Playwright (also used for responsive screenshots).

## Setup

```bash
# 1. Database
createdb toktickit
cp server/.env.example server/.env   # set DATABASE_URL

# 2. Backend
cd server
npm install
npx prisma migrate dev --name init
npx prisma db seed
npm run dev          # http://localhost:4000

# 3. Frontend (new terminal)
cd client
npm install
npm run dev           # http://localhost:5173
```

## Tests

```bash
# Backend unit + API
cd server && npm run test

# Frontend component/UI
cd client && npm run test

# E2E + responsive screenshots
npx playwright install --with-deps
npx playwright test e2e/lab-02
```

## Documentation
See `docs/lab-02/` for `specification.md`, `api-spec.md`, `ui-spec.md`, `tests.md`, `reviewer.md`,
`ai-use.md`.

## Scope
Lab 2 explicitly excludes real authentication, IT Staff workflow, comments/notes/actions-taken, and
ticket status transitions beyond `NEW`. See `docs/lab-02/specification.md` §3.
