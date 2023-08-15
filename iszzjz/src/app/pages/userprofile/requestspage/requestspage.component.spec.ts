import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestspageComponent } from './requestspage.component';

describe('RequestspageComponent', () => {
  let component: RequestspageComponent;
  let fixture: ComponentFixture<RequestspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
