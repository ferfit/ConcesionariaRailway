"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Negocio = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const negociosSchema = new mongoose_1.default.Schema({
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    encargado: {
        type: String,
        required: true
    },
    direccion: {
        type: String
    },
    provincia: {
        type: String
    },
    ciudad: {
        type: String
    },
    estado: {
        type: Boolean,
    },
    creadoPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
    ultimaModificacionPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
}, { timestamps: true });
negociosSchema.plugin(mongoose_paginate_v2_1.default);
exports.Negocio = mongoose_1.default.model('Negocio', negociosSchema);
//# sourceMappingURL=Negocio.model.js.map