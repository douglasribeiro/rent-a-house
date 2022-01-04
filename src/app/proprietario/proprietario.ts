export class Telefones {
  id: string;
  telefone: string;
}

export class Enderecos {
  id: string;
  logradouro: string;
  cep: string;
  bairro: string;
  numero: string;
  complemento: string;
  cidade: Cidade;
}

export class Cidade {
  id: string;
  nome: string;
  estado: Estado;
}

export class Estado {
  id: string;
  nome: string;
  sigla: string;
}

export class Proprietario {
  id: string;
  nome: string;
  cpf: string;
  ident: string;
  email: string;
  estadoCivil: string;
  niver: string;
  sexo: string;
  ativo: string;
  telefone: Telefones;
  endereco: Enderecos;
  observacao: string;
}

//   "conjuge": null,
//   "oservacao": null
// }
