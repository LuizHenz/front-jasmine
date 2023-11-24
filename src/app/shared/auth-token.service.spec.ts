import { jwtDecode } from 'jwt-decode';
import { TestBed } from '@angular/core/testing';

import { AuthTokenService } from './auth-token.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthTokenService', () => {
  let service: AuthTokenService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(AuthTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve adicionar um token', () => {
    spyOn(localStorage, 'setItem');
    service.addToken('token-teste');
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'token-teste');
  });

  it('deve remover um token', () => {
    spyOn(localStorage, 'removeItem');
    service.removerToken();
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });

  it('deve retornar um token', () => {
    spyOn(localStorage, 'getItem').and.returnValue('token-teste');
    expect(service.getToken()).toBe('token-teste');
  });

});
