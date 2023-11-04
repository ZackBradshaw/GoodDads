import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWebComponent } from './admin-web.component';

describe('AdminWebComponent', () => {
  let component: AdminWebComponent;
  let fixture: ComponentFixture<AdminWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWebComponent]
    });
    fixture = TestBed.createComponent(AdminWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
