import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  logindata:any={
    firstname:"",
    password:"",
    email:"",
    grouprequests:[],
    grouppeople:[],
    grouprequestsdata:[]
  }
  constructor() { }
 x:boolean = true;


}
