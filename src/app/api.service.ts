import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  API_URL = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  // getProducts() {
  //   return this.httpClient.get(`${this.API_URL}/products`);
  // }
  createContact(product: any) {
    return this.httpClient.post(`${this.API_URL}/products/`, product);
  }
  getProducts() {
    return this.httpClient.get(`${this.API_URL}/products`);
  }
  getProductById(id: number) {
    const url = `${this.API_URL}/products/${id}`;
    return this.httpClient.get(url);
  }
  getEmployee(currentPage: number, pageSize: number): Observable<any> {
    return this.httpClient.get('http://localhost:3000/employee',);
  }
  addEmployee(employeeData: any) {
    return this.httpClient.post(`${this.API_URL}/employee/`, employeeData);
  }
  deleteEmployee(employeeId: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/employee/${employeeId}`);
  }
  editEmployee(employeeId: number, updatedEmployeeData: any): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/employee/${employeeId}`, updatedEmployeeData);
  }
}
