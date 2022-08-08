import { ClientesService } from '../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { AlertHelper } from '../../helpers/alertas/alert.helpers';
@Component({
  selector: 'app-listaclientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {

   clientes: any
   MostrarAgregar:boolean = false

  constructor(
    private servicio:ClientesService,
    private mensajes: MessageService,
    private alert: AlertHelper,
  ) { }

  ngOnInit(): void {
    this.Traerdatos();
  }

  async Traerdatos(){
    this.clientes=[];
    let respuesta = await this.servicio.TraerTodos();
    this.clientes=respuesta 
  }

  mostrar(){
    this.MostrarAgregar=true;
  }

  ActualizarTabla(event:any){
    if (event==true){
      this.MostrarAgregar=false;
      this.Traerdatos();
    }
  }

  async eliminar(id:any){

    Swal.fire({
      title: 'Eliminar?',
      text: "Se eliminara el cliente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff0000',
      cancelButtonColor: '#6c736e',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        this.alert.loadingAlert()
        try {
          let respuesta = await this.servicio.Eliminar(id);
          if (respuesta.success==true){
            this.Traerdatos();
            this.mensajes.add({severity:'success', summary:respuesta.msg});
            Swal.close();
          }
          else{
            console.error("alguna wea fallo");
          }
        } catch (error) {
          console.error(error);
          Swal.close();
        }
      }
    })
   
  }

}
