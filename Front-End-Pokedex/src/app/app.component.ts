import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End-Pokedex';

  btnText? : String;

  ngOnInit(){
    if(localStorage.getItem('tokenUser') !== ''){
      this.btnText = "Sair"
    }else{
      this.btnText ="Entrar"
    }
  }

}
