import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'src/app/authentification/services/user.service';
import { PokemonDetail } from 'src/app/pokemons/models/pokemon-detail.model';
import { Pokemon } from 'src/app/pokemons/models/pokemon.model';
import { PokemonService } from 'src/app/pokemons/services/pokemon.service';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class TeamComponent implements OnInit,CanActivate {

  pokemons:PokemonDetail[]=[];
  listPokemon:Pokemon[]=[];
  sum:number=0

  constructor(private router: Router,private userService: UserService, private teamService: TeamService,private pokemonService:PokemonService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {

      console.log(this.userService.ifIsLogged());

        if (this.userService.ifIsLogged()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }


  ngOnInit(): void {
     this.teamService.getTeam().subscribe(res=>{this.pokemons=res});
     this.pokemonService.getAllPokemon(this.sum).subscribe(res=>{this.listPokemon=res.data});
  }

  onScroll(){
    if( this.sum < 151){
      this.sum+=10;
      this.pokemonService.getAllPokemon(this.sum).subscribe(res => {this.listPokemon = this.listPokemon.concat(res.data);});
    }
  }

  addPokemonToTeam(id:number){
    if(this.pokemons.length < 6){
      let exists:boolean=false;
      let ids:number[]=[];
      this.pokemons?.forEach((elt)=>{
          if(elt.id == id) {
            exists=true;
          }

          ids.push(elt.id);
      });
      if(!exists) {
        ids.push(id);
        this.pokemonService.getPokemon(id).subscribe(res => {this.pokemons?.push(res)});
        this.teamService.updateTeam(ids).subscribe();
      }

    }
  }

  deleteFromTeam(id:number){
    let ids:number[]=[];
    let supp:PokemonDetail;
    this.pokemons.forEach((elt)=>{
      if(elt.id !== id){
        ids.push(elt.id);
      }else{
        supp = elt;
      }
    });
    this.teamService.updateTeam(ids).subscribe();
    this.teamService.getTeam().subscribe(res=>{this.pokemons=res});
  }



}
