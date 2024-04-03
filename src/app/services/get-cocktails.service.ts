import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCocktailsService {

  constructor(private http: HttpClient) { }

  getnewCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }
}
