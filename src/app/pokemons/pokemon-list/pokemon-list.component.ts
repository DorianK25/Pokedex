import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  listPokemon:Pokemon[]=[];

  sum:number=0;

  constructor(public pokemonService:PokemonService) { }

  loadPokemons(){
    this.pokemonService.getAllPokemon(this.sum).subscribe(res=> {this.listPokemon=res.data});
  }

  searchPokemon(terms:string){
    if(terms === '')
      this.loadPokemons();
    else
      this.pokemonService.searchPokemon(this.sum,terms).subscribe(res=> {this.listPokemon=res.data});
  }

  onScroll(){
    if( this.sum < 151){
      this.sum+=10;
      this.pokemonService.getAllPokemon(this.sum).subscribe(res => {this.listPokemon = this.listPokemon.concat(res.data);});
    }
  }

  ngOnInit(): void {
    this.loadPokemons();
  }

}
