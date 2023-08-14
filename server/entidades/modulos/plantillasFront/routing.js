"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantillaRouting = void 0;
exports.PlantillaRouting = `
import { Route } from '@angular/router';
import { ModuloComponent } from './lista/modulo.component';
import { ModuloListComponent } from './lista/list/modulo.component';
import { ModuloResolver } from './lista/modulo.resolver';

export const moduloRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'lista'
    },
    {
        path     : 'lista',
        component: ModuloComponent,
        children : [
            {
                path     : '',
                component: ModuloListComponent,
                resolve  : {
                    modulo  : ModuloResolver,
                }
            }
        ]
    }
];
`;
//# sourceMappingURL=routing.js.map