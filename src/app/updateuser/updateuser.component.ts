import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  depinfo!: FormGroup;

  constructor(private service : SharedService , private fb:FormBuilder) { }



  ngOnInit(): void {
    this.calldep()
  }
  calldep(){
    this.depinfo = this.fb.group({
      DepartmentId: [],
      DepartmentName: [""],
    })
  }
  updatedep(){
    console.log(this.depinfo.value)
    this.service.updateDepartment(this.depinfo.value).subscribe(res => {
      console.log(res)
    })
  }


}
