import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css']
})
export class Quiz1Component {

    // A. Event Binding
  handleButtonClick(): void {
    alert('Button Clicked!');
  }
  // B. Property Binding
  isButtonDisabled: boolean = true;

  // C. Text Interpolation 
  message: string = 'Hello, Angular!';
  messageWithDate: string = `${this.message} - ${new Date().toISOString().slice(0, 10)}`;

  // D. Two-Way Binding with a challenge
  userName: string = '';
  inputError: boolean = false;

  validateInput(): void {
    this.inputError = !/^[a-zA-Z]+$/.test(this.userName);
  }

}
