"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navegacion = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const navegacionSchema = new mongoose_1.default.Schema({
    id: String,
    title: String,
    type: String,
    icon: String,
    link: String,
    color: String,
    orden: Number,
    children: [mongoose_1.default.Schema.Types.Mixed]
});
exports.Navegacion = mongoose_1.default.model('Navegacion', navegacionSchema);
const defaultNavigation = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:view-boards',
        link: '/dashboard',
        orden: 1,
        color: ''
    },
    {
        id: 'licencias',
        title: 'Licencias',
        type: 'basic',
        icon: 'heroicons_outline:key',
        link: '/licencias',
        orden: 2,
        color: 'red'
    },
    {
        id: 'clientes',
        title: 'Clientes',
        type: 'basic',
        icon: 'heroicons_outline:user-circle',
        link: '/clientes',
        orden: 3,
        color: ''
    },
    {
        id: 'divider-1',
        orden: 4,
        type: 'divider'
    },
    {
        id: 'maestros',
        title: 'Maestros',
        type: 'collapsable',
        subtitle: 'Administracion',
        icon: 'heroicons_outline:clipboard-list',
        orden: 5,
        children: [
            {
                id: 'maestros.bd',
                title: 'Base de Datos',
                type: 'basic',
                icon: 'heroicons_outline:database',
                link: '/maestros/bds',
                color: ''
            },
            {
                id: 'maestros.servicios',
                title: 'Servicios',
                type: 'basic',
                icon: 'heroicons_outline:book-open',
                link: '/maestros/servicios',
                color: ''
            }
        ]
    }
];
console.log('??');
exports.Navegacion.count((err, count) => {
    console.log('agregando navegacion inicial');
    if (!err && count === 0) {
        defaultNavigation.forEach(element => {
            console.log(element);
            exports.Navegacion.create(element);
        });
    }
});
//# sourceMappingURL=Navegacion.model.js.map