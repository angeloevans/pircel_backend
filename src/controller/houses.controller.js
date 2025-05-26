// This controller was made so we can get the data from local json file and not a database

import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getAllHouses = (req, res) => {
  const jsonPath = path.join(__dirname, '../data/houses.json');  // The actual JSON file we use

  fs.readFile(jsonPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('❌ Error reading file:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    let houses = JSON.parse(data);

    const { name } = req.query;
    if (name) {
      const searchTerm = name.toLowerCase();
      houses = houses.filter(house => house.name.toLowerCase().includes(searchTerm));
    }

    res.status(200).json(houses);
  });
};