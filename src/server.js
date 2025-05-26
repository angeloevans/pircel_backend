// This is the main server to run!
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;  // If process.env.PORT is defined use that value || otherwise fall back to port 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});