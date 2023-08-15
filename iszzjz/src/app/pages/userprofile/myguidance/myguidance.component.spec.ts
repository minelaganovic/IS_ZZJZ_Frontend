import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyguidanceComponent } from './myguidance.component';

describe('MyguidanceComponent', () => {
  let component: MyguidanceComponent;
  let fixture: ComponentFixture<MyguidanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyguidanceComponent]
    });
    fixture = TestBed.createComponent(MyguidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
