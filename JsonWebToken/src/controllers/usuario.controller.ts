import {Request, Response} from 'express';
import connection from '../db/connection';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const addUsuario = async (req: Request, res: Response) => {

    const { nombre, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);


    connection.query('INSERT INTO usuarios set ?', 
        {nombre: nombre, password: hashedPassword}, (err, data) => {
            if(err){
                console.log(err)
            } else {
                res.json({
                    msg: 'Add usuario',
                });
            };
        });
};

export const loginUser = (req: Request, res: Response) => {

    const { nombre, password } = req.body;

    connection.query('SELECT * FROM usuarios WHERE nombre = ' 
        + connection.escape(nombre), (err, data) => {
        if(err){
            console.log(err)
        } else {
            if(data.length == 0){
                // no existe el usuario en DB!
                res.json({
                    msg: 'User doesnt exist!',
                });
            } else {
                //existe
                const userPassword = data[0].password;
                // Comparar password
                bcrypt.compare(password, userPassword).then((result => {
                    if(result){
                        // Login exitoso - generar token
                        const token = jwt.sign({
                            nombre: nombre,
                        }, process.env.SECRET_KEY!, {
                            expiresIn: '10000'
                        })
                        res.json({
                            token
                        });
                    } else {
                        // Contraseña incorrecta
                        res.json({
                            msg: 'Wrong password',
                        });
                    };
                }));
            };
            // console.log(data)
        };
    });
};