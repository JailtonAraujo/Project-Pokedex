import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private BaseApiPokemonUrl = environment.BaseAPIPokemonUrl;

  constructor(private http:HttpClient) { }

  LoadPokemons():Observable<any>{
         return this.http.get<any>(`${this.BaseApiPokemonUrl}?offset=0&limit=20`);
  }

  LoadPokemon(urlPokemon:String):Observable<any>{
    return this.http.get<any>(`${urlPokemon}`);
  }

}
