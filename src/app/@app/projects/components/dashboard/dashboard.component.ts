import { Router } from '@angular/router';
import { ElementRef, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/@core/utils/service/auth.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ProjeData;
  @Output() valueChanged = new EventEmitter<string>();
  searchValue: string = '';
  @Input() placeholderText: string;
  private searchDelay;
  private delayTime = 1000;

  constructor(private auth: AuthService, private router: Router) {}

  onSearchHandler() {
    this.cancelEmit();
    this.emitIt();
  }

  emitIt() {
    this.searchDelay = setTimeout(() => {
      this.valueChanged.emit(this.searchValue);
    }, this.delayTime);
    // console.log(this.searchValue);
  }
  ngOnInit() {
    this.getProjeData();
  }

  cancelEmit() {
    clearTimeout(this.searchDelay);
  }
  @ViewChild('dropdownRef', { static: false }) dropdownRef: ElementRef;

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
    this.auth.getData('projects?organization_id=43').subscribe((res) => {
      this.ProjeData = res;
      // console.log(this.ProjeData);
    });
  }
  addProject() {
    this.router.navigate(['projects/add']);
    // console.log(999);
  }
}
