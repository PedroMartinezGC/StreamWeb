import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FilmService } from '../../services/film.service';

import { Global } from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilmService]
})
export class HomeComponent implements OnInit{
  public title = 'StreamWeb';
  public url:string;
  public api_key:string;
  public url_img:string;

  public filmresults: string[];
  public toprated_title: string[];
  public toprated_poster: string[];
  public toprated_backdrop: string[];
  public toprated_overview: string[];
  public toprated_id: number[];

  public filmresultstv: string[];
  public topratedtv_title: string[];
  public topratedtv_poster: string[];
  public topratedtv_backdrop: string[];
  public topratedtv_overview: string[];
  public topratedtv_id: number[];

  public filmresultspop_tv: string[];
  public populartv_title: string[];
  public populartv_poster: string[];
  public populartv_backdrop: string[];
  public populartv_overview: string[];
  public populartv_id: number[];

  public filmresultsonair_tv: string[];
  public onairtv_title: string[];
  public onairtv_poster: string[];
  public onairtv_backdrop: string[];
  public onairtv_overview: string[];
  public onairtv_id: number[];

  public backdrop: any;
  public overview: any;
  public name: any;
  public id: number;
  public chosen: number;

  public slideConfig: any;
  

  constructor( private _filmService: FilmService){

    this.url = Global.url;
    this.api_key = Global.api_key;
    this.url_img = Global.url_img;

    this.toprated_title = [];
    this.toprated_poster = [];
    this.toprated_backdrop = [];
    this.toprated_overview = [];
    this.toprated_id = [];

    this.topratedtv_title = [];
    this.topratedtv_poster = [];
    this.topratedtv_backdrop = [];
    this.topratedtv_overview = [];
    this.topratedtv_id = [];

    this.populartv_title = [];
    this.populartv_poster = [];
    this.populartv_backdrop = [];
    this.populartv_overview = [];
    this.populartv_id = [];

    this.onairtv_title = [];
    this.onairtv_poster = [];
    this.onairtv_backdrop = [];
    this.onairtv_overview = [];
    this.onairtv_id = [];

    this.slideConfig = {"slidesToShow": 7, "slidesToScroll": 4};
  }
  ngOnInit(): void{
    
    this.getTopRatedFilms();
    this.getTopTvShows();
    this.getPopularTvShows();
    this.getOnAirTvShows();
    //this.getShowDetails();

    console.log(this.url+'/tv/latest'+'?'+this.api_key);
  	

    function overLogo(): any{
      $("#logo-arrow").css("-moz-transform", "rotate(180deg)")
              .css("-ms-transform", "rotate(180deg)")
              .css("-o-transform", "rotate(180deg)")
              .css("-webkit-transform", "rotate(180deg)");
    }
    function outLogo(): any{
      $("#logo-arrow").css("-moz-transform", "rotate(0deg)")
              .css("-ms-transform", "rotate(0deg)")
              .css("-o-transform", "rotate(0deg)")
              .css("-webkit-transform", "rotate(0deg)");
    }
    function overTitle(): any{
      $("h2.toprated-movies h3").css("padding-left", "20px")
                          .css("color", "rgba(250, 250, 250)")
                          .css("visibility", "visible");
    }
    function outTitle(): any{
      $("h2.toprated-movies h3").css("padding-left", "0px")
                          .css("color", "rgba(250, 250, 250, 0.0)")
                          .css("visibility", "hidden");
    }

  	$("#logo-profile").hover(overLogo, outLogo);

    $("h2.toprated-movies").hover(overTitle, outTitle);
  	
    $("h2.popular-tvshows").hover(
      ()=>{
        $("h2.popular-tvshows h3").css("padding-left", "20px")
                          .css("color", "rgba(250, 250, 250)")
                          .css("visibility", "visible");
      },
      ()=>{
        $("h2.popular-tvshows h3").css("padding-left", "0px")
                          .css("color", "rgba(250, 250, 250, 0.0)")
                          .css("visibility", "hidden");
      }
    );

    $("h2.airing-tvshows").hover(
      ()=>{
        $("h2.airing-tvshows h3").css("padding-left", "20px")
                          .css("color", "rgba(250, 250, 250)")
                          .css("visibility", "visible");
      },
      ()=>{
        $("h2.airing-tvshows h3").css("padding-left", "0px")
                          .css("color", "rgba(250, 250, 250, 0.0)")
                          .css("visibility", "hidden");
      }
    );

    $("h2.toprated-tvshows").hover(
      ()=>{
        $("h2.toprated-tvshows h3").css("padding-left", "20px")
                          .css("color", "rgba(250, 250, 250)")
                          .css("visibility", "visible");
      },
      ()=>{
        $("h2.toprated-tvshows h3").css("padding-left", "0px")
                          .css("color", "rgba(250, 250, 250, 0.0)")
                          .css("visibility", "hidden");
      }
    );
      
  }


