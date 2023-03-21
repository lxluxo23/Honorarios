import { PrimeNgModule } from './../PrimeNg.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHonorariosComponent } from './main-honorarios/main-honorarios.component';
import { ListaHonorariosComponent } from './lista-honorarios/lista-honorarios.component';
import { AgregarHonorarioComponent } from './agregar-honorario/agregar-honorario.component';



@NgModule({
  declarations: [
    MainHonorariosComponent,
    ListaHonorariosComponent,
    AgregarHonorarioComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports:[
    MainHonorariosComponent,
    ListaHonorariosComponent,
    AgregarHonorarioComponent
  ]
})
export class HonorariosModule { }
