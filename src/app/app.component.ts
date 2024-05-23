import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    BlockComponent,
    MenuComponent,
    RouterLink,
    FormsModule,
  ],
})
export class AppComponent {
  title = 'Angular-Quests';
}
