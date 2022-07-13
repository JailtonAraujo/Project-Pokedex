import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComComponent } from './pokemon-com/pokemon-com.component';
import { HomeComponent } from './home/home.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonComComponent,
    HomeComponent,
    ListPokemonComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],

  exports:[
    PokemonComComponent,
    HomeComponent
  ]
})
export class PokemonModule { }
