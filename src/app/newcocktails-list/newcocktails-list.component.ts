import { Component } from '@angular/core';
import { GetCocktailsService } from '../services/get-cocktails.service';
import { Cocktail } from '../models/cocktail.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newcocktails-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newcocktails-list.component.html',
  styleUrl: './newcocktails-list.component.scss',
})
export class NewcocktailsListComponent {
  
  newcocktails: Cocktail[] = [];

  constructor(private getCocktails: GetCocktailsService) {}

  ngOnInit() {
    this.getCocktails.getnewCocktails().subscribe((cocktail) => {
      this.newcocktails = cocktail;
    });
  }
}
