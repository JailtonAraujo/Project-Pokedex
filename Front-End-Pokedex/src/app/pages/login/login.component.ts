import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private messageService:MessageService) { }

  login = {username:"", password:""}

  ngOnInit(): void {
  }

  OnSubmit(){
    this.userService.althentication(this.login).subscribe((response) =>{
      localStorage.setItem('tokenUser',String(response.token));
      localStorage.setItem('nameUSer', String(response.name));

      console.log(localStorage.getItem('tokenUser'));
      
    });
  }

}
