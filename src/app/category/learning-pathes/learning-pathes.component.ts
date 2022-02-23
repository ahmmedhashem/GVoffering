import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-learning-pathes',
  templateUrl: './learning-pathes.component.html',
  styleUrls: ['./learning-pathes.component.scss']
})
export class LearningPathesComponent implements OnInit {

  Categories = [
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

  showPop(){
    $('.pop-up').show(500);
  }

  closePop(){
    $('.pop-up').hide(500);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
