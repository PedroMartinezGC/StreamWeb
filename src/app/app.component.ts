import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'StreamWeb';


  constructor(){
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
  }


}
