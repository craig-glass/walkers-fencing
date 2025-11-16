## Project Overview

This is a full-stack TypeScript project for a fencing contractor business called "Walkers Fencing Contractors". It features a React-based frontend and an Express-based backend.

**Frontend:**

*   **Framework:** React with Vite
*   **Routing:** `wouter`
*   **Styling:** Tailwind CSS with `shadcn-ui` components
*   **Data Fetching:** `react-query`
*   **Source Code:** `client/src/`

**Backend:**

*   **Framework:** Express
*   **Database:** In-memory storage (placeholder) with `drizzle-orm` for the schema.
*   **Authentication:** `passport`
*   **Source Code:** `server/`

**Shared:**

*   The `shared/` directory contains the database schema (`shared/schema.ts`) used by both the client and server.

## Building and Running

*   **Development:**
    *   Run `npm install` to install dependencies.
    *   Run `npm run dev` to start the development server with hot-reloading.

*   **Production:**
    *   Run `npm run build` to build the client and server.
    *   Run `npm run start` to start the production server.

*   **Database:**
    *   Run `npm run db:push` to push database changes (note: currently using in-memory storage).

*   **Type Checking:**
    *   Run `npm run check` to check for TypeScript errors.

## Development Conventions

*   The project uses path aliases for easier imports:
    *   `@` -> `client/src`
    *   `@shared` -> `shared`
    *   `@assets` -> `attached_assets`
*   The backend API routes should be prefixed with `/api`.
*   The database schema is defined in `shared/schema.ts` using `drizzle-orm` and `zod` for validation.
