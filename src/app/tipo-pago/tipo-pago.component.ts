import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-pago',
  templateUrl: './tipo-pago.component.html',
  styleUrls: ['./tipo-pago.component.scss']
})
export class TipoPagoComponent implements OnInit {

  tipo_pago:any=[
    {
      id:1,
      nombre:'efectivo'
    },
    {
      id:2,
      nombre:'debito'
    },
    {
      id:3,
      nombre:'credito'
    }
]
  constructor() { }

  ngOnInit(): void {
  }


  mostrar(id:any){
    console.log("el id: "+id)
  }

}
