import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { response } from 'express';
import { User } from '../../models/RegiserUser';
import { UserServieService } from '../../services/UserService/user-servie.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  image: string = 'assets/background-login.jpg';
  constructor(private userService: UserServieService ) {}


  onLogin(form: NgForm) {
    const formData = form.value;
    console.log('Page: ' + formData.userName)
    const loginUser = new User(
      "",
      "",
      "",
      "",
      formData.userName,
      formData.password
    )
    this.userService.loginUser(loginUser).then(response => {
      if(response) {
        console.log(response)
      }
      else {
        console.log('failed')
      }
    })
  }
}
