import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/Pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  
  @Input() AllPokemons:Pokemon [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
