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
  totalElements!:Number;

  constructor(
    private pokemonService: PokemonBackEndService,
    private messageService: MessageService) { }

  AllPokemons: Pokemon[] = [];

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe((data) => {

      this.AllPokemons = data.content;
      this.totalElements = data.totalElements;

    });
  }

  async handlerDelete(pokemon: Pokemon) {

    if (confirm(`Tem certeza que deseja remover ${pokemon.name.toUpperCase()} da sua pokedex?`)) {

      await this.pokemonService.deletePokemon(Number(pokemon.id)).subscribe((response) => {

        this.AllPokemons = this.AllPokemons.filter((iten) => iten.id != pokemon.id);

        this.messageService.addMessage(`${pokemon.name.toUpperCase()} foi removido da sua pokedex`, "success");
      });
    }
  }

  SearchPokemon(Search:any){
    
    if(Search.name === null || Search.name == ''){
      this.getAllPokemons();
      return;
    }

    this.pokemonService.SearchPokemon(Search.name).subscribe((data) =>{
      this.AllPokemons = [];
      this.AllPokemons.push(data);
    },error=>{
      this.messageService.addMessage(`Nenhum Resultado encontrado para ${Search.name.toUpperCase()}!`,"error");
    })
  }

  LoadMore(click:any){

    

    if(this.AllPokemons.length < this.totalElements){

      this.pokemonService.LoadMore(this.AllPokemons.length).subscribe((data) =>{
        this.AllPokemons = [...this.AllPokemons, ...data]
    })
    }else{
      this.messageService.addMessage("Sem mais resultados...","error");
    return;
    }
  }

}
