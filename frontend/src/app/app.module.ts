import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RestaurantEntryComponent } from './restaurant-entry/restaurant-entry.component';

import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
