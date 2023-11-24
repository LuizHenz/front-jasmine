import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ProdutosdetailsComponent } from './produtosdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ProdutosService } from 'src/app/services/produtos.service';

describe('ProdutosdetailsComponent', () => {
  let component: ProdutosdetailsComponent;
  let fixture: ComponentFixture<ProdutosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosdetailsComponent],
      imports:[HttpClientTestingModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProdutosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let aux: Produto = new Produto();
    aux.nome = "Coca Cola";
    aux.valor = 25;
    component.produto = aux;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TESTE DE INTERPOLAÇÃO INPUT', () => {

    let valorElemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]')).nativeElement.ngModel;
    expect("Coca Cola").toEqual(valorElemento);
  });

  it('TESTE DE INTERPOLACAO INPUT', () =>{
    let valorElemento2 = fixture.debugElement.query(By.css('input[name="exampleInputPassword1"]')).nativeElement.ngModel;
    expect(valorElemento2).toEqual(25);
  });

  beforeEach(() =>{
    let dale: Produto = new Produto();
    dale.nome = "Coca Cola";
    dale.valor = 25;
    component.produto = dale;

    const httpSpy = TestBed.inject(HttpClient);
    spyOn(httpSpy, 'post').and.returnValue(of(dale));
    spyOn(httpSpy, 'put').and.returnValue(of(dale));

    fixture.detectChanges();
  });

  it('Teste de @output retorno', fakeAsync(() =>{
    spyOn(component.retorno, 'emit');
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }))

  it('should save product correctly', () => {
    const produtosService = TestBed.inject(ProdutosService);
    spyOn(produtosService, 'save').and.returnValue(of(component.produto));

    component.salvar();
    expect(produtosService.save).toHaveBeenCalledWith(component.produto);
  });

  it('should emit the saved product', () => {
    spyOn(component.retorno, 'emit');
    const produtosService = TestBed.inject(ProdutosService);
    spyOn(produtosService, 'save').and.returnValue(of(component.produto));

    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalledWith(component.produto);
  });

});
