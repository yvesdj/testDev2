import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-oef-from-start',
  templateUrl: './oef-from-start.component.html',
  styleUrls: ['./oef-from-start.component.css']
})
export class OefFromStartComponent implements OnInit {

  title:string = "This website has been build for:";
  message:string;
  start:Date = new Date();


  constructor() { 
    setInterval(this.UpdateElapsedTime,1000);
  }

  ngOnInit() {
  }

  UpdateElapsedTime = () =>{
    this.message = moment(this.start).fromNow();
  } 

}
