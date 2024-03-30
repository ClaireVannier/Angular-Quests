import { Component, Input } from '@angular/core';
import { Developer } from '../models/developer.models';
import { CommonModule } from '@angular/common';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss'],
  imports: [CommonModule, SkillComponent],
})
export class DeveloperComponent {
  developer: Developer = {
    lastName: 'Doe',
    firstName: 'John',
    age: 30,
    gender: 'Male',
    bio: 'I am a developer',
    skills: [
      {
        name: 'Angular',
        logo: 'https://angular.io/assets/images/logos/angular/angular.png',
        site: 'https://angular.io/',
      },
      {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        site: 'https://reactjs.org/',
      },
      {
        name: 'Vue',
        logo: 'https://vuejs.org/images/logo.png',
        site: 'https://vuejs.org/',
      },
    ],
  };
}
