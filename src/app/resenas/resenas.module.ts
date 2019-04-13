import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ListarResenasComponent } from './listar-resenas/listar-resenas.component';
import { ResenasDetailComponent } from './resenas-detail/resenas-detail.component';
import { CrearResenasComponent } from './crear-resenas/crear-resenas.component';
import { EditarResenasComponent } from './editar-resenas/editar-resenas.component';

@NgModule({
  declarations: [ListarResenasComponent, ResenasDetailComponent, CrearResenasComponent, EditarResenasComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ResenasModule { }
