import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAdminpanelComponent } from './project-adminpanel.component';

describe('ProjectAdminpanelComponent', () => {
  let component: ProjectAdminpanelComponent;
  let fixture: ComponentFixture<ProjectAdminpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectAdminpanelComponent]
    });
    fixture = TestBed.createComponent(ProjectAdminpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
