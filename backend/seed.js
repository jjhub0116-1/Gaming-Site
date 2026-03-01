import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Game from './models/Game.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const requestedGamesOrdered = [
  { name: "gamevault", jsonName: "game vault" },
  { name: "firekirin", jsonName: "fire" },
  { name: "pandamaster", jsonName: "panda master" },
  { name: "milkyway", jsonName: "milky" },
  { name: "vblink", jsonName: "vb link" },
  { name: "ultrapanda", jsonName: "ultrapanda" },
  { name: "gameroom", jsonName: "game room" },
  { name: "juwa", jsonName: "juwa" },
  { name: "orionstart", jsonName: "orion" },
  { name: "juwa 2.0", jsonName: "juwa 2.0" },
  { name: "billions ball", jsonName: "billionballs" },
  { name: "cashmachine", jsonName: "cash machine" },
  { name: "Acebook", jsonName: "acebook" },
  { name: "cash frenzy", jsonName: "cash frenzy" },
  { name: "las vegas", jsonName: "las vegas sweeps" },
  { name: "yolo", jsonName: "yolo" }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for ordered seeding...');

    await Game.deleteMany({});
    console.log('Cleared existing games.');

    const rawData = fs.readFileSync(path.join(__dirname, '../updated_games.json'));
    const allGames = JSON.parse(rawData);

    const seedData = [];

    requestedGamesOrdered.forEach((reqTarget, index) => {
      const match = allGames.find(g => g.game_name.toLowerCase() === reqTarget.jsonName.toLowerCase());
      
      if (match) {
        // Add Player entry
        seedData.push({
          name: reqTarget.name, // Use the display name from the request
          image: match.image_link,
          link: match.player_link,
          type: 'player',
          order: index
        });
        
        // Add Agent entry
        seedData.push({
          name: reqTarget.name,
          image: match.image_link,
          link: match.agent_link,
          type: 'agent',
          order: index
        });
      } else {
        console.warn(`Could not find game in JSON for: ${reqTarget.name} (jsonName: ${reqTarget.jsonName})`);
      }
    });

    if (seedData.length > 0) {
      await Game.insertMany(seedData);
      console.log(`Successfully seeded ${seedData.length} entries in exact order.`);
    }

    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();
