import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefPersonenComponent } from './oef-personen.component';

describe('OefPersonenComponent', () => {
  let component: OefPersonenComponent;
  let fixture: ComponentFixture<OefPersonenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefPersonenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefPersonenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
