import { Router } from 'express';

class IndexRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(){
        // creamos ruta para la app
        this.router.get('/', (req, res) => res.send('Hola desde index'));
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;