import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { HttpClientModule } from '@angular/common/http';
import { FilmService } from './services/film.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';

// Libraries
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatIconModule } from '@angular/material/icon';

//Components
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LatestComponent } from './components/latest/latest.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    TvshowsComponent,
    MoviesComponent,
    LatestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    routing,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
  FilmService,
  appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
