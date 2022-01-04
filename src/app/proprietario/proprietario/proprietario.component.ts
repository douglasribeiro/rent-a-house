import { SexoService } from './../../shared/sexo.service';
import { EstadosService } from './../../shared/estados.service';
import { Estado } from './../proprietario';
import { PageRequest } from './../../shared/pagination';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProprietarioService } from '../proprietario.service';
import { Proprietario } from '../proprietario';
import { Page } from 'src/app/shared/pagination';
import { PageEvent } from '@angular/material/paginator';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-proprietario',
  templateUrl: './proprietario.component.html',
  styleUrls: ['./proprietario.component.scss']
})
export class ProprietarioComponent implements OnInit {


  colunasTabela = ['id', 'nome', 'cpf', 'ident', 'email', 'conjuge', 'endereco', 'telefone']
  //proprietario$: Observable<Proprietario[]>

  page: Page<Proprietario> = new Page([],0);
  pageEvent: PageEvent;
  estados: Estado[];

  carregando = false;

  constructor(
    private proprietarioService: ProprietarioService,
    private estadoService: EstadosService,
    private router: Router) { }

  ngOnInit() {
    this.listarProprietarios();
    this.estadoService.listar().subscribe( lista => { this.estados = lista});
  }

  listarProprietarios(){
    this.carregando = true;
    let queryAdicional;
    this.proprietarioService.listar(
      new PageRequest({
        pageNumber: this.pageEvent? this.pageEvent.pageIndex: 0,
        pageSize: this.pageEvent? this.pageEvent.pageSize: 5
      }, queryAdicional)
    ).pipe(
      take(1)
    ).subscribe(
      page => {
        this.page = page;
        this.carregando = false;
      },error => {
        this.page = new Page([], 0);
        this.carregando = false;
      }
    )
  }

  novo(){
    console.log("Novo registro....")
    this.router.navigate["novo"];
  }

}
