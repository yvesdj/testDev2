import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oef-random-score',
  templateUrl: './oef-random-score.component.html',
  styleUrls: ['./oef-random-score.component.css']
})
export class OefRandomScoreComponent implements OnInit {

  randomScore:number;
  // message:string;


  constructor() {
    setInterval(this.RandomNrGen, 2000);
    // setInterval(this.Output, 2000);
  }

  ngOnInit() {
  }

  RandomNrGen = () => {
    this.randomScore = Math.floor(Math.random() * 10) + 1;
  }

  // Output = () => {
  //   console.log(this.randomScore);
  //   if (this.randomScore <= 4) {
  //     this.message = "Dit resultaat is ondermaats";
  //   } else {
  //     if (this.randomScore <= 7) {
  //       this.message = "";
  //     } else {
  //       this.message = "Mooie score !";
  //     }
  //   }
  // }

}
