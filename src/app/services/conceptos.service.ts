import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ConceptosService {

  constructor(
    private mensajes: MessageService,
    private modalService: NgbModal
  ) { }

async TraerTodos() {
    try {
      const res = await axios.get(environment.API + 'conceptos', {
        responseType: 'json',
      });
      if (res.status == 200) {
        return res.data;
      }
    } catch (err) {
      this.Errores(err);
    
    }
  }
  async Crear(body: any) {
    try {
      const res = await axios.post(environment.API + 'conceptos', body, {
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
      const res = await axios.delete(environment.API + 'conceptos' + id, {
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
