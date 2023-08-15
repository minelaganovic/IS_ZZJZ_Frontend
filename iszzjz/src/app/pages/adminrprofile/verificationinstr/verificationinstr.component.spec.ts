import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationinstrComponent } from './verificationinstr.component';

describe('VerificationinstrComponent', () => {
  let component: VerificationinstrComponent;
  let fixture: ComponentFixture<VerificationinstrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificationinstrComponent]
    });
    fixture = TestBed.createComponent(VerificationinstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
