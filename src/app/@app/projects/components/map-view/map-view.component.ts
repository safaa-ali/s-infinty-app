import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AuthService } from 'app/@core/utils/service/auth.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../../projects.service';
import { windowWhen } from 'rxjs/operators';
@Component({
  selector: 'ngx-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  compacted: boolean = true;
  ProjectsData: any;
  sub: any;
  projectId: number;
  assetId: number = 51;
  constructor(
    private sidebarService: NbSidebarService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private _ProjectsService: ProjectsService,
    private router: Router,
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.projectId = +params['projectId'];
    });
  }
  ngOnInit(): void {
    this.getProjectData();
  }
  toggleCompact() {
    //  this.sidebarService.toggle(true, 'map-sidebar');
    this.compacted = !this.compacted;
  }
  getProjectData() {
    this._ProjectsService.getProjects().subscribe((res) => {
      this.ProjectsData = res.data.items;
      // console.log(this.ProjectsData);
    });
  }
  mapFeatures(e) {
    this.router.navigate([
      `projects/${this.projectId}/assets/${this.assetId}/${e}`,
    ]);
  }
  isActive(id) {
    if (id === this.projectId) {
      return true;
    } else {
      return false;
    }
  }
}
