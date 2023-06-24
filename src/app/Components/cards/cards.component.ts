import { Component, OnInit } from '@angular/core';
import { DashbordService } from 'src/app/Services/DashboardService/dashbord.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  Data:any={};
constructor(private myservice:DashbordService){}

visitors: any;
courses: any
creators:any;
  ngOnInit(): void {
    this.myservice.getdata().subscribe({
      next:(res)=>{
      
      console.log(res);
      this.Data=res;
      console.log(this.Data.vistor,this.Data.creator,this.Data.course);
      this.visitors=this.Data.vistor;
      this.creators=this.Data.creator;
      this.courses=this.Data.course;
      }
    })
  }

  logout(){
    localStorage.clear()
    location.assign("/signin")
  }

  
}
