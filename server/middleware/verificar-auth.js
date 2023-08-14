"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = require("../globals/environment");
const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jsonwebtoken_1.default.verify(token, environment_1.CONFIG.ACCESS_TOKEN_SECRET);
        req.tokenDatosUsuario = { idUsuario: decodedToken.idUsuario, rol: decodedToken.rol, privilegios: decodedToken.privilegios };
        next();
        return req.tokenDatosUsuario;
    }
    catch (error) {
        res.status(401).send({
            ok: false,
            msg: 'No estas Iniciado'
        });
    }
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=verificar-auth.js.map