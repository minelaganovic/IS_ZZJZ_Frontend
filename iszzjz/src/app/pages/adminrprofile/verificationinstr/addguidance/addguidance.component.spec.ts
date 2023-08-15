import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddguidanceComponent } from './addguidance.component';

describe('AddguidanceComponent', () => {
  let component: AddguidanceComponent;
  let fixture: ComponentFixture<AddguidanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddguidanceComponent]
    });
    fixture = TestBed.createComponent(AddguidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
