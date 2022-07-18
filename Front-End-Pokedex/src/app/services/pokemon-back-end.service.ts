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

  getAllPokemons():Observable<any>{
    return this.http.get<any>(`${this.BaseApiBackEndUrl}/pokemon/`);
  }

  savePokemon(pokemon:Pokemon):Observable<Pokemon> {
     return this.http.post<Pokemon>(`${this.BaseApiBackEndUrl}/pokemon/`,pokemon); 
  }

  deletePokemon(id:Number){
    return this.http.delete(`${this.BaseApiBackEndUrl}/pokemon/${id}`);
  }

  SearchPokemon(name:String):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.BaseApiBackEndUrl}/pokemon/fbname/${name}`);
  }

  LoadMore(Offset:Number):Observable<any>{
    return this.http.get<any>(`${this.BaseApiBackEndUrl}/pokemon/loadmore/${Offset}`);
  }

}
