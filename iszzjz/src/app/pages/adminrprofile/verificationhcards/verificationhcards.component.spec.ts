import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationhcardsComponent } from './verificationhcards.component';

describe('VerificationhcardsComponent', () => {
  let component: VerificationhcardsComponent;
  let fixture: ComponentFixture<VerificationhcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificationhcardsComponent]
    });
    fixture = TestBed.createComponent(VerificationhcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
