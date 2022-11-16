import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './compononets/partials/header/header.component';
import { HomeComponent } from './compononets/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './compononets/partials/search/search.component';
import { TagsComponent } from './compononets/partials/tags/tags.component';
import { FoodPageComponent } from './compononets/pages/food-page/food-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
