import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'ngx-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  images: GalleryItem[];
  constructor() { }

  ngOnInit(): void {
    this.images = [
      new ImageItem({ src: 'assets/images/kitten-dark.png' }),
      new ImageItem({ src: 'assets/images/kitten-corporate.png'}),
      new ImageItem({ src: 'assets/images/kitten-corporate.png'}),
      // ... more items
    ];
  }
  currentImg(e) {
// window.alert(2);
  }

}
