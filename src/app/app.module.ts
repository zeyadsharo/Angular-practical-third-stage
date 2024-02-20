import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectiveComponent } from './directive/directive.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TextInterpolationComponent } from './text-interpolation/text-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { MidTermExamComponent } from './mid-term-exam/mid-term-exam.component';
import { PipsComponent } from './pips/pips.component';
import { HandlingFormSubmissionComponent } from './handling-form-submission/handling-form-submission.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { Quiz2Component } from './quiz2/quiz2.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // import FormsModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MaterialExampleComponent } from './material-example/material-example.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DirectiveComponent,
    EventBindingComponent,
    TextInterpolationComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    Quiz1Component,
    MidTermExamComponent,
    PipsComponent,
    HandlingFormSubmissionComponent,
    FormValidationComponent,
    Quiz2Component,
    MaterialExampleComponent,
  ],
  imports: [BrowserModule, FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    NoopAnimationsModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
