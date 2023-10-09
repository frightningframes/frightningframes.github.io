import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    constructor(private router: Router) { }

    username: string = '';
    password: string = '';
    confirmPassword: string = '';

    passwordMismatchError: boolean = false; // Add a variable for password mismatch error
    registrationSuccess: boolean = false;

    registerUser() {
        if (this.username && this.password && this.confirmPassword) {
            if (this.password === this.confirmPassword) {
                // Form is valid, passwords match
                this.registrationSuccess = true;
                this.passwordMismatchError = false; // Clear the password mismatch error
                // Example navigation to the "/BIT" page
                this.router.navigate(['/BIT']);
            } else {
                // Passwords do not match, display the password mismatch error
                this.passwordMismatchError = true;
                this.registrationSuccess = false;
            }
        } else {
            // Handle the case where any field is empty
            this.passwordMismatchError = false; // Clear the password mismatch error
            this.registrationSuccess = false;
        }
    }
}
