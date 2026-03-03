import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Game from './models/Game.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const checkLinks = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const games = await Game.find({ 
      name: { $in: [/fire/i, /panda/i] },
      type: 'agent'
    });
    console.log('AGENT LINKS:');
    games.forEach(g => {
      console.log(`${g.name}: ${g.link}`);
    });
    await mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

checkLinks();
