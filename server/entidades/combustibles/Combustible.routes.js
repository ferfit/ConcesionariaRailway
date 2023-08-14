"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeCombustible = void 0;
const express_1 = require("express");
const Combustible_controller_1 = require("./Combustible.controller");
exports.routeCombustible = (0, express_1.Router)();
exports.routeCombustible.get('', Combustible_controller_1.listar);
exports.routeCombustible.post('', Combustible_controller_1.crear);
exports.routeCombustible.patch('/:id', Combustible_controller_1.actualizar);
exports.routeCombustible.delete('/:id', Combustible_controller_1.eliminar);
//# sourceMappingURL=Combustible.routes.js.map