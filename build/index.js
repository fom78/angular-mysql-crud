"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //Metodo para configurar.
    config() {
        this.app.set('port', process.env.PORT || 3000); // Puerto dado por host o 3000
        this.app.use(morgan_1.default('dev')); // monitoreamos peticiones y demas
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); // midlesware, hace que obtengamos en req.body un json
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    // Metodo para iniciar el servidor.
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server en puerto: ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
