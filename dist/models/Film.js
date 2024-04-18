"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FilmSchema = new mongoose_1.default.Schema({
    title: String,
    releaseYear: Number,
    genre: String,
    directors: [{
            name: String,
            birthDate: Date,
            biography: String
        }]
});
const Film = mongoose_1.default.model('Film', FilmSchema);
exports.default = Film;
