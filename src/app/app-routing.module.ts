import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  {path:'employee' , component: EmployeeComponent},
  {path:'department' , component: DepartmentComponent},
  {path:'adduser' , component:AdduserComponent},
  {path:'update' , component:UpdateuserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
