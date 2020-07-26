"use strict";
// Manteniendo el orden.
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
exports.gamesController = void 0;
const database_1 = __importDefault(require("../../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const equipos = yield database_1.default.query('SELECT * FROM equipos');
            res.json(equipos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const equipo = yield database_1.default.query('SELECT * FROM equipos WHERE id = ?', [id]);
            if (equipo.length > 0) {
                return res.json(equipo[0]);
            }
            res.status(404).json({ message: 'El equipo no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO equipos set ?', [req.body]);
            res.json({ message: 'equipo agregado' });
        });
    }
    delete(req, res) {
        res.json({ texto: 'borrando Equipo!!!' });
    }
    update(req, res) {
        res.json({ texto: 'Actualizando Equipo!!!' + req.params.id });
    }
}
exports.gamesController = new GamesController();
