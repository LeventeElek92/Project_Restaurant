import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-project-adminpanel',
  templateUrl: './project-adminpanel.component.html',
  styleUrls: ['./project-adminpanel.component.css']
})
export class ProjectAdminpanelComponent {
  weeklymenu:any;
  columns: any;

  getData(){
    this.base.getAll("weeklymenu").subscribe(
      weeklyMenuData=>{
        this.weeklymenu=weeklyMenuData, 
        console.log(this.weeklymenu)
      }
    )
  }

  constructor(
    private base:BaseService, 
    private config: ConfigService
    ){
    this.getData()
    this.columns=this.config.getWeeklyMenuCol()
      console.log(this.columns)
    
  }
  
  onModify(menu:any){
    this.base.onModify("weeklymenu",menu).subscribe(
      ()=>this.getData()
    )
  }


}
