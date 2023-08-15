import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHceComponent } from './add-edit-hce.component';

describe('AddEditHceComponent', () => {
  let component: AddEditHceComponent;
  let fixture: ComponentFixture<AddEditHceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditHceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
