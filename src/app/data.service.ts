import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  productsJson: any = [
    {
      id: 1,
      name: 'Product 1',
      price: 50,
      status: true,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 60,
      status: true,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 70,
      status: true,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 80,
      status: true,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 90,
      status: true,
    },
  ];

  WishlistProducts: any = [];

  addToWishlist(product: any) {
    this.productsJson.map((x: any) => {
      if (x.id == product.id) {
        if (x.status == true) {
          this.WishlistProducts.push(product);
          alert('added');
        } else {
          this.removeToWishlist(product.id);
        }
        x.status = !x.status;
      }
    });
  }

  removeToWishlist(id: any) {
    this.WishlistProducts = this.WishlistProducts.filter(
      (x: any) => x.id != id
    );
    alert('removed');
  }
}
