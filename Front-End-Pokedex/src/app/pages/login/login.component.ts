import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
     private userService:UserService,
     private messageService:MessageService, 
     private router:Router) { }

  login = {username:"", password:""}

  ngOnInit(): void {
  }

  OnSubmit(){
    this.userService.althentication(this.login).subscribe((response) =>{
      localStorage.setItem('tokenUser',String(response.token));
      localStorage.setItem('nameUSer', String(response.name));

      this.router.navigate(['/mypokedex']);
      this.messageService.addMessage(`Bem vindo ${response.name}`,'success');
      
    }, error =>{
      if(error.status == 403){
        this.messageService.addMessage(`Nome de Usuario ou senha Incorretos!`,'error');
      }else if(error.status == 501){
        this.messageService.addMessage(`Ocorreu um erro inespeardo, por favor tente mais tarde!`,'error');
      }
    });
  }

}
