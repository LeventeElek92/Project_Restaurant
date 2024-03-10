import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDrinksComponent } from './project-drinks.component';

describe('ProjectDrinksComponent', () => {
  let component: ProjectDrinksComponent;
  let fixture: ComponentFixture<ProjectDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDrinksComponent]
    });
    fixture = TestBed.createComponent(ProjectDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
