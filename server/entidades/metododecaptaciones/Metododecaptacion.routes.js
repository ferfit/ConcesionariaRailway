"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeMetododecaptacion = void 0;
const express_1 = require("express");
const Metododecaptacion_controller_1 = require("./Metododecaptacion.controller");
exports.routeMetododecaptacion = (0, express_1.Router)();
exports.routeMetododecaptacion.get('', Metododecaptacion_controller_1.listar);
exports.routeMetododecaptacion.post('', Metododecaptacion_controller_1.crear);
exports.routeMetododecaptacion.patch('/:id', Metododecaptacion_controller_1.actualizar);
exports.routeMetododecaptacion.delete('/:id', Metododecaptacion_controller_1.eliminar);
//# sourceMappingURL=Metododecaptacion.routes.js.map