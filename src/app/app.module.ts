import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectiveComponent } from './directive/directive.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TextInterpolationComponent } from './text-interpolation/text-interpolation.component'; // import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DirectiveComponent,
    EventBindingComponent,
    TextInterpolationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
