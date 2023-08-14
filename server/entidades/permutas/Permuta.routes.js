"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routePermuta = void 0;
const express_1 = require("express");
const Permuta_controller_1 = require("./Permuta.controller");
exports.routePermuta = (0, express_1.Router)();
exports.routePermuta.get('', Permuta_controller_1.listar);
exports.routePermuta.post('', Permuta_controller_1.crear);
exports.routePermuta.patch('/:id', Permuta_controller_1.actualizar);
exports.routePermuta.delete('/:id', Permuta_controller_1.eliminar);
//# sourceMappingURL=Permuta.routes.js.map