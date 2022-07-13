import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/Pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  constructor() { }

  @Input() AllPokemons:Pokemon [] = [];
  @Output() onSubmit = new EventEmitter();

   Search = {
    name:""
  }

  ngOnInit(): void {
  }

  handlerSubmit(){
      this.onSubmit.emit(this.Search);
  }

}
