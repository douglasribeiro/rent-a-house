import { Router } from '@angular/router';
import { Usuario } from './../shared/usuario';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.email === 'usuario@email.com' && usuario.senha === '123'){
      console.log("usuario autenticados")
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
      this.router.navigate(['/home']);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
    }
  }

  usuarioOn(){
    return this.usuarioAutenticado;
  }
}
