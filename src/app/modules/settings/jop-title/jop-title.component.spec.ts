import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JopTitleComponent } from './jop-title.component';

describe('JopTitleComponent', () => {
  let component: JopTitleComponent;
  let fixture: ComponentFixture<JopTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JopTitleComponent]
    });
    fixture = TestBed.createComponent(JopTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
