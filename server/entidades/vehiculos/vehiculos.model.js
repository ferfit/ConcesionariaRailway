"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const VehiculoSchema = new mongoose_1.default.Schema({
    modelo: {
        type: String,
        required: true,
    },
    marca: {
        type: String
    },
    encargado: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean
    },
    creado: {
        type: Date,
        default: Date.now
    }
});
// const server = Servidor.instancia;
VehiculoSchema.plugin(mongoose_paginate_v2_1.default);
// VehiculoSchema.pre('save', async function(next){
//   if(this.isNew) {
//     console.log('algo en presave de notificaciones??');
//       server.io.emit('notificaciones', {msg: 'actualizar'});
//   }
// });
exports.Vehiculos = mongoose_1.default.model('Vehiculos', VehiculoSchema);
//# sourceMappingURL=vehiculos.model.js.map