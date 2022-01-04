import { AuthService } from './../auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from './../../shared/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  formulario: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.formulario = this.formBuilder.group({
      email: [null],
      senha: [null]
    })
  }

  login(){
    this.usuario = this.formulario.value;
    this.authService.fazerLogin(this.usuario);
  }

}
