import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pass-reset',
  templateUrl: './pass-reset.component.html',
  styleUrls: ['./pass-reset.component.css']
})
export class PassResetComponent {

  constructor(private r:Router){}
  rp:any={email:"",p1:"",p2:""};

  onreset()
  {
    const ld = localStorage.getItem("angular16local")
    if(ld!=null)
      {
         const a1 = JSON.parse(ld);
         var f = 0;
         for(let i=0;i<a1.length;i++)
         {
           if(a1[i].email==this.rp.email)
           {
             f=1;
             if(this.rp.p2==this.rp.p1){
             a1[i].password=this.rp.password;
             alert('password updated successfully');
             this.r.navigateByUrl('/login');
             break;
             }
             else{
               alert("Passwords did not match");
             }
           }
         }
         if(!f)
          {
         alert("No such user found with email " + this.rp.email);
          }
      }
      else
      {
           alert("No User found");
      }
  }

}
