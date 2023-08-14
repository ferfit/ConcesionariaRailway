"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeTipomotor = void 0;
const express_1 = require("express");
const Tipomotor_controller_1 = require("./Tipomotor.controller");
exports.routeTipomotor = (0, express_1.Router)();
exports.routeTipomotor.get('', Tipomotor_controller_1.listar);
exports.routeTipomotor.post('', Tipomotor_controller_1.crear);
exports.routeTipomotor.patch('/:id', Tipomotor_controller_1.actualizar);
exports.routeTipomotor.delete('/:id', Tipomotor_controller_1.eliminar);
//# sourceMappingURL=Tipomotor.routes.js.map