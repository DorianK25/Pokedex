import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { PokemonsModule } from '../pokemons/pokemons.module';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    TeamComponent
  ],
  providers: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    AppRoutingModule,
    MatGridListModule,
    PokemonsModule,
    InfiniteScrollModule
  ]
})
export class TeamModule { }
