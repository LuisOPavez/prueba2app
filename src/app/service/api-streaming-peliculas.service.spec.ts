import { TestBed } from '@angular/core/testing';

import { ApiStreamingPeliculasService } from './api-streaming-peliculas.service';

describe('ApiStreamingPeliculasService', () => {
  let service: ApiStreamingPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStreamingPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
