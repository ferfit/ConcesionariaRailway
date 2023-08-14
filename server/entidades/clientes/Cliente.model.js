"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const schema = new mongoose_1.default.Schema({
    nombre: { type: String }, apellido: { type: String }, email: { type: String }, celular: { type: String }, nota: { type: String }, estado: { type: Boolean },
    creadoPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
    ultimaModificacionPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
}, { timestamps: true });
schema.plugin(mongoose_paginate_v2_1.default);
exports.Cliente = mongoose_1.default.model('Cliente', schema);
//# sourceMappingURL=Cliente.model.js.map