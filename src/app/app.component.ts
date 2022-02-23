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

  constructor(){
  }

  ngOnInit(): void{

    window.addEventListener("scroll", (event)=>{
      let scrollY = window.scrollY;
      console.log(scrollY);

      if(scrollY <= 150){
        $("header").css("background", "linear-gradient(rgba(20, 20, 20), rgba(255, 255, 255, 0))")
                    .css("transition", "0.2s");
      }else{
        $("header").css("background", "rgba(12, 12, 12)")
                    .css("transition", "0.35s");
      }
    });

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
      
  }
}
