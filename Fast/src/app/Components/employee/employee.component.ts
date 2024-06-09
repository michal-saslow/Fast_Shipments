import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { Order } from 'src/app/Models/Order';
import { EmployeeService } from 'src/app/Services/employee.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  visible: boolean = false;
  orders:Order[]=[];
  emplyee:Employee=new Employee()
  salary:number=0
  constructor(private orderService:OrderService,private router:Router,private employeeService:EmployeeService){
    debugger
    this.emplyee=employeeService.employee
    this.employeeService.getSalary(employeeService.employee.id).subscribe(
      (response) => {
        debugger
          console.log('הנתונים המתקבלים:', response);
          this.salary=response;
          console.log('ההזמנות שמורות במשתנה orders:', this.orders);
      },
      (error) => {
          console.error('שגיאה בקריאה לשירות ההזמנות:', error);
      }
  );
    this.orderService.GetByEmployeeId(employeeService.employee.id).subscribe(
      (response) => {
        debugger
          console.log('הנתונים המתקבלים:', response);
          this.orders=response;
          console.log('ההזמנות שמורות במשתנה orders:', this.orders);
      },
      (error) => {
          console.error('שגיאה בקריאה לשירות ההזמנות:', error);
      }
  );
  }
  changeName(){
    this.visible=true
  }
  changeOrder(order:Order){
    debugger
    this.orderService.PutOrder(order.id,order).subscribe(
      (response) => {
        
        debugger
          console.log('הנתונים המתקבלים:', response);
          console.log('ההזמנות שמורות במשתנה orders:', this.orders);
      },
      (error) => {
          console.error('שגיאה בקריאה לשירות ההזמנות:', error);
      }
  );
  }
  updateEmployee(){
    debugger
    this.visible=false
    this.employeeService.putEmployee(this.emplyee.id,this.emplyee).subscribe(
      (response) => {
        
        debugger
          console.log('הנתונים המתקבלים:', response);
      },
      (error) => {
          console.error('שגיאה בקריאה לשירות ההזמנות:', error);
      }
  );
  }
  getSalary(){
   
  }
}
