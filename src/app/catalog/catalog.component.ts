import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  filter: string = '';
  products: any;


  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
    // this.filter = this.route.snapshot.params['filter'];
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
    this.router.navigate(['/cart']);
  }


  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product: any) => product.category === this.filter);
  }


}
