import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceDegreeComponent } from './science-degree.component';

describe('ScienceDegreeComponent', () => {
  let component: ScienceDegreeComponent;
  let fixture: ComponentFixture<ScienceDegreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScienceDegreeComponent]
    });
    fixture = TestBed.createComponent(ScienceDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
