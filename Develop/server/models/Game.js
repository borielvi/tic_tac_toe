const { Schema, model } = require('mongoose');
const moment = require('moment');

const gameSchema = new Schema(
    {
        winner: {
            type: String,
            required: true,
            trim: true
        },
        loser: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
        }
    }
);

const Game = model("Game", gameSchema);

module.exports = Game;
