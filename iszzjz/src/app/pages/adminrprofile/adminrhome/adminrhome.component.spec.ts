import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhomeComponent } from './adminrhome.component';

describe('AdminrhomeComponent', () => {
  let component: AdminrhomeComponent;
  let fixture: ComponentFixture<AdminrhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
