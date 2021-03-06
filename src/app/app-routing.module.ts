import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './recipies/recipies.component';

const routes: Routes = [
  {
    path: 'recipies',
    component: RecipiesComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
