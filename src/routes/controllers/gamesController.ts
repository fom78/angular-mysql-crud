// Manteniendo el orden.

import {Request, Response} from 'express';

import pool from '../../database';


class GamesController {
    
    public async list (req: Request, res: Response): Promise<void> {
        const equipos = await pool.query('SELECT * FROM equipos');
        res.json(equipos);
    } 
    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const equipo = await pool.query('SELECT * FROM equipos WHERE id = ?',[id]);
        if (equipo.length > 0) {
            return res.json(equipo[0]);
        }
        res.status(404).json({message: 'El equipo no existe'});
    } 
    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await pool.query('INSERT INTO equipos set ?',[req.body]);
        res.json({message: 'equipo agregado'});
    } 
    public delete (req: Request, res: Response) {
    
        res.json({texto: 'borrando Equipo!!!'});
    } 
    public update (req: Request, res: Response) {
    
        res.json({texto: 'Actualizando Equipo!!!' + req.params.id});
    }
}

export const gamesController = new GamesController();
