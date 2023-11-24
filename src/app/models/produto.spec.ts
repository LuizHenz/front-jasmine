import { TestBed } from '@angular/core/testing';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from './produto';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Produto', () => {
  it('should create an instance', () => {
    expect(new Produto()).toBeTruthy();
  });

  it('should have default values', () => {
    const produto = new Produto();
    expect(produto.nome).toBeUndefined(); // ou um valor padrão, se houver
    expect(produto.valor).toBeUndefined(); // ou um valor padrão, se houver
    // Testar outras propriedades padrão
  });

  let produtosService: ProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    produtosService = TestBed.inject(ProdutosService);
  });

  it('should be used correctly by the service', () => {
    spyOn(produtosService, 'save').and.callThrough();
    const produto = new Produto();
    // Configurar produto conforme necessário
    produtosService.save(produto);
    expect(produtosService.save).toHaveBeenCalledWith(produto);
  });


});
