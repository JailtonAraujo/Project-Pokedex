import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cad-externo',
  templateUrl: './cad-externo.component.html',
  styleUrls: ['./cad-externo.component.css']
})
export class CadExternoComponent implements OnInit {

  formUser!:FormGroup;


  constructor(private messageService:MessageService, private userSevice:UserService, private router:Router) { }

  ngOnInit(): void {
    this.formUser = new FormGroup({
      name: new FormControl('',[Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm : new FormControl ('', [Validators.required])

    })
  }

  Submit(){
    if(this.formUser.invalid){
      return;
    }

    if(this.formUser.value.password !== this.formUser.value.passwordConfirm){
      this.messageService.addMessage("As senhas não são correspondentes!","error");
      return;
    }
      this.userSevice.saveUser(this.formUser.value).subscribe(()=>{
        this.messageService.addMessage("Usuario salvo com sucesso, por favor efetue o login!","success");
        this.router.navigate(['/login'])
      }, error =>{
        if(error.status == 400){
          this.messageService.addMessage(`${this.formUser.value.username} não está disponivél, por favor escolha outro login!`, "error");
        }
      }); 
    
  }

  get name(){
    return this.formUser.get('name')!;
  }

  get username(){
    return this.formUser.get('username')!;
  }

  get password(){ 
    return this.formUser.get('password')!;
  }

  get passwordConfirm(){
    return this.formUser.get('passwordConfirm')!;
  }

}
