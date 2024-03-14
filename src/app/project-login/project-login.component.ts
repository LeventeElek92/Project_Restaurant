import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-login',
  templateUrl: './project-login.component.html',
  styleUrls: ['./project-login.component.css']
})
export class ProjectLoginComponent {
  email: string=""
  password:string=""
  constructor(private auth:AuthService,
    private base:BaseService,
    private router: Router
    ){}

//Regisztráció

  signUp(){
    this.auth.signUp(this.email, this.password).then(
      ()=>this.router.navigate(['/home'])
    ).catch(
      (e)=>console.log(e)
    )
  }

  validUser(){
    return false
  }

//Belépés

  signIn(){
    this.auth.signIn(this.email, this.password).then(
      ()=>this.router.navigate(['/adminpanel'])
    ).catch(
      (e)=>console.log(e)
    )
  }
}
