import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any;

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss']
})
export class LessonContentComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<img src="./assets/img/left.png">', '<img src="./assets/img/nextt.png">'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  sowDesc(e:any){
    $('#home').show();
    $('#menu1').hide();
    $('#projects').hide();
    $('#office').hide();
    $('.home').addClass('active');
    $('.menu1').removeClass('active');
    $('.projects').removeClass('active');
    $('.office').removeClass('active');
  }

  showRev(e:any){
    $('#home').hide();
    $('#projects').hide();
    $('#office').hide();
    $('#menu1').show();
    $('.menu1').addClass('active');
    $('.home').removeClass('active');
    $('.projects').removeClass('active');
    $('.office').removeClass('active');
  }

  showPro(e:any){
    $('#home').hide();
    $('#menu1').hide();
    $('#projects').show();
    $('#office').hide();
    $('.menu1').removeClass('active');
    $('.home').removeClass('active');
    $('.projects').addClass('active');
    $('.office').removeClass('active');
  }

  showOff(e:any){
    $('#home').hide();
    $('#menu1').hide();
    $('#projects').hide();
    $('#office').show();
    $('.menu1').removeClass('active');
    $('.home').removeClass('active');
    $('.projects').removeClass('active');
    $('.office').addClass('active');
  }

  showConv(){
    $('.conversation').show(500);
    $('.question').hide(300);
  }
  showQuestion(){
    $('.conversation').hide(300);
    $('.question').show(500);
  }

  showMoreText(){
    $('.text').show(500);
    $('.sohw-more').hide();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
