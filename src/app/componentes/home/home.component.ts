import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
paises: any[]= [];
loading: boolean;

  constructor(
private pais: PaisesService // llamo el servicio
  ) {
this.loading= true;
  this.pais.getPaises() // llamo al metodo para mostrar los paises
  .subscribe((data: any) => {
      console.log(data);
this.paises = data;
  console.log(this.paises);
this.loading= false;
});

  }



}
