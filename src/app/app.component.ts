import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'StreamWeb';
  public films: string[];


  constructor(){
    this.films = ["Django", "There will bee blood", "Orange Clockwork", "Memento", "Killer's kiss", "Barry Lyndon", "Stalker", "Fight Club"];
  }
  ngOnInit(){
  	$("#logo-profile").mouseover(function(){
  		$("#logo-arrow").css("-moz-transform", "rotate(180deg)")
  						.css("-ms-transform", "rotate(180deg)")
  						.css("-o-transform", "rotate(180deg)")
  						.css("-webkit-transform", "rotate(180deg)");
  	});
  	$("#logo-profile").mouseout(function(){
  		$("#logo-arrow").css("-moz-transform", "rotate(0deg)")
  						.css("-ms-transform", "rotate(0deg)")
  						.css("-o-transform", "rotate(0deg)")
  						.css("-webkit-transform", "rotate(0deg)");
  	});
      
      //$(".deployable").css("visibility", "hidden");
  }
  filmOver(){
    $(".deployable").css("visibility", "visible");
  }
  filmOut(){
    $(".deployable").css("visibility", "hidden");
  }


}
