import { Component } from '@angular/core';

@Component({
  selector: 'app-pips',
  templateUrl: './pips.component.html',
  styleUrls: ['./pips.component.css']
})
  
  // pips uses: the pipes are used to format the data in the template before displaying it in the view.
  /*
  * 1. Date Pipe
  * 2. Currency Pipe
  * 3. Decimal Pipe
  * 4. Percent Pipe
  * 5. Slice Pipe
  * 6. JSON Pipe
  * 7. Async Pipe
  * 8. LowerCase Pipe
  * 9. UpperCase Pipe
  * 10. TitleCase Pipe
  */
  
export class PipsComponent {
  today: Date = new Date();
  amount: number = 1234.56;
  name: string = 'Angular Pipes';
  json: Object = { name: 'Angular', version: '5.0' };
  promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise Complete!'), 3000);
  });
  message: string = 'welcome to angular pipes';
  percentage: number = 0.5;
}
