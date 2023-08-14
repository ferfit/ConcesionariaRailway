"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = require("../../globals/environment");
const bcryptSalt = environment_1.CONFIG.BCRYPT_SALT;
const usuarioSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    rut: {
        type: String,
    },
    tokenVersion: Number,
    perfil: {
        nombre: String,
        foto: {
            contentType: String,
            data: String
        }
    },
    estado: {
        type: String,
        default: 'inactivo'
    },
    token: String,
    preferencia: {
        type: String,
        default: 'light'
    },
    rol: {
        type: String,
        default: 'chofer',
    },
    creadoPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
    ultimaModificacionPor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Usuario' },
}, { timestamps: true });
usuarioSchema.pre('save', function save(next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        if (!user.isModified('password')) {
            return next();
        }
        try {
            const hash = yield bcrypt_1.default.hash(user.password, Number(bcryptSalt));
            user.password = hash;
            next();
        }
        catch (err) {
            return next(err);
        }
    });
});
const compararPassword = function (passwordCandidata, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (yield bcrypt_1.default.compare(this.password, passwordCandidata)) {
                cb(null, true);
            }
            else {
                cb(null, false);
            }
        }
        catch (err) {
            cb(err, false);
        }
    });
};
usuarioSchema.methods.compararPassword = compararPassword;
// const connection = mongoose.connection;
// connection.once('open', () => {
//   const usuarioChangeStream = connection.collection("usuarios").watch();
//   console.log('Usuario Change Stream.')
//   usuarioChangeStream.on("change", (change) => {
//     console.log(change.operationType, 'tipo?');
//     switch (change.operationType) {
//       case "insert":
//         console.log('insert', change.documentKey._id)
//         break;
//       case "update":
//         console.log('update', change)
//         break;
//       case "delete":
//         // io.of("/api/socket").emit("deletedusuario", change.documentKey._id);
//         console.log('delete', change.documentKey._id)
//         break;
//     }
//   });
// });
/*
  [
    {
      modulo: 'licencias',
      estado: true,
      permisos: {
        ver: true,
        editar: true,
        eliminar: true
      }
    }
  ]
*/
exports.Usuario = mongoose_1.default.model('Usuario', usuarioSchema);
//# sourceMappingURL=Usuario.model.js.map