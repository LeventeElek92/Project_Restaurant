import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'


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
import { Environments } from './environment';
import { ProjectLoginComponent } from './project-login/project-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectHeaderComponent,
    ProjectItemsComponent,
    ProjectBookingComponent,
    ProjectAdminpanelComponent,
    ProjectMainpageComponent,
    ProjectDrinksComponent,
    ProjectFoodsComponent,
    ProjectLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(Environments.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
