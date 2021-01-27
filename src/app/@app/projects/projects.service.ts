import { HttpConnectionService } from './../../@core/utils/http-connection.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpConnectionService) {}
  getProjects() {
    return this.http.get('projects?organization_id=43');
  }
  getStations(projectId) {
    return this.http.get(`assets?project_id=${projectId}`);
  }
}
