// create.component.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  closeResult: string;
  angForm: FormGroup;
  selectedEstado = 0;
  selectedCidade = 0;
  estados = [];
  cidades = [];
  cidadeNome: any;
  estadoNome: any;

  constructor(private apiservice: ApiService, private fb: FormBuilder) {
    this.createForm();
  }

  // CONFORME ESTADO SELECIONADO FILTRA O ARRAY COM A LISTA DE CIDADES
  onSelectEstado(estado_id: number) {
    this.selectedEstado = estado_id;
    this.cidades = this.getCidades().filter((item) => {
      return item.estado_id === Number(estado_id);
    });
  }

  // LISTA DE ESTADOS
  getEstados() {
    return [
      { id: 1, name: 'Paraná' },
      { id: 2, name: 'Santa Catarina' },
      { id: 3, name: 'Bahia' }
    ];
  }

  // LISTA DE CIDADES
  getCidades() {
    return [
      { id: 1, estado_id: 1, name: 'Cianorte' },
      { id: 2, estado_id: 1, name: 'Maringá' },
      { id: 3, estado_id: 1, name: 'Curitiba' },
      { id: 4, estado_id: 1, name: 'Japurá' },
      { id: 5, estado_id: 2, name: 'Florianópolis' },
      { id: 6, estado_id: 2, name: 'Chapecó' },
      { id: 7, estado_id: 3, name: 'Salvador' },
      { id: 8, estado_id: 3, name: 'Porto Seguro' },
      { id: 9, estado_id: 3, name: 'Juazeiro' }
    ];
  }

  // CRIAÇÃO DO FORMULÁRIO
  createForm() {
    this.angForm = this.fb.group({
      nome: ['', Validators.required ],
      sobrenome: ['', Validators.required ],
      email: ['', Validators.required ],
      sexo: [''],
      datacriacao: ['', Validators.required ],
      selectedEstado: [''],
      selectedCidade: [''],
      areaformacao: ['', Validators.required ],
      profissao: ['', Validators.required ]
  });
  }

  // CRIA UM NOVO REGISTRO
  addProf(nome, sobrenome, email, sexo, datacriacao, estadoid, cidadeid, areaformacao, profissao) {
      // AQUI FILTRO CONFORME O ID DO ESTADO E PEGO A LINHA CORRESPONDENTE
      this.estadoNome = this.getEstados().filter((item) => {
        return item.id === Number(estadoid);
      });

      // AQUI FILTRO CONFORME O ID DA CIDADE E PEGO A LINHA CORRESPONDENTE
      this.cidadeNome = this.getCidades().filter((item) => {
        return item.id === Number(cidadeid);
      });

      // VALIDAÇÃO CASO NÃO SEJA ESCOLHIDO NENHUM ESTADO
      if (this.estadoNome.length === 0) {
        this.estadoNome = '';
        estadoid = 0;
      } else {
        this.estadoNome = this.estadoNome[0].name;
      }

      // VALIDAÇÃO CASO NÃO SEJA ESCOLHIDO NENHUMA CIDADE
      if (this.cidadeNome.length === 0) {
        this.cidadeNome = '';
        cidadeid = 0;
      } else {
        this.cidadeNome = this.cidadeNome[0].name;
      }

      // CHAMO O SERVICE.METODO QUE IRA FAZER O NOVO CADASTRO DO PROFISISONAL
      this
      .apiservice
      .addProfissional(
        nome,
        sobrenome,
        email,
        sexo,
        datacriacao,
        estadoid,
        this.estadoNome,
        cidadeid,
        this.cidadeNome,
        areaformacao,
        profissao);
  }

  ngOnInit() {
  }

}
