import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  myProducts!: Product[];
  search!: string;
  constructor(
    private prodSvc: ProductService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.prodSvc.getAll().subscribe(hasil => {
      this.myProducts = hasil['products'];
    })
  }

  seeDetail(id: any) {
    this.router.navigate(['/product-detail/' + id]);
  }

  searchBy() {
    this.prodSvc.searchProd(this.search).subscribe(hasil => {
      this.myProducts = hasil['products'];
    })
  }

  keyDownFunction(event:any) {
    if (event.keyCode === 13) {
      this.searchBy();
    }
  }
}
