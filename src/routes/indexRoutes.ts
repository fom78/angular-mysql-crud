import { Router } from 'express';

import { indexController } from './controllers/indexController';

class IndexRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(){
        // creamos ruta para la app
        this.router.get('/', indexController.index );
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;