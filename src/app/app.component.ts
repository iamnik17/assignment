import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fatakpayecom';
  data = {
    name: "nikhl",
    age: 32
  }
  // updateData(item: any) {
  //   console.log(item)
  // }
  updateData() {
    // this.data = Math.random()
  }
}
