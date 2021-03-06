import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  posts2: Post[];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService
      .getAll()
      .subscribe((posts) => (this.posts = posts.slice(0, 10)));
  }
}
