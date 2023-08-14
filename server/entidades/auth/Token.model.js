"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const tokenSchema = new mongoose_1.default.Schema({
    idUsuario: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Usuario",
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600, // tiempo en segundos para que expire (1 hora)
    },
});
exports.Token = mongoose_1.default.model('Token', tokenSchema);
//# sourceMappingURL=Token.model.js.map