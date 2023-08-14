"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeNegocio = void 0;
const express_1 = require("express");
const Negocio_controller_1 = require("./Negocio.controller");
exports.routeNegocio = (0, express_1.Router)();
exports.routeNegocio.get('', Negocio_controller_1.listar);
exports.routeNegocio.post('', Negocio_controller_1.crear);
exports.routeNegocio.patch('/:id', Negocio_controller_1.actualizar);
exports.routeNegocio.delete('/:id', Negocio_controller_1.deleteCategoria);
//# sourceMappingURL=Negocio.routes.js.map