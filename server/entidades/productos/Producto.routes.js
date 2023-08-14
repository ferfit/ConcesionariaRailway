"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeProducto = void 0;
const express_1 = require("express");
const Producto_controller_1 = require("./Producto.controller");
exports.routeProducto = express_1.Router();
exports.routeProducto.get('', Producto_controller_1.listar);
exports.routeProducto.post('', Producto_controller_1.crear);
exports.routeProducto.patch('/:id', Producto_controller_1.actualizar);
exports.routeProducto.delete('/:id', Producto_controller_1.eliminar);
//# sourceMappingURL=Producto.routes.js.map