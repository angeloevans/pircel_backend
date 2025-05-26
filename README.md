# 🏠 Pircel Backend

This is the backend for the **Pircel** Tech Test. <br>
It serves house data from a local JSON file using a simple Express.js server — no database required.

## 📁 Project Structure

```plaintext
backend/
├── src/
│   ├── controller/
│   │   └── houses.controller.js
│   ├── data/
│   │   └── houses.json
│   ├── routes/
│   │   └── houses.routes.js
│   └── app.js
│   └── server.js
├── .gitignore

├── package.json
└── README.md

```

## 🚀 Features

- 📦 Reads data from `houses.json` (no DB required)
- 🔍 Supports filtering by `name` query param:  
  Example: `GET /houses?name=gry`

## 📦 Setup

### 1. Install dependencies

```bash
npm install
```

The server will start at:
👉 http://localhost:5000

📡 API Endpoints

```bash
GET /houses
```
Returns a list of all houses.

- Optional Query Param for Name

```bash
GET /houses?name=rav
```

You can configure the port via .env:

```bash
PORT=5000
```

## Note
**Pagination Support:** <br>
This backend serves house data from a local JSON file and currently returns all houses in a single response because there are only 4 entries.

If the dataset grows larger, the backend can be extended to support pagination by accepting query parameters like page and limit to return a subset of houses per request. This allows the frontend to implement lazy loading or infinite scrolling efficiently.

For now, since the dataset is small, pagination is not implemented.
