import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectHeaderComponent } from './project-header/project-header.component';
import { ProjectItemsComponent } from './project-items/project-items.component';
import { ProjectBookingComponent } from './project-booking/project-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectAdminpanelComponent } from './project-adminpanel/project-adminpanel.component';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; 

@NgModule({
  declarations: [
    AppComponent,
    ProjectHeaderComponent,
    ProjectItemsComponent,
    ProjectBookingComponent,
    ProjectAdminpanelComponent,
    Component,
    AgGridAngular,
    RouterModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
