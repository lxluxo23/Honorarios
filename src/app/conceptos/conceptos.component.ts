import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.scss']
})
export class ConceptosComponent implements OnInit {

  conceptos:any=[
    {
    id:1,
    descripcion:'descripcion1'
  },
  {
    id:2,
    descripcion:'descripcion2'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
