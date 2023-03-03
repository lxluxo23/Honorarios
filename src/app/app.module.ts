import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//modulos de estilos
import { PrimeNgModule } from './PrimeNg.module';
import { MaterialModule } from './material.module';

//componentes compartidos
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TipoPagoComponent } from './tipo-pago/tipo-pago.component';
import { ConceptosComponent } from './conceptos/conceptos.component';



//heplpers compartidos
import { AlertHelper } from './helpers/alertas/alert.helpers';


//modulos con componentes
import { ClientesModule } from './clientes/clientes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({

  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    InicioComponent,
    TipoPagoComponent,
    ConceptosComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    PrimeNgModule,
    MaterialModule,
    ClientesModule,


  ],
  providers: [
    MessageService,
    ConfirmationService,
    AlertHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
