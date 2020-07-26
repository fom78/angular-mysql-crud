"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // creamos ruta para la app
        this.router.get('/', (req, res) => res.send('Hola desde games'));
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
