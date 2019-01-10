import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefCurrentTimeComponent } from './oef-current-time.component';

describe('OefCurrentTimeComponent', () => {
  let component: OefCurrentTimeComponent;
  let fixture: ComponentFixture<OefCurrentTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefCurrentTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefCurrentTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
