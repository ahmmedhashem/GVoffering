import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSliderComponent } from './cat-slider.component';

describe('CatSliderComponent', () => {
  let component: CatSliderComponent;
  let fixture: ComponentFixture<CatSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
