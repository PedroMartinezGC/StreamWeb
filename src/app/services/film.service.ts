import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
	public url:string;
	public api_key:string;

  constructor(private _http: HttpClient){
  	this.url = Global.url;
  	this.api_key = Global.api_key;
  }

  getTopRatedFilms(): Observable<any>{
  	let headers = new HttpHeaders().set('Content-type', 'application/json');

  	return this._http.get(this.url+'/movie/top_rated'+'?'+this.api_key, {headers: headers});
  }
  getTopTvShows(): Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get(this.url+'/tv/top_rated'+'?'+this.api_key, {headers: headers});
  }
  getPopularTvShows(): Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get(this.url+'/tv/popular'+'?'+this.api_key, {headers: headers});
  }
  getOnAirTvShows(): Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get(this.url+'/tv/airing_today'+'?'+this.api_key, {headers: headers});
  }
  getShowDetails(id: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get(this.url+'/tv/'+id+'?'+this.api_key, {headers: headers});
  }
}
