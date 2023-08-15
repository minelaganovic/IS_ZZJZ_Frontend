import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerhcComponent } from './verhc.component';

describe('VerhcComponent', () => {
  let component: VerhcComponent;
  let fixture: ComponentFixture<VerhcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerhcComponent]
    });
    fixture = TestBed.createComponent(VerhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
