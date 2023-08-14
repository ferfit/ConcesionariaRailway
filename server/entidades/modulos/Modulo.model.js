"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modulo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const modulosSchema = new mongoose_1.default.Schema({
    crearBackend: {
        type: Boolean,
    },
    crearFrontend: {
        type: Boolean,
    },
    nombreModulo: {
        type: String
    },
    grid: {
        type: String
    },
    columnas: [
        {
            nombre: { type: String },
            tipo: { type: String },
            tipoInput: { type: String },
            grid: { type: String },
            hiddenBlock: { type: String },
            requerido: { type: Boolean },
            minLetras: { type: Number },
            maxLetras: { type: Number },
            pattern: { type: String },
            rows: { type: String }
        }
    ],
    scss: [],
    estado: {
        type: Boolean,
    },
    creadoPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
    ultimaModificacionPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
}, { timestamps: true });
modulosSchema.plugin(mongoose_paginate_v2_1.default);
exports.Modulo = mongoose_1.default.model('Modulo', modulosSchema);
//# sourceMappingURL=Modulo.model.js.map