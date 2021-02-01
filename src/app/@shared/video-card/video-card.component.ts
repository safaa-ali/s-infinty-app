import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent implements OnInit {
  videoItems = [
    { title: 'Rename' },
    { title: 'Share' },
    { title: 'Download' },
    { title: 'Delete' },
  ];
  @Input()videoData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
