import { HttpConnectionService } from './../../@core/utils/http-connection.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MapFeaturesService {
  constructor(private http: HttpConnectionService) {}
  getAssetFiles(assetId, type) {
    return this.http.get(`assets/${assetId}/files?type=${type}`);
  }
}
