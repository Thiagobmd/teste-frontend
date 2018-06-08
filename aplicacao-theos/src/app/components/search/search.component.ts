// search.component.ts

import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

import { FilterPipe } from 'ngx-filter-pipe';
import { FilterByProfPipe } from '../../pipes/filter-by-prof.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  listaProf: any = [];
  nomeFilter: any = { nome: null };
  selProf: any;
  listaProfTotal: any = [
      {
        id: 1,
        profissao: 'Advogado'
      },
      {
        id: 2,
        profissao: 'Bombeiro'
      },
      {
        id: 3,
        profissao: 'Médico'
      },
      {
        id: 4,
        profissao: 'Programador'
      },
      {
        id: 5,
        profissao: 'Zelador'
      }
    ];

  constructor(private apiservice: ApiService, private filterPipe: FilterPipe) {  }

  ngOnInit() {

    // INICIO CARREGANDO A LISTA DE PROFISSIONAIS VINDO DO SERVICE.METODO GET
    this.apiservice
      .getProfissionais()
      .subscribe((data) => {
      this.listaProf = data;
    });
  }

  // FECHA A MODAL FAZENDO O RELOAD NA TELA
  closeModal() {
    window.location.reload();
  }

  // REMOVE O REGISTRO DO PROFISSIONAL PELO ID, CHAMO O SERVICE.METODO DELETE
  deleteProf(id) {
    this.apiservice.deleteProfissional(id).subscribe(res => {
      window.location.reload();
    });
  }

}
