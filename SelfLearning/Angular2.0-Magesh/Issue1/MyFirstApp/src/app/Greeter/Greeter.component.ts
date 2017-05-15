import { Component } from '@angular/core';
@Component({
  selector: 'greeter',
  template: `<label> Name: </label>
             <input type="text" [(ngModel)]="username"/>   // ngModel can only be defined for class variable
             <input type = "button" value = "Greet" (click)="onGreetClick(txtName)"/>
             <h3> {{greetMessage}}</h3>
             <input type = "button" value = "Clear" (click)="onClearClick()"/>`
})
export class GreeterComponent{
    greetMessage : string = "Welcome to angular 2.0 Session !!"
    username : string = '';
    onClearClick(){
    console.log("Clear message recieved");
    this.greetMessage='';
    }
    
    onGreetClick(username){
        this.greetMessage = `Hi ${this.username}, welcome to the class`;
        this.username = '';
    }
}