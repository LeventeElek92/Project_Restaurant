import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBookingComponent } from './project-booking/project-booking.component';
import { ProjectItemsComponent } from './project-items/project-items.component';
import { ProjectAdminpanelComponent } from './project-adminpanel/project-adminpanel.component'
import { ProjectMainpageComponent } from './project-mainpage/project-mainpage.component';
import { ProjectFoodsComponent } from './project-foods/project-foods.component';
import { ProjectDrinksComponent } from './project-drinks/project-drinks.component';

const routes: Routes = [
  {"path": "home", "component":ProjectMainpageComponent},
  {"path": "menu", "component":ProjectItemsComponent},
  {"path": "etlap", "component":ProjectFoodsComponent},
  {"path": "itallap", "component":ProjectDrinksComponent},
  {"path": "asztalfoglalas", "component":ProjectBookingComponent},
  {"path": "adminpanel", "component":ProjectAdminpanelComponent},
  {"path": " ", "component":ProjectMainpageComponent},
  {"path": "**", "component":ProjectMainpageComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
