import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community'; 


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private weeklyMenuCol =[{
    key:"id", text:'#', type:"plain"}, 
    {key:"day", text:'#Nap', type:"plain"}, 
    {key:"appetizer", text:'#Előétel', type:"plain"}, 
    {key:"main_course", text:'#Főétel', type:"plain"}, 
    {key:"dessert", text:'#Desszert', type:"plain"}, 
    {key:"vegetarian", text:'#Vegetáriánusoknak', type:"plain"}, 
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
