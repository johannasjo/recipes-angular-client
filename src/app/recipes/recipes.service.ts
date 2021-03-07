import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  baseUrl: string;
  appKey: string;
  appId: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.spoonacular.com';
    this.appKey = '26ec59dbfbee4da2932d48a29dd9a7f8';
    this.appId = '5b87a875';
  }

  getAll(query: string) {
    const params = new HttpParams().set('apiKey', this.appKey);

    if (query) {
      params.set('query', query)
    }
    
    console.log(params.toString())
    return this.http.get<Recipe[]>(`${this.baseUrl}/recipes/complexSearch`, { params });
  }
}

