import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/Interfaces/Pokemon';
import { MessageService } from 'src/app/services/message.service';
import { PokemonBackEndService } from 'src/app/services/pokemon-back-end.service';
import { faCirclePlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemon:Pokemon | null = null;
  pokemons:Pokemon [] = [];
  faCirclePlus = faCirclePlus

  constructor(
    private pokemonService:PokemonService,
    private messageService:MessageService,
    private pokemonServiceBack:PokemonBackEndService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  //Busca os pokemons na ApiRestFull da pokedex
  loadPokemons(){
    this.pokemonService.LoadPokemons().subscribe((data) =>{
      
      this.pokemons=[];

      const results:Array<any> = data.results;

      results.forEach((element) =>{
        this.loadPokemonByUrl(element.url);
      })
        
      });

    }

    //Busca cada pokemon na Api REstFull pela url de pesquisa dele
     loadPokemonByUrl(urlPokemon:String){
       this.pokemonService.LoadPokemon(urlPokemon).subscribe((data)=>{

        
        let types =[];
          
        for(let i = 1;i <= data.types.length;i++){
          
            types.push( {type: data.types[i-1].type.name });
        }
          
          this.pokemon = {
            id:Number(0),
            name:String(data.name),
            urlImage:String(this.getUrlImage(data.id)),
            idPokemon:String(data.id),
            types:types
          
          }
         
          this.pokemons.push(this.pokemon);

        })
    }

    //Junta a url padrão de busca de imagen com o id Do pokemon
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


    //Pega o nome de pesquisa informado e faz a busca na APi POkedex
    Createsearch(Search:any){

        if(Search.name == null || Search.name == ''){
            this.loadPokemons();
            return
        }

        this.pokemonService.SearchPokemon(Search.name).subscribe((data) =>{


          this.pokemon = {
            id:Number(0),
            name:String(data.name),
            urlImage:String(this.getUrlImage(data.id)),
            idPokemon:String(data.id),
            types:data.types
          }


          this.pokemons = [];
          this.pokemons.push(this.pokemon); 

         
        }, error =>{
            if(error.status === 404){
                this.messageService.addMessage(`Erro: Nenhum resultado encontrado para ${Search.name}`,"error");
            }
        })
    
    }

    //Função que busca mais 4 pokemons na APi pokedex
    LoadMore(click:any){
      
      if(click === true && this.pokemons.length >= 20){
       let offset:Number = this.pokemons.length

        this.pokemonService.LoadMorePokemon(offset).subscribe((data) =>{
        
        const results:Array<any> = data.results;

        results.forEach((element) =>{
          this.loadPokemonByUrl(element.url);
        })

       })

      }
    }

    //Salva pokemon selecionado no Back End (API SPRING)
    handlerPokemon(pokemon:Pokemon){
       this.pokemonServiceBack.savePokemon(pokemon).subscribe((response)=>{
          this.messageService.addMessage(`${pokemon.name} Adicionado à sua pokedex com sucesso!`,"success");
       });
    }
}
