import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shares/navbar/navbar.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { BlankPageComponent } from './layouts/blank-page/blank-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FullpageComponent,
    BlankPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
