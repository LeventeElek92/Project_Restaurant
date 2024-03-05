import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectHeaderComponent } from './project-header/project-header.component';
import { ProjectBookingComponent } from './project-booking/project-booking.component';
import { ProjectItemsComponent } from './project-items/project-items.component';
import { ProjectAdminpanelComponent } from './project-adminpanel/project-adminpanel.component'

const routes: Routes = [
  {"path": "home", "component":ProjectHeaderComponent},
  {"path": "booking", "component":ProjectBookingComponent},
  {"path": "weeklymenu", "component":ProjectItemsComponent},
  {"path": "adminpanel", "component":ProjectAdminpanelComponent},
  {"path": " ", "component":ProjectHeaderComponent},
  {"path": "**", "component":ProjectHeaderComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
