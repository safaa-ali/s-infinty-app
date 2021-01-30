import { TestBed } from '@angular/core/testing';

import { MapFeaturesService } from './map-features.service';

describe('MapFeaturesService', () => {
  let service: MapFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
