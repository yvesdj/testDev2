import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefTellerComponent } from './oef-teller.component';

describe('OefTellerComponent', () => {
  let component: OefTellerComponent;
  let fixture: ComponentFixture<OefTellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefTellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
