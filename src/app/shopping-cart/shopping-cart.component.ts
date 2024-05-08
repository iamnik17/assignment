import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  reactiveFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.reactiveFormGroup = this.formBuilder.group({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      emalId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),


      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),

    });
  }

  ngOnInit(): void {

  }
  onsubmit() {
    console.log(this.reactiveFormGroup.get('FirstName'))
  }


}
