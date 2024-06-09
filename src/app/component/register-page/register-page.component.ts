import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/RegiserUser';
import { UserServieService } from '../../services/UserService/user-servie.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  image: string = 'assets/background-login.jpg';

  constructor(private userService: UserServieService ) {

  }



  onRegister(form: NgForm): void {

    const formData = form.value;

    const registerUser = new User(
      formData.lastName,
      formData.firstName,
      formData.email,
      formData.phone,
      formData.userName,
      formData.password
    );
    this.userService.registerUser(registerUser);
  }
  
}



