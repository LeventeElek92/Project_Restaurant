import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-project-drinks',
  templateUrl: './project-drinks.component.html',
  styleUrls: ['./project-drinks.component.css']
})
export class ProjectDrinksComponent {
  drinks:any;
  drinkCols: any;

  getDrinkData(){
    this.base.getAllDrinks("drinks").subscribe(
      drinkData=>{
        this.drinks=drinkData; 
        console.log(this.drinks)
      }
    )
  }

  constructor(
    private base: BaseService,
    private config: ConfigService
    ){
      this.getDrinkData()
    this.drinkCols=this.config.getDrinkCol()
    console.log(this.drinkCols)
  }
}
