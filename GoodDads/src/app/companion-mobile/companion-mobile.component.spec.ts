import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionMobileComponent } from './companion-mobile.component';

describe('CompanionMobileComponent', () => {
  let component: CompanionMobileComponent;
  let fixture: ComponentFixture<CompanionMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanionMobileComponent]
    });
    fixture = TestBed.createComponent(CompanionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
