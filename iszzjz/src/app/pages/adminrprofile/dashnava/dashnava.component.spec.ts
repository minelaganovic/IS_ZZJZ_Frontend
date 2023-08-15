import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnavaComponent } from './dashnava.component';

describe('DashnavaComponent', () => {
  let component: DashnavaComponent;
  let fixture: ComponentFixture<DashnavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashnavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashnavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
