import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AuthService } from 'app/@core/utils/service/auth.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../projects.service';
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
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private _ProjectsService: ProjectsService,
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.projectId = +params['projectId'];
    });
    // console.log(this.projectId);
  }
  ngOnInit(): void {
    this.getProjectData();
  }
  toggleCompact() {
    this.sidebarService.toggle(true, 'map-sidebar');
  }
  getProjectData() {
    this._ProjectsService.getProjects().subscribe((res) => {
      this.ProjectsData = res.data.items;
      // console.log(this.ProjectsData);
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
