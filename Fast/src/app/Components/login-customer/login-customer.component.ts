import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent {
  name:string="";
  tz:string="";
  customer:Customer=new Customer();
  constructor(private customerService:CustomerService,private router:Router){

  }
login(){
  debugger
  this.customerService.getCustomerByTz(this.tz).subscribe(a=>{(this.customer)=a;
    if (this.customer!=null)
    {
      this.customerService.customer.id=a.id
      this.customerService.customer.name=a.name
      this.router.navigate(['/CustomerComponent'])
    }
    else{
      this.router.navigate(['/SignUpCustomer'])
    }
  })
}
signUp(){
  this.router.navigate(['/SignUpCustomer'])
}


}
