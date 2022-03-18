import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { UserService } from 'src/app/authentification/services/user.service';
import { PokemonService } from 'src/app/pokemons/services/pokemon.service';
import { PokemonDetail } from '../../pokemons/models/pokemon-detail.model'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  Url="http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io";
  constructor(private http: HttpClient,private pokemonService:PokemonService,private userService:UserService) { }

  getTeam(){
    let headers = new HttpHeaders();
    const pokemons:Observable<PokemonDetail>[]=[];
    let token=this.userService.getToken();
    headers = headers.set('Authorization', 'Bearer '+token.access_token);
    return this.http.get<number[]>(this.Url+"/trainers/me/team",{headers: headers}).pipe(
      switchMap(ids=>{
        const obsPok= ids.map(id=>this.pokemonService.getPokemon(id));
        return forkJoin(obsPok);
      })
    )
  }

  updateTeam(body:number[]){
    let headers = new HttpHeaders();
    let token=this.userService.getToken();
    headers = headers.set('Authorization', 'Bearer '+token.access_token);
    return this.http.put(this.Url+"/trainers/me/team",body,{headers: headers});
  }
}
