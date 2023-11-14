import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingFormSubmissionComponent } from './handling-form-submission.component';

describe('HandlingFormSubmissionComponent', () => {
  let component: HandlingFormSubmissionComponent;
  let fixture: ComponentFixture<HandlingFormSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandlingFormSubmissionComponent]
    });
    fixture = TestBed.createComponent(HandlingFormSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
