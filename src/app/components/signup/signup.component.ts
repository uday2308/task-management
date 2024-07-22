import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private r:Router){}
  @Input() v:boolean = true;
  registerdata:any={
    firstname:"",
    repassword:"",
    password:"",
    email:"",
    grouprequests:[],
    notify:[],
    grouppeople:[],
    grouprequestsdata:[]
  };
  
  onsignup()
  {

  const ld = localStorage.getItem("angular16local")
  if(ld!=null)
    {
       const a1 = JSON.parse(ld);
       if(this.registerdata.password==this.registerdata.repassword)
        {
        this.registerdata.grouppeople.push([this.registerdata.email, this.registerdata.firstname]);
        a1.push(this.registerdata);
        console.log(a1);
        localStorage.setItem("angular16local",JSON.stringify(a1));
        this.r.navigateByUrl('/login');
        alert("registration successfull");
         }
         else
         {
           alert("Passwords do not match");
         }
       
    }
    else
    {
         const a1=[];
         if(this.registerdata.password==this.registerdata.repassword)
          {
         this.registerdata.grouppeople.push([this.registerdata.email, this.registerdata.firstname]);
         a1.push(this.registerdata);
         localStorage.setItem("angular16local",JSON.stringify(a1));
         this.r.navigateByUrl('/login');
         alert("registration successfull");
          }
         else
         {
           alert("Passwords do not match");
         }
         
    }
    

  }
}
