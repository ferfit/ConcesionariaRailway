"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeCondicion = void 0;
const express_1 = require("express");
const Condicion_controller_1 = require("./Condicion.controller");
exports.routeCondicion = (0, express_1.Router)();
exports.routeCondicion.get('', Condicion_controller_1.listar);
exports.routeCondicion.post('', Condicion_controller_1.crear);
exports.routeCondicion.patch('/:id', Condicion_controller_1.actualizar);
exports.routeCondicion.delete('/:id', Condicion_controller_1.eliminar);
//# sourceMappingURL=Condicion.routes.js.map