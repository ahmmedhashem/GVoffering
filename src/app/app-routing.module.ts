import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LessonsComponent } from './lessons/lessons.component';
import { OfferingComponent } from './Offering/offering.component';

const routes: Routes = [
  { path: 'Offering', component: OfferingComponent},
  { path: 'Category', component: CategoryComponent},
  { path: 'Lesson', component: LessonsComponent},
  { path: 'Course', component: CourseDetailsComponent},
  { path: '',   redirectTo: '/Offering', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
