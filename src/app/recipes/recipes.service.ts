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
    this.baseUrl = 'https://api.edamam.com/search';
    this.appKey = 'b5233a5a4394984e19750182917c824f';
    this.appId = '5b87a875';
  }

  getAll() {
    const params = new HttpParams();
    params.append('app_key', this.appKey);
    params.append('app_id', this.appId);
    params.append('q', 'chicken');
    return this.http.get<Recipe[]>(this.baseUrl, { params });
  }
}

// https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
