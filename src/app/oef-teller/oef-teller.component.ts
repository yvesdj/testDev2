import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oef-teller',
  templateUrl: './oef-teller.component.html',
  styleUrls: ['./oef-teller.component.css']
})
export class OefTellerComponent implements OnInit {

  teller:number = 0;
  title:string = "Teller";

  constructor() {
    setInterval(this.UpdateTeller, 200)
  }

  ngOnInit() {
  }
  UpdateTeller = () => {
    return this.teller++;
  }
}
