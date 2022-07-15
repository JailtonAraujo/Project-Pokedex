import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/Pokemon';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-com',
  templateUrl: './pokemon-com.component.html',
  styleUrls: ['./pokemon-com.component.css']
})
export class PokemonComComponent implements OnInit {

  farCirclePlus = faCirclePlus;
  @Output() onSubmit = new EventEmitter<Pokemon>();

  constructor() { }

  @Input() pokemon:Pokemon | null = null;

  ngOnInit(): void {
  }

  submit(pokemon:Pokemon){
      this.onSubmit.emit(pokemon);
  }

}
