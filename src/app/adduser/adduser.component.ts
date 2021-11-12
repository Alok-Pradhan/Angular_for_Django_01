import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
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
  adddep(){
    console.log(this.depinfo.value)
    this.service.addDepartment(this.depinfo.value).subscribe(res => {
      console.log(res)
    })
  }

}
