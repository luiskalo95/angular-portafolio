import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';
import { Equipo } from '../interfaces/equipo';
import { ProductoIdx } from '../interfaces/producto-idx';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  cargada = false;
  info: InfoPagina = {};
  equipo: Equipo;
  productoIdx: ProductoIdx;

  constructor(private http: HttpClient) {
    this.cargarInfoLocal();
    this.cargarInfoDatabase();
    this.cargarProducto_idx();
  }

  private cargarInfoLocal() {
    this.http.get('../../assets/data-pagina.json').subscribe((data: InfoPagina) => {
      this.info = data;
      this.cargada = true;
    });
  }

  private cargarInfoDatabase() { 
      this.http.get('https://angular-portafolio-e43ed.firebaseio.com/equipo.json').subscribe((data: Equipo) => {
      this.equipo = data;
    });
  }

  private cargarProducto_idx() {
    this.http.get('https://angular-portafolio-e43ed.firebaseio.com/productos_idx.json').subscribe((data: ProductoIdx) => { 
      this.productoIdx = data;
      console.log(data);
    });
  }
}
