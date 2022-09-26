import {Request, Response} from 'express';
import connection from '../db/connection';

export const getTareas = (req: Request, res: Response) => {
    connection.query('SELECT * FROM tareas', (err, data) => {
        if(err){
            console.log(err)
        } else {
            res.json({
                data
            });
        };
    });
};