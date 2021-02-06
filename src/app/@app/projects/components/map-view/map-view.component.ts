import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'app/@core/utils/global.service';
import { ProjectsService } from '../../projects.service';
@Component({
  selector: 'ngx-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  compacted: boolean = true;
  ProjectsData: any;
  searchValue: string = '';
  sub: any;
  mapLoad: boolean = false;
  projectId: number;
  constructor(
    private route: ActivatedRoute,
    private _ProjectsService: ProjectsService,
    private router: Router,
    private _globalService: GlobalService,
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
    });
  }
  changed(type, value) {
    if (type === 'search') {
      this.searchValue = value;
      this.resultSearch();
    }
  }
  resultSearch() {
    this._globalService.Search(this.searchValue, 'projects?organization_id=43').subscribe((res) => {
      this.ProjectsData = res.data.items;
    });
  }
  mapFeatures(e) {
    this.router.navigate([
      `projects/${this.projectId}/assets/${e['id']}/${e['type']}`,
    ]);
  }
  mapLoaded(e) {
    this.mapLoad = true;
  }
  changeAssets(e) {
    this.projectId = e;
    this.router.navigate([`/projects/${this.projectId}`]);
    // window.location.reload();
    // console.log(this.projectId);
  }
  isActive(id) {
    if (id === this.projectId) {
      return true;
    } else {
      return false;
    }
  }
}
