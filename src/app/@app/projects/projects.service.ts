import { HttpConnectionService } from './../../@core/utils/http-connection.service';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpConnectionService) {}
  getProjects() {
    return this.http.get('projects?organization_id=43');
  }
  showProject(projectId) {
    return this.http.get(`projects/${projectId}`);
  }
  showAsset(assetId) {
    return this.http.get(`assets/${assetId}`);
  }
  getStations(projectId) {
    return this.http.get(`assets?project_id=${projectId}`);
  }
}
