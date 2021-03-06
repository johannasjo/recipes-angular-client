import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit, OnDestroy  {

  constructor() { }


  ngOnInit(): void {
     console.log("Recipies component initialized");
  }

   ngOnDestroy(): void {
    console.log("Recipies component destroyed");
  }

}
