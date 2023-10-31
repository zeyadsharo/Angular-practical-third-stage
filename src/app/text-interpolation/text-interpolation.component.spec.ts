import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInterpolationComponent } from './text-interpolation.component';

describe('TextInterpolationComponent', () => {
  let component: TextInterpolationComponent;
  let fixture: ComponentFixture<TextInterpolationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextInterpolationComponent]
    });
    fixture = TestBed.createComponent(TextInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
