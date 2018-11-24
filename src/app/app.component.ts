import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'George Square';
  lugares:any = [
    {active: true, nombre: 'Floristeria'},
    {active: true, nombre: 'Panaderia'},
    {active: true, nombre: 'Veterinaria'},
    {active: false, nombre: 'Licorera'},
    {active: true, nombre: 'Drogueria'}
  ];

  lat:number = 4.8492754;
  lng:number = -74.0619274;

  constructor() {
    
  }

}
