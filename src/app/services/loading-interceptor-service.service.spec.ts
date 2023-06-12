import { TestBed } from '@angular/core/testing';

import { LoadingInterceptorServiceService } from './loading-interceptor-service.service';

describe('LoadingInterceptorServiceService', () => {
  let service: LoadingInterceptorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingInterceptorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
