"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeVersion = void 0;
const express_1 = require("express");
const Version_controller_1 = require("./Version.controller");
exports.routeVersion = (0, express_1.Router)();
exports.routeVersion.get('', Version_controller_1.listar);
exports.routeVersion.post('', Version_controller_1.crear);
exports.routeVersion.patch('/:id', Version_controller_1.actualizar);
exports.routeVersion.delete('/:id', Version_controller_1.eliminar);
//# sourceMappingURL=Version.routes.js.map