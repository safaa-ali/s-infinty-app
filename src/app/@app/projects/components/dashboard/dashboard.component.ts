import { GlobalService } from './../../../../@core/utils/global.service';
import { ProjectsService } from './../../projects.service';
import { Router } from '@angular/router';
import { ElementRef, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

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
    private _globalService: GlobalService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    this.getProjeData();

  }

  changed(type, value) {
    if (type === 'search') {
      this.searchValue = value;
      this.resultSearch();
    }

  }

  getProjeData() {
    this._ProjectsService.getProjects().subscribe(res => {
      this.ProjeData = res;

    });
  }
  addProject() {
    this.router.navigate(['projects/add']);
  }


  resultSearch() {
    this._globalService.Search(this.searchValue, 'projects?organization_id=43').subscribe((res) => {

      this.ProjeData = res;
    });
  }
  adjustDate(dateString) {
    const dateParsed = dateString.split('T')[0];
    return this.datePipe.transform(dateParsed, 'MM-dd-yyyy');
  }
}


