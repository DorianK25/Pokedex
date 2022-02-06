import { Location } from '@angular/common';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
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

  private id?:number;


  constructor(private pokemonService:PokemonService,private route:ActivatedRoute,private location:Location) { }

  playSound(){
    let sound=new Audio("../assets/audio/"+this.pokemonDetail?.id+".mp3")
    sound.play();
  }

  loadPokemon():void{
    if(this.id)
      this.pokemonService.getPokemon(this.id).subscribe(res => {this.pokemonDetail=res});
  }

  goBack():void{
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.id=Number(this.route.snapshot.paramMap.get('id'));
      this.loadPokemon()
    })
  }
}
