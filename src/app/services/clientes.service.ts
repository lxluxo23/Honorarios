import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private mensajes: MessageService,
    private modalService: NgbModal
  ) { }

  async Crear(body: any) {
    try {
      const res = await axios.post(environment.API + 'clientes', body, {
        responseType: 'json',
      });
      if (res.status == 200) {
        return res.data;
      }
    } catch (err) {
      this.Errores(err);
    }
  }
  async TraerTodos() {
    try {
      const res = await axios.get(environment.API + 'clientes', {
        responseType: 'json',
      });
      if (res.status == 200) {
        return res.data;
      }
    } catch (err) {
      this.Errores(err);
    
    }
  }
  async Modificar(cliente:any) {
    try {
      const res = await axios.put(environment.API + `clientes/actualizar/${cliente.id}`,cliente, {
        responseType: 'json',
      });
      if (res.status == 200) {
        return res.data;
      }
    } catch (err) {
      this.Errores(err);
    }
  }

  async BuscarID(id: any) {
    try {
      const res = await axios.get(environment.API + 'clientes/buscar/' + id, {
        responseType: 'json',
      });
      if (res.status == 200) {
        return res.data;
      }
    } catch (err) {
      this.Errores(err);
    }
  }

  async Eliminar(id: any) {
    try {
      const res = await axios.delete(environment.API + 'clientes/' + id, {
        responseType: 'json',
      });
      if (res.status == 200) {
        return res.data
      }
    } catch (err) {
      this.Errores(err);
    }
  }

  Errores(error:any) {
    console.error(error);
    Swal.close();
    this.mensajes.add({ severity: 'error', summary: 'Error en la base de datos' });
    this.modalService.dismissAll();
  }
}
