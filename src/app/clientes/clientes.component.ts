import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

   clientes: any

  constructor(
    private servicio:ClientesService
  ) { }

  ngOnInit(): void {
    this.Traerdatos();
  }

  async Traerdatos(){
    let respuesta = await this.servicio.TraerTodos();
    this.clientes=respuesta 
  }

  async eliminar(id:any){
    let respuesta = await this.servicio.Eliminar(id);
    console.log(respuesta);
  }

}
