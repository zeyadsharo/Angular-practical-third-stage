/**
 * Component for handling form submission.
 * @remarks
 * This component uses Angular's NgForm to handle form submission.
 */
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-handling-form-submission',
  templateUrl: './handling-form-submission.component.html',
  styleUrls: ['./handling-form-submission.component.css']
})
export class HandlingFormSubmissionComponent {
   
  /**
   * Handles the submission of a form.
   * @param form - The NgForm object representing the form being submitted.
   */
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
