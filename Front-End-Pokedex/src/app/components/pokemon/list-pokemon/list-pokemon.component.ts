import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/Pokemon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  constructor() { }

  faSearch = faSearch;

  @Input() AllPokemons:Pokemon [] = [];
  @Output() onSubmit = new EventEmitter();

  @Output() ClickButtomLoadMore = new EventEmitter(); 

   Search = {
    name:""
  }

  ngOnInit(): void {

  }

  handlerSubmit(){
      this.onSubmit.emit(this.Search);
  }

  LoadMore(){
    this.ClickButtomLoadMore.emit(true);
  }

}
