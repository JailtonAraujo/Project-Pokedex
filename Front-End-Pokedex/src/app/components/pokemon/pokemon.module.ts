import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComComponent } from './pokemon-com/pokemon-com.component';
import { HomeComponent } from './home/home.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyPokedexComponent } from './my-pokedex/my-pokedex.component';


@NgModule({
  declarations: [
    PokemonComComponent,
    HomeComponent,
    ListPokemonComponent,
    MyPokedexComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],

  exports:[
    PokemonComComponent,
    HomeComponent
  ]
})
export class PokemonModule { }
