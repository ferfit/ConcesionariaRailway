"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeTraccion = void 0;
const express_1 = require("express");
const Traccion_controller_1 = require("./Traccion.controller");
exports.routeTraccion = (0, express_1.Router)();
exports.routeTraccion.get('', Traccion_controller_1.listar);
exports.routeTraccion.post('', Traccion_controller_1.crear);
exports.routeTraccion.patch('/:id', Traccion_controller_1.actualizar);
exports.routeTraccion.delete('/:id', Traccion_controller_1.eliminar);
//# sourceMappingURL=Traccion.routes.js.map