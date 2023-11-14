import { Component } from '@angular/core';

@Component({
  selector: 'app-mid-term-exam',
  templateUrl: './mid-term-exam.component.html',
  styleUrls: ['./mid-term-exam.component.css']
})
export class MidTermExamComponent {
  people: { name: string; age: number }[] = [
    { name: 'Douglas Pace', age: 26 },
    { name: 'Mcleod Mueller', age: 45 },
    { name: 'Day Meyers', age: 12 },
  ];

  isLoggedIn: boolean = true; 
  counter: number = 0;
  
  incrementCounter() {
    this.counter++;
  }
}
