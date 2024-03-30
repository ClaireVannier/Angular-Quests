import { Component } from '@angular/core';
import { CreateOnomatopiaComponent } from '../create-onomatopia/create-onomatopia.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onomatopia-list',
  standalone: true,
  templateUrl: './onomatopia-list.component.html',
  styleUrl: './onomatopia-list.component.scss',
  imports: [CreateOnomatopiaComponent, CommonModule],
})
export class OnomatopiaListComponent {
  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(newOnomatopia: string): void {
    this.onomatopoeiaList.push(newOnomatopia);
  }
}
