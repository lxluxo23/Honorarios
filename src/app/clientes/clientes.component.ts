import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: any = [
    {
      id: 1,
      nombre: 'cliente ',
      rut:1
    },
    {
      id: 2,
      nombre: 'cliente 2 ',
      rut:3
    },
  ];

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
