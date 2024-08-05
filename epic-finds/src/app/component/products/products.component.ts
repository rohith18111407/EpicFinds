import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { FilterPipe } from "../../shared/filter.pipe";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FilterPipe,],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList: any;
  searchKey: string = "";
  public filterCategory: any; 
  
  // inject api service
  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if (a.category === "women's clothing" || a.category === "men's clothing") {
          a.category = "fashion";
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList);
    });

    this.cartService.search.subscribe(val => {
      this.searchKey = val;
    });

  }

  addtoCart(item: any) {
    this.cartService.addtoCart(item);
  }

  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => a.category === category || category === '');
  }
}
