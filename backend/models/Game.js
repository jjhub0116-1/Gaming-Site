import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
        default: '#',
    },
    type: {
        type: String,
        required: true,
        enum: ['player', 'agent'],
    },
    order: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

const Game = mongoose.model('Game', gameSchema);

export default Game;
