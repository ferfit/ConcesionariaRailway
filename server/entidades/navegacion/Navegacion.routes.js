"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeNavegacion = void 0;
const express_1 = require("express");
const verificar_auth_1 = require("../../middleware/verificar-auth");
const Navegacion_controller_1 = require("./Navegacion.controller");
exports.routeNavegacion = (0, express_1.Router)();
exports.routeNavegacion.get('/', verificar_auth_1.checkAuth, Navegacion_controller_1.obtenerTodo);
// routeUsuario.delete('/',checkAuth , deleteUno)
//# sourceMappingURL=Navegacion.routes.js.map