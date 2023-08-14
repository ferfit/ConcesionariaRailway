"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + '/.env' });
const server_1 = __importDefault(require("./server/server"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = require("./server/globals/environment");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const index_1 = require("./server/entidades/index");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const server = server_1.default.instancia;
// configurando mongodb
mongoose_1.default.connect(environment_1.CONFIG.DATABASE, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose_1.default.connection.on('connected', () => {
    console.log(`Conectado a la Base de datos=${environment_1.CONFIG.DATABASE}`);
});
mongoose_1.default.connection.on('error', (err) => {
    console.log('Error base de datos:' + err);
});
// configuraciones
server.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json({ limit: '50mb' }));
server.app.use((0, cors_1.default)({
    origin: true,
    credentials: true
}));
server.app.use((0, cookie_parser_1.default)());
// configurando credenciales passport
server.app.use(passport_1.default.initialize());
server.app.use(passport_1.default.session());
// llamar index router
server.app.use('/api', index_1.router);
server.app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
server.start(() => {
    console.log('Servidor inicio en el puerto 3000');
});
//# sourceMappingURL=index.js.map