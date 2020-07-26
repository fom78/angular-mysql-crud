"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = require("./controllers/gamesController");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // creamos ruta para la app
        this.router.get('/', gamesController_1.gamesController.index);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
