import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';
import { AuthTokenService } from 'src/app/shared/auth-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // usuario: Usuario = new Usuario();
  // roteador = inject(Router);

  login: Login = new Login();
  roteador = inject(Router);
  authToken = inject(AuthTokenService);
  loginService = inject(LoginService);

  constructor() {
    this.authToken.removerToken();
  }

  logar(){
    this.loginService.logar(this.login).subscribe({
      next:user =>{
        this.authToken.addToken(user.token);
        this.authToken.decodePayloadJWT();
        this.roteador.navigate(['admin/produtos']);
      },
      error: error =>{
        alert('Senha ou usuario incorretos');
      }
    })
  }
}
