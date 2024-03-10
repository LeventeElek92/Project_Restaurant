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
  constructor(
    private base: BaseService,
    private config: ConfigService
    ){
    this.base.getAllDrinks("drinks").subscribe(
      drinkData=>{
        this.drinks=drinkData; 
        console.log(this.drinks)
      }
    )
    this.drinkCols=this.config.getDrinkCol()
    console.log(this.drinkCols)
  }

  onDrinkDelete(drink:any){
    let id=drink.id;
    this.base.onDrinkDelete("drinks",id).subscribe(
      ()=>{
        this.base.getAllDrinks("drinks").subscribe(
          drinkData=>{
            this.drinks=drinkData; 
            console.log(this.drinks)
          }
        )    
      }
    )
  }

}
