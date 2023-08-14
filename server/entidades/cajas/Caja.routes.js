"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeCaja = void 0;
const express_1 = require("express");
const Caja_controller_1 = require("./Caja.controller");
exports.routeCaja = (0, express_1.Router)();
exports.routeCaja.get('', Caja_controller_1.listar);
exports.routeCaja.post('', Caja_controller_1.crear);
exports.routeCaja.patch('/:id', Caja_controller_1.actualizar);
exports.routeCaja.delete('/:id', Caja_controller_1.eliminar);
//# sourceMappingURL=Caja.routes.js.map