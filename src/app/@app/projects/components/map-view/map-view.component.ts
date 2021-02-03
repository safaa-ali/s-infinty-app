import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../../projects.service';
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
  constructor(
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
    this.compacted = !this.compacted;
  }
  getProjectData() {
    this._ProjectsService.getProjects().subscribe((res) => {
      this.ProjectsData = res.data.items;
      // console.log(this.ProjectsData.length);
    });
  }
  mapFeatures(e) {
    this.router.navigate([
      `projects/${this.projectId}/assets/${e['id']}/${e['type']}`,
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
