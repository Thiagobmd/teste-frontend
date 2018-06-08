// index.component.ts

import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  listaProf;

  constructor(private apiservice: ApiService) {  }

  ngOnInit() {

    // INICIO CARREGANDO A LISTA DE PROFISSIONAIS VINDO DO SERVICE.METODO GET
    this.apiservice
      .getProfissionais()
      .subscribe((data) => {
      this.listaProf = data;
    });
  }

  // REMOVE O REGISTRO DO PROFISSIONAL PELO ID, CHAMO O SERVICE.METODO DELETE
  deleteProf(id) {
    this.apiservice.deleteProfissional(id).subscribe(res => {
      window.location.reload();
    });
  }

}
