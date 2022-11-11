import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin: 5px;
    }`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[] = [];


  constructor( private paisService: PaisService ) { }

  getClase(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) { return;}

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      }, 
      (error) => {
        this.paises = [];
        console.log(error);
      }
    )
  }


}
