import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictPostComponent } from './components/shared/pict-post/pict-post.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PictPostComponent,
    PostsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
