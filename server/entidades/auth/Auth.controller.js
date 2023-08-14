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
exports.confirmar = exports.registrar = exports.reiniciarPassword = exports.recuperarPassword = exports.createRefreshToken = exports.createAccessToken = exports.refreshAccessToken = exports.login = void 0;
const express_validator_1 = require("express-validator");
const jsonwebtoken_1 = require("jsonwebtoken");
const crypto_1 = __importDefault(require("crypto"));
const { entidad, entidades } = { entidad: 'Usuario', entidades: 'Usuarios' };
const Usuario_model_1 = require("../usuarios/Usuario.model");
const Token_model_1 = require("./Token.model");
const enviarMail_1 = require("../../mail/enviarMail");
const bcrypt_1 = __importDefault(require("bcrypt"));
const environment_1 = require("../../globals/environment");
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
const clienteURL = environment_1.CONFIG.CLIENTE_URL;
//Flujo login y refreshToken
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, express_validator_1.check)("email", "Email no es valido").isEmail().run(req);
        yield (0, express_validator_1.check)("password", "La contrase;a debe tener un mínimo de 4 caracteres").isLength({ min: 4 }).run(req);
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(404).send({
                ok: false,
                msg: errors.array()
            });
        }
        //Crea usuario
        const usuario = new Usuario_model_1.Usuario({
            email: req.body.email,
            password: req.body.password
        });
        //console.log(req.body.password, 'usuario obtenido')
        //Busca usuario
        const usuarioObtenido = yield Usuario_model_1.Usuario.findOne({ email: req.body.email });
        if (!usuarioObtenido) {
            return res.status(404).send({ ok: false, accessToken: null });
        }
        let resultado = false;
        //Compara password
        yield usuario.compararPassword(usuarioObtenido.password, (err, coincide) => resultado = coincide);
        if (!resultado) {
            return res.status(404).send({ ok: false, accessToken: null });
        }
        //Valida si el estado del usuario es activo
        if (usuarioObtenido.estado !== 'activo') {
            return res.status(404).send({ ok: false, accessToken: null, inactivo: true });
        }
        usuarioObtenido.password = undefined;
        //retorno
        //console.log(usuarioObtenido,'==usuario obtenido en login')
        return res.send({
            ok: true,
            accessToken: (0, exports.createAccessToken)(usuarioObtenido),
            user: usuarioObtenido
        });
    }
    catch (error) {
        console.log('===========login==================');
        console.log(error);
    }
});
exports.login = login;
const refreshAccessToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log('llego a refreshToken')
    //console.log(req.tokenDatosUsuario.idUsuario,'id')
    const _id = req.tokenDatosUsuario.idUsuario;
    //valido el usuario
    const usuarioObtenido = yield Usuario_model_1.Usuario.findOne({ _id });
    //console.log(usuarioObtenido,'osuario obitenido')
    if (!usuarioObtenido) {
        return res.status(404).send({ ok: false, accessToken: null });
    }
    //Valido si el estado es activo
    if (usuarioObtenido.estado !== 'activo') {
        return res.status(404).send({ ok: false, accessToken: null, inactivo: true });
    }
    //Retorno nuevo token
    //console.log(usuarioObtenido,'===usuario en refresh')
    return res.send({
        ok: true,
        accessToken: (0, exports.createAccessToken)(usuarioObtenido),
        user: usuarioObtenido
    });
});
exports.refreshAccessToken = refreshAccessToken;
/* export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.cookies.jid;
    if (!token) {
      return res.send({ ok: false, accessToken: "" });
    }
    let payload: any = null;
    try {
      payload = verify(token, CONFIG.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
      return res.send({ ok: false, accessToken: "" });
    }

    const user = await Usuario.findOne({ id: payload.userId });

    if (!user){
      return res.send({ ok: false, accessToken: "" });
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({ ok: false, accessToken: "" });
    }


    // sendRefreshToken(res, createRefreshToken(user));

    return res.send({ ok: true, accessToken: createAccessToken(user) });
}
 */
