import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPrimeComponent } from './test-prime/test-prime.component';

import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import {ProgressBarModule} from 'primeng/progressbar';

import { CurrentTimeComponent } from './current-time/current-time.component';
import { OefCurrentTimeComponent } from './oef-current-time/oef-current-time.component';
import { OefTellerComponent } from './oef-teller/oef-teller.component';
import { OefRandomGeneratorComponent } from './oef-random-generator/oef-random-generator.component';
import { OefFromStartComponent } from './oef-from-start/oef-from-start.component';
import { OefRandomScoreComponent } from './oef-random-score/oef-random-score.component';
import { OefWeatherForecastComponent } from './oef-weather-forecast/oef-weather-forecast.component';


@NgModule({
  declarations: [
    AppComponent,
    TestPrimeComponent,
    CurrentTimeComponent,
    OefCurrentTimeComponent,
    OefTellerComponent,
    OefRandomGeneratorComponent,
    OefFromStartComponent,
    OefRandomScoreComponent,
    OefWeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
