import { Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{
  @Input() flag:boolean = true;
  constructor(private list: DataService) { }

  onlogout()
  {
      this.flag = !this.flag;
      this.list.x = !this.list.x;
  }
  ngDoCheck(){
    console.log(this.flag);
    this.flag = this.list.x;
    console.log(this.flag);
  }
  
 
}
