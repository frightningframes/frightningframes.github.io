import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  registrationError: string = '';
  registrationSuccess: boolean = false;

  registerUser() {
    // Check if any text field is left open (empty)
    if (!this.username || !this.password || !this.confirmPassword) {
      this.registrationError = 'Please fill in all fields';
      this.registrationSuccess = false;
    } else if (this.password !== this.confirmPassword) {
      this.registrationError = 'Passwords do not match';
      this.registrationSuccess = false;
    } else {
      this.registrationError = '';
      this.registrationSuccess = true;

      // You can perform additional actions here, such as displaying a success message
    }
  }
}
