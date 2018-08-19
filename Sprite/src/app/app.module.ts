import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CssSpriteComponent } from './css-sprite/css-sprite.component';

@NgModule({
  declarations: [
    AppComponent,
    CssSpriteComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
