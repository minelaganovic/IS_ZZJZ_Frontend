import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrpanelComponent } from './adminrpanel.component';

describe('AdminrpanelComponent', () => {
  let component: AdminrpanelComponent;
  let fixture: ComponentFixture<AdminrpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
