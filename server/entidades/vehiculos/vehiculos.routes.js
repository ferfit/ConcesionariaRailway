"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeVehiculos = void 0;
const express_1 = require("express");
const vehiculos_controller_1 = require("./vehiculos.controller");
exports.routeVehiculos = (0, express_1.Router)();
exports.routeVehiculos.get('/', vehiculos_controller_1.getTodo);
exports.routeVehiculos.get('/:id', vehiculos_controller_1.getVehiculo);
exports.routeVehiculos.post('/crear-vehiculo', vehiculos_controller_1.insert);
exports.routeVehiculos.patch('/editar-vehiculo/:id', vehiculos_controller_1.update);
exports.routeVehiculos.patch('/eliminar-vehiculo/:id', vehiculos_controller_1.deleteVehiculo);
//# sourceMappingURL=vehiculos.routes.js.map