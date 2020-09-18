import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicComponentModule } from './common/public-component/public-component.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PublicComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
