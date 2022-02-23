import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPathesComponent } from './learning-pathes.component';

describe('LearningPathesComponent', () => {
  let component: LearningPathesComponent;
  let fixture: ComponentFixture<LearningPathesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningPathesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningPathesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
