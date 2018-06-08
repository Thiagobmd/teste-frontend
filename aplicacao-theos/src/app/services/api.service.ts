// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL DA MINHA API LOCALHOST
  uri = 'http://localhost:3000/profissionais';
  errors: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  // GET - SELECIONA LISTA DE PROFISSIONAIS CADASTRADOS
  getProfissionais() {
    return this.http.get(`${this.uri}`);
  }

  // POST - ADICIONA PROFISSIONAL
  addProfissional(nome, sobrenome, email, sexo, datacriacao, estadoid, estadonome, cidadeid, cidadenome, areaformacao, profissao) {
    const obj = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      sexo: sexo,
      datacriacao: datacriacao,
      estadoid: estadoid,
      estadonome: estadonome,
      cidadeid: cidadeid,
      cidadenome: cidadenome,
      areaformacao: areaformacao,
      profissao: profissao
    };

    this.http.post(this.uri, obj)
    .subscribe(
      result => {
      },
      error => {
        this.errors = error;
      },
      () => {
        this.router.navigate(['index']);
      }
    );
  }

  // ACESSA O REGISTRO A SER EDITADO CONFORME ID
  editProfissional(id) {
    return this
              .http
              .get(`${this.uri}/${id}`);
    }

    // PUT - FAZ O UPDATE DOS DADOS DO PROFISSIONAL CONFORME ID
    updateProfissional(nome, sobrenome, email, sexo, datacriacao, estadoid, estadonome, cidadeid, cidadenome, areaformacao, profissao, id) {

      const obj = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        sexo: sexo,
        datacriacao: datacriacao,
        estadoid: estadoid,
        estadonome: estadonome,
        cidadeid: cidadeid,
        cidadenome: cidadenome,
        areaformacao: areaformacao,
        profissao: profissao
      };

      this
        .http
        .put(`${this.uri}/${id}`, obj)
        .subscribe(
          result => {
          },
          error => {
            this.errors = error;
          },
          () => {
            this.router.navigate(['index']);
          }
        );
    }

    // DELETE - PARA DELETAR O REGISTRO CONFORME O ID
    deleteProfissional(id) {
      return this
                .http
                .delete(`${this.uri}/${id}`);
  }

}
