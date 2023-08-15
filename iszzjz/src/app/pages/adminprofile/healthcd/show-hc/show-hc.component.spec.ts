import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHcComponent } from './show-hc.component';

describe('ShowHcComponent', () => {
  let component: ShowHcComponent;
  let fixture: ComponentFixture<ShowHcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
