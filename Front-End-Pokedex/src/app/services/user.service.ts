import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/User';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseAPIBackEndUrl = environment.BaseAPIBackEndUrl;

  constructor(private http:HttpClient, private messageService:MessageService) { }

  althentication(User:any):Observable<User>{
    return this.http.post<any>(`${this.BaseAPIBackEndUrl}/login`,User);
  }

}
