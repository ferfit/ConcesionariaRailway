"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeProductos = void 0;
const express_1 = require("express");
const Productos_controller_1 = require("./Productos.controller");
exports.routeProductos = express_1.Router();
exports.routeProductos.get('', Productos_controller_1.listar);
exports.routeProductos.post('', Productos_controller_1.crear);
exports.routeProductos.patch('/:id', Productos_controller_1.actualizar);
exports.routeProductos.delete('/:id', Productos_controller_1.eliminar);
//# sourceMappingURL=Productos.routes.js.map