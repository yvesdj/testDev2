import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {

  datum: Date;
  uur: string;
  minuten: string;
  seconden: string;

  constructor() {
    setInterval(this.UpdateDateTime, 1000)

  }

  ngOnInit() {
  }

  UpdateDateTime = () => {
    this.datum = new Date();
    this.uur = _.padStart(this.datum.getHours().toString(), 2, "0");
    this.minuten = _.padStart(this.datum.getMinutes().toString(), 2, "0");
    this.seconden = _.padStart(this.datum.getSeconds().toString(), 2, "0");
  }
}
