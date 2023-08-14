"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantillaResolver = void 0;
exports.plantillaResolver = `
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {  Observable,  } from 'rxjs';
import { ModuloService } from './modulo.service';


@Injectable({
    providedIn: 'root'
})
export class ModuloResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _moduloService: ModuloService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._moduloService.getModulo();
    }
}


`;
//# sourceMappingURL=resolver.js.map