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
exports.eliminar = exports.actualizar = exports.crear = void 0;
const Modulo_model_1 = require("./Modulo.model");
const routes_1 = require("./plantillas/routes");
const controller_1 = require("./plantillas/controller");
const module_1 = require("./plantillasFront/module");
const routing_1 = require("./plantillasFront/routing");
const service_1 = require("./plantillasFront/service");
const resolver_1 = require("./plantillasFront/resolver");
const componente_1 = require("./plantillasFront/componente");
const componenteList_1 = require("./plantillasFront/componenteList");
const fs = require('fs');
/* export const listar = async (req: Request, res: Response): Promise<any> => {
  
 try {

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
          { nombre: new RegExp(search, 'i') }
      ]}
    }

    Categoria.paginate(query, { sort: { [sort]: order }, page, limit: size
    }, (err: any, result: any) => {


      return res.send({
          ok: true,
          msg: `Listado de categorías`,
          categorias: result.docs,
          pagination: {
            
            length: result.totalDocs,
            size: result.limit,
            totalPages: result.totalPages,
            page: result.page - 1,

          }
      })
    });

  } catch (error) {
    console.log("======================================================")
    console.log("===================/categorias========================")
    console.log(error)

    return res.status(500).send({
      ok:false,
      mensaje:"Algo salió mal.",
      alerta:'danger',
    })
  }

   
}; */
const crear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body, '===body');
        let data = req.body;
        const ruta = `backend/server/entidades/${agregarPlural(data.nombreModulo)}`;
        const moduloPlural = agregarPlural(data.nombreModulo);
        const moduloPriMayuscula = primeraMayuscula(data.nombreModulo);
        //Front
        const rutaFront = `frontend/src/app/modules/${agregarPlural(data.nombreModulo)}`;
        if (data.crearBackend) {
            crearCarpeta(ruta);
            crearArchivo(`${ruta}/${primeraMayuscula(data.nombreModulo)}.controller.ts`, controller_1.plantillaController.replace(/Modulo/gi, primeraMayuscula(data.nombreModulo)));
            crearArchivo(`${ruta}/${primeraMayuscula(data.nombreModulo)}.model.ts`, armarTextoModel(primeraMayuscula(data.nombreModulo), data));
            crearArchivo(`${ruta}/${primeraMayuscula(data.nombreModulo)}.routes.ts`, routes_1.plantillaRoutes.replace(/Modulo/gi, primeraMayuscula(data.nombreModulo)));
            fs.appendFileSync('backend/server/entidades/index.ts', `import { route${moduloPriMayuscula} } from './${moduloPlural}/${moduloPriMayuscula}.routes'; router.use('/${moduloPlural}', route${moduloPriMayuscula});`);
        }
        if (data.crearFrontend) {
            //Crea module
            crearCarpeta(rutaFront);
            let pModule = module_1.plantillaModule.replace(/Modulo/g, agregarPlural(primeraMayuscula(data.nombreModulo)));
            crearArchivo(`${rutaFront}/${agregarPlural(data.nombreModulo)}.module.ts`, pModule.replace(/modulo/gi, agregarPlural(data.nombreModulo)));
            //Crea routing
            let pRouting = routing_1.PlantillaRouting.replace(/Modulo/g, agregarPlural(primeraMayuscula(data.nombreModulo)));
            crearArchivo(`${rutaFront}/${agregarPlural(data.nombreModulo)}.routing.ts`, pRouting.replace(/modulo/gi, agregarPlural(data.nombreModulo)));
            //Crea carpeta
            crearCarpeta(`${rutaFront}/lista`);
            //Crea archivo types
            crearArchivo(`${rutaFront}/lista/${agregarPlural(data.nombreModulo)}.types.ts`, armarTypes(agregarPlural(primeraMayuscula(data.nombreModulo)), data));
            //Crea archivo service
            let pService = service_1.plantillaService.replace(/Modulo/g, agregarPlural(primeraMayuscula(data.nombreModulo)));
            pService = pService.replace(/Simple/g, primeraMayuscula(data.nombreModulo));
            pService = pService.replace(/simple/gi, data.nombreModulo);
            crearArchivo(`${rutaFront}/lista/${agregarPlural(data.nombreModulo)}.service.ts`, pService.replace(/modulo/gi, agregarPlural(data.nombreModulo)));
            //Crea archivo resolver
            let pResolver = resolver_1.plantillaResolver.replace(/Modulo/g, agregarPlural(primeraMayuscula(data.nombreModulo)));
            crearArchivo(`${rutaFront}/lista/${agregarPlural(data.nombreModulo)}.resolver.ts`, pResolver.replace(/modulo/gi, agregarPlural(data.nombreModulo)));
            //Crea archivo componente principal del modulo
            let pComponent = componente_1.plantillaComponent.replace(/Modulo/g, agregarPlural(primeraMayuscula(data.nombreModulo)));
            crearArchivo(`${rutaFront}/lista/${agregarPlural(data.nombreModulo)}.component.ts`, pComponent.replace(/modulo/gi, agregarPlural(data.nombreModulo)));
            //Crea archivo html componente principal del modulo
            crearArchivo(`${rutaFront}/lista/${agregarPlural(data.nombreModulo)}.component.html`, '<router-outlet></router-outlet>');
            //Crea carpeta
            crearCarpeta(`${rutaFront}/lista/list`);
            //Crea archivo componente list del modulo
            let pComponentList = componenteList_1.plantillaComponentList.replace(/Modulo/g, agregarPlural(primeraMayuscula(data.nombreModulo)));
            pComponentList = pComponentList.replace(/Simple/g, primeraMayuscula(data.nombreModulo));
            pComponentList = pComponentList.replace(/simple/gi, data.nombreModulo);
            crearArchivo(`${rutaFront}/lista/list/${agregarPlural(data.nombreModulo)}.component.ts`, pComponentList.replace(/modulo/gi, agregarPlural(data.nombreModulo)));
            //Crea html componente list - tabla
            //Crea archivo types
            crearArchivo(`${rutaFront}/lista/list/${agregarPlural(data.nombreModulo)}.component.html`, armarHtmlComponentList(data.nombreModulo, agregarPlural(data.nombreModulo), agregarPlural(primeraMayuscula(data.nombreModulo)), primeraMayuscula(data.nombreModulo), data));
            //crear archivo css
            crearArchivo(`${rutaFront}/lista/list/${agregarPlural(data.nombreModulo)}.component.scss`, armarScss(data));
            //Crea carpeta modal
            crearCarpeta(`${rutaFront}/lista/list/modal`);
            //Crea archivo componente del modulo
            let ModalComponent = armarComponenteModal(data);
            ModalComponent = ModalComponent.replace(/modulos/gi, agregarPlural(data.nombreModulo));
            ModalComponent = ModalComponent.replace(/simple/gi, data.nombreModulo);
            //ModalComponent = ModalComponent.replace(/Simple/gi,primeraMayuscula(data.nombreModulo));
            //ModalComponent = ModalComponent.replace(/modulo/gi,agregarPlural(data.nombreModulo))
            ModalComponent = ModalComponent.replace(/Modulo/g, agregarPlural(primeraMayuscula(data.nombreModulo)));
            crearArchivo(`${rutaFront}/lista/list/modal/modalDialog.component.ts`, ModalComponent);
            //Crear archivo html modal
            let ModalHtmlComponent = armarHtmlModal(data);
            ModalHtmlComponent = ModalHtmlComponent.replace(/modulos/gi, agregarPlural(data.nombreModulo));
            ModalHtmlComponent = ModalHtmlComponent.replace(/simple/gi, data.nombreModulo);
            crearArchivo(`${rutaFront}/lista/list/modal/modalDialog.component.html`, ModalHtmlComponent);
            //Crear archivo scss del modal
            crearArchivo(`${rutaFront}/lista/list/modal/modalDialog.component.scss`, '');
        }
        return res.send(`${rutaFront}/lista`);
    }
    catch (error) {
        console.log("======================================================");
        console.log("===================/modulos/crear====================");
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
        const moduloActualizado = yield Modulo_model_1.Modulo.findByIdAndUpdate({ _id: id }, data, { new: true });
        if (!moduloActualizado) {
            return res.status(200).json({
                ok: false,
                mensaje: "Error al actualizar el módulo.",
                alerta: 'danger'
            });
        }
        return res.status(200).json({
            ok: true,
            mensaje: "Módulo actualizado con éxito.",
            alerta: 'success',
            moduloActualizado
        });
    }
    catch (error) {
        console.log("======================================================");
        console.log("===================/modulos/actualizar===============");
        console.log(error);
        return res.status(500).send({
            ok: false,
            mensaje: "Algo salió mal.",
            alerta: 'danger',
        });
    }
});
exports.actualizar = actualizar;
const eliminar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const modulo = yield Modulo_model_1.Modulo.findByIdAndDelete(id);
        if (!modulo) {
            return res.json({
                ok: false,
                mensaje: "Módulo no encontrado.",
            });
        }
        return res.status(200).json({
            ok: true,
            mensaje: "Módulo eliminado con éxito.",
        });
    }
    catch (error) {
        console.log("======================================================");
        console.log("===================/modulos/eliminar===============");
        console.log(error);
        return res.send({
            ok: false,
            mensaje: "Algo salió mal.",
            alerta: 'danger',
        });
    }
});
exports.eliminar = eliminar;
function crearCarpeta(ruta) {
    fs.mkdir(ruta, { recursive: true }, (error) => {
        if (error) {
            return false;
        }
        return true;
    });
}
function crearArchivo(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, function (error) {
        if (error) {
            console.error(`Error al crear el archivo: ${error}`);
        }
        else {
            console.log(`Archivo creado exitosamente`);
        }
        if (callback) {
            callback(error);
        }
    });
}
function agregarPlural(str) {
    const ultimaLetra = str.charAt(str.length - 1);
    if (/[aeiou]/i.test(ultimaLetra)) {
        return str + 's';
    }
    else {
        return str + 'es';
    }
}
function primeraMayuscula(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function armarTextoModel(str, data) {
    let txt = `
  import mongoose, {PaginateModel} from "mongoose";
  import mongoosePaginate from 'mongoose-paginate-v2';

  export type ModuloDocument = mongoose.Document & {
    `;
    for (const campo of data.columnas) {
        if (campo.tipo === 'ObjectId') {
            txt += ` ${campo.nombre}:mongoose.Schema.Types.ObjectId;`;
        }
        else {
            txt += ` ${campo.nombre}:${campo.tipo};`;
        }
    }
    txt += `
    creadoPor:mongoose.Schema.Types.ObjectId;
    ultimaModificacionPor:mongoose.Schema.Types.ObjectId;
    };

    const schema = new mongoose.Schema<ModuloDocument>(
    {
  `;
    for (const campo of data.columnas) {
        if (campo.tipo === 'ObjectId') {
            txt += ` ${campo.nombre}:{ type: mongoose.Schema.Types.ObjectId, ref: '${primeraMayuscula(campo.nombre)}'},`;
        }
        else {
            txt += ` ${campo.nombre}:{type:${primeraMayuscula(campo.tipo)}},`;
        }
    }
    txt += `
    creadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    ultimaModificacionPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    },
    { timestamps: true }
    );

    schema.plugin(mongoosePaginate);

    export const Modulo = mongoose.model<ModuloDocument ,PaginateModel<ModuloDocument>>('Modulo', schema);
  `;
    txt = txt.replace(/Modulo/gi, str);
    return txt;
}
function armarTypes(str, data) {
    let txt = `export interface Modulo{
    _id:string;`;
    for (const campo of data.columnas) {
        if (campo.tipo !== 'ObjectId') {
            txt += ` ${campo.nombre}:${campo.tipo};`;
        }
    }
    txt += `
    creadoPor:string;
    ultimaModificacionPor:string;
  };

  export interface InventoryPagination
  {
    length: number;
    size: number;
    page: number;
    lastPage?: number;
    startIndex?: number;
    endIndex?: number;
    totalPages:number;
  }
  `;
    txt = txt.replace(/Modulo/gi, str);
    return txt;
}
function armarScss(data) {
    let txt = `

  .inventory-grid {
    grid-template-columns: ${data.scss[0]};

    @screen sm {
        grid-template-columns: ${data.scss[1]};
    }

    @screen md {
        grid-template-columns: ${data.scss[2]};
    }

    @screen lg {
        grid-template-columns: ${data.scss[3]};
    }
  }`;
    return txt;
}
function armarHtmlComponentList(str, strs, STRS, STR, data) {
    let txt = `
  <div class="sm:absolute sm:inset-0 flex flex-col flex-auto min-w-0 sm:overflow-hidden bg-card dark:bg-transparent">

    <!-- Header -->
    <div class="relative flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between py-8 px-6 md:px-8 border-b">
        <!-- Loader -->
        <div
            class="absolute inset-x-0 bottom-0"
            *ngIf="isLoading">
            <mat-progress-bar [mode]="'indeterminate'"></mat-progress-bar>
        </div>
        <!-- Title -->
        <div class="text-4xl font-extrabold tracking-tight">Modulos</div>
        <!-- Actions -->
        <div class="flex shrink-0  mt-6 sm:mt-0 sm:ml-4">
            <!-- Search -->
            <mat-form-field class="fuse-mat-dense fuse-mat-no-subscript fuse-mat-rounded min-w-64">
                <mat-icon
                    class="icon-size-5"
                    matPrefix
                    [svgIcon]="'heroicons_solid:search'"></mat-icon>
                <input
                    matInput
                    [formControl]="searchInputControl"
                    [autocomplete]="'off'"
                    [placeholder]="'Buscar...'">
            </mat-form-field>
            <!-- Add product button -->
            <button
                class="ml-4"
                mat-flat-button
                [color]="'primary'"
                (click)="crear()">
                <mat-icon [svgIcon]="'heroicons_outline:plus'"></mat-icon>
                <span class="ml-2 mr-1" >Crear</span>
            </button>
        </div>
    </div>

    <!-- Main -->
    <div class="flex flex-auto overflow-hidden">

        <!-- Products list -->
        <div class="flex flex-col flex-auto sm:mb-18 overflow-hidden sm:overflow-y-auto">
            <ng-container *ngIf="(simples$ | async) as simples">
                <ng-container *ngIf="simples.length > 0; else noModulos">
                    <div class="grid">
                    <!-- Header -->
                          <div
                              class="inventory-grid z-10 sticky top-0 grid gap-4 py-4 px-6 md:px-8 shadow text-md font-semibold text-secondary bg-gray-50 dark:bg-black dark:bg-opacity-5"
                              matSort
                              matSortDisableClear>
    `;
    for (const campo of data.columnas) {
        txt += `
                              <div
                                  class="${campo.hiddenBlock}"
                                  [mat-sort-header]="'${campo.nombre}'">
                                  ${campo.nombre.toUpperCase()}
                              </div>
                              `;
    }
    txt += `
                              <div class="">ACCIONES</div>  <!-- hidden sm:block -->
                          </div>
                          <!-- Rows -->
                          <ng-container *ngIf="(simples$ | async) as simples">
                              <ng-container *ngFor="let modulo of simples; trackBy: trackByFn">
                                  <div class="inventory-grid grid items-center gap-4 py-3 px-6 md:px-8 border-b">
                          `;
    for (const campo of data.columnas) {
        if (campo.nombre === 'estado') {
            txt += `
                                <!-- ${primeraMayuscula(campo.nombre)} -->
                                <div class="${campo.hiddenBlock}">
                                    <ng-container *ngIf="modulo.estado">
                                        <mat-icon
                                            class="text-green-400 icon-size-5"
                                            [svgIcon]="'heroicons_solid:check'"></mat-icon>
                                    </ng-container>
                                    <ng-container *ngIf="!modulo.estado">
                                        <mat-icon
                                            class="text-red-400 icon-size-5"
                                            [svgIcon]="'heroicons_solid:x'"></mat-icon>
                                    </ng-container>
                                </div>
                                `;
        }
        else {
            txt += `
                                <!-- ${campo.nombre.toUpperCase()} -->
                                <div class="${campo.hiddenBlock}">
                                    {{modulo.${campo.nombre}}}
                                </div>
                                `;
        }
    }
    txt += `
      <!-- Details button -->
      <div class="flex">
          <button
              class="min-w-10 min-h-7 h-7"
              [matTooltip]="'Editar'"
          >
              <mat-icon
                  class="icon-size-5 text-blue-500"
                  (click)="editar(modulo)"
                  [svgIcon]="'heroicons_outline:pencil'"
              ></mat-icon>
          </button>
          <button
              class="min-w-10 min-h-7 h-7"
              [matTooltip]="'Eliminar'"
          >
              <mat-icon
                  class="text-red-500"
                  (click)="eliminar(modulo)"
                  svgIcon="heroicons_outline:trash"
              ></mat-icon>
          </button>
      </div>
    </div>
    </ng-container>
    </ng-container>
    </div>

    <mat-paginator
    class="sm:absolute sm:inset-x-0 sm:bottom-0 border-b sm:border-t sm:border-b-0 z-10 bg-gray-50 dark:bg-transparent"
    [ngClass]="{'pointer-events-none': isLoading}"
    [length]="paginationModulos.length"
    [pageIndex]="paginationModulos.page"
    [pageSize]="paginationModulos.size"
    [pageSizeOptions]="[5, 10, 25, 100]"
    [showFirstLastButtons]="true"></mat-paginator>

    </ng-container>
    </ng-container>

    <ng-template #noModulos>
    <div class="p-8 sm:p-16 border-t text-4xl font-semibold tracking-tight text-center">No ha registros!</div>
    </ng-template>

    </div>

    </div>

    </div>

  `;
    txt = txt.replace(/Modulos/gi, STRS);
    txt = txt.replace(/modulo/gi, str);
    txt = txt.replace(/simples/gi, strs);
    return txt;
}
function armarComponenteModal(data) {
    let txt = `
  
    import { Component, Inject, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
    import { MAT_DIALOG_DATA } from '@angular/material/dialog';
    import { MatDialogRef } from '@angular/material/dialog';
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    
    @Component({
        selector: 'modalDialog',
        templateUrl: 'modalDialog.component.html',
        styleUrls: ['./modalDialog.component.scss']
    })
    export class ModalDialogModulo implements OnInit {
    
        isLoading: boolean = false;
        modulosForm: FormGroup;
        actionBtn:string = 'Guardar';
    
        constructor(
            private _formBuilder: FormBuilder,
            public dialogRef: MatDialogRef<ModalDialogModulo>,
            @Inject(MAT_DIALOG_DATA) public data:any,
        ) {}
    
    
        // -----------------------------------------------------------------------------------------------------
        // @ Lifecycle
        // -----------------------------------------------------------------------------------------------------
        ngOnInit(): void {
    
            this.modulosForm = this._formBuilder.group({`;
    for (const campo of data.columnas) {
        //arma validaciones
        let validaciones = '';
        if (campo.requerido) {
            validaciones += "Validators.required,";
        }
        if (campo.minLetras > 0) {
            validaciones += `Validators.minLength(${campo.minLetras}),`;
        }
        if (campo.maxLetras > 0) {
            validaciones += `Validators.maxLength(${campo.maxLetras}),`;
        }
        if (campo.pattern.length > 0) {
            let expresion = '';
            if (campo.pattern === "soloLetras") {
                expresion = "/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/";
            }
            validaciones += `Validators.pattern(${expresion}),`;
        }
        //Arma campos
        if (campo.tipo === "boolean") {
            txt += `
                    ${campo.nombre}:  [true, Validators.compose([
                      ${validaciones}
                    ])],
                  `;
        }
        else if (campo.tipo === "string") {
            txt += `
                    ${campo.nombre}:  ['', Validators.compose([
                      ${validaciones}
                    ])],
                  `;
        }
    }
    txt += `});
    
            if(this.data.action !== 'crear'){
              this.actionBtn = 'Actualizar';`;
    for (const campo of data.columnas) {
        txt += `this.modulosForm.controls['${campo.nombre}'].setValue(this.data.simple.${campo.nombre});`;
    }
    ;
    txt += `}
        }`;
    for (const campo of data.columnas) {
        txt += ` get ${campo.nombre}() { return this.modulosForm.get('${campo.nombre}'); }`;
    }
    ;
    txt += `
        // -----------------------------------------------------------------------------------------------------
        // @ Public methods
        // -----------------------------------------------------------------------------------------------------
    
        closeDialog() {
                this.dialogRef.close(false);
        }
    
        guardar() {
    
            if(this.modulosForm.invalid) return
            return this.dialogRef.close(this.modulosForm.value)
    
        }
    
    }
  
  `;
    return txt;
}
function armarHtmlModal(data) {
    let txt = `
  <div class="flex w-full">
    <h1 class="font-bold px-0 text-lg" *ngIf="data.action === 'crear'" mat-dialog-title>Agregar simple</h1>
    <h1 class="font-bold px-0 text-lg" *ngIf="data.action === 'editar'" mat-dialog-title>Editar simple</h1>
    <h1 class="font-bold px-0 text-lg" *ngIf="data.action === 'ver'" mat-dialog-title>Datos del simple</h1>
  </div>
  <hr class="m-0">
  <form [formGroup]="modulosForm" (ngSubmit)="guardar()" class="mt-5">

      <div class="${data.grid}">`;
    for (const campo of data.columnas) {
        txt += `<!-- ${primeraMayuscula(campo.nombre)} -->
                    
            `;
        if (campo.tipoInput === "text") {
            txt += `
              <div class="mt-2 ${campo.grid}">
                <mat-form-field class="fuse-mat-no-subscript w-full">
                    <mat-label>${primeraMayuscula(campo.nombre)}</mat-label>
                    <input

                        matInput
                        formControlName="${campo.nombre}"
                        [placeholder]="'${primeraMayuscula(campo.nombre)}'"
                        [spellcheck]="false"
                    />
                </mat-form-field>
              `;
        }
        else if (campo.tipoInput === "boolean") {
            txt += `
              <div class="mt-2 ${campo.grid}">
                <mat-checkbox
                    class="mt-5"

                    [color]="'primary'"
                    formControlName="${campo.nombre}">

                    ${primeraMayuscula(campo.nombre)}
                </mat-checkbox>
              `;
        }
        else if (campo.tipoInput === "textarea") {
            txt += `
              <div class="mt-2 ${campo.grid}">
                <mat-form-field class="w-full">
                    <textarea
                        matInput
                        [formControlName]="'${campo.nombre}'"
                        [required]=""
                        [rows]="${(campo.rows.length > 0) ? campo.rows : '5'}"
                        ></textarea>
                    <mat-label>${primeraMayuscula(campo.nombre)}</mat-label>
                </mat-form-field>
              `;
        }
        let validaciones = '';
        if (campo.requerido) {
            validaciones += `
              <div *ngIf="${campo.nombre}.errors?.['required']">
                  El campo "${campo.nombre}" es requerido.
              </div>
              `;
        }
        if (campo.minLetras > 0) {
            validaciones += `
              <div *ngIf="${campo.nombre}.errors?.['minlength']">
                    El campo "${campo.nombre}" debe tener al menos ${campo.minLetras} caracteres.
                </div>
              `;
        }
        if (campo.maxLetras > 0) {
            validaciones += `
              <div *ngIf="${campo.nombre}.errors?.['maxlength']">
                    El campo "${campo.nombre}" debe tener un máximo ${campo.minLetras} caracteres.
                </div>
              `;
        }
        if (campo.pattern.length > 0) {
            let texto = "";
            if (campo.pattern === "soloLetras") {
                texto = `El campo "${campo.nombre}" solo admite letras.`;
            }
            validaciones += `
              <div *ngIf="${campo.nombre}.errors?.['pattern']">
                    ${texto}
                </div>
              `;
        }
        txt += `
                <!-- mensajes de validación -->
                <div
                    *ngIf="${campo.nombre}.invalid && (${campo.nombre}.dirty || ${campo.nombre}.touched)"
                    class="alert alert-danger mt-2 px-1 text-red-500"
                >
                ${validaciones}
                </div>
            </div>
            `;
    }
    txt += `
      </div>
      <!-- Actions -->
      <div class="flex justify-end mt-8">
          <!-- Cancel -->
          <button
              *ngIf="data.action !== 'ver'"
              type="button"
              class="ml-auto"
              mat-button
              (click)="closeDialog()"
          >
              Cancelar
          </button>
          <!-- Save -->
          <button
              type="submit"
              *ngIf="data.action !== 'ver'"
              class="ml-2"
              mat-flat-button
              [color]="'primary'"
              [disabled]="modulosForm.invalid"
          >
              {{actionBtn}}
          </button>
          <!-- cerrar -->
          <button
          *ngIf="data.action === 'ver'"
          class=" "
          mat-button mat-dialog-close (click)="closeDialog()">Cerrar</button>
      </div>
  </form>

  `;
    return txt;
}
//# sourceMappingURL=Modulo.controller.js.map