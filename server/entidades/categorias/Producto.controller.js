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
exports.deleteProducto = exports.actualizar = exports.crear = exports.listar = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Producto_model_1 = require("./Producto.model");
const funciones_1 = require("../../utilidades/funciones");
const ObjectId = mongoose_1.default.Types.ObjectId;
const listar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const search = req.query.search || null;
        const sort = ((_a = req.query.sort) === null || _a === void 0 ? void 0 : _a.toString()) || '_id';
        const order = ((_b = req.query.order) === null || _b === void 0 ? void 0 : _b.toString()) || 'desc';
        const pageString = ((_c = req.query.page) === null || _c === void 0 ? void 0 : _c.toString()) || 0;
        const sizeString = ((_d = req.query.size) === null || _d === void 0 ? void 0 : _d.toString()) || '10';
        const page = parseInt(pageString, 10) + 1;
        const size = parseInt(sizeString, 10);
        let query = {};
        if (search) {
            query = { $or: [
                    { titulo: new RegExp(search, 'i') }
                ] };
        }
        Producto_model_1.Producto.paginate(query, { sort: { [sort]: order }, page, limit: size
        }, (err, result) => {
            return res.send({
                ok: true,
                msg: `Listado de productos`,
                productos: result.docs,
                pagination: {
                    length: result.totalDocs,
                    size: result.limit,
                    totalPages: result.totalPages,
                    page: result.page - 1,
                }
            });
        });
    }
    catch (error) {
        console.log("======================================================");
        console.log("===================/productos==========================");
        console.log(error);
        return res.status(500).send({
            ok: false,
            mensaje: "Algo salió mal.",
            alerta: 'danger',
        });
    }
});
exports.listar = listar;
const crear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = JSON.parse(req.body.producto);
        data.slug = funciones_1.textToSlug(data.titulo);
        data.imagenes = new Array();
        data.imagenes.push(req.file.filename);
        //crea el producto
        let producto = yield Producto_model_1.Producto.create(data);
        console.log(producto, '===producto');
        if (producto) {
            return res.status(200).send({
                ok: true,
                mensaje: "Producto creado con éxito.",
                alerta: 'success',
                producto
            });
        }
    }
    catch (error) {
        console.log("======================================================");
        console.log("===================/productos/crear====================");
        console.log(error);
        return res.status(500).send({
            ok: false,
            mensaje: "Algo salió mal.",
            alerta: 'danger',
        });
    }
});
exports.crear = crear;
const actualizar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let data = req.body.cliente;
        //data.ultimaModificacionPor = req.tokenDatosUsuario.id;
        const productoActualizado = yield Producto_model_1.Producto.findByIdAndUpdate({ _id: id }, data, { new: true });
        if (!productoActualizado) {
            return res.status(200).json({
                ok: false,
                mensaje: "Error al actualizar cliente.",
                alerta: 'danger'
            });
        }
        return res.status(200).json({
            ok: true,
            mensaje: "Cliente actualizado con éxito.",
            alerta: 'success',
            productoActualizado
        });
    }
    catch (error) {
        console.log("======================================================");
        console.log("===================/productos/actualizar===============");
        console.log(error);
        return res.status(500).send({
            ok: false,
            mensaje: "Algo salió mal.",
            alerta: 'danger',
        });
    }
});
exports.actualizar = actualizar;
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cliente = yield Producto_model_1.Producto.findByIdAndDelete(id);
        if (!cliente) {
            return res.json({
                ok: false,
                mensaje: "Producto no encontrado.",
            });
        }
        return res.status(200).json({
            ok: true,
            mensaje: "Producto eliminado con éxito.",
        });
    }
    catch (error) {
        console.log("======================================================");
        console.log("===================/productos/eliminar=================");
        console.log(error);
        return res.send({
            ok: false,
            mensaje: "Algo salió mal.",
            alerta: 'danger',
        });
    }
});
exports.deleteProducto = deleteProducto;
//# sourceMappingURL=Producto.controller.js.map