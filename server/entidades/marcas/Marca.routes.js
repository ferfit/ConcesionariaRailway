"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeMarca = void 0;
const express_1 = require("express");
const Marca_controller_1 = require("./Marca.controller");
exports.routeMarca = (0, express_1.Router)();
exports.routeMarca.get('', Marca_controller_1.listar);
exports.routeMarca.post('', Marca_controller_1.crear);
exports.routeMarca.patch('/:id', Marca_controller_1.actualizar);
exports.routeMarca.delete('/:id', Marca_controller_1.eliminar);
//# sourceMappingURL=Marca.routes.js.map