"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeCallback = void 0;
const express_1 = require("express");
const Callback_controller_1 = require("./Callback.controller");
exports.routeCallback = express_1.Router();
exports.routeCallback.get('', Callback_controller_1.listar);
exports.routeCallback.post('', Callback_controller_1.crear);
exports.routeCallback.patch('/:id', Callback_controller_1.actualizar);
exports.routeCallback.delete('/:id', Callback_controller_1.eliminar);
//# sourceMappingURL=Callback.routes.js.map