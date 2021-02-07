import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  description = 'Project Description';
  constructor (private router: Router) { }
  // active = false;
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
  routeMap() {
    this.router.navigate([`/projects/${this.projectitem.id}`]);
  }

}
