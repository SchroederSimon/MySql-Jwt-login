"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("../db/connection"));
const tarea_routes_1 = __importDefault(require("../routes/tarea.routes"));
const default_routes_1 = __importDefault(require("../routes/default.routes"));
const usuario_routes_1 = __importDefault(require("../routes/usuario.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.connectDB();
        this.middleware();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor andando en el puerto', this.port);
        });
    }
    ;
    connectDB() {
        connection_1.default.connect((err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('db conectada exitosamente');
            }
            ;
        });
    }
    ;
    routes() {
        this.app.use('/', default_routes_1.default);
        this.app.use('/api/tareas', tarea_routes_1.default);
        this.app.use('/api/usuarios', usuario_routes_1.default);
    }
    ;
    middleware() {
        this.app.use(express_1.default.json());
    }
}
exports.default = Server;
