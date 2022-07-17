import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Pokemon } from '../Interfaces/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonBackEndService {

  constructor(private http:HttpClient) { }

  private BaseApiBackEndUrl = environment.BaseAPIBackEndUrl

  getAllPokemons():Observable<Array<Pokemon>>{
    return this.http.get<Array<Pokemon>>(`${this.BaseApiBackEndUrl}/pokemon/`);
  }

  savePokemon(pokemon:Pokemon):Observable<Pokemon> {
     return this.http.post<Pokemon>(`${this.BaseApiBackEndUrl}/pokemon/`,pokemon); 
  }

}
