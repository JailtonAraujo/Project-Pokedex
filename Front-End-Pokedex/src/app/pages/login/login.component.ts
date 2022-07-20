import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  login = {login:"", password:""}

  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.login);
  }

}
