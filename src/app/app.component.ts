import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BlockComponent } from "./block/block.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AdminComponent } from "./admin/admin.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BlockComponent, UserProfileComponent, AdminComponent, MenuComponent, RouterLink]
})
export class AppComponent {
  title = 'Angular-Quests';
}