  scrollTop(){
    window.scroll({
    	top: 0,
    	left: 0,
    	behavior: 'smooth'
    });
  }

  filmOut(){
    $(".deployable").css("visibility", "hidden");
  }
  openFilm(i: any){
  	  if(typeof(i) != undefined){
  	  	this.chosen = i;
      	console.log(this.chosen);
  	  }
      
  }
  openTopRatedMovie(i: any){
    this.backdrop = this.toprated_backdrop;
    this.name = this.toprated_title;
    this.overview = this.toprated_overview;
    this.id = this.toprated_id[i];
    console.log(this.id);
    
  }
  openPopularShow(i: any){
    this.backdrop = this.populartv_backdrop;
    this.name = this.populartv_title;
    this.overview = this.populartv_overview;
    this.id = this.populartv_id[i];
    console.log(this.id);

  }
  openTopRatedShow(i: any){
    this.backdrop = this.topratedtv_backdrop;
    this.name = this.topratedtv_title;
    this.overview = this.topratedtv_overview;
    this.id = this.topratedtv_id[i];
    console.log(this.id);
  }
  openOnAirShow(i: any){
    this.backdrop = this.onairtv_backdrop;
    this.name = this.onairtv_title;
    this.overview = this.onairtv_overview;
    this.id = this.onairtv_id[i];
    console.log(this.id);
  }

  getTopRatedFilms(){
    this._filmService.getTopRatedFilms().subscribe(
      response=>{
        if(response){
      
          this.filmresults = response.results;
          //console.log(this.filmresults);

          this.filmresults.forEach((element, i, array)=>{
            this.toprated_title.push(response.results[i].title);
            this.toprated_poster.push(this.url_img+response.results[i].poster_path);
            this.toprated_backdrop.push(this.url_img+response.results[i].backdrop_path);
            this.toprated_overview.push(response.results[i].overview);
            this.toprated_id.push(response.results[i].id);
          });
        }
      }, 
      error=>{
        console.log(<any>error);
      }
    );
  }
  getTopTvShows(){
    this._filmService.getTopTvShows().subscribe(
      response=>{
        if(response){
      
          this.filmresultstv = response.results;
          
          //console.log(this.filmresultstv);
          //console.log(this.topratedtv_title);

          this.filmresultstv.forEach((element, i, array)=>{
            this.topratedtv_title.push(response.results[i].name);
            this.topratedtv_poster.push(this.url_img+response.results[i].poster_path);
            this.topratedtv_backdrop.push(this.url_img+response.results[i].backdrop_path);
            this.topratedtv_overview.push(response.results[i].overview);
            this.topratedtv_id.push(response.results[i].id);
          });
        }
      }, 
      error=>{
        console.log(<any>error);
      }
    );
  }
  getPopularTvShows(){
    this._filmService.getPopularTvShows().subscribe(
      response=>{
        if(response){
      
          this.filmresultspop_tv = response.results;
          
          //console.log(this.filmresultspop_tv);
          //console.log(this.populartv_title);

          this.filmresultspop_tv.forEach((element, i, array)=>{
            this.populartv_title.push(response.results[i].name);
            this.populartv_poster.push(this.url_img+response.results[i].poster_path);
            this.populartv_backdrop.push(this.url_img+response.results[i].backdrop_path);
            this.populartv_overview.push(response.results[i].overview);
            this.populartv_id.push(response.results[i].id);
          });
        }
      }, 
      error=>{
        console.log(<any>error);
      }
    );
  }
  getOnAirTvShows(){
    this._filmService.getOnAirTvShows().subscribe(
      response=>{
        if(response){
      
          this.filmresultsonair_tv = response.results;
          
          console.log(this.filmresultsonair_tv);
          console.log(this.onairtv_title);

          this.filmresultsonair_tv.forEach((element, i, array)=>{
            this.onairtv_title.push(response.results[i].name);
            this.onairtv_poster.push(this.url_img+response.results[i].poster_path);
            this.onairtv_backdrop.push(this.url_img+response.results[i].backdrop_path);
            this.onairtv_overview.push(response.results[i].overview);
            this.onairtv_id.push(response.results[i].id);
          });
        }
      }, 
      error=>{
        console.log(<any>error);
      }
    );
  }
  /*getShowDetails(){
    this._filmService.getShowDetails().subscribe(
      response=>{
        if(response){
          console.log(response);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }*/




}
