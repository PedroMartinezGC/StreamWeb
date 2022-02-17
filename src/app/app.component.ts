import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FilmService } from './services/film.service';

import { Global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilmService]
})
export class AppComponent implements OnInit{
  public title = 'StreamWeb';
  public url:string;
  public api_key:string;
  public url_img:string;

  public filmresults: string[];
  public toprated_title: string[];
  public toprated_img: string[];

  public chosen: number;

  public slideConfig: any;


  constructor( private _filmService: FilmService){

    this.url = Global.url;
    this.api_key = Global.api_key;
    this.url_img = Global.url_img;
    this.toprated_title = [];
    this.toprated_img = [];

    this.slideConfig = {"slidesToShow": 6, "slidesToScroll": 4};
  }
  ngOnInit(): void{
    
    this.getTopRatedFilms();
    console.log(this.url+'/movie/top_rated'+'?'+this.api_key);

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
      $("div.film-list h2 h3").css("padding-left", "20px")
                          .css("color", "rgba(250, 250, 250)")
                          .css("visibility", "visible");
    }
    function outTitle(): any{
      $("div.film-list h2 h3").css("padding-left", "0px")
                          .css("color", "rgba(250, 250, 250, 0.0)")
                          .css("visibility", "hidden");
    }

  	$("#logo-profile").hover(overLogo, outLogo);
  	
    $("div.film-list h2").hover(overTitle, outTitle);
      
      //$(".deployable").css("visibility", "hidden");
  }

  filmOver(){
    $(".deployable").css("visibility", "visible");
  }

  filmOut(){
    $(".deployable").css("visibility", "hidden");
  }
  openFilm(i: any){
      this.chosen = i;
      console.log(this.chosen);
    
  }

  getTopRatedFilms(){
    this._filmService.getTopRatedFilms().subscribe(
      response=>{
        if(response){
      
          this.filmresults = response.results;
          console.log(this.filmresults);

          this.filmresults.forEach((element, i, array)=>{
            this.toprated_title.push(response.results[i].title);
            this.toprated_img.push(this.url_img+response.results[i].backdrop_path);
          });
          console.log(this.toprated_title);
          console.log(this.toprated_img);
          


        }
      }, 
      error=>{
        console.log(<any>error);
      }
    );
  }


}
