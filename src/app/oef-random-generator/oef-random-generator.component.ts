import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oef-random-generator',
  templateUrl: './oef-random-generator.component.html',
  styleUrls: ['./oef-random-generator.component.css']
})
export class OefRandomGeneratorComponent implements OnInit {

  randomNumber:number;
  title:string = "Randomizer";

  constructor() { 
    setInterval(this.Randomize, 2000)
  }

  ngOnInit() {
  }

  Randomize = () => {
    this.randomNumber = Math.floor(Math.random() * 101)
  }

}
