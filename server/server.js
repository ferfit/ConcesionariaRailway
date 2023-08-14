"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("./globals/environment");
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Number(environment_1.CONFIG.PORT);
        this.httpServer = new http_1.default.Server(this.app);
        this.io = new socket_io_1.Server(this.httpServer, {
            cors: {
                origin: "http://localhost:4200",
                methods: ["GET", "POST"]
            }
        });
        this.escuharSockets();
    }
    static get instancia() {
        return this._instancia || (this._instancia = new this());
    }
    start(callback) {
        return this.httpServer.listen(environment_1.CONFIG.PORT, callback);
    }
    escuharSockets() {
        this.io.on('connection', (socket) => null);
    }
}
exports.default = Servidor;
//# sourceMappingURL=server.js.map