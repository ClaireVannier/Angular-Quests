import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {path: '', component: UserProfileComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'user', component: UserComponent}
];
