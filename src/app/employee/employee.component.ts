import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  DepartmentId: any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }

  blurEvent(event: any){
    this.DepartmentId = event.target.value;

  }
  getdata(){
    console.log(this.DepartmentId)
    this.service.getuserdata(this.DepartmentId).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
