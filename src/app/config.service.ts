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
    {key:"vegetarian", text:'Vegetáriánusoknak', type:"text"}, 
  ]

  constructor() { }
/* public weeklyMenuCol: ColDef[] = [
  {field: 'day', headerName: 'Nap'},
  {field: 'appetizer', headerName: 'Előétel'},
  {field: 'main_course', headerName: 'Főétel'},
  {field: 'dadessert', headerName: 'Desszert'},
  {field: 'vegetarian', headerName: 'Vegetáriánusoknak'},

] */

  getWeeklyMenuCol(){
    return this.weeklyMenuCol
  }
}
