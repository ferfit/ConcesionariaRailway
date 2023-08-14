"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantillaComponentList = void 0;
exports.plantillaComponentList = `
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, merge, Observable, Subject, switchMap, takeUntil, debounceTime } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { InventoryPagination} from '../modulo.types';
import { ModuloService } from '../modulo.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogModulo} from './modal/modalDialog.component';
import { SnackBarService } from '../../../../shared/servicios/snack-bar.service';
import { ModalConfirmService } from '../../../../shared/servicios/modal-confirm.service';



@Component({
    selector       : 'modulo-list',
    templateUrl    : './modulo.component.html',
    styleUrls: ['./modulo.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations     : fuseAnimations
})


export class ModuloListComponent implements OnInit, AfterViewInit, OnDestroy
{

    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;

    modulo$: Observable<any[]>;
    paginationModulo: InventoryPagination;

    //input que buscar en la tabla
    searchInputControl: UntypedFormControl = new UntypedFormControl();


    private _unsubscribeAll: Subject<any> = new Subject<any>();


    isLoading: boolean = false;


    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _moduloService: ModuloService,
        private _dialog: MatDialog,
        private _snackBar: SnackBarService,
        private _confirmDialog: ModalConfirmService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        // Get pagination
        this._moduloService.paginationModulo$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((pagination: InventoryPagination) => {

                // Update the pagination
                this.paginationModulo = pagination;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get clientes
        this.modulo$ = this._moduloService.modulo$;


        // Subscribe to search input field value changes
         this.searchInputControl.valueChanges
         .pipe(
             takeUntil(this._unsubscribeAll),
             debounceTime(300),
             switchMap((query) => {
                 //console.log(this.searchInputControl.value, 'serachinput')
                 this.isLoading = true;
                 return this._moduloService.getModulo(0, 10, '_id', 'desc', query);
             }),
             map(() => {
                 this.isLoading = false;
             })
         )
         .subscribe();

    }

    ngAfterViewInit(): void
    {
        if ( this._sort && this._paginator )
        {
            // Set the initial sort
            this._sort.sort({
                id          : '_id',
                start       : 'desc',
                disableClear: true
            });

            // Mark for check
            this._changeDetectorRef.markForCheck();

            // If the user changes the sort order...
            this._sort.sortChange
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe(() => {
                    // Reset back to the first page
                    this._paginator.pageIndex = 0;

                });

            // Get products if sort or page changes
            merge(this._sort.sortChange, this._paginator.page).pipe(
                switchMap(() => {
                    this.isLoading = true;
                    return this._moduloService.getModulo(this._paginator.pageIndex, this._paginator.pageSize, this._sort.active, this._sort.direction);
                }),
                map(() => {
                    this.isLoading = false;
                })
            ).subscribe();
        }
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    crear():void {
        let action:string = 'crear';
        this._dialog.open(ModalDialogModulo, {
            height: 'auto',
            width:'800px',
            autoFocus: false,
            data: {
                cliente:false,
                action
            }
        }).afterClosed().subscribe((resp)=>{
            if (resp) {
                this._moduloService.createSimple(resp).subscribe((response:any) => {
                    if(response.ok){
                        this._snackBar.mostrarAlerta(response.mensaje, 'mat-primary');
                    }
                });
            }
        });
    }

    editar(simple:any):void {
        let action:string = 'editar';
        this._dialog.open(ModalDialogModulo, {
            height: 'auto',
            width:'800px',
            autoFocus: false,
            data:{
                simple,
                action
            }
        }).afterClosed().subscribe((resp)=>{
            if(resp){
                this._moduloService.updateSimple(simple._id,resp).subscribe((response) => {
                        if(response.ok){
                            this._snackBar.mostrarAlerta(response.mensaje, 'mat-primary');
                        }
                    });
            }

        });
    }

    ver(simple:any):void {
        let action:string = 'ver';
        this._dialog.open(ModalDialogModulo, {
            height: '650px',
            autoFocus: false,
            data:{
                simple,
                action
            }
        });
    }

    eliminar(simple:any):void {

        const title  = '¿Estás seguro de que deseas eliminar este producto?';
        const message = '¡Esta acción no se puede deshacer!';
        const label = 'Eliminar';

        const confirmation = this._confirmDialog.open(title,message,label);

        confirmation.afterClosed().subscribe((result) => {
            if ( result === 'confirmed' )
            {
                this._moduloService.deleteSimple(simple._id).subscribe((response:any)=>{
                    if(response.ok){
                        this._snackBar.mostrarAlerta(response.mensaje, 'mat-primary');
                    } else {
                        this._snackBar.mostrarAlerta(response.mensaje, response.alerta);
                    }
                })
            }
        });
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}

`;
//# sourceMappingURL=componenteList.js.map