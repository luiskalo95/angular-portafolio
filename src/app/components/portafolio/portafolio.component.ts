import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent implements OnInit {

  cargado = false;

  constructor(public servicio: ServicioService) { 

    setTimeout(()=> this.cargado = true, 1000);
  }

  ngOnInit() {

  }

}
