import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../api.service';

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrl: './add-employee-dialog.component.css'
})
export class AddEmployeeDialogComponent implements OnInit {

  ngOnInit(): void {

  }
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: APIService) {
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
    });
  }

  onSubmit(): void {
    console.log(this.employeeForm)
    const employeeData = this.employeeForm.value;
    this.employeeService.addEmployee(employeeData).subscribe(
      (response: any) => {
        console.log('Employee added successfully:', response);
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
