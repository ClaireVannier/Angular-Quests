import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn = false;

  login() { this.isLoggedIn = true; }
  logout() { this.isLoggedIn = false; }

  getIsLoggedIn() { return this.isLoggedIn; }
}