import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Pokemon } from 'src/app/Interfaces/Pokemon';
import { User } from 'src/app/Interfaces/User';


@Component({
  selector: 'app-pokemon-com',
  templateUrl: './pokemon-com.component.html',
  styleUrls: ['./pokemon-com.component.css']
})
export class PokemonComComponent implements OnInit {

  @Input() farCirclePlus!:IconDefinition;
  @Output() onSubmit = new EventEmitter<Pokemon>();
  @Input () classBtnPokemon?:String;
  userLogado!:any;

  constructor() { }

  @Input() pokemon:Pokemon | null = null;

  ngOnInit(): void {
    this.userLogado = localStorage.getItem('userLogado');
  }

  submit(pokemon:Pokemon){
      this.onSubmit.emit(pokemon);
  }

}
