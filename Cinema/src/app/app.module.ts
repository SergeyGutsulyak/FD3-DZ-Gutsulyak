import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HallComponent } from './hall/hall.component';
import { CashComponent } from './cash/cash.component';

@NgModule({
  declarations: [
    AppComponent,
    HallComponent,
    CashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
