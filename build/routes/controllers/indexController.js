"use strict";
// Manteniendo el orden.
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send('Hola desde index controlador!!!');
    }
}
exports.indexController = new IndexController();
