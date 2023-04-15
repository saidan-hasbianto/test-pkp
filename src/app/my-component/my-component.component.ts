import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  MyVar = "Product List";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.GetProduct();
  }
  GetProduct() {
    this.router.navigate(['/product-list']);
  }

}
