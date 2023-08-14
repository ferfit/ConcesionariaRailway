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
exports.deleteVehiculo = exports.update = exports.insert = exports.getVehiculo = exports.getTodo = exports.nuevoVehiculo = void 0;
const vehiculos_model_1 = require("./vehiculos.model");
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("../../server"));
const { entidad, entidades } = { entidad: "Vehiculo", entidades: "Vehiculos" };
const server = server_1.default.instancia;
const ObjectId = mongoose_1.default.Types.ObjectId;
const nuevoVehiculo = (modelo, marca, encargado, estado = true) => __awaiter(void 0, void 0, void 0, function* () {
    const vehiculoData = {
        modelo,
        marca,
        encargado,
        date: new Date(),
        estado
    };
    const vehiculo = new vehiculos_model_1.Vehiculos(vehiculoData);
    vehiculo.save();
});
exports.nuevoVehiculo = nuevoVehiculo;
const getTodo = (req, res) => {
    /* console.log(req.query, 'QUERYS');

    const search: any = req.query.search || null;
    const sort: string = req.query.sort?.toString() || '_id';
    const order = req.query.order?.toString() || 'desc';
    const pageString:any = req.query.page?.toString() || 0;
    const sizeString = req.query.size?.toString() || '10';
    const page = parseInt(pageString, 10)+1;
    const size = parseInt(sizeString, 10);

    let query = {};

    if (search) {
      query = { $or: [
          { modelo: new RegExp(search, 'i') }
      ]}
    }

    Vehiculos.paginate(query, { sort: { [sort]: order }, page, limit: size
    }, (err: any, result: any) => {

      console.log(result, 'RESULTADO ')
      return res.send({
          ok: true,
          msg: `Listado de productos`,
          vehiculos: result.docs,
          pagination: {
            length: result.totalDocs,
            size: result.limit,
            totalPages: result.totalPages,
            page: result.page - 1,
          }
      })
    }); */
    // const dataUsuario = req.tokenDatosUsuario.idUsuario;
    // Vehiculos.find({estado:true}, (err: any, vehiculos: VehiculosDocument[]) => {
    //     return res.send({
    //         ok: true,
    //         vehiculos
    //     });
    // }).sort({_id: -1});
};
exports.getTodo = getTodo;
const getVehiculo = (req, res) => {
    // const dataUsuario = req.tokenDatosUsuario.idUsuario;
    const idVehiculo = req.params.id;
    vehiculos_model_1.Vehiculos.findOne({ _id: idVehiculo, estado: true }, (err, vehiculo) => {
        return res.send({
            ok: true,
            vehiculo
        });
    }).sort({ _id: -1 });
};
exports.getVehiculo = getVehiculo;
const insert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const dataUsuario = req.tokenDatosUsuario.idUsuario;
    const data = req.body;
    console.log(req.body, 'BODY');
    const vehiculo = new vehiculos_model_1.Vehiculos(data);
    console.log(vehiculo, 'NEW VEHICULO');
    const newVehiculo = vehiculo.save();
    if (newVehiculo) {
        return res.send({
            ok: true,
            msg: `El ${entidad} se guardo correctamente.`,
            vehiculo
        });
    }
    else {
        return res.send({
            ok: false,
            msg: `El ${entidad} no se pudo guardar.`
        });
    }
});
exports.insert = insert;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const dataUsuario = req.tokenDatosUsuario.idUsuario;
    const data = req.body;
    const idVehiculo = req.params.id;
    console.log(req.body, 'BODY');
    const vehiculo = new vehiculos_model_1.Vehiculos(data);
    try {
        const vehiculoActualizado = yield vehiculos_model_1.Vehiculos.findByIdAndUpdate({ _id: idVehiculo }, data, { new: true });
        if (!vehiculoActualizado) {
            return res.send({
                ok: false,
                msg: `No se puedo actualizar el ${entidad}.`,
            });
        }
        return res.send({
            ok: true,
            msg: `${entidad} actualizado.`,
            vehiculo: vehiculoActualizado
        });
    }
    catch (error) {
        console.log(error, 'error en backend');
        return res.send({
            ok: false,
            msg: 'Algo salío mal, vuelva a intentarlo.'
        });
    }
});
exports.update = update;
const deleteVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const dataUsuario = req.tokenDatosUsuario.idUsuario;
    const idVehiculo = req.params.id;
    try {
        const vehiculoEliminado = yield vehiculos_model_1.Vehiculos.findByIdAndUpdate({ _id: idVehiculo }, { estado: false }, { new: true });
        if (!vehiculoEliminado) {
            return res.send({
                ok: false,
                msg: `No se puedo eliminar el ${entidad}.`,
            });
        }
        return res.send({
            ok: true,
            msg: `${entidad} eliminado.`,
            vehiculo: vehiculoEliminado
        });
    }
    catch (error) {
        console.log(error, 'error en backend');
        return res.send({
            ok: false,
            msg: 'Algo salío mal, vuelva a intentarlo.'
        });
    }
});
exports.deleteVehiculo = deleteVehiculo;
//# sourceMappingURL=vehiculos.controller.js.map