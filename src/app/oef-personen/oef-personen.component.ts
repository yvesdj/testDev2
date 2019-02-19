import { Component, OnInit } from '@angular/core';
import {Person} from "./Person";

@Component({
  selector: 'app-oef-personen',
  templateUrl: './oef-personen.component.html',
  styleUrls: ['./oef-personen.component.css']
})
export class OefPersonenComponent implements OnInit {

  persoon: Person;
  constructor() {
    
   }

  ngOnInit() {
  }

}
