import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  
  public totalItem:number=0;
  public searchTerm:string='';

  constructor(private cartService:CartService){}
  
  ngOnInit(): void {
      this.cartService.getProducts()
        .subscribe(res=>{
          this.totalItem=res.length;
        })
  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    //emit the this.searchTerm
    this.cartService.search.next(this.searchTerm);
  }
}
