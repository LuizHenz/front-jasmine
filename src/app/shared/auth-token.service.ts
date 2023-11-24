import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor() { }

  loginService = inject(LoginService);

  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  public decodePayloadJWT(): any {
    try {
      let response: Usuario = jwtDecode<JwtPayload>(this.getToken() as string) as Usuario;
      console.log("resposta do JWT");
      console.log(response.role);
      return response;
    } catch (Error) {
      console.log(Error);
    }
  }

  public hasPermision(permision: string): boolean {
    try {
      let tokenDecoded: any = this.decodePayloadJWT();
      if (tokenDecoded && tokenDecoded.role) {
        return tokenDecoded.role.includes(permision);
      }
    } catch (error) {
      console.error("error", error);
    }
    return false;
  }
}
