"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeUsuario = void 0;
const express_1 = require("express");
const verificar_auth_1 = require("../../middleware/verificar-auth");
const Usuario_controller_1 = require("./Usuario.controller");
const multer_1 = __importDefault(require("multer"));
exports.routeUsuario = (0, express_1.Router)();
exports.routeUsuario.post('/', Usuario_controller_1.postUno);
// routeUsuario.delete('/',checkAuth , deleteUno)
const upload = (0, multer_1.default)({
    limits: { fileSize: 5000000 },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            console.log('error??');
            return cb(new Error('error'));
        }
        cb(undefined, true);
    }
});
exports.routeUsuario.get('/miusuario', verificar_auth_1.checkAuth, Usuario_controller_1.getMiUsuario);
exports.routeUsuario.patch('/miusuario', verificar_auth_1.checkAuth, Usuario_controller_1.setMiUsuario); //account
exports.routeUsuario.patch('/mipreferencia', verificar_auth_1.checkAuth, Usuario_controller_1.setMiPreferencia); //Setea modo claro/oscuro
exports.routeUsuario.patch('/mipassword', verificar_auth_1.checkAuth, Usuario_controller_1.setMiPassword); //security
exports.routeUsuario.post('/estado', verificar_auth_1.checkAuth, Usuario_controller_1.estado); //Cambia 'estado' del usuario
exports.routeUsuario.post('/privilegios', verificar_auth_1.checkAuth, Usuario_controller_1.privilegios);
exports.routeUsuario.post('/invitar', verificar_auth_1.checkAuth, Usuario_controller_1.invitar); //invitacion por parte del administrador
exports.routeUsuario.post('/rol', verificar_auth_1.checkAuth, Usuario_controller_1.rol); // Cambia "rol" del usuario
exports.routeUsuario.get('/', verificar_auth_1.checkAuth, Usuario_controller_1.getTodo);
//# sourceMappingURL=Usuario.routes.js.map