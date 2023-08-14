"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeCliente = void 0;
const express_1 = require("express");
const verificar_auth_1 = require("../../middleware/verificar-auth");
const Notificaciones_controller_1 = require("./Notificaciones.controller");
exports.routeCliente = (0, express_1.Router)();
exports.routeCliente.get('/', verificar_auth_1.checkAuth, Notificaciones_controller_1.obtenerTodo);
// routeUsuario.delete('/',checkAuth , deleteUno)
//# sourceMappingURL=Notificaciones.routes.js.map