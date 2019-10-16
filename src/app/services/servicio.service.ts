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
  productosIdx: ProductoIdx[];
  productosIdxFiltrados: ProductoIdx[];

  constructor(private http: HttpClient) {

    this.cargarInfoLocal();
    this.cargarInfoDatabase();
    this.cargarProductos_idx();
    this.productosIdx = [];
    this.productosIdxFiltrados = [];


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

  public cargarProductos_idx() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-portafolio-e43ed.firebaseio.com/productos_idx.json')
                .subscribe((data: ProductoIdx[]) => { this.productosIdx = data;
                resolve(); 
        });
    })
    }

  public cargarProductoGeneral(codigo: string){
    return this.http.get(`https://angular-portafolio-e43ed.firebaseio.com/productos/${codigo}.json`);
  }

  public cargarProductosFiltrado(palabra: string){

    if (this.productosIdx.length === 0) {this.cargarProductos_idx()
                                        .then(()=>{this.filtro(palabra);})
                                        .catch((err) => console.log(err));}
     else {this.filtro(palabra);}

  }

  public filtro(palabra: string) {
    palabra = palabra.toLowerCase();
    this.productosIdx.forEach(producto=>{
      if(producto.categoria.toLowerCase().indexOf(palabra)>=0 || producto.titulo.toLowerCase().indexOf(palabra) >=0 ){
           this.productosIdxFiltrados.push(producto);
         }                        
    });
  }
}
