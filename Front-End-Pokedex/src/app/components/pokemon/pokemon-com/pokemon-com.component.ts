import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Pokemon } from 'src/app/Interfaces/Pokemon';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-pokemon-com',
  templateUrl: './pokemon-com.component.html',
  styleUrls: ['./pokemon-com.component.css']
})
export class PokemonComComponent implements OnInit {

  @Input() farCirclePlus!:IconDefinition;
  @Output() onSubmit = new EventEmitter<Pokemon>();
  @Input () classBtnPokemon?:String;
  userLogado!:Boolean;

  constructor(private userService:UserService) { }

  @Input() pokemon:Pokemon | null = null;

  ngOnInit(): void {
    this.userService.getUserLogado().subscribe((logado)=>{
      this.userLogado = logado
    })
  }

  submit(pokemon:Pokemon){
      this.onSubmit.emit(pokemon);
  }

}
