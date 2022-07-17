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
    console.log("estoy en el componente")
  }

  async Traerdatos(){
    console.log("esperando datos")
    let respuesta = await this.servicio.TraerTodos();
    this.clientes=respuesta
    console.log(respuesta)
    console.log("termino de la data")
  
  }

}
