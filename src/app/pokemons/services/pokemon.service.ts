import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { PagedData } from '../models/paged-data.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  Url="http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io";

  getAllPokemon(limit?:number):Observable<PagedData<Pokemon>>{
    return limit === undefined ? this.http.get<PagedData<Pokemon>>(this.Url+"/pokemons") : this.http.get<PagedData<Pokemon>>(this.Url+"/pokemons?limit="+limit);
  }

  getPokemon(id:number):Observable<PokemonDetail>{
    return this.http.get<PokemonDetail>(this.Url+"/pokemons/"+id);
  }

  constructor(private http: HttpClient) { }
}
