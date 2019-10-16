import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';
import { ProductoIdx } from '../../interfaces/producto-idx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private parametro: ActivatedRoute, public servicio: ServicioService) {
    this.parametro.params.subscribe(data => 
     this.servicio.cargarProductosFiltrado(data.id))
     console.log(this.servicio.productosIdxFiltrados)
   }

  ngOnInit() {
  }

}
