import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AuthService } from 'app/@core/utils/service/auth.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ngx-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  ProjectsData: any;
  sub: any;
  projectId: number;
  constructor(
    private sidebarService: NbSidebarService,
    private auth: AuthService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.projectId = +params['projectId'];
      // console.log(this.projectId);

    });
  }
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
  isActive(id) {
    if (id === this.projectId) {
      return true;
    } else {
      return false;
    }
  }
  adjustDate(dateString) {
    const dateParsed = dateString.split('T')[0];
    return this.datePipe.transform(dateParsed, 'MM-dd-yyyy');
  }
}
