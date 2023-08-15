import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcardsComponent } from './healthcards.component';

describe('HealthcardsComponent', () => {
  let component: HealthcardsComponent;
  let fixture: ComponentFixture<HealthcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthcardsComponent]
    });
    fixture = TestBed.createComponent(HealthcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
