import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.models';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
 
private cocktails: Cocktail[] = [
  {
    name: 'Cocktail',
    price: 10,
    pictureUrl: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
  },
  {
    name: 'Mojito',
    price: 20,
    pictureUrl: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
  },
  {
    name: 'Cosmos',
    price: 30,
    pictureUrl: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
  },

] 

  constructor() {}

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
  
}
