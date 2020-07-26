import { Router } from 'express';

class GamesRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(){
        // creamos ruta para la app
        this.router.get('/', (req, res) => res.send('Hola desde games'));
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;