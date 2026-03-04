import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Game from './models/Game.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 1. DIAGNOSTIC ROUTE - CHECK DEPLOYMENT
app.get('/api/test-deploy-final', (req, res) => {
    res.json({ 
        message: "DEPLOYMENT ACTIVE", 
        timestamp: new Date(),
        cwd: process.cwd(),
        dirname: __dirname
    });
});

// 2. EXPLICIT IMAGE SERVING
app.use('/game-images', express.static(path.join(__dirname, '../dist/game-images')));
app.use('/assets', express.static(path.join(__dirname, '../dist/assets')));

// 3. FALLBACK STATIC SERVING (for favicon etc)
app.use(express.static(path.join(__dirname, '../dist')));

// 4. API ROUTES
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

// 5. DIAGNOSTIC IMAGES
app.get('/api/debug-images-final', (req, res) => {
    const imagesDir = path.join(__dirname, '../dist/game-images');
    try {
        const distExists = fs.existsSync(path.join(__dirname, '../dist'));
        const imagesExists = fs.existsSync(imagesDir);
        res.json({
            distExists,
            imagesExists,
            imagesPath: imagesDir,
            files: imagesExists ? fs.readdirSync(imagesDir).slice(0, 30) : []
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// 6. CATCH-ALL FOR SPA
app.get('*splat', (req, res) => {
    // If it's a request for a non-existent file in our protected folders, 404 it instead of index.html
    if (req.path.startsWith('/api') || req.path.startsWith('/game-images') || req.path.startsWith('/assets')) {
        return res.status(404).send('Not Found');
    }
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
