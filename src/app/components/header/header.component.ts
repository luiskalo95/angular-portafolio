import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(private servicio: ServicioService) { 
    
  }

  ngOnInit() {
  }

}
