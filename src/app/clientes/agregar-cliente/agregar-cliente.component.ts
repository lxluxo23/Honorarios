import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {
  @Output() EventoAgregar = new EventEmitter<boolean>();

  constructor(
    private servicio: ClientesService,
    private mensajes: MessageService,

  ) { }

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    rut: new FormControl('', [Validators.required])

  });
  ngOnInit(): void {
  }
  async submit() {
    if (this.formularioContacto.valid) {
      try {
        let respuesta = await this.servicio.Crear(this.formularioContacto.value);
        if (respuesta=! undefined && respuesta.success==true) {
          this.EventoAgregar.emit(true)
          this.mensajes.add({severity:'success', summary:respuesta.msg});
        }
        else{
          this.mensajes.add({severity:'error', summary:'Error en el servidor'});
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
