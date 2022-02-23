import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-lesson-navbar',
  templateUrl: './lesson-navbar.component.html',
  styleUrls: ['./lesson-navbar.component.scss']
})
export class LessonNavbarComponent implements OnInit {

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
