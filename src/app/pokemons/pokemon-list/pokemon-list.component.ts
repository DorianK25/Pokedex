import { Component, OnInit } from '@angular/core';
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
    this.pokemonService.getAllPokemon().subscribe(res=> {this.listPokemon=res.data});
  }

  onScroll(){

    if( this.sum % 500 == 0 ){
      this.pokemonService.getAllPokemon(this.listPokemon.length+1).subscribe(res=> {this.listPokemon=res.data});
      this.sum=0;
    }else{
      this.sum++;
    }

  }

  // onScrollDown(){
  //   if( this.sum % 500 == 0 ){
  //     this.pokemonService.getAllPokemon(this.listPokemon.length-1).subscribe(res=> {this.listPokemon=res.data});
  //     this.sum=0;
  //   }else{
  //     this.sum++;
  //   }
  // }

  ngOnInit(): void {
    this.loadPokemons();
  }

}
