"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeDireccion = void 0;
const express_1 = require("express");
const Direccion_controller_1 = require("./Direccion.controller");
exports.routeDireccion = (0, express_1.Router)();
exports.routeDireccion.get('', Direccion_controller_1.listar);
exports.routeDireccion.post('', Direccion_controller_1.crear);
exports.routeDireccion.patch('/:id', Direccion_controller_1.actualizar);
exports.routeDireccion.delete('/:id', Direccion_controller_1.eliminar);
//# sourceMappingURL=Direccion.routes.js.map