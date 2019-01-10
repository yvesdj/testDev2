import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefRandomGeneratorComponent } from './oef-random-generator.component';

describe('OefRandomGeneratorComponent', () => {
  let component: OefRandomGeneratorComponent;
  let fixture: ComponentFixture<OefRandomGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefRandomGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefRandomGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
