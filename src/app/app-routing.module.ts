import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { InicioComponent } from './inicio/inicio.component';
import { TipoPagoComponent } from './tipo-pago/tipo-pago.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'conceptos', component: ConceptosComponent},
  {path: 'tipo_pago', component: TipoPagoComponent},
  {path: '**', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
