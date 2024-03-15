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
  foods:any;
  foodCols:any;
  drinks:any;
  drinkCols: any;
  newFood: any={};
  newDrink: any={};
  reservations: any;
  rows: any;
  newReservation: any={};


  //Adatkérés - Menü
  getData(){
    this.base.getAll("weeklymenu").subscribe(
      weeklyMenuData=>{
        this.weeklymenu=weeklyMenuData, 
        console.log(this.weeklymenu)
      }
    )
  }

  //Adatkérés - Ételek
  getFoodData(){
    this.base.getAllFoods("foods").subscribe(
      foodData=>{
        this.foods=foodData; 
        console.log(this.foods)
      }
    )
  }  

//Adatkérés - Italok
  getDrinkData(){
    this.base.getAllDrinks("drinks").subscribe(
      drinkData=>{
        this.drinks=drinkData; 
        console.log(this.drinks)
      }
    )
  }

  //Adatkérés - Foglalások
  getReservData(){
    this.base.getReservation("reservations").subscribe(
      reservData=>{
        this.reservations=reservData;
        console.log(this.reservations)
      }
    )
  }


  constructor(
    private base:BaseService, 
    private config: ConfigService
    ){
    this.getData()
    this.columns=this.config.getWeeklyMenuCol()
    console.log(this.columns),

    this.getFoodData()    
    this.foodCols=this.config.getFoodCol()
    console.log(this.foodCols),

    this.getDrinkData()
    this.drinkCols=this.config.getDrinkCol()
    console.log(this.drinkCols),

    this.getReservData()
    this.rows=this.config.getReservRow()
    console.log(this.rows)

  }  

  //Menü - módosítás gomb
  onModify(menu:any){
    this.base.onModify("weeklymenu",menu).subscribe(
      ()=>this.getData()
    )
  }
  
  //Ételek - törlés gomb
  onFoodDelete(food:any){
    let id=food.id;
    this.base.onFoodDelete("foods",id).subscribe(
      ()=>this.getFoodData()
    )
  }

  // Ételek - módosítás gomb
  onFoodModify(food:any){
    this.base.onFoodModify("foods",food).subscribe(
      ()=>this.getFoodData()
    )
  }

  //Ételek - hozzáadás
  onFoodCreate(){
    this.base.onFoodCreate("foods",this.newFood).subscribe(
      ()=>
      {
        this.newFood={},
        this.getFoodData()
      }
    )
  }

  //Italok - törlés gomb
  onDrinkDelete(drink:any){
    let id=drink.id;
    this.base.onDrinkDelete("drinks",id).subscribe(
      ()=>this.getDrinkData()      
    )
  }
  //Italok - módosítás gomb
  onDrinkModify(drink:any){
    this.base.onDrinkModify("drinks",drink).subscribe(
      ()=>this.getDrinkData()
    )
  }

  //Italok - hozzáadás
  onDrinkCreate(){
    this.base.onDrinkCreate("drinks",this.newDrink).subscribe(
      ()=>{
        this.newDrink={},
        this.getDrinkData()
      }
    )
  }

  //Asztalfoglalás

  onReservationDelete(reservation:any){
    let id=reservation.id;
    this.base.onReservationDelete("reservations",id).subscribe(
      ()=>this.getReservData()
    )
  }

}
