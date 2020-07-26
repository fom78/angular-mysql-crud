// Manteniendo el orden.

import {Request, Response} from 'express';

class GamesController {
    
    public index (req: Request, res: Response) {
        //res.send('Hola desde games via Controller!!!!!!');
        res.json({texto: 'Putoooooo'});
    } 
}

export const gamesController = new GamesController();
