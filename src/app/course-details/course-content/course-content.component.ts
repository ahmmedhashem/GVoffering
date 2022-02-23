import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any;

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  corses = [
    {
      'title':'Music',
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'img':'./assets/img/cate1.png',
      'person':'1525',
      'like':'95'
    },
    {
      'title':'Robotics',
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'img':'./assets/img/cate2.png',
      'person':'1525',
      'like':'95'
    },
    {
      'title':'Digital Arts',
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'img':'./assets/img/cate3.png',
      'person':'1525',
      'like':'95'
    },
    {
      'title':'Music',
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'img':'./assets/img/cate4.png',
      'person':'1525',
      'like':'95'
    },
    {
      'title':'Robotics',
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'img':'./assets/img/cate5.png',
      'person':'1525',
      'like':'95'
    },
    {
      'title':'Digital Arts',
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'img':'./assets/img/cate6.png',
      'person':'1525',
      'like':'95'
    },
    {
      'title':'Music',
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'img':'./assets/img/cate1.png',
      'person':'1525',
      'like':'95'
    },
    {
      'title':'Robotics',
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'img':'./assets/img/cate2.png',
      'person':'1525',
      'like':'95'
    },
  ]

  CoursesList = [
    {
      'img':'./assets/img/course1.png',
      'title':'Welcome'
    },
    {
      'img':'./assets/img/course2.png',
      'title':'Navigating the image'
    },
    {
      'img':'./assets/img/course3.png',
      'title':'Moving content'
    },
    {
      'img':'./assets/img/course4.png',
      'title':'Simple but effective selections'
    },
    {
      'img':'./assets/img/course5.png',
      'title':'Adobe Photoshop'
    },
    {
      'img':'./assets/img/course6.png',
      'title':'Navigating the image'
    },
    {
      'img':'./assets/img/course7.png',
      'title':'Moving content'
    },
    {
      'img':'./assets/img/course8.png',
      'title':'Simple but effective selections'
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<img src="./assets/img/left.png">', '<img src="./assets/img/right.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2.3
      },
      940: {
        items: 2.3
      }
    },
    nav: true
  }

  sowDesc(e:any){
    $('#home').show();
    $('#menu1').hide();
    $('.home').addClass('active');
    $('.menu1').removeClass('active');
  }

  showRev(e:any){
    $('#home').hide();
    $('#menu1').show();
    $('.menu1').addClass('active');
    $('.home').removeClass('active');
  }

  showMoreText(){
    $('.text').show(500)
    $('.sohw-more').hide();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
