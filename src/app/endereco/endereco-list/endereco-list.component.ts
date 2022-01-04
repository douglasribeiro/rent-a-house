import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProprietarioService } from 'src/app/proprietario/proprietario.service';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.scss']
})
export class EnderecoListComponent implements OnInit {

  colunasTabela = ['id', 'logradouro', 'cep', 'bairro', 'numero', 'complemento', 'estado', 'cidade'];

  constructor(
    private proprietarioService: ProprietarioService,
  ) { }

  ngOnInit() {

  }

}
