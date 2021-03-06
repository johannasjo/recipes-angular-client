import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getAll() {
    return this.http.get<Post[]>(this.baseUrl);
  }
}
