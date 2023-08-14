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
exports.Notificacion = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("../../server"));
const notificacionSchema = new mongoose_1.default.Schema({
    mensaje: {
        type: String,
        required: true,
    },
    usuario: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' }],
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 2592000, // tiempo en segundos para que expire 30 dias
    },
});
const server = server_1.default.instancia;
// notificaciones
notificacionSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('algo en presave de notificaciones??');
        if (this.isNew) {
            console.log('algo en presave de notificaciones??');
            server.io.emit('notificaciones', { msg: 'actualizar' });
        }
    });
});
exports.Notificacion = mongoose_1.default.model('Notificacion', notificacionSchema);
//# sourceMappingURL=Notificaciones.model.js.map