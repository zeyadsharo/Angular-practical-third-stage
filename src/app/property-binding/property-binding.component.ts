import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

   name:string = 'inputId';
   imageUrl:string = 'https://angular.io/assets/images/logos/angular/angular.png';
}
