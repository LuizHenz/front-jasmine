import { TestBed } from '@angular/core/testing';

import { ProdutosService } from './produtos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProdutosService', () => {
  let service: ProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(ProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
