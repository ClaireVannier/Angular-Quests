import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'user', component: UserComponent },
  { path: 'signup', component: SignupComponent },
];
