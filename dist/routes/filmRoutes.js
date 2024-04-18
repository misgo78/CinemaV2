"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Film_1 = __importDefault(require("../models/Film"));
const router = (0, express_1.Router)();
let films = [];
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const film = new Film_1.default(req.body);
    yield film.save();
    res.status(201).send(film);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const films = yield Film_1.default.find();
    res.send(films);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const film = yield Film_1.default.findById(req.params.id);
    if (!film) {
        res.status(404).send('Film not found');
    }
    else {
        res.send(film);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const film = yield Film_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!film) {
        res.status(404).send('Film not found');
    }
    else {
        res.send(film);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const film = yield Film_1.default.findByIdAndDelete(req.params.id);
    if (!film) {
        res.status(404).send('Film not found');
    }
    else {
        res.status(204).send();
    }
}));
exports.default = router;
