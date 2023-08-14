"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeValor = void 0;
const express_1 = require("express");
const Valor_controller_1 = require("./Valor.controller");
exports.routeValor = (0, express_1.Router)();
exports.routeValor.get('', Valor_controller_1.listar);
exports.routeValor.post('', Valor_controller_1.crear);
exports.routeValor.patch('/:id', Valor_controller_1.actualizar);
exports.routeValor.delete('/:id', Valor_controller_1.eliminar);
//# sourceMappingURL=Valor.routes.js.map