const createAccessToken = (usuario) => {
    return (0, jsonwebtoken_1.sign)({ idUsuario: usuario.id, rol: usuario.rol }, environment_1.CONFIG.ACCESS_TOKEN_SECRET, {
        expiresIn: "8h"
    });
};
exports.createAccessToken = createAccessToken;
const createRefreshToken = (usuario) => {
    return (0, jsonwebtoken_1.sign)({ userId: usuario.id, tokenVersion: usuario.tokenVersion }, environment_1.CONFIG.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d"
    });
};
exports.createRefreshToken = createRefreshToken;
//Flujo recuperar pass
const recuperarPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //Valida si se envia la variable email
    if (!req.body.email) {
        return res.send({ ok: false, msg: 'Correo no existe' });
    }
    //Valida si existe el usuario segun email
    const usuario = yield Usuario_model_1.Usuario.findOne({ email: req.body.email });
    if (!usuario) {
        return res.send({ ok: false, msg: 'Correo no existe' });
    }
    //Valida si existe un token de recuperacion de contraseña
    const token = yield Token_model_1.Token.findOne({ idUsuario: usuario._id });
    //Si existe, se borra
    if (token)
        yield token.deleteOne();
    //Se crea un nuevo token y se hashea
    const resetToken = crypto_1.default.randomBytes(32).toString('hex');
    //console.log(resetToken,'resetToken')
    const hash = yield bcrypt_1.default.hash(resetToken, 10);
    //Crea la instacia del token
    yield new Token_model_1.Token({
        idUsuario: usuario._id,
        token: hash,
        createdAt: Date.now(),
    }).save();
    //Url
    const link = `${clienteURL}/reset-password/${resetToken}/${usuario._id}`;
    //Envio email
    (0, enviarMail_1.sendEmail)(usuario.email, "Solicitud de reinicio de contraseña", { name: 'Probando', link }, "./templates/recuperar.handlebars");
    //Retorno
    return res.send({ ok: true, msg: 'Correo Enviado correctamente' });
});
exports.recuperarPassword = recuperarPassword;
const reiniciarPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //Variables
    const { token, idUsuario, password } = req.body.data;
    //Busco en tabla tokens si existe un token
    const passwordResetToken = yield Token_model_1.Token.findOne({ idUsuario });
    if (!passwordResetToken) {
        return res.status(404).send({ ok: false, msg: 'No se registra una solictud de restablecimiento de contraseña.' });
    }
    //Valido el token
    const isValid = yield bcrypt_1.default.compare(token, passwordResetToken.token);
    if (!isValid) {
        return res.status(404).send({ ok: false, msg: 'El tiempo para restablecer su contraseña expiró, solicite uno nuevo.' });
    }
    //Hasheo la nueva contrseña
    const hash = yield bcrypt_1.default.hash(password, 10);
    //Actualizado contraseña
    yield Usuario_model_1.Usuario.updateOne({ _id: idUsuario }, { $set: { password: hash } }, { new: true });
    //Busco datos de usuario
    const usuario = yield Usuario_model_1.Usuario.findById({ _id: idUsuario });
    //Envio email
    (0, enviarMail_1.sendEmail)(usuario.email, "Se ha reiniciado su contraseña.", {
        name: '',
    }, "./templates/reiniciar.handlebars");
    //Borro el token de la tabla
    yield passwordResetToken.deleteOne();
    //Retorno
    return res.send({ ok: true, msg: 'Se cambio la Contraseña a la solicitada.' });
});
exports.reiniciarPassword = reiniciarPassword;
//Flujo registro
const registrar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, express_validator_1.check)("email", "Email no es valido").isEmail().run(req);
    yield (0, express_validator_1.check)("password", "La contraseña debe tener un minimo de 4 caracteres").isLength({ min: 4 }).run(req);
    yield (0, express_validator_1.sanitize)("email").normalizeEmail({ gmail_remove_dots: false }).run(req);
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.send({
            ok: false,
            msg: errors.array()
        });
    }
    const usuario = new Usuario_model_1.Usuario({
        email: req.body.email,
        "perfil.nombre": req.body.name,
        rut: req.body.rut,
        password: req.body.password,
        estado: 'pendiente'
    });
    Usuario_model_1.Usuario.findOne({ email: usuario.email }, (err, usuarioExistente) => {
        if (err) {
            return next(err);
        }
        if (usuarioExistente) {
            return res.send({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }
        usuario.save((erro) => {
            if (erro) {
                return next(erro);
            } // Enviar correo que requiere confirmacion de Administrador y no Bienvenido.
            (0, enviarMail_1.sendEmail)(usuario.email, "Solicitud de Registro.", {
                name: usuario.perfil.nombre,
            }, "./templates/solicitud.handlebars");
            /* nuevoMensaje(
              'Solicitud de Acceso',
              `${usuario.perfil.nombre} esta solicitando una cuenta.`,
              'user-add',
              'administrador',
              '/perfil',
              true
            ) */
            return res.send({
                ok: true,
                msg: 'El usuario fue ingresado pendiente a confirmación.'
            });
        });
    });
});
exports.registrar = registrar;
const confirmar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //Validaciones
    yield (0, express_validator_1.check)("email", "Email no es valido").isEmail().run(req);
    yield (0, express_validator_1.check)("password", "La contraseña debe tener un minimo de 4 caracteres").isLength({ min: 4 }).run(req);
    yield (0, express_validator_1.sanitize)("email").normalizeEmail({ gmail_remove_dots: false }).run(req);
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.send({
            ok: false,
            msg: errors.array()
        });
    }
    //Creo instacion de usuario
    const usuario = new Usuario_model_1.Usuario({
        email: req.body.email,
        "perfil.nombre": req.body.name,
        password: req.body.password,
        rut: req.body.rut,
        estado: 'activo'
    });
    const token = req.body.token;
    //Valido si el usuario existe
    const usuarioExistente = yield Usuario_model_1.Usuario.findOne({ email: usuario.email, estado: 'confirmar' });
    if (!usuarioExistente) {
        return res.status(404).send({ ok: false, msg: 'Usuario con ese correo no existe' });
    }
    //Valido token
    const isValid = yield bcrypt_1.default.compare(token, usuarioExistente.token);
    if (!isValid) {
        return res.status(404).send({ ok: false, msg: 'Su token de seguridad expiróm solicite uno nuevo' });
    }
    const hash = yield bcrypt_1.default.hash(usuario.password, 10);
    //Actualizado el usuario
    const usuarioActualzado = yield Usuario_model_1.Usuario.updateOne({ _id: usuarioExistente._id }, { $set: { password: hash, "perfil.nombre": usuario.perfil.nombre, estado: 'activo', rut: usuario.rut, token: null } }, { new: true });
    if (!usuarioActualzado) {
        return res.status(404).send({ ok: false, msg: 'Su usuario no fue activado comuniquese con un administrador.' });
    }
    (0, enviarMail_1.sendEmail)(usuario.email, "Solicitud de Registro.", {
        name: usuario.perfil.nombre,
    }, "./templates/solicitud.handlebars");
    return res.send({ ok: true, msg: 'Se cambio la Contraseña a la solicitada.' });
});
exports.confirmar = confirmar;
//# sourceMappingURL=Auth.controller.js.map