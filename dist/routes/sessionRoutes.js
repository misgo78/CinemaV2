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
const Session_1 = __importDefault(require("../models/Session"));
const router = (0, express_1.Router)();
let sessions = [];
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = new Session_1.default(req.body);
    yield session.save();
    res.status(201).send(session);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sessions = yield Session_1.default.find();
    res.send(sessions);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield Session_1.default.findById(req.params.id);
    if (!session) {
        res.status(404).send('Session not found');
    }
    else {
        res.send(session);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield Session_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!session) {
        res.status(404).send('Session not found');
    }
    else {
        res.send(session);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield Session_1.default.findByIdAndDelete(req.params.id);
    if (!session) {
        res.status(404).send('Session not found');
    }
    else {
        res.status(204).send();
    }
}));
exports.default = router;
