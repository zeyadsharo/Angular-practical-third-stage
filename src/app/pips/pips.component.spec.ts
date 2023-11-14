import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipsComponent } from './pips.component';

describe('PipsComponent', () => {
  let component: PipsComponent;
  let fixture: ComponentFixture<PipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipsComponent]
    });
    fixture = TestBed.createComponent(PipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
