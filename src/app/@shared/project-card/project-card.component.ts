import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'ngx-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  description = 'Project Description';
  constructor () { }
active = false;
  @Input() projectitem;
  @Input() createdAt ;

  ngOnInit(): void {
  }
  menuitems = [
    { title: 'Enroll Project Admin' },
    { title: 'Add Sensor' },
    { title: 'Edit' },
    { title: 'Delete' },
  ];

}
