import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oef-weather-forecast',
  templateUrl: './oef-weather-forecast.component.html',
  styleUrls: ['./oef-weather-forecast.component.css']
})
export class OefWeatherForecastComponent implements OnInit {

  tempArray:number[] = [0, 2, 15, 20, 25];
  locationArray:string[] = ["Brussel", "Tokyo", "Manila", "Amsterdam", "Ur Mum's Snatch"];
  

  constructor() {
      setInterval(this.UpdateTemp, 2000);

  }

  ngOnInit() {
  }

  UpdateTemp = () => {
      for (let index = 0; index < this.tempArray.length; index++) {
        this.tempArray[index] = Math.floor(Math.random() * 25);
        
      }
      console.log(this.tempArray)
  }

}
