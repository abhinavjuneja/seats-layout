import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BusLayoutModule } from './bus-layout/bus-layout.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BusLayoutModule
  ],
  exports:[BusLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
