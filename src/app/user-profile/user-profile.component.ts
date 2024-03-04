import { Component} from '@angular/core';
import { UserProfil } from '../models/user-profil.models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent{

 user: UserProfil = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  isAgeToggle: boolean = true;

  constructor() {}

  toggleAge(): void {
    this.isAgeToggle = !this.isAgeToggle;
  }

}
