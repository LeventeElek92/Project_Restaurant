import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFooterComponent } from './project-footer.component';

describe('ProjectFooterComponent', () => {
  let component: ProjectFooterComponent;
  let fixture: ComponentFixture<ProjectFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectFooterComponent]
    });
    fixture = TestBed.createComponent(ProjectFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
