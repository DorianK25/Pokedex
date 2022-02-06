import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokemons/pokedex/pokedex.component';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path: 'pokemon', component: PokedexComponent },
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: 'pokemon/:id', component: PokedexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
