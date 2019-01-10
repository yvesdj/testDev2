import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oef-current-time',
  templateUrl: './oef-current-time.component.html',
  styleUrls: ['./oef-current-time.component.css']
})
export class OefCurrentTimeComponent implements OnInit {

  title:string = "Current Time";
  datum: Date;
  hours:number = 19;

  constructor() { 
    setInterval(this.UpdateDate,1000)
  }

  ngOnInit() {
  }

  UpdateDate = () => {
    this.datum = new Date();
    // this.hours = this.datum.getHours();
    console.log(this.hours);
  }

}
