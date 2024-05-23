import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail.models';
import { CocktailService } from '../services/cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
