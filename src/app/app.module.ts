import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferingComponent } from './Offering/offering.component';
import { NavbarComponent } from './Offering/navbar/navbar.component';
import { SliderComponent } from './Offering/slider/slider.component';
import { CategoryComponent } from './category/category.component';
import { CatNavbarComponent } from './category/cat-navbar/cat-navbar.component';
import { CatSliderComponent } from './category/cat-slider/cat-slider.component';
import { CoursesComponent } from './category/courses/courses.component';
import { LearningPathesComponent } from './category/learning-pathes/learning-pathes.component';
import { TeachersComponent } from './category/teachers/teachers.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseNavbarComponent } from './course-details/course-navbar/course-navbar.component';
import { CourseContentComponent } from './course-details/course-content/course-content.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonNavbarComponent } from './lessons/lesson-navbar/lesson-navbar.component';
import { LessonContentComponent } from './lessons/lesson-content/lesson-content.component';



@NgModule({
  declarations: [
    AppComponent,
    OfferingComponent,
    NavbarComponent,
    SliderComponent,
    CategoryComponent,
    CatNavbarComponent,
    CatSliderComponent,
    CoursesComponent,
    LearningPathesComponent,
    TeachersComponent,
    CourseDetailsComponent,
    CourseNavbarComponent,
    CourseContentComponent,
    LessonsComponent,
    LessonNavbarComponent,
    LessonContentComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
