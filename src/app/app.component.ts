import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'George Square';
  lugares:any = [
    {cercania: 1, distancia: 1, active: true, nombre: 'Floristeria'},
    {cercania: 2, distancia: 1.8, active: true, nombre: 'Panaderia'},
    {cercania: 1, distancia: 5, active: true, nombre: 'Veterinaria'},
    {cercania: 3, distancia: 10, active: false, nombre: 'Licorera'},
    {cercania: 4, distancia: 30, active: true, nombre: 'Drogueria'}
  ];

  lat:number = 4.8492754;
  lng:number = -74.0619274;

  constructor() {
    
  }

}
