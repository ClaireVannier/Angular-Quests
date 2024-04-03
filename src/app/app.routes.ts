import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { BlockComponent } from './block/block.component';
import { AdminComponent } from './admin/admin.component';
import { SearchMovieComponent } from './search-movies/search-movies.component';
import { DeveloperComponent } from './developer/developer.component';
import { OnomatopiaListComponent } from './onomatopia-list/onomatopia-list.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

export const routes: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'user', component: UserComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'block', component: BlockComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'searchmovies', component: SearchMovieComponent },
  { path: 'input', component: DeveloperComponent },
  { path: 'search-movies', component: SearchMovieComponent },
  { path: 'onomatopia', component: OnomatopiaListComponent },
  { path: 'cocktail', component: CocktailListComponent },
];
