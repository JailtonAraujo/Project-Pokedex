import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/Interfaces/Pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemon:Pokemon | null = null;
  pokemons:Pokemon [] = [];
  NameSearch = "";

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(nameSearch?:String){
    this.pokemonService.LoadPokemons().subscribe((data) =>{
      
      const results:Array<any> = data.results;

      results.forEach((element) =>{
        this.loadPokemonByUrl(element.url);
      })
        
      });

    }

    loadPokemonByUrl(urlPokemon:String){
        this.pokemonService.LoadPokemon(urlPokemon).subscribe((data)=>{
          
          this.pokemon = {
            id:Number(0),
            name:String(data.name),
            urlImage:String(this.getUrlImage(data.id)),
            idPokemon:String(data.id),
            types:data.types
          
          }

          this.pokemons.push(this.pokemon);

        })
    }

    getUrlImage(idPokemon:Number){

      let id = "";

      if(idPokemon < 10){//Unidades
          id = `00${idPokemon}`;
      }else if(idPokemon < 100 && idPokemon >= 10 ){ //Dezenas
          id = `0${idPokemon}`;
      }else{ //Centenas
        id = String(idPokemon);
      }

      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    }


    Createsearch(Search:any){
      this.NameSearch = Search.name;
    }

}
