import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhcardsComponent } from './addhcards.component';

describe('AddhcardsComponent', () => {
  let component: AddhcardsComponent;
  let fixture: ComponentFixture<AddhcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddhcardsComponent]
    });
    fixture = TestBed.createComponent(AddhcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
