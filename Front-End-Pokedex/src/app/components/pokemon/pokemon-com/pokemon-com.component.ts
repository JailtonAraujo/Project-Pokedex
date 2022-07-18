import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Pokemon } from 'src/app/Interfaces/Pokemon';


@Component({
  selector: 'app-pokemon-com',
  templateUrl: './pokemon-com.component.html',
  styleUrls: ['./pokemon-com.component.css']
})
export class PokemonComComponent implements OnInit {

  @Input() farCirclePlus!:IconDefinition;
  @Output() onSubmit = new EventEmitter<Pokemon>();
  @Input () classBtnPokemon?:String;

  constructor() { }

  @Input() pokemon:Pokemon | null = null;

  ngOnInit(): void {
  }

  submit(pokemon:Pokemon){
      this.onSubmit.emit(pokemon);
  }

}
