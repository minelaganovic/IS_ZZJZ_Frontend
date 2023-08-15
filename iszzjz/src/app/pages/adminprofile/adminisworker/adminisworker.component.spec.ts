import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminisworkerComponent } from './adminisworker.component';

describe('AdminisworkerComponent', () => {
  let component: AdminisworkerComponent;
  let fixture: ComponentFixture<AdminisworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminisworkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminisworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
