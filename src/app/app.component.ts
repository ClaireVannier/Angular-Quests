import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockComponent } from "./block/block.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BlockComponent]
})
export class AppComponent {
  title = 'Angular-Quests';
}
