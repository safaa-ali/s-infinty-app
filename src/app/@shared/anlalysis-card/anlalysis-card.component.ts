import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-anlalysis-card',
  templateUrl: './anlalysis-card.component.html',
  styleUrls: ['./anlalysis-card.component.scss'],
})
export class AnlalysisCardComponent implements OnInit {

  constructor () { }

  ngOnInit(): void {
  }
  active: boolean = false;
  @Input() title: string;
  @Input() number: number;
  @Input() img: string;

}
