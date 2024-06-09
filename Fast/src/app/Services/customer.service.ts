import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from '../Models/Customer'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

customer:Customer=new Customer();

  constructor(private http:HttpClient) { 
     this.customer.id=1;
     this.customer.name="michal"
  }

  url = 'https://localhost:7164/api/Customers';

 postCustomer(customer:Customer):Observable<Customer>
 {
     debugger
      return this.http.post<Customer>(this.url, customer)
 }

 getCustomerById(id:number):Observable<Customer>
 {
      return this.http.get<Customer>(this.url+"/"+id)
 }
 getCustomerByTz(tz:string):Observable<Customer>
 {
     debugger
     return this.http.get<Customer>(this.url+"/byTz/"+tz)
 }
 putCustomer(id:number,customer:Customer):Observable<Customer>
 {
     return this.http.put<Customer>(this.url+"/"+id,customer)
 }

}
