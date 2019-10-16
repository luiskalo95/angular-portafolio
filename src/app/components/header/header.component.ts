import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(private servicio: ServicioService, private router: Router) { }

  buscarPalabra(palabra: string) {
    if (palabra.length <= 1) {return; }
    this.router.navigate(['/search', palabra]);

  }

  ngOnInit() {
  }

}
