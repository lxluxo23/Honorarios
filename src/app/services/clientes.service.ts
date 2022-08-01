import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import axios from 'axios';
environment
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }


   async TraerTodos() {

   try {
       const res = await axios.get(environment.API + 'clientes', {
         responseType: 'json',
       });
       if (res.status == 200) {
         return res.data;
       }
     } catch (err) {
       console.error(err);
     }
  }

  async Eliminar(id:any){
    try {
      const res = await axios.delete(environment.API + 'clientes/'+id, {
        responseType: 'json',
      });
      if (res.status == 200) {
        return res.data
      }
    } catch (err) {
      console.error(err);
    }
  }
}
