import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private weeklyMenuCol =[
    {key:"id", text:'#', type:"plain"}, 
    {key:"day", text:'Nap', type:"text"}, 
    {key:"appetizer", text:'Előétel', type:"text"}, 
    {key:"main_course", text:'Főétel', type:"text"}, 
    {key:"dessert", text:'Desszert', type:"text"}, 
    {key:"vegetarian", text:'Vegetáriánus', type:"text"}, 
  ]

  private foodCol=[
    {key:"id", text:"Sorszám", type:"number"},
    {key:"foodname", text:"Étel neve", type:"text"},
    {key:"price", text:"Ár(Ft)", type:"number"},  
  ]

  private drinkCol=[
    {key:"id", text:"Sorszám", type:"number"},
    {key:"drinkname", text:"Ital neve", type:"text"},
    {key:"price", text:"Ár(Ft)", type:"number"},  
  ]


  constructor() { }

  getWeeklyMenuCol(){
    return this.weeklyMenuCol
  }

  getFoodCol(){
    return this.foodCol
  }

  getDrinkCol(){
    return this.drinkCol
  }

}
