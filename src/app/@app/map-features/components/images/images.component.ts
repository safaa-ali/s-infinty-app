import { Component, OnInit } from '@angular/core';
// import { GalleryItem, ImageItem } from 'ng-gallery';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
@Component({
  selector: 'ngx-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  images: any;
  chosenFilter: number = 4;
  imageItems = [
    { title: 'Rename' },
    { title: 'Share' },
    { title: 'Download' },
    { title: 'Delete' },
  ];
  constructor() {
    this.images = [
      {
        name: 'image 1',
        createdAt: '12-2-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'image 2',
        createdAt: '12-1-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'image 99',
        createdAt: '12-3-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'image 40',
        createdAt: '12-10-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'image 32',
        createdAt: '12-1-2020',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'image18',
        createdAt: '11-1-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
    ];
    // this.imagesLength=this.images.length;
  }
  ngOnInit() {}
  sortTableByDate() {
    this.images.sort((val1, val2) => {
      return <any>new Date(val2.createdAt) - <any>new Date(val1.createdAt);
    });
  }
  oneChoosed() {
    this.chosenFilter = 1;
  }
  fourChoosed() {
    this.chosenFilter = 4;
  }
  nineChoosed() {
    this.chosenFilter = 9;
  }
}
