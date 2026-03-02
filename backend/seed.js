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

const newImageMapping = {
  "river monster": "https://img.sanishtech.com/u/1813308975e971cb1c5498354d60bcc5.jpg",
  "blue dragon": "https://img.sanishtech.com/u/0b64bb0084b7b50ce892e7e4ee9b61e4.jpg",
  "cash frenzy": "https://img.sanishtech.com/u/95eebc2e479d5bab35d39b29beb87939.jpg",
  "cash machine": "https://img.sanishtech.com/u/528dab404072ac5698abd7c0411733ef.jpg",
  "moolah": "https://img.sanishtech.com/u/24ec660012318479c6ae1aaa89c95a38.jpg", // moolah slots
  "egame": "https://img.sanishtech.com/u/6f57545f8b35031f253cd9116c13c534.jpg", // E game
  "acebook": "https://img.sanishtech.com/u/9e77ba90eefbbeb63b57f7e42c6e41a6.webp", // Ace book
  "yolo": "https://img.sanishtech.com/u/5d0d018c47b912ff22267014c5833f75.jpg",
  "juwa 2.0": "https://img.sanishtech.com/u/2a676a8abc25dec09cec8144ff7c841e.png",
  "las vegas sweeps": "https://img.sanishtech.com/u/a2fe83233b8f9f56b09226f4d2574c1d.jpg", // Las vegas
  "highstakes": "https://img.sanishtech.com/u/6d18ef9e972699e44c58e54e2f540ca3.jpg", // High stakes
  "high roller": "https://img.sanishtech.com/u/dc1b117b5d49c96ba67d1cc4458bc1b1.jpg",
  "billionballs": "https://img.sanishtech.com/u/4b055802c5e9c490b4f71706a76a76b7.png", // Billion balls
  "vegas x": "https://img.sanishtech.com/u/cb03ad7d2b5ba80a6b60fce0ece566d1.jpg",
  "river sweeps": "https://img.sanishtech.com/u/61fd80574fc348720b485a5bb9dadf3e.jpg", // river sweeps online casino
  "milky": "https://img.sanishtech.com/u/c1fef82009a61512c9e6c1834752d45c.jpg", // Milky ways
  "game room": "https://img.sanishtech.com/u/0019708f3fe3939383e046bc4e8fafc6.webp", // Gameroom online
  "vb link": "https://img.sanishtech.com/u/75d61837a5c9d9e6897125db0d7117eb.png", // V blink
  "panda master": "https://img.sanishtech.com/u/11118675156a10ac2fee5d94a4331bb4.png",
  "ultrapanda": "https://img.sanishtech.com/u/14d89cff838aa430543c9bf812a53305.jpg", // ultra panda
  "juwa": "https://img.sanishtech.com/u/6fa039190bc6d7904b3ec82086b12da9.png",
  "fire": "https://img.sanishtech.com/u/cc926aa45ad9fa5df132af0513b47a7c.png", // Fire Kirin
  "game vault": "https://img.sanishtech.com/u/1dc875d673fdd830654384dff6fa2354.png",
  "mafia": "https://img.sanishtech.com/u/6c162f194964b9a9cb3f11ee697af2e0.webp" // Mafia don
};

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
    const usedJsonNames = new Set();

    // 1. Seed the requested top 16 in order
    requestedGamesOrdered.forEach((reqTarget, index) => {
      const match = allGames.find(g => g.game_name.toLowerCase() === reqTarget.jsonName.toLowerCase());
      
      if (match) {
        usedJsonNames.add(reqTarget.jsonName.toLowerCase());
        
        // Check for overridden image
        const overrideImage = newImageMapping[match.game_name.toLowerCase()];
        const finalImage = overrideImage || match.image_link;

        // Add Player entry
        seedData.push({
          name: reqTarget.name,
          image: finalImage,
          link: match.player_link,
          type: 'player',
          order: index
        });
        
        // Add Agent entry
        seedData.push({
          name: reqTarget.name,
          image: finalImage,
          link: match.agent_link,
          type: 'agent',
          order: index
        });
      } else {
        console.warn(`Could not find game in JSON for: ${reqTarget.name} (jsonName: ${reqTarget.jsonName})`);
      }
    });

    // 2. Seed all other games from updated_games.json
    let currentOrder = requestedGamesOrdered.length;
    allGames.forEach(game => {
      if (!usedJsonNames.has(game.game_name.toLowerCase())) {
        const overrideImage = newImageMapping[game.game_name.toLowerCase()];
        const finalImage = overrideImage || game.image_link;

        seedData.push({
          name: game.game_name,
          image: finalImage,
          link: game.player_link,
          type: 'player',
          order: currentOrder
        });

        seedData.push({
          name: game.game_name,
          image: finalImage,
          link: game.agent_link,
          type: 'agent',
          order: currentOrder
        });

        currentOrder++;
      }
    });

    if (seedData.length > 0) {
      await Game.insertMany(seedData);
      console.log(`Successfully seeded ${seedData.length} entries (Total unique games: ${seedData.length / 2}).`);
    }

    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();
