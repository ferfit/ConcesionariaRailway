"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeTipocliente = void 0;
const express_1 = require("express");
const Tipocliente_controller_1 = require("./Tipocliente.controller");
exports.routeTipocliente = (0, express_1.Router)();
exports.routeTipocliente.get('', Tipocliente_controller_1.listar);
exports.routeTipocliente.post('', Tipocliente_controller_1.crear);
exports.routeTipocliente.patch('/:id', Tipocliente_controller_1.actualizar);
exports.routeTipocliente.delete('/:id', Tipocliente_controller_1.eliminar);
//# sourceMappingURL=Tipocliente.routes.js.map