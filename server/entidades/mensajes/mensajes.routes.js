"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeMensajes = void 0;
const express_1 = require("express");
const verificar_auth_1 = require("../../middleware/verificar-auth");
const mensajes_controller_1 = require("./mensajes.controller");
exports.routeMensajes = (0, express_1.Router)();
exports.routeMensajes.get('/', verificar_auth_1.checkAuth, mensajes_controller_1.getTodo);
exports.routeMensajes.post('/quitarDeLista', verificar_auth_1.checkAuth, mensajes_controller_1.quitarDeLista);
//# sourceMappingURL=mensajes.routes.js.map