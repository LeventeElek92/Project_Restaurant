import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-project-adminpanel',
  templateUrl: './project-adminpanel.component.html',
  styleUrls: ['./project-adminpanel.component.css']
})
export class ProjectAdminpanelComponent {
  weeklyMenu:any;
  columns: any;

  constructor(
    private base:BaseService, 
    private config: ConfigService
    ){
    this.base.getAll("weeklymenu").subscribe(
      weeklyMenuData=>{
        this.weeklyMenu=weeklyMenuData, 
        console.log(this.weeklyMenu)
      }
    )
    this.columns=this.config.getWeeklyMenuCol()
      console.log(this.columns)
    
  }

  

}
