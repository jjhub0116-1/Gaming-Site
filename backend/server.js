import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Game from './models/Game.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/games', async (req, res) => {
    try {
        const { type } = req.query;
        const filter = type ? { type } : {};
        const games = await Game.find(filter).sort({ order: 1 });
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
