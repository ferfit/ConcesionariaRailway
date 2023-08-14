"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantillaComponent = void 0;
exports.plantillaComponent = `
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'modulo',
    templateUrl    : './modulo.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModuloComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
`;
//# sourceMappingURL=componente.js.map