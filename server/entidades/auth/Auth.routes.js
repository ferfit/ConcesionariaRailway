"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeAuth = void 0;
const express_1 = require("express");
const verificar_auth_1 = require("../../middleware/verificar-auth");
const Auth_controller_1 = require("./Auth.controller");
exports.routeAuth = (0, express_1.Router)();
//Login y refreshToken
exports.routeAuth.post('/login', Auth_controller_1.login);
exports.routeAuth.post('/refresh-access-token', verificar_auth_1.checkAuth, Auth_controller_1.refreshAccessToken);
//Olvidaste tu pass
exports.routeAuth.post('/recuperar', Auth_controller_1.recuperarPassword);
exports.routeAuth.post('/reiniciar', Auth_controller_1.reiniciarPassword);
//Registro
exports.routeAuth.post('/registrar', Auth_controller_1.registrar);
//Invitaciones
exports.routeAuth.post('/confirmar', Auth_controller_1.confirmar);
//# sourceMappingURL=Auth.routes.js.map