import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthValidGuard implements CanActivate {

  constructor(private router:Router, private messageService:MessageService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!localStorage.getItem('tokenUser')){
        this.router.navigate(['/login']);
        this.messageService.addMessage("Erro na autenticação ou token expirado. por favor, autentique-se!","error");
        return false;
      }

    return true;
  }
  
}
