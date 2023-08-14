"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeCategoria = void 0;
const express_1 = require("express");
const Categoria_controller_1 = require("./Categoria.controller");
exports.routeCategoria = express_1.Router();
exports.routeCategoria.get('', Categoria_controller_1.listar);
exports.routeCategoria.post('', Categoria_controller_1.crear);
exports.routeCategoria.patch('/:id', Categoria_controller_1.actualizar);
exports.routeCategoria.delete('/:id', Categoria_controller_1.deleteCategoria);
//# sourceMappingURL=Categoria.routes.js.map