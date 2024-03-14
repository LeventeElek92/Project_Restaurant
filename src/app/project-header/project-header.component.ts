import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.css']
})
export class ProjectHeaderComponent {
  coll=false
  user:any=null;
  constructor(private auth:AuthService,
    private router: Router 
    ){
    this.auth.getLoggedUser().subscribe(
      (u)=>
      {
        this.user=u,
        console.log("User:", this.user)
      }
    )
  }

  signOut(){
    this.auth.signOut().then(
      ()=>this.router.navigate(['/home'])
    ).catch(
      (e)=>console.log(e))
  }
}
