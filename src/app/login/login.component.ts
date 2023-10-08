import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  username: string = '';
  password: string = '';

  registrationError: string = '';
  registrationSuccess: boolean = false;

  registerUser() {
    // Check if any text field is left open (empty)
    if (!this.username || !this.password) {
      this.registrationError = 'Please fill in all fields';
      this.registrationSuccess = false;
    } else {
      this.registrationError = '';
      this.registrationSuccess = true;

      // You can perform additional actions here, such as displaying a success message
    }
  }
}
