import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss'],
})
export class DocumentCardComponent implements OnInit {
  items = [
    { title: 'Rename' },
    { title: 'Share' },
    { title: 'Download' },
  ];
  @Input() documentData: any;
  @Input() documentDate: any;
  constructor() {}
  ngOnInit(): void {}
}
