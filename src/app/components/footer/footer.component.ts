import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  anio = new Date().getFullYear();

  constructor( private servicio: ServicioService) { }

  ngOnInit() {
  }

}
