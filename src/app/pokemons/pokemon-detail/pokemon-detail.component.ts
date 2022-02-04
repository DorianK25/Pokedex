import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail?:PokemonDetail;

  id=Number(this.route.snapshot.paramMap.get('id'));


  constructor(private pokemonService:PokemonService,private route:ActivatedRoute,private location:Location) { }

  loadPokemon():void{
    this.pokemonService.getPokemon(this.id).subscribe(res => {this.pokemonDetail=res});
  }

  goBack():void{
    this.location.back();
  }

  ngOnInit(): void {
    this.loadPokemon();
  }

}
