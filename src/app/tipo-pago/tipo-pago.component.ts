import { Component, OnInit } from '@angular/core';
import { TiposPagosService } from '../services/tipos-pagos.service';

@Component({
  selector: 'app-tipo-pago',
  templateUrl: './tipo-pago.component.html',
  styleUrls: ['./tipo-pago.component.scss']
})
export class TipoPagoComponent implements OnInit {
  pagos:any
  constructor(
    private servicio:TiposPagosService
  ) { }
  
  ngOnInit(): void {
    this.Traerdatos()
  }


  mostrar(id:any){
    console.log("el id: "+id)
  }
  async Traerdatos(){
    this.pagos=[]
    let respuesta = await this.servicio.TraerTodos()
    this.pagos=respuesta
  }
}
