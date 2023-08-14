"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeCliente = void 0;
const express_1 = require("express");
const Cliente_controller_1 = require("./Cliente.controller");
exports.routeCliente = (0, express_1.Router)();
exports.routeCliente.get('', Cliente_controller_1.listar);
exports.routeCliente.post('', Cliente_controller_1.crear);
exports.routeCliente.patch('/:id', Cliente_controller_1.actualizar);
exports.routeCliente.delete('/:id', Cliente_controller_1.eliminar);
//# sourceMappingURL=Cliente.routes.js.map