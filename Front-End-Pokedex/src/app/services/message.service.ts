import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

 message:String = "";
 StatusClass:String = ""; 

  constructor() { }

  addMessage(message:String, StatusClass:String){
    this.message = message;
    this.StatusClass = StatusClass;
    setTimeout(()=>{
      this.removeMessage();
    },4000);
  }

  removeMessage(){
    this.message = "";
  }

}

