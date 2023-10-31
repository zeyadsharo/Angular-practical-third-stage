import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
// Declare variables
  isLoggedIn: boolean = true; // Change this to false to see the guest content
  people: {
    name: string,
    age: number
  }[] = [
    { "name": "Douglas Pace", "age": 25 },
    { "name": "Mcleod Mueller", "age": 45 },
    { "name": "Day Meyers", "age": 36 },
    { "name": "Aguirre Ellis", "age": 65 },
    { "name": "Cook Tyson", "age": 12 }
  ];

  // Define methods
  my_function(value: string) {
    // Do something with the value
    console.log(value);
  }
}
