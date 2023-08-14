"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantillaModule = void 0;
exports.plantillaModule = `
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

//Componentes
import { ModuloComponent } from './lista/modulo.component';
import { ModuloListComponent } from './lista/list/modulo.component';
import { ModalDialogModulo } from './lista/list/modal/modalDialog.component';
//Ruteo
import { moduloRoutes } from './modulo.routing';

@NgModule({
    declarations: [
        ModuloComponent,
        ModuloListComponent,
        ModalDialogModulo,
    ],
    imports     : [
        RouterModule.forChild(moduloRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSortModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        SharedModule,
        MatDialogModule,
        ReactiveFormsModule,
        FormsModule,
        MatTableModule
    ]
})
export class ModuloModule
{
}


`;
//# sourceMappingURL=module.js.map