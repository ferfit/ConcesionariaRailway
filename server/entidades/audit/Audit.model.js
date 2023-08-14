"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audit = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const auditSchema = new mongoose_1.default.Schema({
    idUsuario: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Usuario",
    },
    Type: {
        type: String,
        required: true,
    },
    modulo: {
        type: String,
        required: true,
    },
    Assigned: {
        type: String
    },
    Note: {
        type: String,
        required: true,
    },
    dif: { type: mongoose_1.default.Schema.Types.Mixed },
    nuevo: { type: mongoose_1.default.Schema.Types.Mixed },
    Date: {
        type: Date,
        default: Date.now
    },
});
exports.Audit = mongoose_1.default.model('Audit', auditSchema);
//# sourceMappingURL=Audit.model.js.map