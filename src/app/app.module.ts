import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectHeaderComponent } from './project-header/project-header.component';
import { ProjectItemsComponent } from './project-items/project-items.component';
import { ProjectBookingComponent } from './project-booking/project-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectAdminpanelComponent } from './project-adminpanel/project-adminpanel.component';
import { ProjectMainpageComponent } from './project-mainpage/project-mainpage.component';
import { ProjectDrinksComponent } from './project-drinks/project-drinks.component';
import { ProjectFoodsComponent } from './project-foods/project-foods.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectHeaderComponent,
    ProjectItemsComponent,
    ProjectBookingComponent,
    ProjectAdminpanelComponent,
    ProjectMainpageComponent,
    ProjectDrinksComponent,
    ProjectFoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
