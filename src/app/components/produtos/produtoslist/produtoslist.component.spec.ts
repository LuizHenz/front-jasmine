import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProdutoslistComponent } from './produtoslist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { of, throwError } from 'rxjs';

describe('ProdutoslistComponent', () => {
  let component: ProdutoslistComponent;
  let fixture: ComponentFixture<ProdutoslistComponent>;

  let produtosService: ProdutosService;
  let modalService: NgbModal;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoslistComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProdutoslistComponent);
    component = fixture.componentInstance;
    produtosService = TestBed.inject(ProdutosService);
    modalService = TestBed.inject(NgbModal);
    spyOn(component, 'listAll').and.callThrough();

    fixture.detectChanges();
  });

  beforeEach(() => {
    let aux: Produto = new Produto();
    aux.nome = "Coca Cola";
    aux.valor = 26;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products correctly from the service', () => {
    const produtosService = TestBed.inject(ProdutosService);
    const mockProducts: any = [{id:1, nome:"Coca Cola", valor:24}];
    spyOn(produtosService, 'listAll').and.returnValue(of(mockProducts));

    component.listAll();
    fixture.detectChanges();

    expect(component.lista).toEqual(mockProducts);
  });

  it('should handle errors when listAll fails', () => {
    const produtosService = TestBed.inject(ProdutosService);
    spyOn(produtosService, 'listAll').and.returnValue(throwError(() => new Error('Error')));
    spyOn(window, 'alert');

    component.listAll();
    fixture.detectChanges();

    expect(window.alert).toHaveBeenCalledWith('Exemplo de tratamento de erro/exception! Observe o erro no console!');
  });

  it('should open modal for adding a new product', () => {
    spyOn(component.modalService, 'open');
    const mockModal = {}; // Simulate your modal object
    component.adicionar(mockModal);
    expect(component.modalService.open).toHaveBeenCalledWith(mockModal, { size: 'sm' });
  });

  it('should emit the selected product for launch', () => {
    spyOn(component.retorno, 'emit');
    const mockProduct = new Produto();
    // set properties of mockProduct if needed
    component.lancamento(mockProduct);
    expect(component.retorno.emit).toHaveBeenCalledWith(mockProduct);
  });
});
