import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {



  constructor() { }

  onScroll() {
    console.log("cc")
  }

  ngOnInit(): void {

  }

}
