import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  imageItems = [
    // { icon: { icon: "more-horizontal-outline", pack: "eva" } },
    { title: 'Rename' },
    { title: 'Share' },
    { title: 'Download' },
    { title: 'Delete' },
  ];
  @Input()imageData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
