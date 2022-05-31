import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//modulos de estilos
import { PrimeNgModule } from './PrimeNg.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TipoPagoComponent } from './tipo-pago/tipo-pago.component';
import { ConceptosComponent } from './conceptos/conceptos.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    ClientesComponent,
    InicioComponent,
    TipoPagoComponent,
    ConceptosComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    MaterialModule
  ],
  providers: [ MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
