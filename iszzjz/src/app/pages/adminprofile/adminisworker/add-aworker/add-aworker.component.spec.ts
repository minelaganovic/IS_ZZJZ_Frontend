import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAworkerComponent } from './add-aworker.component';

describe('AddAworkerComponent', () => {
  let component: AddAworkerComponent;
  let fixture: ComponentFixture<AddAworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAworkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
