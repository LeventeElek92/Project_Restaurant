import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-project-foods',
  templateUrl: './project-foods.component.html',
  styleUrls: ['./project-foods.component.css']
})
export class ProjectFoodsComponent {
  foods:any;
  foodCols:any;

  getFoodData(){
    this.base.getAllFoods("foods").subscribe(
      foodData=>{
        this.foods=foodData; 
        console.log(this.foods)
      }
    )
  }

  constructor(
    private base:BaseService, 
    private config: ConfigService
    ){
      this.getFoodData()    
    this.foodCols=this.config.getFoodCol()
    console.log(this.foodCols)
  }
}
