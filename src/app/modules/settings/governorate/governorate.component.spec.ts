import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernorateComponent } from './governorate.component';

describe('GovernorateComponent', () => {
  let component: GovernorateComponent;
  let fixture: ComponentFixture<GovernorateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GovernorateComponent]
    });
    fixture = TestBed.createComponent(GovernorateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
