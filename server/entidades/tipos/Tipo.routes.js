"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeTipo = void 0;
const express_1 = require("express");
const Tipo_controller_1 = require("./Tipo.controller");
exports.routeTipo = (0, express_1.Router)();
exports.routeTipo.get('', Tipo_controller_1.listar);
exports.routeTipo.post('', Tipo_controller_1.crear);
exports.routeTipo.patch('/:id', Tipo_controller_1.actualizar);
exports.routeTipo.delete('/:id', Tipo_controller_1.eliminar);
//# sourceMappingURL=Tipo.routes.js.map