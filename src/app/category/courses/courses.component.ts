import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  Courses = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
