# Mantra — Backend

Lightweight Express backend for managing bookings.

This repository contains the server code for the Mantra project. It provides a small REST API for creating, reading, updating, and deleting booking records. The code is organized into `controllers`, `models`, and `routes` folders for clarity.

**Status:** Minimal backend scaffold (controllers, routes, model exists).

**Contents:**
- `index.js` — application entry point
- `package.json` — npm metadata and scripts
- `controllers/bookingController.js` — handlers for booking routes
- `models/Bookings.js` — booking model definition
- `routes/bookingRoutes.js` — booking route definitions

## Features
- Simple REST endpoints for bookings (CRUD)
- Organized MVC-like layout (routes → controllers → models)

## Prerequisites
- Node.js (v14+ recommended)
- npm (bundled with Node.js)
- (Optional) MongoDB if the project uses a MongoDB-backed model

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Pavan-1802/mantra-task-backend
cd mantra-backend
npm install
```

## Environment

Create a `.env` file in the project root if your app needs configuration. Typical variables the project may use:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/mantra
```

Note: Inspect `index.js` and the model files to confirm required variables.

## Running the server

Start the server with one of the following commands (depending on available scripts):

```bash
npm start
# or, during development if nodemon is configured
npm run dev
```

The server will listen on `PORT` (default `3000` if not set).

## API Endpoints (examples)

The project exposes booking-related endpoints via `routes/bookingRoutes.js`. Common endpoints you can expect:

- `GET /bookings` — list all bookings
- `POST /bookings` — create a new booking (JSON body)

## Project structure

Keep code organized by responsibility:

- `routes/` — route declarations and middleware wiring
- `controllers/` — request handlers and business logic
- `models/` — data models and persistence (Mongoose)
- `index.js` — bootstrapping, middleware, and server start

## Development notes
- Review `controllers/bookingController.js` to see how requests are validated and processed.
- If a database is required, ensure `MONGO_URI` (or other DB URI) is set and reachable.
- Add tests and a `README` section for testing when tests are added.

## Contributing
- Fork the repository and open a pull request for changes.
- Follow the existing code style and add tests for new features.