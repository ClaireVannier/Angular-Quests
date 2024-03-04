import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  isAdmin: boolean = true;

  constructor() {}
  
  changeAdminStatus(): void {
    this.isAdmin = !this.isAdmin;
  }
}
