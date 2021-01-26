import { ProjectsService } from './../../projects.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ElementRef, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ProjeData;
  searchText = '';
  @Output() valueChanged = new EventEmitter<string>();
  searchValue: string = '';
  @Input() placeholderText: string;
  private searchDelay;
  private delayTime = 1000;

  constructor (
    private router: Router,
    private _ProjectsService: ProjectsService,

  ) { }


  ngOnInit() {
    this.getProjeData();
  }

  changed(type, value) {
    if (type === 'search') {
      this.searchValue = value;
      this.getProjeData();
    }
    // console.log('test search');

  }

  getProjeData() {
    this._ProjectsService.getProjects().subscribe(res => {
      this.ProjeData = res;

    });
  }
  addProject() {
    this.router.navigate(['projects/add']);
  }
}


