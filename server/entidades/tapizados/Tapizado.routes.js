"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeTapizado = void 0;
const express_1 = require("express");
const Tapizado_controller_1 = require("./Tapizado.controller");
exports.routeTapizado = (0, express_1.Router)();
exports.routeTapizado.get('', Tapizado_controller_1.listar);
exports.routeTapizado.post('', Tapizado_controller_1.crear);
exports.routeTapizado.patch('/:id', Tapizado_controller_1.actualizar);
exports.routeTapizado.delete('/:id', Tapizado_controller_1.eliminar);
//# sourceMappingURL=Tapizado.routes.js.map