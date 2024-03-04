import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.models';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

newUser: User  = {
  email: '',
  firstname: '',
  lastname: '',
  password: '',
};

formSubmitted = false;

onSubmit() {
  if (this.formSubmitted) {
    console.log('Le formulaire a bien été soumis', this.newUser);
  }
}

resetForm() {
  this.formSubmitted = false;
  this.newUser = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
  };
}
}
