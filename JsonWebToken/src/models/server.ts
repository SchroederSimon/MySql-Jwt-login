import express, { Application } from 'express';
import connection from '../db/connection';
import routesTarea from '../routes/tarea.routes';
import routesDefault from '../routes/default.routes';
import routesUsuario from '../routes/usuario.routes';

class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.connectDB();
        this.middleware();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor andando en el puerto', this.port);
        });
    };

    connectDB(){
        connection.connect((err) => {
            if(err) {
                console.log(err)
            } else {
                console.log('db conectada exitosamente')
            };
        });
    };

    routes(){
        this.app.use('/', routesDefault);
        this.app.use('/api/tareas', routesTarea);
        this.app.use('/api/usuarios', routesUsuario);
    };

    middleware(){
        this.app.use(express.json());
    }
}

export default Server;