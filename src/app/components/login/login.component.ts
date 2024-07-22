import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private list:DataService,private r:Router){};
  registerdata:any={
    firstname:"",
    repassword:"",
    password:"",
    email:""
  };
  onlogin()
  {
    const ld = localStorage.getItem("angular16local")
    if(ld!=null)
      {
         const a1 = JSON.parse(ld);
         var f = 0;
         for(let i=0;i<a1.length;i++)
         {
           if(a1[i].email==this.registerdata.email && a1[i].password==this.registerdata.password && a1[i].firstname==this.registerdata.firstname)
           {
            this.list.logindata.firstname = this.registerdata.firstname;
            this.list.logindata.email = this.registerdata.email;
            this.list.logindata.grouprequests = a1[i].grouprequests;
            this.list.logindata.grouprequestsdata = a1[i].grouprequestsdata;
             this.r.navigateByUrl('/home');
             f=1;
             this.list.x = !this.list.x;
             break;
           }
         }
         if(!f)
          {
         alert("E-mail or password or name mismath");
          }
      }
      else
      {
           alert("No User found");
      }
      
  }
  ngOnChanges(changes: SimpleChanges) 
  {
    console.log(changes);
   
  }

}
