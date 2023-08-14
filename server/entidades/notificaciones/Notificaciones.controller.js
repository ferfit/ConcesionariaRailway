"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificarConUsuarios = exports.notificarBuscandoUsuarios = exports.obtenerTodo = void 0;
const { entidad, entidades } = { entidad: 'Notificacion', entidades: 'Notificaciones' };
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
/**
 * Controller de Servicios.
 * @route GET /maestroservicios = getTodo > Obtiene un listado de servicios con paginacion.
 */
const obtenerTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // todo
    return null;
});
exports.obtenerTodo = obtenerTodo;
/**
 * Controller de Servicios.
 * @route GET /maestroservicios = getTodo > Obtiene un listado de servicios con paginacion.
 */
const notificarBuscandoUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // todo
    return null;
});
exports.notificarBuscandoUsuarios = notificarBuscandoUsuarios;
/**
 * Controller de Servicios.
 * @route GET /maestroservicios = getTodo > Obtiene un listado de servicios con paginacion.
 */
const notificarConUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // todo
    return null;
});
exports.notificarConUsuarios = notificarConUsuarios;
//# sourceMappingURL=Notificaciones.controller.js.map