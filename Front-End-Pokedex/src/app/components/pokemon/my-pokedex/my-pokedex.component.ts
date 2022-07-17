import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/Pokemon';
import { PokemonBackEndService } from 'src/app/services/pokemon-back-end.service';
import { MessageService } from 'src/app/services/message.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-pokedex',
  templateUrl: './my-pokedex.component.html',
  styleUrls: ['./my-pokedex.component.css']
})
export class MyPokedexComponent implements OnInit {

  faCirclePlus = faTimes;

  constructor(
    private pokemonService:PokemonBackEndService,
    private messageService:MessageService) { }

  AllPokemons:Pokemon [] =[];

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(){
     this.pokemonService.getAllPokemons().subscribe((data)=>{

     this.AllPokemons = data;

     });
  }

   async handlerDelete(pokemon:Pokemon){

    if(confirm(`Tem certeza que deseja remover ${pokemon.name.toUpperCase()} da sua pokedex?`)){

    await this.pokemonService.deletePokemon(Number(pokemon.id)).subscribe((response)=>{

      this.AllPokemons = this.AllPokemons.filter((iten) => iten.id != pokemon.id);

        this.messageService.addMessage(`${pokemon.name.toUpperCase()} foi removido da sua pokedex`,"success");
    });
  }
}
}
