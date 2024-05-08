import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  ngOnInit(): void {

  }
  checkoutForm: FormGroup;
  // paymentForm: FormGroup ;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }

  get formControls() {
    return this.checkoutForm.controls;
  }

  onSubmit(): void {

    console.log(this.checkoutForm.value)
    console.log(this.checkoutForm)
    if (this.checkoutForm.valid) {
      // Perform checkout logic, such as submitting the order to a backend server or processing payment
      console.log('Checkout successful!');
      // Display order confirmation message
      alert('Thank you for your order!');
      // Reset form after successful checkout
      this.checkoutForm.reset();
    } else {
      // Mark form fields as touched to display validation errors
      this.checkoutForm.markAllAsTouched();
    }
  }


}
