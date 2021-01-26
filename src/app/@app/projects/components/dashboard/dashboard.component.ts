import { ProjectsService } from './../../projects.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ElementRef, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {
  ProjeData;
  searchText = '';
  @Output() valueChanged = new EventEmitter<string>();
  searchValue: string = '';
  @Input() placeholderText: string;
  private searchDelay;
  private delayTime = 1000;

  constructor(
    private router: Router,
    private _ProjectsService:ProjectsService,

    ) { }

  onSearchHandler() {
    this.cancelEmit();
    this.emitIt();
  }

  emitIt() {
    this.searchDelay = setTimeout(() => { this.valueChanged.emit(this.searchValue); }, this.delayTime);
    console.log(this.searchValue);

  }
  ngOnInit() {
    this.getProjeData();
  }

  cancelEmit() {
    clearTimeout(this.searchDelay);
  }
  @ViewChild('dropdownRef', {static: false}) dropdownRef: ElementRef;

  @Output() fillterValueChanged = new EventEmitter<any>();
  @Input() placeholder: string;
  @Input() showPlaceholder: boolean;
  @Input() data;
  selectedItem: any;
  isOpened: boolean = false;
  @Input() selected;
  emitValue(value) {
    this.fillterValueChanged.emit(value);

  }

getProjeData() {

this._ProjectsService.getProjects().subscribe(res=>{
   this.ProjeData = res;

})
}
addProject() {
  this.router.navigate(['projects/add']);
}
  }


