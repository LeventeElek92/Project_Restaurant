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

  private reservRow=[
    {key:"id", text:"Foglalás száma", type:"number"},
    {key:"guestName", text:"Foglaló neve", type:"text"},
    {key:"guestNumber", text:"Vendégek száma", type:"number"},
    {key:"date", text:"Időpont", type:"date"},
    {key:"email", text:"E-mail cím", type:"text"},
    {key:"phoneNumber", text:"Telefonszám", type:"number"},
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

  getReservRow(){
    return this.reservRow
  }

}
