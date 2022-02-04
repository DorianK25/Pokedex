import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: 'pokemon', component: PokemonListComponent },
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: 'pokemon/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
