import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsModule } from './pokemons/pokemons.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { TeamComponent } from './team/team/team.component';
import { TeamModule } from './team/team.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthentificationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PokemonsModule,
    TeamModule
  ],
  providers: [
    TeamComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
