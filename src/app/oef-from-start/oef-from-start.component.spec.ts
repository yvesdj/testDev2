import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefFromStartComponent } from './oef-from-start.component';

describe('OefFromStartComponent', () => {
  let component: OefFromStartComponent;
  let fixture: ComponentFixture<OefFromStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefFromStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefFromStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
