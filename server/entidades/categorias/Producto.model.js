"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const productosSchema = new mongoose_1.default.Schema({
    titulo: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    imagenes: [
        {
            type: Array,
            default: 'product_default.jpg'
        }
    ],
    precio: {
        type: Number,
    },
    descripcionCorta: {
        type: String,
    },
    descripcionLarga: {
        type: String,
    },
    stock: {
        type: Number,
        default: 0
    },
    nVentas: {
        type: Number,
        default: 0
    },
    nPuntos: {
        type: Number,
        default: 0
    },
    estado: {
        type: Boolean
    },
    //categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
    //subcategoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategoria' },
    creadoPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
    ultimaModificacionPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
}, { timestamps: true });
productosSchema.plugin(mongoose_paginate_v2_1.default);
exports.Producto = mongoose_1.default.model('Producto', productosSchema);
//# sourceMappingURL=Producto.model.js.map