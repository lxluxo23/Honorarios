import Swal from 'sweetalert2';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertHelper } from 'src/app/helpers/alertas/alert.helpers';
import { ClientesService } from 'src/app/services/clientes.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

  @Input() ClienteID: any
  clientes:any;

  constructor(
    private servicio: ClientesService,
    private alert: AlertHelper,
    private mensajes: MessageService,
  ) { }
  formulario = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    rut: new FormControl('', [Validators.required])

  });
  ngOnInit(): void {

    console.log("el id "+this.ClienteID);
    this.Traerdatos(this.ClienteID)
   
  }
  async Traerdatos(id:any){
    this.alert.loadingAlert();
    this.clientes=[];
    let respuesta = await this.servicio.BuscarID(id);
    if (respuesta){
      this.clientes=respuesta
      this.formulario.get('id')?.setValue(this.ClienteID);
      this.formulario.get('nombre')?.setValue(this.clientes.nombre);
      this.formulario.get('rut')?.setValue(this.clientes.rut);
      Swal.close();
    }
    
  }

  async editar() {
    if (this.formulario.valid) {
      try {
        console.log (this.formulario.value)
        let respuesta = await this.servicio.Modificar(this.formulario.value);
        if (respuesta!= undefined && respuesta.success==true) {
          this.mensajes.add({severity:'success', summary:respuesta.msg});
        }
        else{
         
        }
      } catch (error) {
        console.error(error);
      }
     
    }
    else {
      console.log("formulario invalido")
    }
  }

}
