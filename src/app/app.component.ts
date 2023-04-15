import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-pkp';
  constructor(
    private router: Router
  ) { }
  GetProduct() {
    this.router.navigate(['/product-list']);
  }
}
