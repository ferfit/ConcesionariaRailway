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
exports.obtenerTodo = void 0;
const { entidad, entidades } = { entidad: 'Navegacion', entidades: 'Navegaciones' };
const Navegacion_model_1 = require("./Navegacion.model");
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
/**
 * Controller de Servicios.
 * @route GET /navegacion = getTodo > Obtiene un listado de servicios con paginacion.
 */
const obtenerTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // todo
    //   $or: [  { id: { $in: [ 'licencias', 'clientes' ] } }, { 'type': { $ne: 'basic' } } ]
    Navegacion_model_1.Navegacion.find({}, (err, navegacion) => {
        return res.send({
            ok: true,
            default: limpiarNavegacion(navegacion, req.tokenDatosUsuario.privilegios, req.tokenDatosUsuario.rol)
        });
    }).sort({ orden: 1 });
});
exports.obtenerTodo = obtenerTodo;
const limpiarNavegacion = (nav, privilegios, rol) => {
    if (rol === 'administrador') {
        // console.log('es administrador');
        return nav;
    }
    const navegacion = [];
    for (const item of nav) {
        if (item.type === 'basic' && item.id !== 'dashboard') {
            for (const privilegio of privilegios) {
                if (privilegio.modulo === item.id && privilegio.estado) {
                    navegacion.push(item);
                }
            }
        }
        else if (item.type === 'collapsable') {
            const children = [];
            for (const hijo of item.children) {
                for (const privilegio of privilegios) {
                    if (privilegio.modulo === hijo.id && privilegio.estado) {
                        children.push(hijo);
                    }
                }
            }
            if (children.length !== 0) {
                item.children = children;
                navegacion.push(item);
            }
        }
        else {
            navegacion.push(item);
        }
    }
    return navegacion;
};
//# sourceMappingURL=Navegacion.controller.js.map