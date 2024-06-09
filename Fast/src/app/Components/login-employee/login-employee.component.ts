import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent {
  name:string="";
  id:number=0;
  employee:Employee=new Employee();
  visibleOpen: boolean = false
  constructor(private employeeService:EmployeeService,private router:Router){

  }
  login(){
    debugger
    this.employeeService.getEmployee(this.id).subscribe(a=>{(this.employee)=a;
      debugger
      if (this.employee!=null)
      {
        debugger
        this.employeeService.employee=this.employee
        this.router.navigate(['/EmployeeComponent'])
      }
      else{
        this.visibleOpen=true;
      }
    })
  }
}
