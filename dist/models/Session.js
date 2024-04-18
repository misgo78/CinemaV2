"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SessionSchema = new mongoose_1.default.Schema({
    film: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Film' },
    date: Date,
    time: String,
    availableSeats: Number
});
const Session = mongoose_1.default.model('Session', SessionSchema);
exports.default = Session;
