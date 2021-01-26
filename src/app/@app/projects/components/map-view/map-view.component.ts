import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AuthService } from 'app/@core/utils/service/auth.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'ngx-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  ProjectsData: any;
  constructor(
    private sidebarService: NbSidebarService,
    private auth: AuthService,
    private datePipe: DatePipe,
  ) {}
  ngOnInit(): void {
    this.getProjeData();
  }
  toggleCompact() {
    this.sidebarService.toggle(true, 'map-sidebar');
  }
  getProjeData() {
    this.auth.getData('projects?organization_id=43').subscribe((res) => {
      this.ProjectsData = res;
      this.ProjectsData = this.ProjectsData.data.items;
      //  console.log(typeof(this.adjustDate(this.ProjectsData[1].createdAt)));
    });
  }
  //  adjustDate(dateString) {
  //   const dateParsed = dateString.split('T')[0];
  //   return this.datePipe.transform(dateParsed, 'MM-dd-yyyy');
  // }
}
