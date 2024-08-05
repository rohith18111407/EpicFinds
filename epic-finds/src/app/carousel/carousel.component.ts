import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgClass,CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class CarouselComponent implements OnInit{

  @Input() images:carouselImage[]=[]
  @Input() indicators=true; 
  @Input() controls=true;
  @Input() autoSlide=false;
  @Input() slideInterval=3000; //3 seconds

  selectedIndex=0;

  ngOnInit(): void {
      if(this.autoSlide){
        this.autoSlideImages();
      }
  }

  //changes slide in every 3 seconds
  autoSlideImages(): void{
    console.log('Auto-sliding to next image');
    setInterval(()=>{
      this.onNextClick();
    },1000);
  }

  selectedImage(index:number):void{
    this.selectedIndex=index;
  }

  onPrevClick():void{
    // console.log("Prev button clicked");
    if(this.selectedIndex===0){
      this.selectedIndex=this.images.length-1;
    }
    else{
      this.selectedIndex--;
    }
  }

  onNextClick(){
    // console.log("Next button is clicked");
    if(this.selectedIndex===this.images.length-1){
      this.selectedIndex=0;
    }
    else{
      this.selectedIndex++;
    }
  }
}