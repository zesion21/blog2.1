import { TestBed } from '@angular/core/testing';

import { EsriService } from './esri.service';

describe('EsriService', () => {
  let service: EsriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
