import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { RecipesOverviewComponent } from './recipes/recipes-overview/recipes-overview.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesOverviewComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
