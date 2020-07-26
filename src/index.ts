import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gameRoutes from './routes/gamesRoutes';

class Server {
    //Propiedades de la clase
    public app: Application; // tipo appilcation

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    //Metodo para configurar.
    config() : void {
        this.app.set('port', process.env.PORT || 3000); // Puerto dado por host o 3000
        this.app.use(morgan('dev')); // monitoreamos peticiones y demas
        this.app.use(cors());
        this.app.use(express.json()); // midlesware, hace que obtengamos en req.body un json
        this.app.use(express.urlencoded({extended: false}));
    }

    routes() : void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gameRoutes);
    }
    // Metodo para iniciar el servidor.
    start() : void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server en puerto: ',this.app.get('port') );
        });
    }

}

const server = new Server();
server.start();



