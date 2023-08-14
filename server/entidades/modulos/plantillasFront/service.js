"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantillaService = void 0;
exports.plantillaService = `
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { InventoryPagination, Modulo } from './modulo.types';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ModuloService
{
    // Private
    private _modulo : BehaviorSubject<any[]> | null = new BehaviorSubject([]);
    private _paginationModulo: BehaviorSubject<InventoryPagination | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    //Clientes
    get modulo$(): Observable<Modulo[]>
    {
        return this._modulo.asObservable();
    }

    //Pagination
    get paginationModulo$(): Observable<InventoryPagination>
    {
        return this._paginationModulo.asObservable();
    }




    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    getModulo(page: number = 0, size: number = 10, sort: string = '_id', order: 'asc' | 'desc' | '' = 'desc', search: string = '')
    : Observable<{ pagination: InventoryPagination; modulo: Modulo[] }>
    {
        return this._httpClient.get<{pagination: InventoryPagination; modulo: Modulo[] }>(environment.api + 'modulo', {
            params: {
                page: '' + page,
                size: '' + size,
                sort,
                order,
                search
            }
        }).pipe(
            tap((response:any) => {
                this._modulo.next(response.registros);
                this._paginationModulo.next(response.pagination);
            })
        );
    }

    createSimple(registro:any): Observable<Modulo>
    {
        return this.modulo$.pipe(
            take(1),
            switchMap(modulo => this._httpClient.post<Modulo>(environment.api+'modulo',
                registro
            ).pipe(
                map((nuevaSimple:any) => {

                    // Agrega el nuevo registro al observable
                    this._modulo.next([nuevaSimple.registro, ...modulo]);

                    // Retorno
                    return nuevaSimple;
                })
            ))
        );

    }

    updateSimple(id: string, registro: any): Observable<any>
    {
        return this.modulo$.pipe(
            take(1),
            switchMap(modulo => this._httpClient.patch<Modulo>(environment.api+'modulo/'+id, {
                registro
            }).pipe(
                map((updatedSimple:any) => {

                    // Busca index dentro del array
                    for (let i = 0; i < modulo.length; i++) {
                        if(modulo[i]._id === id){
                            modulo[i] = updatedSimple.registroActualizado
                            break;
                        }
                    }
                    // Refresca observable
                    this._modulo.next(modulo);

                    // Retorno
                    return updatedSimple;
                })
            ))
        );
    }


    deleteSimple(id: string): Observable<boolean>
    {
        return this.modulo$.pipe(
            take(1),
            switchMap(modulo => this._httpClient.delete(environment.api+'modulo/'+id).pipe(
                map((isDeleted: any) => {

                    if(isDeleted.ok){

                        // Elimina
                        const moduloFiltrados = modulo.filter(element => element._id !== id)

                        // Refresca observable
                        this._modulo.next(moduloFiltrados);

                        // Returno
                        return isDeleted;
                    }

                    return isDeleted;

                })
            ))
        );
    }

}

`;
//# sourceMappingURL=service.js.map