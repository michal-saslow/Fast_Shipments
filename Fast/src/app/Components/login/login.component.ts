import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  disable=true
  constructor(private customerService:CustomerService,private router:Router,private employeeServise:EmployeeService){

  }
  clientIn(){
    this.disable=false;
    this.router.navigate(['/LoginCustomerComponent'])
  }
  deliveryIn(){
    this.disable=false;
    this.router.navigate(['/LoginEmployeeComponent'])
  }

}
