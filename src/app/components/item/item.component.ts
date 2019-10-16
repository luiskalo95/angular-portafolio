import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';
import { ProductoGeneral } from '../../interfaces/producto-general';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  descripcion: ProductoGeneral;
  id: string;

  constructor(private route: ActivatedRoute, private servicio: ServicioService) {
    this.route.params.subscribe(codigo => {
      this.id = codigo.id;
       this.servicio.cargarProductoGeneral(codigo.id).subscribe((respuesta: ProductoGeneral) => {
           console.log(respuesta);
           this.descripcion = respuesta;
    });
  });
  }


  ngOnInit() {
  }

}
