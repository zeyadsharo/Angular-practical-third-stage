import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidTermExamComponent } from './mid-term-exam.component';

describe('MidTermExamComponent', () => {
  let component: MidTermExamComponent;
  let fixture: ComponentFixture<MidTermExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MidTermExamComponent]
    });
    fixture = TestBed.createComponent(MidTermExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
