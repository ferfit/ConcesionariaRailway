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
exports.quitarDeLista = exports.getTodo = exports.nuevoMensaje = void 0;
const mensajes_model_1 = require("./mensajes.model");
const mongoose_1 = __importDefault(require("mongoose"));
const Usuario_model_1 = require("../usuarios/Usuario.model");
const server_1 = __importDefault(require("../../server"));
const server = server_1.default.instancia;
const ObjectId = mongoose_1.default.Types.ObjectId;
const nuevoMensaje = (titulo, mensaje, icono, destino, url, navegar = false) => __awaiter(void 0, void 0, void 0, function* () {
    let usuarios = [];
    if (typeof destino === 'string') {
        const listIdUsuarios = yield Usuario_model_1.Usuario.find({ rol: destino }).select({ _id: 1 });
        listIdUsuarios.forEach(element => {
            usuarios.push(element._id);
        });
    }
    else {
        usuarios = destino;
    }
    const mensajeData = {
        icono,
        titulo,
        mensaje,
        date: new Date(),
        url,
        navegar,
        usuarios,
        quitarDeLista: false
    };
    const msg = new mensajes_model_1.MSG(mensajeData);
    msg.save();
});
exports.nuevoMensaje = nuevoMensaje;
const getTodo = (req, res) => {
    const dataUsuario = req.tokenDatosUsuario.idUsuario;
    mensajes_model_1.MSG.find({ usuarios: dataUsuario, quitarDeLista: false }, (err, msg) => {
        return res.send({
            ok: true,
            mensajes: msg
        });
    }).sort({ _id: -1 });
};
exports.getTodo = getTodo;
const quitarDeLista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.notificacion;
    const mensajeActualizado = yield mensajes_model_1.MSG.findByIdAndUpdate(id, { quitarDeLista: true });
    if (!mensajeActualizado) {
        return res.send({
            ok: false,
            msg: 'No se pudo eliminar de la lista'
        });
    }
    server.io.emit('notificaciones', { msg: 'actualizar' });
    return res.send({
        ok: true,
        msg: 'La notificación se eliminó de la lista'
    });
});
exports.quitarDeLista = quitarDeLista;
//# sourceMappingURL=mensajes.controller.js.map