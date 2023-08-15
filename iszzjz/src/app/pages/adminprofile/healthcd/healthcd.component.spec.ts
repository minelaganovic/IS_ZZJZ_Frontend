import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcdComponent } from './healthcd.component';

describe('HealthcdComponent', () => {
  let component: HealthcdComponent;
  let fixture: ComponentFixture<HealthcdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthcdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
