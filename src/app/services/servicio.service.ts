import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  cargada = false;
  info: InfoPagina = {};

  constructor(private http: HttpClient) {
    http.get('../../assets/data-pagina.json').subscribe(data => {
      this.info = data;
      this.cargada = true;
    });
   }
}
