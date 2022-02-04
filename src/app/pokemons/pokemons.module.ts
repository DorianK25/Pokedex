import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatChipsModule} from '@angular/material/chips';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    InfiniteScrollModule
  ],
  exports:[
    PokemonListComponent
  ]
})
export class PokemonsModule { }
