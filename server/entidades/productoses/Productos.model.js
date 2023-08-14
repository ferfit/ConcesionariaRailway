"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const schema = new mongoose_1.default.Schema({
    nombre: { type: String },
    creadoPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
    ultimaModificacionPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
}, { timestamps: true });
schema.plugin(mongoose_paginate_v2_1.default);
exports.Productos = mongoose_1.default.model('Productos', schema);
//# sourceMappingURL=Productos.model.js.map