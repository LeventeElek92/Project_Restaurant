import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMainpageComponent } from './project-mainpage.component';

describe('ProjectMainpageComponent', () => {
  let component: ProjectMainpageComponent;
  let fixture: ComponentFixture<ProjectMainpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectMainpageComponent]
    });
    fixture = TestBed.createComponent(ProjectMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
