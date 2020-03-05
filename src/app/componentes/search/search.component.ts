import { Component } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  pais: any[] = [];
  loading: boolean;

  constructor(private buscar_pais: PaisesService // llamo el servicio
  ) { }

  buscar(termino: string) {
    console.log(termino);

    this.loading = true;
  this.buscar_pais.buscar_paises( termino ) //llamo al metodo y envio a su vez el termino de busquedad
          .subscribe( (data: any) => {
            console.log(data);
            this.pais = data;
            this.loading = false;
          });
  }

}
