import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userNameEmpty = true;
  userName = '';

  resetUsername(){
    this.userName ='';
    this.userNameEmpty = true;
  }

  enableResetButton(){
    this.userNameEmpty = false;
    if(this.userName == '')
    {
      this.userNameEmpty = true;
    }
  }
}
