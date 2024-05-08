import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input() item: any;
  customObservable: any
  // intervalSubscriptions : Subscription
  @Output() updateDataEvent = new EventEmitter<string>();
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    // console.log(localStorage.getItem('cartItems'))
    // console.log(this.item)

    this.customObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          // observer.error('count is greater than 3')
        }
        count++

      }, 1000)
    })

    this.customObservable.subscribe((data: any) => {
      // console.log(data, "ad")
    })
  }

  updateData(value: string) {
    this.updateDataEvent.emit(value);
    // console.log(this.updateDataEvent)
  }

  cart() {
    this.router.navigate(['/cart']);
  }
}
