import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  active = 'linksResposive';
  activated = false;
  userLogado!:Boolean;

  constructor(private router:Router, private userService:UserService) {
    
   }

  ngOnInit(): void {
    this.userService.getUserLogado().subscribe((data)=>{
      this.userLogado = data;
    })
  }

  LogOut(){
    localStorage.setItem('tokenUser','');
    localStorage.setItem('nameUser','');
    this.userService.changeUserLogado(false);

    this.router.navigate(['']);
  }

  activeMenu(){
    if(!this.activated){
      this.active += " active-menu";
      this.activated = !this.activated;
    }else{
      this.active ="linksResposive";
      this.activated = !this.activated;
    }

  }

  

}
