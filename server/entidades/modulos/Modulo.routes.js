"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeModulo = void 0;
const express_1 = require("express");
const Modulo_controller_1 = require("./Modulo.controller");
exports.routeModulo = (0, express_1.Router)();
//routeModulo.get('', listar);
exports.routeModulo.post('', Modulo_controller_1.crear);
exports.routeModulo.patch('/:id', Modulo_controller_1.actualizar);
exports.routeModulo.delete('/:id', Modulo_controller_1.eliminar);
//# sourceMappingURL=Modulo.routes.js.map