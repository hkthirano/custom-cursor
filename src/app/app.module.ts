import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Method1Component } from './method1/method1.component';
import { Method2Component } from './method2/method2.component';

@NgModule({
  declarations: [
    AppComponent,
    Method1Component,
    Method2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
