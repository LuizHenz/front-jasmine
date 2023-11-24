import { TestBed } from '@angular/core/testing';

import { PedidoService } from './pedido.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Pedido } from '../models/pedido';

describe('PedidoService', () => {
  let service: PedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(PedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
