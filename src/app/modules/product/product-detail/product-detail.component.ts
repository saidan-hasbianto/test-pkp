import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  myProduct!: Product;
  myImage: string[] = [];
  detailForm: any;

  constructor(
    private route: ActivatedRoute,
    private prodSvc: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.detailForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      discountPercentage: [''],
      rating: [''],
      stock: [''],
      brand: [''],
      category: [''],
    })
  }


  ngOnInit(): void {
    let idProduct: string;
    idProduct = this.route.snapshot.paramMap.get('id')!;
    this.prodSvc.getDetail(idProduct).subscribe(hasil => {


      this.detailForm.patchValue({
        title: hasil.title,
        description: hasil.description,
        price: hasil.price,
        discountPercentage: hasil.discountPercentage,
        rating: hasil.rating,
        stock: hasil.stock,
        brand: hasil.brand,
        category: hasil.category,
      });
      for (let i = 0; i < hasil.images.length; i++) {
        this.myImage.push(hasil.images[i]);
      }
      console.log(this.myImage);

    });

  }

  home() {
    this.router.navigate(['/product-list/']);
  }
}
