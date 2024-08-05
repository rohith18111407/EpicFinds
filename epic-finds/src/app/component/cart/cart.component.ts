import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  public products:any=[];
  public grandTotal!:number;

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.products=res;
        this.grandTotal=this.cartService.getTotalPrice();
      })
      
  }

  removeItem(item:any){
    console.log("Removed Cart Item");
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

}

