import { ConceptosService } from './../services/conceptos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.scss']
})
export class ConceptosComponent implements OnInit {
conceptos:any

  constructor(
    private servicio:ConceptosService

  ) { }

  ngOnInit(): void {
    this.Traerdatos()
  }


  async Traerdatos(){
    this.conceptos=[]
    let respuesta = await this.servicio.TraerTodos()
    this.conceptos=respuesta
  }
}
