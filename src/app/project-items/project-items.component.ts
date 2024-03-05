import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-project-items',
  templateUrl: './project-items.component.html',
  styleUrls: ['./project-items.component.css']
})

//tömb meghívása
export class ProjectItemsComponent {
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


