import { PrimeNgModule } from './../PrimeNg.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { MainClientesComponent } from './main-clientes/main-clientes.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';



@NgModule({
  declarations: [
    ListaClientesComponent,
    AgregarClienteComponent,
    MainClientesComponent,
    EditarClienteComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    ListaClientesComponent,
    AgregarClienteComponent
  ]
})
export class ClientesModule { }
