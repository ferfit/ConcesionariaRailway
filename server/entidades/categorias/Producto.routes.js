"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeProducto = void 0;
const express_1 = require("express");
const Producto_controller_1 = require("./Producto.controller");
const fs_1 = __importDefault(require("fs"));
const multer = require('multer');
const storageDisk = multer.diskStorage({
    destination: function (req, file, cb) {
        revisarRuta('./archivos');
        console.log('llego a detination');
        cb(null, './archivos');
    },
    filename: function (req, file, cb) {
        console.log(file, '========file');
        const extension = file.originalname.split('.').pop();
        const fileName = Date.now();
        cb(null, `${fileName}.${extension}`);
    }
});
const revisar = (req, res, next) => {
    console.log('llego a revisar');
    next();
};
//C:\xampp\htdocs\mean\tienda\servidor\server\entidades\productos 
function revisarRuta(ruta) {
    if (!fs_1.default.existsSync(ruta)) {
        fs_1.default.mkdirSync(ruta);
    }
    return true;
}
const upload = multer({ storage: storageDisk }).single('file');
exports.routeProducto = express_1.Router();
exports.routeProducto.get('', Producto_controller_1.listar);
exports.routeProducto.post('', revisar, upload, Producto_controller_1.crear);
exports.routeProducto.patch('/:id', Producto_controller_1.actualizar);
exports.routeProducto.delete('/:id', Producto_controller_1.deleteProducto);
//# sourceMappingURL=Producto.routes.js.map