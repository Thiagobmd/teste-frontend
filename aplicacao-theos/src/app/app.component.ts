// app.component.ts

import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  closeResult: string;

  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router, private modalService: NgbModal) {
    // AO MUDAR DE ROTA CHAMA O LOADER
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  // LOADER HORIZONTAL
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }

  // ABRE MODAL BOOTSTRAP
  open(content) {
    this.modalService.open(content, { backdropClass: 'fade' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // INFORMA POR ONDE FOI FECHADO A MODAL, PELA TECLA ESC, SE FOI CLICADO FORA E ETC...
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
