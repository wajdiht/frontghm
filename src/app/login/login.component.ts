import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(service: NbAuthService , cd: ChangeDetectorRef,private auth:AuthService,public router:Router) {
   }

   login(): void {
    this.auth.login(this.username,this.password).subscribe
      (
        {
          next: (data : any) => {
           console.log(data)
           this.router.navigate(['/pages/dashboard']); 
          },
         error: (err : any) => { console.log(err) },
         complete: () => { }
       }
     ) 
  }
}
  

  // showRegisterPage() {
  //   // Perform any additional logic if needed
  //   this.auth.showRegisterPage();
  // }
//   connexion(){
/*      this.auth.login(this.username,this.password).subscribe(
       {
         next: (data : any) => {
          console.log(data)
         this.response=data; 
 let token=this.response.token; 
 localStorage.setItem("token",token) 
 this.router.navigate(['/pages/dashboard']); 
         },
        error: (err : any) => { },
        complete: () => { }
      }
    ) 
   }
} */
