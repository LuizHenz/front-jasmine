import { TestBed } from '@angular/core/testing';

import { HttpinterceptorService } from './httpinterceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpinterceptorService', () => {
  let service: HttpinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(HttpinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
