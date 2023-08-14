"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permuta = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const schema = new mongoose_1.default.Schema({
    nombre: { type: String }, estado: { type: Boolean },
    creadoPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
    ultimaModificacionPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
}, { timestamps: true });
schema.plugin(mongoose_paginate_v2_1.default);
exports.Permuta = mongoose_1.default.model('Permuta', schema);
//# sourceMappingURL=Permuta.model.js.map