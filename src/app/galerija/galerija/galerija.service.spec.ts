import { TestBed } from '@angular/core/testing';

import { GalerijaService } from './galerija.service';

describe('GalerijaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalerijaService = TestBed.get(GalerijaService);
    expect(service).toBeTruthy();
  });
});
