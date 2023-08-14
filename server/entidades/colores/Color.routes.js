"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeColor = void 0;
const express_1 = require("express");
const Color_controller_1 = require("./Color.controller");
exports.routeColor = (0, express_1.Router)();
exports.routeColor.get('', Color_controller_1.listar);
exports.routeColor.post('', Color_controller_1.crear);
exports.routeColor.patch('/:id', Color_controller_1.actualizar);
exports.routeColor.delete('/:id', Color_controller_1.eliminar);
//# sourceMappingURL=Color.routes.js.map