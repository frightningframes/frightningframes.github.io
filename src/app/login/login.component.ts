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

  registrationSuccess: boolean = false;

  registerUser() {
      if (this.username && this.password) {
          // Form is valid, you can perform the login action or navigate to "/BIT" here
          this.registrationSuccess = true;
          // Example navigation to the "/BIT" page
          this.router.navigate(['/BIT']);
      }
  }
}
