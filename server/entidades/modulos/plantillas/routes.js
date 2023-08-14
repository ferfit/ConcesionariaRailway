"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantillaRoutes = void 0;
exports.plantillaRoutes = `
import {Router} from 'express';
import {listar, crear, actualizar,eliminar } from './Modulo.controller';

export const routeModulo = Router();

routeModulo.get('', listar);
routeModulo.post('',crear);
routeModulo.patch('/:id', actualizar);
routeModulo.delete('/:id', eliminar);
`;
//# sourceMappingURL=routes.js.map