import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community'; 


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
/* private weeklyMenuCol =["id", "day", "appetizer", "main_course", "dessert", "vegetarian"]
 */  constructor() { }
public weeklyMenuCol: ColDef[] = [
  {field: 'day', headerName: 'Nap'},
  {field: 'appetizer', headerName: 'Előétel'},
  {field: 'main_course', headerName: 'Főétel'},
  {field: 'dadessert', headerName: 'Desszert'},
  {field: 'vegetarian', headerName: 'Vegetáriánusoknak'},

]

  getWeeklyMenuCol(){
    return this.weeklyMenuCol
  }
}
