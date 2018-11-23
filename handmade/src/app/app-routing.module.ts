import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostsPageComponent} from './components/posts-page/posts-page.component';

const routes: Routes = [
  {path:'',component:PostsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
