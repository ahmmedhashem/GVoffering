import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-cat-navbar',
  templateUrl: './cat-navbar.component.html',
  styleUrls: ['./cat-navbar.component.scss']
})
export class CatNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("nav .navbar-toggler").click(function(){

      if($("nav .collapse").hasClass("show")){
       $("nav .collapse").slideUp(500);
       $("nav .collapse").removeClass("show");

      }else{
       $("nav .collapse").slideDown(500);
       $("nav .collapse").addClass("show");
      }

     })
  }

}
