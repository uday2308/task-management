import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {

  group_members:any = [];
  grouprequets:any = this.list.logindata.grouprequests;
  grouprequestsdata:any = this.list.logindata.grouprequestsdata;
  email:string = "";
  constructor(private list:DataService,private r:Router){};
  flag = 0;

  onaccept(item:any)
  {
    const ind = this.grouprequestsdata.indexOf(item);
    const rec_email=this.grouprequestsdata[ind];
    const id = localStorage.getItem("angular16local");
    this.grouprequestsdata.splice(ind);
    console.log(rec_email);
    console.log(this.grouprequestsdata);
    if(id!=null)
      {
    const a1 = JSON.parse(id);
    for(let i=0;i<a1.length;i++)
      {
        if(a1[i].email==rec_email)
        {
          a1[i].grouppeople.push([this.list.logindata.email,this.list.logindata.firstname]);
          localStorage.setItem("angular16local", JSON.stringify(a1));
        }
      }
      for(let i=0;i<a1.length;i++)
        {

        if(a1[i].email==this.list.logindata.email)
          {
            a1[i].grouprequestsdata.splice(ind);
            localStorage.setItem("angular16local", JSON.stringify(a1));
            this.list.logindata.grouprequestsdata = a1[i].grouprequestsdata;
            this.grouprequestsdata= this.list.logindata.grouprequestsdata;
            break;
          }

      }
    }

  }

  ondecline(item:any)
  {
    const ind = this.grouprequestsdata.indexOf(item);
    console.log(ind);
    this.grouprequestsdata.splice(ind);
    const id = localStorage.getItem("angular16local");
    if(id!=null){
    const a1 = JSON.parse(id);
    for(let i=0;i<a1.length;i++)
      {
        if(a1[i].email==this.list.logindata.email)
        {
          a1[i].grouprequestsdata.splice(ind);
          localStorage.setItem("angular16local", JSON.stringify(a1));
          this.list.logindata.grouprequestsdata = a1[i].grouprequestsdata;
          this.grouprequestsdata= this.list.logindata.grouprequestsdata;
          break;
        }

      }
    }
  }

  onrequestrec()
 {
  if(this.flag!=3)
  {
    this.flag=3;
  }
  else
  {
    this.flag=0;
  } 
 }


 onrequestjoin()
 {
  if(this.flag!=2)
    {
      this.flag=2;
      
    }
  else if(this.flag==2)
    {
      this.flag=0;
    }

 }

 ongm()
 {
  if (this.flag!=1)
    {
    this.group_members=[];
  const id = localStorage.getItem("angular16local");
  if (id!=null)
    {
  const a1 = JSON.parse(id);
  for(let i=0;i<a1.length;i++)
   {
     if(a1[i].email==this.list.logindata.email && a1[i].firstname==this.list.logindata.firstname)
     {
      const l = a1[i].grouppeople;
      for(let j=0;j<l.length;j++)
         this.group_members.push(l[j]);
     }
   }
  }
  this.flag=1;
  console.log(this.list.logindata.email);
 }
 else if(this.flag==1)
  {
    this.flag=0;
    this.group_members=[];
  }
}

invite()
{
  if(this.email!="")
  {
    const id = localStorage.getItem("angular16local");
    var f1=0;
    if (id!=null)
      {
    const a1 = JSON.parse(id);
    for(let i=0;i<a1.length;i++)
     {
       if(a1[i].email==this.email)
       {
        a1[i].grouprequests.push(this.list.logindata.email);
        a1[i].grouprequestsdata.push(this.list.logindata.email);
        console.log(a1[i].grouprequestsdata);
        localStorage.setItem("angular16local",JSON.stringify(a1));
        f1=1;
        break;
       }
    }
    if(f1==1)
    {
      alert("Invitation sent successfully");
    }
    else{
      alert("User not found with the  given email-id");
    }
    }
 }
  else
  {
    alert("Please enter an email address");
  }
}
 
}