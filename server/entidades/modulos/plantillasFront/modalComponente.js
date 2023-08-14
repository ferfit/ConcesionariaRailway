"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantillaModalComponent = void 0;
exports.plantillaModalComponent = `
import { Component, Inject, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'modalDialog',
    templateUrl: 'modalDialog.component.html',
    styleUrls: ['./modalDialog.component.scss']
})
export class ModalDialogCategorias implements OnInit {

    isLoading: boolean = false;
    modulosForm: FormGroup;
    actionBtn:string = 'Guardar';

    constructor(
        private _formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<ModalDialogCategorias>,
        @Inject(MAT_DIALOG_DATA) public data:any,
    ) {}


    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle
    // -----------------------------------------------------------------------------------------------------
    ngOnInit(): void {

        this.modulosForm = this._formBuilder.group({
            nombre:  ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(60),
                Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)
            ])],
            estado: [true],

        });

        if(this.data.action !== 'crear'){
          this.actionBtn = 'Actualizar';

          this.modulosForm.controls['nombre'].setValue(this.data.simple.nombre);
          this.modulosForm.controls['estado'].setValue(this.data.simple.estado);
        }
    }

    get nombre() { return this.modulosForm.get('nombre'); }
    get estado() { return this.modulosForm.get('estado'); }

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
//# sourceMappingURL=modalComponente.js.map