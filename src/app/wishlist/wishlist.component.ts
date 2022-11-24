import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  constructor(private ds: DataService) {}

  products: any;

  ngOnInit(): void {
    this.getWishlist();
  }

  getWishlist() {
    this.products = this.ds.WishlistProducts;
  }

  remove(id: any) {
    this.ds.removeToWishlist(id);
    this.getWishlist();
  }
}
