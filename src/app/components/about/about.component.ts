import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {


  constructor(public servicio: ServicioService) {
    console.log(servicio.equipo);

   }

  ngOnInit() {
  }

}
