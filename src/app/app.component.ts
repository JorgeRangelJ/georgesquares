import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'George Square';
  lugares:any = [
    {nombre: 'Floristeria'},
    {nombre: 'Panaderia'},
    {nombre: 'Veterinaria'}
  ];

  constructor() {
    
  }

}
