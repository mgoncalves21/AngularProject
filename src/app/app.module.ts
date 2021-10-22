import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import '@angular/common/locales/global/fr'


import { AppComponent } from './app.component';
import {HotelListComponent} from "./hotel-list/hotel-list.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue:"fr-FR"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
