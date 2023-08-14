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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoria = exports.actualizar = exports.crear = exports.listar = void 0;
const Categoria_model_1 = require("./Categoria.model");
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
                    { nombre: new RegExp(search, 'i') }
                ] };
        }
        Categoria_model_1.Categoria.paginate(query, { sort: { [sort]: order }, page, limit: size
        }, (err, result) => {
            return res.send({
                ok: true,
                msg: 'Listado de categorías',
                categorias: result.docs,
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
        console.log("===================/categorias========================");
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
        let data = req.body;
        //crea
        let categoria = yield Categoria_model_1.Categoria.create(data);
        if (categoria) {
            return res.status(200).send({
                ok: true,
                mensaje: "Categoría creada con éxito.",
                alerta: 'success',
                categoria
            });
        }
    }
    catch (error) {
        console.log("======================================================");
        console.log("===================/categorias/crear====================");
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
        let data = req.body.categoria;
        const categoriaActualizado = yield Categoria_model_1.Categoria.findByIdAndUpdate({ _id: id }, data, { new: true });
        if (!categoriaActualizado) {
            return res.status(200).json({
                ok: false,
                mensaje: "Error al actualizar categoría.",
                alerta: 'danger'
            });
        }
        return res.status(200).json({
            ok: true,
            mensaje: "Categoría actualizada con éxito.",
            alerta: 'success',
            categoriaActualizado
        });
    }
    catch (error) {
        console.log("======================================================");
        console.log("===================/categorias/actualizar===============");
        console.log(error);
        return res.status(500).send({
            ok: false,
            mensaje: "Algo salió mal.",
            alerta: 'danger',
        });
    }
});
exports.actualizar = actualizar;
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const categoria = yield Categoria_model_1.Categoria.findByIdAndDelete(id);
        if (!categoria) {
            return res.json({
                ok: false,
                mensaje: "Categoria no encontrada.",
            });
        }
        return res.status(200).json({
            ok: true,
            mensaje: "Categoría eliminada con éxito.",
        });
    }
    catch (error) {
        console.log("======================================================");
        console.log("===================/categorias/eliminar===============");
        console.log(error);
        return res.send({
            ok: false,
            mensaje: "Algo salió mal.",
            alerta: 'danger',
        });
    }
});
exports.deleteCategoria = deleteCategoria;
//# sourceMappingURL=Categoria.controller.js.map