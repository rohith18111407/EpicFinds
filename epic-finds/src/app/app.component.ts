import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { ProductsComponent } from "./component/products/products.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from '@coreui/angular';
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ProductsComponent, HttpClientModule, FormsModule, ReactiveFormsModule, CarouselModule, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'epic-finds';
  showCarousel = true;
  images = [
    {
      imageSrc: '/assets/images/Zebronics.png',
      imageAlt: 'Zebronics',
    },
    {
      imageSrc: '/assets/images/Earphones.png',
      imageAlt: 'Earphones',
    },
    {
      imageSrc: '/assets/images/Indigo.png',
      imageAlt: 'Indigo',
    },
    {
      imageSrc: '/assets/images/WashingMachine.png',
      imageAlt: 'Washing Machine',
    },
    {
      imageSrc: '/assets/images/MalaysiaAir.png',
      imageAlt: 'Malaysia Air',
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showCarousel = this.router.url !== '/cart';
    });
  }
}
