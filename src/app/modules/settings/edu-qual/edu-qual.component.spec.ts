import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduQualComponent } from './edu-qual.component';

describe('EduQualComponent', () => {
  let component: EduQualComponent;
  let fixture: ComponentFixture<EduQualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EduQualComponent]
    });
    fixture = TestBed.createComponent(EduQualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
