import { DropDownServiceService } from './../../shared/drop-down-service.service';
import { EstadoCivilService } from './../../shared/estado-civil.service';
import { Proprietario } from './../proprietario';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProprietarioService } from '../proprietario.service';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';
import { SexoService } from 'src/app/shared/sexo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proprietario-edit',
  templateUrl: './proprietario-edit.component.html',
  styleUrls: ['./proprietario-edit.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }]
})
export class ProprietarioEditComponent implements OnInit {

  formGroup: FormGroup;
  proprietario: Proprietario;
  sexos: Observable<any[]>;
  estadosCivis: Observable<any[]>;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProprietarioService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private sexoService: SexoService,
    private estadoCivilService: EstadoCivilService,
    private dropDownServiceService: DropDownServiceService
  ) { }

  ngOnInit() {

    this.dropDownServiceService.getEstadosBr().subscribe(console.log)
    this.dropDownServiceService.getCidades(8).subscribe(console.log)

    this.sexos = this.sexoService.listar();
    this.estadosCivis = this.estadoCivilService.listar();
    this.proprietario = this.activateRoute.snapshot.data["proprietario"];
    this.formGroup = this.formBuilder.group({
      id: [(this.proprietario && this.proprietario.id)? this.proprietario.id: null],
      nome: [(this.proprietario && this.proprietario.nome)? this.proprietario.nome: null, Validators.required],
      cpf: [(this.proprietario && this.proprietario.cpf)? this.proprietario.cpf: null, Validators.required],
      ident: [(this.proprietario && this.proprietario.ident)? this.proprietario.ident: null, Validators.required],
      email: [(this.proprietario && this.proprietario.email)? this.proprietario.email: null, Validators.required],
      estadoCivil: [(this.proprietario && this.proprietario.estadoCivil)? this.proprietario.estadoCivil: null],
      niver: [(this.proprietario && this.proprietario.niver)? this.proprietario.niver: null],
      sexo: [(this.proprietario && this.proprietario.sexo)? this.proprietario.sexo: null],
      ativo: [null]
    })

  }

  salvar(){

    if(this.proprietario && this.proprietario.id){
      this.service.atualizar(this.formGroup.value).subscribe(
        propAtualizado => {
          this.router.navigateByUrl("/proprietario")
        },
        error => {
          alert("Erro ao atualizar " + JSON.stringify(error));
        }
      )
    }else{
      this.service.cadastrar(this.formGroup.value).subscribe(
        propCadastrado => {
          this.router.navigateByUrl("/proprietario")
        },
        error => {
          alert("Erro ao cadastrar " + JSON.stringify(error));
        }
      )
    }

  }

  deletar(){
    if(confirm("Deseja deletar o Proprietario " + this.proprietario.nome)){
      this.service.deleta(this.proprietario.id).subscribe(
        response => {
          this.router.navigateByUrl("/proprietario");
        },
        error => {
          alert("Erro ao excluir proprietario " + JSON.stringify(error));
        }
      )
    }
  }

}
