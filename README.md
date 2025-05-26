# 🏠 Pircel Backend

This is the backend for the **Pircel** app. It serves house data from a local JSON file using a simple Express.js server — no database required.

## 📁 Project Structure





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

GET /houses
Returns a list of all houses.

Optional Query Param

Param	Description
name
```bash
GET /houses?name=rav
```
