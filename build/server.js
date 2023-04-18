"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    return res.send('olá dev');
});
app.listen(port, () => {
    console.log(`back-end rodando na porta: ${port}`);
});
