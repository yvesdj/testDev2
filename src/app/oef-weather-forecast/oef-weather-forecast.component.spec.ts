import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefWeatherForecastComponent } from './oef-weather-forecast.component';

describe('OefWeatherForecastComponent', () => {
  let component: OefWeatherForecastComponent;
  let fixture: ComponentFixture<OefWeatherForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefWeatherForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
