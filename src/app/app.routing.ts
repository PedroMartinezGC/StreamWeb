import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LatestComponent } from './components/latest/latest.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'tv-shows', component: TvshowsComponent},
	{path: 'movies', component: MoviesComponent},
	{path: 'latest', component: LatestComponent},
	{path: '**', component: AppComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);