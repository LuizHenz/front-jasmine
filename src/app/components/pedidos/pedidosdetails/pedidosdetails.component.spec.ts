import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosdetailsComponent } from './pedidosdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { By } from '@angular/platform-browser';

describe('PedidosdetailsComponent', () => {
  let component: PedidosdetailsComponent;
  let fixture: ComponentFixture<PedidosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosdetailsComponent],
      imports:[HttpClientTestingModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PedidosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() =>{
    let aux: Pedido = new Pedido();
    aux.obs = "Teste";
    aux.produtos = [{id:1,nome:'teste',valor:123}];
    component.pedido = aux;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o tamanho correto da lista de produtos', () => {
    let valorElemento2 = fixture.debugElement.query(By.css('p[id="listaTamanho"]')).nativeElement.innerHTML;
    expect('1').toEqual(valorElemento2); // Espera-se 1 pois é o tamanho da lista mockada
  });

  it('Teste 1 EventProperty - Teste do botão Adicionar', () => {
    spyOn(component, 'excluir');
    const button = fixture.debugElement.nativeElement.querySelector('button[name="botaoDeletar"]');
    button.click();
    fixture.detectChanges();
    expect(component.excluir).toHaveBeenCalled();
  });



});
