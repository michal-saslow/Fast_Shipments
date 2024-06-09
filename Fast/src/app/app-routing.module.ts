import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpCustomerComponent } from './Components/sign-up-customer/sign-up-customer.component';
import {EmployeeComponent} from './Components/employee/employee.component'
import {CustomerComponent} from './Components/customer/customer.component'
import {LoginComponent} from './Components/login/login.component'
import {LoginCustomerComponent} from './Components/login-customer/login-customer.component'
import {LoginEmployeeComponent} from './Components/login-employee/login-employee.component'

const routes: Routes = [{path:'SignUpCustomer',component:SignUpCustomerComponent},
                        {path:'EmployeeComponent',component:EmployeeComponent},
                        {path:'CustomerComponent',component:CustomerComponent},
                        {path:'LoginComponent',component:LoginComponent},
                        {path:'LoginCustomerComponent',component:LoginCustomerComponent},
                        {path:'LoginEmployeeComponent',component:LoginEmployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
