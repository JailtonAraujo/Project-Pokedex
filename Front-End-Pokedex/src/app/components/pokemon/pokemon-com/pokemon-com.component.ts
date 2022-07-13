import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/Pokemon';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-com',
  templateUrl: './pokemon-com.component.html',
  styleUrls: ['./pokemon-com.component.css']
})
export class PokemonComComponent implements OnInit {

  farCirclePlus = faCirclePlus;

  constructor() { }

  @Input() pokemon:Pokemon | null = null;

  ngOnInit(): void {
    //console.log(this.pokemon?.types)
  }

}
