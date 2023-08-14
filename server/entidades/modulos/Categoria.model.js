"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const categoriasSchema = new mongoose_1.default.Schema({
    nombre: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
    },
    creadoPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
    ultimaModificacionPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
}, { timestamps: true });
categoriasSchema.plugin(mongoose_paginate_v2_1.default);
exports.Categoria = mongoose_1.default.model('Categoria', categoriasSchema);
//# sourceMappingURL=Categoria.model.js.map