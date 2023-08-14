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
exports.postUno = exports.invitar = exports.privilegios = exports.rol = exports.estado = exports.setMiPassword = exports.setMiUsuario = exports.setMiPreferencia = exports.getMiUsuario = exports.getTodo = void 0;
const express_validator_1 = require("express-validator");
const environment_1 = require("../../globals/environment");
const bcrypt_1 = __importDefault(require("bcrypt"));
const { entidad, entidades } = { entidad: 'Usuario', entidades: 'Usuarios' };
const Usuario_model_1 = require("./Usuario.model");
const enviarMail_1 = require("../../mail/enviarMail");
const crypto_1 = __importDefault(require("crypto"));
const clienteURL = environment_1.CONFIG.CLIENTE_URL;
const bcryptSalt = environment_1.CONFIG.BCRYPT_SALT;
const getTodo = (req, res) => {
    Usuario_model_1.Usuario.find({}, (err, usuarios) => {
        return res.send({
            ok: true,
            msg: 'El Usuario se a ingresado correctamente.',
            usuarios
        });
    }).select({ _id: 1, perfil: 1, email: 1, rol: 1, estado: 1 });
};
exports.getTodo = getTodo;
const getMiUsuario = (req, res) => {
    // todo
    // uno
    // dashboard
    /*
    {
                    nombre: .nombre,
                    foto: {
                        data: new Buffer(usuarioExistente.perfil.foto.data).toString('base64'),
                        contentType: usuarioExistente.perfil.foto.contentType
                    }
                }
    */
    const dataUsuario = req.tokenDatosUsuario;
    if (dataUsuario && dataUsuario.idUsuario) {
        Usuario_model_1.Usuario.findOne({ _id: dataUsuario.idUsuario }, (err, usuarioExistente) => {
            const usuario = {
                rol: usuarioExistente.rol,
                _id: usuarioExistente._id,
                email: usuarioExistente.email,
                perfil: usuarioExistente.perfil,
                preferencia: usuarioExistente.preferencia,
                estado: usuarioExistente.estado,
                createdAt: usuarioExistente.createdAt,
                updatedAt: usuarioExistente.updatedAt,
            };
            res.send({
                ok: true,
                usuario
            });
        });
    }
    else {
        res.status(403).send({
            ok: false,
            msg: 'Error no existen usuarios en la bd'
        });
    }
};
exports.getMiUsuario = getMiUsuario;
const setMiPreferencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataUsuario = req.tokenDatosUsuario;
    const data = req.body;
    try {
        const update = {
            'preferencia': data.color
        };
        const usuarioExistente = yield Usuario_model_1.Usuario.findOneAndUpdate({ _id: dataUsuario.idUsuario }, update, { new: true });
        const usuario = {
            rol: usuarioExistente.rol,
            _id: usuarioExistente._id,
            email: usuarioExistente.email,
            perfil: usuarioExistente.perfil,
            estado: usuarioExistente.estado,
            preferencia: usuarioExistente.preferencia,
            createdAt: usuarioExistente.createdAt,
            updatedAt: usuarioExistente.updatedAt
        };
        return res.send({
            ok: true,
            usuario
        });
    }
    catch (error) {
        return res.status(404).send({
            ok: false,
            msg: ''
        });
    }
});
exports.setMiPreferencia = setMiPreferencia;
//Account
const setMiUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataUsuario = req.tokenDatosUsuario;
    const data = req.body;
    try {
        const usuarioExistente = yield Usuario_model_1.Usuario.findOneAndUpdate({ _id: dataUsuario.idUsuario }, {
            'perfil.nombre': data.nombre,
            rut: data.rut,
            'perfil.foto.contentType': data.typeFile,
            'perfil.foto.data': data.base64,
        }, { new: true });
        const usuario = {
            _id: usuarioExistente._id,
            rut: usuarioExistente.rut,
            rol: usuarioExistente.rol,
            email: usuarioExistente.email,
            perfil: usuarioExistente.perfil,
            estado: usuarioExistente.estado,
            createdAt: usuarioExistente.createdAt,
            updatedAt: usuarioExistente.updatedAt
        };
        return res.send({
            ok: true,
            usuario
        });
    }
    catch (error) {
        console.log('error', error);
    }
});
exports.setMiUsuario = setMiUsuario;
//Security
const setMiPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Variables
    const dataUsuario = req.tokenDatosUsuario;
    const query = req.body;
    //Busca el usuario segun id del token
    const usuarioObtenido = yield Usuario_model_1.Usuario.findOne({ _id: dataUsuario.idUsuario });
    if (!usuarioObtenido) {
        return res.status(404).send({ ok: false, msg: 'Usuario no existe' });
    }
    //Crea instacion del usuario
    let resultado = false;
    const usuario = new Usuario_model_1.Usuario({
        email: '',
        password: query.currentPassword
    });
    //Compara la pass del usuario que se trajo de la bd, con la que se envia del front
    yield usuario.compararPassword(usuarioObtenido.password, (err, coincide) => resultado = coincide);
    if (!resultado) {
        return res.send({ ok: false, msg: 'La contraseña no coincide.' });
    }
    //Si coincide hasheo la nueva pass y actualizo el usuario
    const hash = yield bcrypt_1.default.hash(query.newPassword, Number(bcryptSalt));
    const usuarioModificado = yield Usuario_model_1.Usuario.findOneAndUpdate({ _id: dataUsuario.idUsuario }, { password: hash }, { new: true });
    if (!usuarioModificado) {
        return res.status(404).send({ ok: false, msg: 'Usuario no existe' });
    }
    //Retorno
    return res.send({
        ok: true,
        msg: 'La contraseña se actualizó con éxito.'
    });
});
exports.setMiPassword = setMiPassword;
//Team 
const estado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idUsuario = req.body.data.idUsuario;
    const estadoObtenido = req.body.data.estado;
    //Valido si exite el usuario
    const usuarioObtenido = yield Usuario_model_1.Usuario.findOne({ _id: idUsuario });
    if (!usuarioObtenido) {
        return res.status(404).send({ ok: false, msg: 'Usuario no existe' });
    }
    //Actualizado el estado del usuario
    const usuarioModificado = yield Usuario_model_1.Usuario.findOneAndUpdate({ _id: idUsuario }, { estado: estadoObtenido }, { new: true });
    if (!usuarioModificado) {
        return res.status(404).send({ ok: false, msg: 'No se puedo actualizar los datos del usuario.' });
    }
    //Si cambia a estado "activo"
    if (usuarioObtenido.estado === 'pendiente' && estadoObtenido === 'activo') {
        (0, enviarMail_1.sendEmail)(usuarioObtenido.email, "Bienvenido al sistema.", {
            name: usuarioObtenido.perfil.nombre,
        }, "./templates/registro.handlebars");
    }
    return res.send({
        ok: true,
        msg: 'estado usuario actualizado'
    });
});
exports.estado = estado;
const rol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, rol } = req.body;
    if (req.tokenDatosUsuario.rol !== 'administrador') {
        return res.send({
            ok: false,
            msg: 'No tiene permisos para realizar esta acción.'
        });
    }
    try {
        const usuario = yield Usuario_model_1.Usuario.findOne({ _id: id });
        if (!usuario) {
            return res.send({
                ok: false,
                msg: 'El usuario no existe.'
            });
        }
        const usuarioModificado = yield Usuario_model_1.Usuario.findByIdAndUpdate({ _id: id }, { rol: rol });
        return res.send({
            ok: true,
            msg: 'El rol se actualizó con éxito.'
        });
    }
    catch (error) {
    }
});
exports.rol = rol;
const privilegios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idUsuario = req.body.data.idUsuario;
    const privilegiosObtenidos = req.body.data.privilegios;
    const usuarioObtenido = yield Usuario_model_1.Usuario.findOne({ _id: idUsuario });
    if (!usuarioObtenido) {
        return res.status(404).send({ ok: false, msg: 'Usuario no existe' });
    }
    console.log(privilegiosObtenidos, 'privilegios?');
    const usuarioModificado = yield Usuario_model_1.Usuario.findOneAndUpdate({ _id: idUsuario }, { privilegios: privilegiosObtenidos }, { new: true });
    console.log(usuarioModificado);
    if (!usuarioModificado) {
        return res.status(404).send({ ok: false, msg: 'Usuario no existe' });
    }
    return res.send({
        ok: true,
        msg: 'estado usuario actualizado'
    });
});
exports.privilegios = privilegios;
//Invitaciones
const invitar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const correos = req.body.correos;
    //Valida que exita un correo o mas
    if (!correos || correos.length <= 0) {
        return res.send({
            ok: false,
            msg: 'tiene que ingresar correos'
        });
    }
    for (const correo of correos) {
        //crea token y lo hashea
        const resetToken = crypto_1.default.randomBytes(32).toString('hex');
        const hash = yield bcrypt_1.default.hash(resetToken, 10);
        //Valida si existe un usuario con el correo
        const usuarioExiste = yield Usuario_model_1.Usuario.findOne({ email: correo });
        if (usuarioExiste) {
            // si usuario existe volver a notificar si es que ya no confirmo el usuario anterior
            if (usuarioExiste.estado === 'activo') {
                //console.log(correo, 'ya existe y esta confirmado recuperar password???!')
            }
            else {
                const emailEncoded = Buffer.from(correo).toString('base64');
                const link = `${clienteURL}/confirmar-registro/${resetToken}/${usuarioExiste._id}/${emailEncoded}`;
                (0, enviarMail_1.sendEmail)(usuarioExiste.email, "Confirmar Registro", { name: '', link }, "./templates/invitacion.handlebars");
                //console.log(correo, 'ya existe y no esta confirmado solo notificar!')
            }
        }
        else {
            const usuario = new Usuario_model_1.Usuario({
                email: correo,
                password: Math.floor(Math.random() * 1000000),
                token: hash,
                estado: 'confirmar'
            });
            //console.log(usuario);
            const usuarioGuardado = yield usuario.save();
            const emailEncoded = Buffer.from(correo).toString('base64');
            //console.log(usuarioGuardado);
            const link = `${clienteURL}/confirmar-registro/${resetToken}/${usuario._id}/${emailEncoded}`;
            (0, enviarMail_1.sendEmail)(usuario.email, "Confirmar Registro", { name: '', link }, "./templates/invitacion.handlebars");
        }
    }
    ;
    return res.send({
        ok: true,
        msg: 'El Usuario se ha ingresado correctamente.'
    });
});
exports.invitar = invitar;
const postUno = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, express_validator_1.check)("email", "Email no es valido").isEmail().run(req);
    yield (0, express_validator_1.check)("password", "La contraseña debe tener un minimo de 4 caracteres").isLength({ min: 4 }).run(req);
    yield (0, express_validator_1.check)("confirmPassword", "Las contraseñas deben ser iguales").equals(req.body.password).run(req);
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
        password: req.body.password
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
            }
            return res.send({
                ok: true,
                msg: 'El Usuario se a ingresado correctamente.',
                usuario
            });
        });
    });
});
exports.postUno = postUno;
//# sourceMappingURL=Usuario.controller.js.map