import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Interfaces/User';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseAPIBackEndUrl = environment.BaseAPIBackEndUrl;

  //Verificando com base no localStorage pois dessa forma ao recarregar os dados de login o UserLogado sempre será construindo com base em dados persistentes 
  private Userlogado = new BehaviorSubject<Boolean>(Boolean(localStorage.getItem('tokenUser')));

  constructor(private http:HttpClient) { }

  althentication(User:any):Observable<User>{
    return this.http.post<any>(`${this.BaseAPIBackEndUrl}/login`,User);
  }

  changeUserLogado(logado:Boolean){
    this.Userlogado.next(logado);
  }

  getUserLogado(){
    return this.Userlogado;
  }

}
