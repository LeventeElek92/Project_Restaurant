import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFoodsComponent } from './project-foods.component';

describe('ProjectFoodsComponent', () => {
  let component: ProjectFoodsComponent;
  let fixture: ComponentFixture<ProjectFoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectFoodsComponent]
    });
    fixture = TestBed.createComponent(ProjectFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
