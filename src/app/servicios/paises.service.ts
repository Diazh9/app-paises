import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(
    private http: HttpClient
  ) { }

  geturl(query: string){       //metodo que me permite llamar la url

    const url =  `https://restcountries.eu/rest/v2/${ query } `;
    return this.http.get(url);
  }

  getPaises( ) {      // muestro los paises en el home

    return this.geturl('lang/es');

  }

  buscar_paises( termino: string ) {   //metodo para la busqueda

    return this.geturl(`name/${termino}`);

  }
}
