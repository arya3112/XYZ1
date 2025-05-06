import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Registration data
  name = '';
  phone = '';
  email = '';
  password = '';

  // Login form
  loginEmail = '';
  loginPassword = '';

  // Flags
  isLoggedIn = false;
  loginFailed = false;

  // Register
  register() {
    alert('Registered successfully! Now login.');
  }

  // Login
  login() {
    if (this.loginEmail === this.email && this.loginPassword === this.password) {
      this.isLoggedIn = true;
      this.loginFailed = false;
    } else {
      this.loginFailed = true;
   
    
     }
  }
}