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
exports.nuevaAudit = void 0;
const Audit_model_1 = require("./Audit.model");
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
const nuevaAudit = (dataNueva, dataAntigua, modulo, msg, tipo) => __awaiter(void 0, void 0, void 0, function* () {
    if (dataAntigua && dataAntigua && dataNueva.ultimaModificacionPor) {
        const cambios = dif(dataNueva, dataAntigua);
        if (cambios) {
            const data = {
                idUsuario: dataNueva.ultimaModificacionPor,
                dif: cambios,
                Type: tipo,
                modulo,
                Note: msg,
            };
            const audit = new Audit_model_1.Audit(data);
            audit.save();
        }
    }
    else {
        const data = {
            idUsuario: dataNueva.ultimaModificacionPor,
            nuevo: dataNueva._id,
            Type: tipo,
            modulo,
            Note: msg,
        };
        const audit = new Audit_model_1.Audit(data);
        audit.save();
    }
    ;
});
exports.nuevaAudit = nuevaAudit;
const dif = (dataNueva, dataAntigua) => {
    const modificaciones = [];
    for (const key of Object.keys(dataNueva)) {
        if (key === '$push') {
            return null;
        }
        if (!key.includes('$')) {
            if (JSON.stringify(dataNueva[key]) !== JSON.stringify(dataAntigua[key])) {
                modificaciones.push({
                    propiedad: key,
                    valorAntiguo: dataAntigua[key],
                    valorNuevo: dataNueva[key]
                });
            }
        }
    }
    return modificaciones;
};
//# sourceMappingURL=Audit.controller.js.map