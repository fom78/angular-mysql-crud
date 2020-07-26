"use strict";
// Manteniendo el orden.
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
class GamesController {
    index(req, res) {
        //res.send('Hola desde games via Controller!!!!!!');
        res.json({ texto: 'Putoooooo' });
    }
}
exports.gamesController = new GamesController();
