import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input()imageData: any;
  imageitems = [
    // { icon: { icon: "more-horizontal-outline", pack: "eva" } },
    { title: 'Rename' },
    { title: 'Share' },
    { title: 'Download' },
    { title: 'Delete' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
