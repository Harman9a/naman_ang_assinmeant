import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private ds: DataService) {}

  products: any;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.ds.productsJson;
  }

  SaveProduct(product: any) {
    this.ds.addToWishlist(product);
    this.getProducts();
  }
}
