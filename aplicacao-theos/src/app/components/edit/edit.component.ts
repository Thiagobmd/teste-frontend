// edit.component.ts

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  apiDados: any = [];
  angForm: FormGroup;
  selectedEstado = 0;
  selectedCidade = 0;
  estados = [];
  cidades = [];
  cidadeNome: any;
  estadoNome: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private router: Router,
    private apiservice: ApiService,
    private fb: FormBuilder) {
      // INICIO CRIANDO O FORMULARIO DE EDIÇÃO
      this.createForm();
    }

  // CONFORME ESTADO SELECIONADO FILTRA A LISTA DE CIDADES
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

    public ngOnInit() {

    // CASO RECEBA NA URL O PARAMETRO modal=true EU FECHO A MODAL VIA JQUERY
    this.activatedRoute.params.subscribe(params => {
        if (params['modal'] === 'true') {
          $('.botao-fechar-modal').click();
        }
    });

      // ACESSO A API E TRAGO OS DADOS DO PROFISSIONAL EM QUESTÃO
      this.route.params.subscribe(params => {
        this.apiservice.editProfissional(params['id']).subscribe(res => {
          this.apiDados = res;
          this.selectedEstado = this.apiDados.estadoid;
          // FILTRO PARA SETAR A CIDADE DO PROFISSIONAL EM QUESTÃO CONFORME O ID DO ESTADO
          this.cidades = this.getCidades().filter((item) => {
            return item.estado_id === Number(this.selectedEstado);
          });
      });
    });
  }

  // UPDATE DOS DADOS DO PROFISSIONAL EM QUESTÃO
  UpdateProf(nome, sobrenome, email, sexo, datacriacao, estadoid, cidadeid, areaformacao, profissao) {
    this.route.params.subscribe(params => {
      // FILTRO CONFORME O ID DO ESTADO E PEGO A LINHA CORRESPONDENTE
      this.estadoNome = this.getEstados().filter((item) => {
        return item.id === Number(estadoid);
      });

      // FILTRO CONFORME O ID DA CIDADE E PEGO A LINHA CORRESPONDENTE
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

      // CHAMA O SERVICE.METODO QUE IRA ATUALIZAR O CADASTRO DO PROFISISONAL
      this
      .apiservice
      .updateProfissional(
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
        profissao,
        params['id']
      );

    });
}

}
