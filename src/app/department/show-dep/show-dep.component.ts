import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
  id: any;

  constructor(private service : SharedService ) { }

  DepartmentList:any = []
  ModalTitle:any
  dep:any
  ActivateAddEditDep:boolean = false
  ngOnInit(): void {

    this.refreshDepList();
  }


  refreshDepList(){
    this.service.getDepList().subscribe(data =>{
      this.DepartmentList = data;
    })
  }
  onclick(){
    this.dep = {
      DepartmentId:0,
      DepartmentName:""
    }
      this.ModalTitle = "Add Department"
      this.ActivateAddEditDep = true
  }
  close(){
    this.ActivateAddEditDep = false;
    this.refreshDepList()
  }

  editClick(item: any){
    this.dep = item;
    console.log(this.dep)
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDep = true;
  }

  deletedep(i:any){
    console.log(i)
    this.id = i.DepartmentId;
    console.log(this.id)
    if(confirm('Are you sure want to delete ??')){
      this.service.deleteDepartment(i.DepartmentId).subscribe((res:any) =>{
        alert(res.toString())
        this.refreshDepList()
        console.log(res)
      })
    }
   
  }

}
