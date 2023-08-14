"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeSaludo = void 0;
const express_1 = require("express");
const Saludo_controller_1 = require("./Saludo.controller");
exports.routeSaludo = express_1.Router();
exports.routeSaludo.get('', Saludo_controller_1.listar);
exports.routeSaludo.post('', Saludo_controller_1.crear);
exports.routeSaludo.patch('/:id', Saludo_controller_1.actualizar);
exports.routeSaludo.delete('/:id', Saludo_controller_1.eliminar);
//# sourceMappingURL=Saludo.routes.js.map