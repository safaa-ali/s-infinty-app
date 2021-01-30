import { Component, OnInit } from "@angular/core";
// import { GalleryItem, ImageItem } from 'ng-gallery';
import { NgxGalleryOptions } from "@kolkov/ngx-gallery";
import { NgxGalleryImage } from "@kolkov/ngx-gallery";
import { NgxGalleryAnimation } from "@kolkov/ngx-gallery";
@Component({
  selector: "ngx-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.scss"],
})
export class ImagesComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  images:any;
  chosenFilter:number=9;
  // images: GalleryItem[];
  constructor() {
    this.images=["assets/images/kitten-corporate.png","assets/images/kitten-corporate.png","assets/images/kitten-corporate.png","assets/images/kitten-corporate.png","assets/images/kitten-corporate.png","assets/images/kitten-corporate.png"];
  }
  ngOnInit(){
    this.galleryOptions = [
      {
        width: "100%",
        height: "400px",
        thumbnailsColumns: 9,
        // imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "600px",
        imagePercent: 80,
        thumbnailsSwipe:false,
        thumbnailsPercent: 0,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.galleryImages = [
   
      {
        small: "assets/images/kitten-dark.png",
        medium: "assets/images/kitten-dark.png",
      },
      {
        small: "assets/images/kitten-corporate.png",
        medium: "assets/images/kitten-corporate.png",
      },
      {
        small: "assets/images/kitten-dark.png",
        medium: "assets/images/kitten-dark.png",
      },
      {
        small: "assets/images/kitten-corporate.png",
        medium: "assets/images/kitten-corporate.png",
      },
      {
        small: "assets/images/kitten-dark.png",
        medium: "assets/images/kitten-dark.png",
      },
      {
        small: "assets/images/kitten-corporate.png",
        medium: "assets/images/kitten-corporate.png",
      },
      {
        small: "assets/images/kitten-corporate.png",
        medium: "assets/images/kitten-corporate.png",
      },
      {
        small: "assets/images/kitten-corporate.png",
        medium: "assets/images/kitten-corporate.png",
      },
      {
        small: "assets/images/kitten-corporate.png",
        medium: "assets/images/kitten-corporate.png",
      },
    ];
  }
  oneChoosed(){
    this.chosenFilter=1;
  }
  fourChoosed(){
    this.chosenFilter=4;
  }
}


// ngOnInit(): void {
//   // this.images = [
//   //   new ImageItem({ src: 'assets/images/kitten-dark.png' }),
//   //   new ImageItem({ src: 'assets/images/kitten-corporate.png'}),
//   //   new ImageItem({ src: 'assets/images/kitten-corporate.png'}),
//   //   // ... more items
//   // ];
// }
