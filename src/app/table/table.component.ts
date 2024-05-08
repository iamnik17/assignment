import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeDialogComponent } from '../add-employee-dialog/add-employee-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  employees: any = [];
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  pagedEmployees: any[] = [];
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private api: APIService, public dialog: MatDialog) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      education: ['', Validators.required],
      company: ['', Validators.required],
      experience: ['', Validators.required],
      package: ['', Validators.required],
      id: ['', Validators.required]
    });
  }

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'dob', 'gender', 'education', 'company', 'experience', 'package', 'actions', 'delete'];

  ngOnInit(): void {
    this.currentPage = 1;
    this.getEmployee()
  }

  onSubmit(): void {
    console.log(this.employeeForm.value)

    if (this.employeeForm.value.id !== null) {
      console.log(this.employeeForm.value.id)
      this.api.editEmployee(this.employeeForm.value.id, this.employeeForm.value).subscribe((res: any) => {
        console.log(res)
        this.getEmployee()
      })
    }
    else {
      const employeeData = this.employeeForm.value;

      this.employeeForm.value.id = (this.filteredEmployees.length + 1).toString()
      console.log(typeof this.employeeForm.value.id)

      this.api.addEmployee(employeeData).subscribe(
        (response: any) => {
          console.log('Employee added successfully:', response);
          this.getEmployee()
          // Reset the form
          this.employeeForm.reset();
          // You may also update the employee list here if needed
        },
        (error: any) => {
          console.error('Error adding employee:', error);
        }
      );
    }

  }
  getEmployee(): void {
    this.api.getEmployee(this.currentPage, this.pageSize).subscribe((res: any) => {
      console.log(res);
      this.totalItems = 300; // Assuming res contains totalItems property
      this.pagedEmployees = res; // Assuming res contains data property with paginated employees
      this.employees = res; // Assuming res contains data property with paginated employees
      this.filteredEmployees = this.employees;
    });
  }

  handlePageEvent(event: any): void {
    console.log(event)
    this.currentPage = event.pageIndex + 1;
    this.getEmployee();
  }
  filteredEmployees: any
  applyFilter(filterValue: any): void {
    console.log(filterValue.target.value)
    filterValue = filterValue.target.value.toLowerCase();
    // Filter your table data based on the filterValue
    // For example, you can filter an array of employees
    this.filteredEmployees = this.employees.filter((employee: any) =>
      employee.firstName.toLowerCase().includes(filterValue) ||
      employee.lastName.toLowerCase().includes(filterValue) ||
      employee.email.toLowerCase().includes(filterValue)
    );
    // this.filteredEmployees = this.pagedEmployees
    console.log(this.filteredEmployees)
  }

  // openAddEmployeeDialog(): void {
  //   const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
  //     width: '400px' // Set width as per your requirement
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // You can add logic here to handle the result if needed
  //   });
  // }
  // addNewEmployee() {

  // }

  editEmployee(ev: any) {
    console.log(ev)
    if (ev) {
      this.employeeForm.patchValue({
        id: ev.id,
        firstName: ev.firstName,
        lastName: ev.lastName,
        email: ev.email,
        dob: ev.dob,
        gender: ev.gender,
        education: ev.education,
        company: ev.company,
        experience: ev.experience,
        package: ev.package
      }
      )
      this.getEmployee()
    }
    else {
      this.employeeForm.reset()
    }

  }
  deleteEmployee(id: any) {
    console.log(typeof id)

    this.api.deleteEmployee(id).subscribe((res: any) => {
      console.log(res)
      this.getEmployee()
    })
  }

}
