"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeSucursal = void 0;
const express_1 = require("express");
const Sucursal_controller_1 = require("./Sucursal.controller");
exports.routeSucursal = (0, express_1.Router)();
exports.routeSucursal.get('', Sucursal_controller_1.listar);
exports.routeSucursal.post('', Sucursal_controller_1.crear);
exports.routeSucursal.patch('/:id', Sucursal_controller_1.actualizar);
exports.routeSucursal.delete('/:id', Sucursal_controller_1.eliminar);
//# sourceMappingURL=Sucursal.routes.js.map