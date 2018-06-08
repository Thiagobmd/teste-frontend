(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- app.component.html -->\r\n<ng2-slim-loading-bar color=\"blue\"></ng2-slim-loading-bar>\r\n<nav class=\"navbar navbar-expand-sm bg-light\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"create\" class=\"btn btn-primary\" routerLinkActive=\"active\">\r\n            <fa name=\"plus\"></fa>  Novo\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"index\" class=\"btn btn-warning\" routerLinkActive=\"active\">\r\n            <fa name=\"th-list\"></fa> Ver Todos\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"btn btn-success\" (click)=\"open(content)\" routerLinkActive=\"active\">\r\n            <fa name=\"search\"></fa> Buscar</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<ng-template #content let-ca=\"close('a')\" let-cb=\"close('b')\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"ca\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-search></app-search>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-dark botao-fechar-modal\" (click)=\"cb\"><fa name=\"times-circle\"></fa> Fechar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// app.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_loadingBar, _router, modalService) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this._router = _router;
        this.modalService = modalService;
        // AO MUDAR DE ROTA CHAMA O LOADER
        this._router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    // LOADER HORIZONTAL
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            this._loadingBar.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            this._loadingBar.complete();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
            this._loadingBar.stop();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
            this._loadingBar.stop();
        }
    };
    // ABRE MODAL BOOTSTRAP
    AppComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { backdropClass: 'fade' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // INFORMA POR ONDE FOI FECHADO A MODAL, PELA TECLA ESC, SE FOI CLICADO FORA E ETC...
    AppComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_1__["SlimLoadingBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _pipes_filter_by_prof_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/filter-by-prof.pipe */ "./src/app/pipes/filter-by-prof.pipe.ts");
// app.module.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"]
    },
    {
        path: 'create',
        component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"]
    },
    {
        path: 'edit/:id',
        component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_13__["EditComponent"]
    },
    {
        path: 'index',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"]
    },
    {
        path: 'search',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"],
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_13__["EditComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                _pipes_filter_by_prof_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterByProfPipe"]
            ],
            imports: [
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- create.component.html -->\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"nome\">Nome: </label>\n            <input type=\"text\" class=\"form-control\" name=\"nome\" formControlName=\"nome\" #nome />\n          </div>\n          <div *ngIf=\"angForm.controls['nome'].invalid && (angForm.controls['nome'].dirty || angForm.controls['nome'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['nome'].errors.required\">\n              Nome é obrigatório.\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"sobrenome\">Sobrenome: </label>\n            <input type=\"text\" class=\"form-control\" name=\"sobrenome\" formControlName=\"sobrenome\" #sobrenome />\n          </div>\n          <div *ngIf=\"angForm.controls['sobrenome'].invalid && (angForm.controls['sobrenome'].dirty || angForm.controls['sobrenome'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['sobrenome'].errors.required\">\n              Sobrenome é obrigatório.\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"email\">Email: </label>\n            <input type=\"text\" class=\"form-control\" name=\"email\" formControlName=\"email\" #email pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$\"\n            />\n          </div>\n          <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['email'].errors.required\">\n              Email é obrigatório.\n            </div>\n            <div *ngIf=\"angForm.controls['email'].errors && angForm.controls['email'].errors.pattern\">\n              Email é inválido\n            </div>\n          </div>\n          </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"sexo\">Sexo: </label>\n            <select class=\"form-control\" name=\"sexo\" formControlName=\"sexo\" #sexo>\n              <option value=\"Masculino\">Masculino</option>\n              <option value=\"Feminino\">Feminino</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"datacriacao\">Data do Cadastro: </label>\n            <input type=\"date\" class=\"form-control\" name=\"datacriacao\" formControlName=\"datacriacao\" #datacriacao />\n          </div>\n          <div *ngIf=\"angForm.controls['datacriacao'].invalid && (angForm.controls['datacriacao'].dirty || angForm.controls['datacriacao'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['datacriacao'].errors.required\">\n              Data de Criação é obrigatório.\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"selectedEstado\">Estado: </label>\n            <select class=\"form-control\" id=\"selectedEstado\" (change)=\"onSelectEstado($event.target.value)\" name=\"selectedEstado\" formControlName=\"selectedEstado\"\n              #selectedEstado>\n              <option value=\"0\">Selecione o Estado</option>\n              <option *ngFor=\"let estado of getEstados()\" value={{estado.id}}>{{estado.name}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"selectedCidade\">Cidade: </label>\n            <select class=\"form-control\" id=\"selectedCidade\" name=\"selectedCidade\" formControlName=\"selectedCidade\" #selectedCidade>\n              <option value=\"0\">Selecione a Cidade</option>\n              <option *ngFor=\"let cidade of cidades\" value={{cidade.id}}>{{cidade.name}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"areaformacao\">Área de Formação: </label>\n            <input type=\"text\" class=\"form-control\" name=\"areaformacao\" formControlName=\"areaformacao\" #areaformacao />\n          </div>\n          <div *ngIf=\"angForm.controls['areaformacao'].invalid && (angForm.controls['areaformacao'].dirty || angForm.controls['areaformacao'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['areaformacao'].errors.required\">\n              Área de Formação é obrigatório.\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-12 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"profissao\">Profissão: </label>\n            <select class=\"form-control\" name=\"profissao\" formControlName=\"profissao\" #profissao>\n              <option value=\"Advogado\">Advogado</option>\n              <option value=\"Bombeiro\">Bombeiro</option>\n              <option value=\"Médico\">Médico</option>\n              <option value=\"Programador\">Programador</option>\n              <option value=\"Zelador\">Zelador</option>\n            </select>\n          </div>\n          <div *ngIf=\"angForm.controls['profissao'].invalid && (angForm.controls['profissao'].dirty || angForm.controls['profissao'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['profissao'].errors.required\">\n              Profissão é obrigatório.\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n          <div class=\"form-group pull-right\">\n            <button (click)=\"addProf(nome.value, sobrenome.value, email.value, sexo.value, datacriacao.value, selectedEstado.value, selectedCidade.value, areaformacao.value, profissao.value)\"\n              [disabled]=\"angForm.controls['nome'].invalid || angForm.controls['sobrenome'].invalid || angForm.controls['email'].invalid || angForm.controls['datacriacao'].invalid || angForm.controls['areaformacao'].invalid || angForm.controls['profissao'].invalid\"\n              class=\"btn btn-primary btn-lg\"><fa name=\"save\"></fa> Salvar</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/create/create.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
// create.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    function CreateComponent(apiservice, fb) {
        this.apiservice = apiservice;
        this.fb = fb;
        this.selectedEstado = 0;
        this.selectedCidade = 0;
        this.estados = [];
        this.cidades = [];
        this.createForm();
    }
    // CONFORME ESTADO SELECIONADO FILTRA O ARRAY COM A LISTA DE CIDADES
    CreateComponent.prototype.onSelectEstado = function (estado_id) {
        this.selectedEstado = estado_id;
        this.cidades = this.getCidades().filter(function (item) {
            return item.estado_id === Number(estado_id);
        });
    };
    // LISTA DE ESTADOS
    CreateComponent.prototype.getEstados = function () {
        return [
            { id: 1, name: 'Paraná' },
            { id: 2, name: 'Santa Catarina' },
            { id: 3, name: 'Bahia' }
        ];
    };
    // LISTA DE CIDADES
    CreateComponent.prototype.getCidades = function () {
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
    };
    // CRIAÇÃO DO FORMULÁRIO
    CreateComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sobrenome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sexo: [''],
            datacriacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectedEstado: [''],
            selectedCidade: [''],
            areaformacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            profissao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    // CRIA UM NOVO REGISTRO
    CreateComponent.prototype.addProf = function (nome, sobrenome, email, sexo, datacriacao, estadoid, cidadeid, areaformacao, profissao) {
        // AQUI FILTRO CONFORME O ID DO ESTADO E PEGO A LINHA CORRESPONDENTE
        this.estadoNome = this.getEstados().filter(function (item) {
            return item.id === Number(estadoid);
        });
        // AQUI FILTRO CONFORME O ID DA CIDADE E PEGO A LINHA CORRESPONDENTE
        this.cidadeNome = this.getCidades().filter(function (item) {
            return item.id === Number(cidadeid);
        });
        // VALIDAÇÃO CASO NÃO SEJA ESCOLHIDO NENHUM ESTADO
        if (this.estadoNome.length === 0) {
            this.estadoNome = '';
            estadoid = 0;
        }
        else {
            this.estadoNome = this.estadoNome[0].name;
        }
        // VALIDAÇÃO CASO NÃO SEJA ESCOLHIDO NENHUMA CIDADE
        if (this.cidadeNome.length === 0) {
            this.cidadeNome = '';
            cidadeid = 0;
        }
        else {
            this.cidadeNome = this.cidadeNome[0].name;
        }
        // CHAMO O SERVICE.METODO QUE IRA FAZER O NOVO CADASTRO DO PROFISISONAL
        this
            .apiservice
            .addProfissional(nome, sobrenome, email, sexo, datacriacao, estadoid, this.estadoNome, cidadeid, this.cidadeNome, areaformacao, profissao);
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/components/create/create.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- edit.component.html -->\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"nome\">Nome: </label>\n            <input type=\"text\" class=\"form-control\" name=\"nome\" formControlName=\"nome\" #nome [(ngModel)]=\"apiDados.nome\" />\n          </div>\n          <div *ngIf=\"angForm.controls['nome'].invalid && (angForm.controls['nome'].dirty || angForm.controls['nome'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['nome'].errors.required\">\n              Nome é obrigatório.\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"sobrenome\">Sobrenome: </label>\n            <input type=\"text\" class=\"form-control\" name=\"sobrenome\" formControlName=\"sobrenome\" #sobrenome [(ngModel)]=\"apiDados.sobrenome\"\n            />\n          </div>\n          <div *ngIf=\"angForm.controls['sobrenome'].invalid && (angForm.controls['sobrenome'].dirty || angForm.controls['sobrenome'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['sobrenome'].errors.required\">\n              Sobrenome é obrigatório.\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"email\">Email: </label>\n            <input type=\"text\" class=\"form-control\" name=\"email\" formControlName=\"email\" #email [(ngModel)]=\"apiDados.email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$\"\n            />\n          </div>\n          <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['email'].errors.required\">\n              Email é obrigatório.\n            </div>\n            <div *ngIf=\"angForm.controls['email'].errors && angForm.controls['email'].errors.pattern\">\n              Email é inválido\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"sexo\">Sexo: </label>\n            <select class=\"form-control\" name=\"sexo\" formControlName=\"sexo\" #sexo [(ngModel)]=\"apiDados.sexo\">\n              <option value=\"Masculino\">Masculino</option>\n              <option value=\"Feminino\">Feminino</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"datacriacao\">Data do Cadastro: </label>\n            <input type=\"date\" class=\"form-control\" name=\"datacriacao\" formControlName=\"datacriacao\" #datacriacao [(ngModel)]=\"apiDados.datacriacao\"\n            />\n          </div>\n          <div *ngIf=\"angForm.controls['datacriacao'].invalid && (angForm.controls['datacriacao'].dirty || angForm.controls['datacriacao'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['datacriacao'].errors.required\">\n              Data de Criação é obrigatório.\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"Estados\">Estado: </label>\n            <select class=\"form-control\" id=\"estados\" (change)=\"onSelectEstado($event.target.value)\" name=\"selectedEstado\" formControlName=\"selectedEstado\"\n              #selectedEstado [(ngModel)]=\"apiDados.estadoid\">\n              <option value=\"0\">Selecione o Estado</option>\n              <option *ngFor=\"let estado of getEstados()\" value={{estado.id}}>{{estado.name}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"Cidades\">Cidade: </label>\n            <select class=\"form-control\" id=\"cidades\" name=\"selectedCidade\" formControlName=\"selectedCidade\" #selectedCidade [(ngModel)]=\"apiDados.cidadeid\">\n              <option value=\"0\">Selecione a Cidade</option>\n              <option *ngFor=\"let cidade of cidades\" value={{cidade.id}}>{{cidade.name}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"areaformacao\">Área de Formação: </label>\n            <input type=\"text\" class=\"form-control\" name=\"areaformacao\" formControlName=\"areaformacao\" #areaformacao [(ngModel)]=\"apiDados.areaformacao\"\n            />\n          </div>\n          <div *ngIf=\"angForm.controls['areaformacao'].invalid && (angForm.controls['areaformacao'].dirty || angForm.controls['areaformacao'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['areaformacao'].errors.required\">\n              Área de Formação é obrigatório.\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-12 col-lg-4\">\n          <div class=\"form-group required\">\n            <label class=\"control-label\" for=\"profissao\">Profissão: </label>\n            <select class=\"form-control\" name=\"profissao\" formControlName=\"profissao\" #profissao [(ngModel)]=\"apiDados.profissao\">\n              <option value=\"Advogado\">Advogado</option>\n              <option value=\"Bombeiro\">Bombeiro</option>\n              <option value=\"Médico\">Médico</option>\n              <option value=\"Programador\">Programador</option>\n              <option value=\"Zelador\">Zelador</option>\n            </select>\n          </div>\n          <div *ngIf=\"angForm.controls['profissao'].invalid && (angForm.controls['profissao'].dirty || angForm.controls['profissao'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['profissao'].errors.required\">\n              Profissão é obrigatório.\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n          <div class=\"form-group pull-right\">\n            <button (click)=\"UpdateProf(nome.value, sobrenome.value, email.value, sexo.value, datacriacao.value, selectedEstado.value, selectedCidade.value, areaformacao.value, profissao.value)\"\n              [disabled]=\"angForm.controls['nome'].invalid || angForm.controls['sobrenome'].invalid || angForm.controls['email'].invalid || angForm.controls['datacriacao'].invalid || angForm.controls['areaformacao'].invalid || angForm.controls['profissao'].invalid\"\n              class=\"btn btn-primary btn-lg\"><fa name=\"save\"></fa> Atualizar</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
// edit.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(activatedRoute, route, router, apiservice, fb) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.router = router;
        this.apiservice = apiservice;
        this.fb = fb;
        this.apiDados = [];
        this.selectedEstado = 0;
        this.selectedCidade = 0;
        this.estados = [];
        this.cidades = [];
        // INICIO CRIANDO O FORMULARIO DE EDIÇÃO
        this.createForm();
    }
    // CONFORME ESTADO SELECIONADO FILTRA A LISTA DE CIDADES
    EditComponent.prototype.onSelectEstado = function (estado_id) {
        this.selectedEstado = estado_id;
        this.cidades = this.getCidades().filter(function (item) {
            return item.estado_id === Number(estado_id);
        });
    };
    // LISTA DE ESTADOS
    EditComponent.prototype.getEstados = function () {
        return [
            { id: 1, name: 'Paraná' },
            { id: 2, name: 'Santa Catarina' },
            { id: 3, name: 'Bahia' }
        ];
    };
    // LISTA DE CIDADES
    EditComponent.prototype.getCidades = function () {
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
    };
    // CRIAÇÃO DO FORMULÁRIO
    EditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sobrenome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sexo: [''],
            datacriacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            selectedEstado: [''],
            selectedCidade: [''],
            areaformacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            profissao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // CASO RECEBA NA URL O PARAMETRO modal=true EU FECHO A MODAL VIA JQUERY
        this.activatedRoute.params.subscribe(function (params) {
            if (params['modal'] === 'true') {
                jquery__WEBPACK_IMPORTED_MODULE_1__('.botao-fechar-modal').click();
            }
        });
        // ACESSO A API E TRAGO OS DADOS DO PROFISSIONAL EM QUESTÃO
        this.route.params.subscribe(function (params) {
            _this.apiservice.editProfissional(params['id']).subscribe(function (res) {
                _this.apiDados = res;
                _this.selectedEstado = _this.apiDados.estadoid;
                // FILTRO PARA SETAR A CIDADE DO PROFISSIONAL EM QUESTÃO CONFORME O ID DO ESTADO
                _this.cidades = _this.getCidades().filter(function (item) {
                    return item.estado_id === Number(_this.selectedEstado);
                });
            });
        });
    };
    // UPDATE DOS DADOS DO PROFISSIONAL EM QUESTÃO
    EditComponent.prototype.UpdateProf = function (nome, sobrenome, email, sexo, datacriacao, estadoid, cidadeid, areaformacao, profissao) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // FILTRO CONFORME O ID DO ESTADO E PEGO A LINHA CORRESPONDENTE
            _this.estadoNome = _this.getEstados().filter(function (item) {
                return item.id === Number(estadoid);
            });
            // FILTRO CONFORME O ID DA CIDADE E PEGO A LINHA CORRESPONDENTE
            _this.cidadeNome = _this.getCidades().filter(function (item) {
                return item.id === Number(cidadeid);
            });
            // VALIDAÇÃO CASO NÃO SEJA ESCOLHIDO NENHUM ESTADO
            if (_this.estadoNome.length === 0) {
                _this.estadoNome = '';
                estadoid = 0;
            }
            else {
                _this.estadoNome = _this.estadoNome[0].name;
            }
            // VALIDAÇÃO CASO NÃO SEJA ESCOLHIDO NENHUMA CIDADE
            if (_this.cidadeNome.length === 0) {
                _this.cidadeNome = '';
                cidadeid = 0;
            }
            else {
                _this.cidadeNome = _this.cidadeNome[0].name;
            }
            // CHAMA O SERVICE.METODO QUE IRA ATUALIZAR O CADASTRO DO PROFISISONAL
            _this
                .apiservice
                .updateProfissional(nome, sobrenome, email, sexo, datacriacao, estadoid, _this.estadoNome, cidadeid, _this.cidadeNome, areaformacao, profissao, params['id']);
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/components/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- index.component.html -->\n\n<div class=\"table-responsive table-hover\">\n  <table class=\"table\" width=\"100%\">\n    <thead>\n      <tr>\n        <th scope=\"col\">ID</th>\n        <th scope=\"col\">Nome</th>\n        <th scope=\"col\">Sobrenome</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Sexo</th>\n        <th scope=\"col\">Data</th>\n        <th scope=\"col\">Estado</th>\n        <th scope=\"col\">Cidade</th>\n        <th scope=\"col\">Área de Formação</th>\n        <th scope=\"col\">Profissão</th>\n        <th scope=\"col\" colspan=\"2\">Ações</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let prof of listaProf\">\n        <th scope=\"row\">{{ prof.id }}</th>\n        <td>{{ prof.nome }}</td>\n        <td>{{ prof.sobrenome }}</td>\n        <td>{{ prof.email }}</td>\n        <td>{{ prof.sexo }}</td>\n        <td>{{ prof.datacriacao | date:'dd/MM/yyyy' }}</td>\n        <td>{{ prof.estadonome }}</td>\n        <td>{{ prof.cidadenome }}</td>\n        <td>{{ prof.areaformacao }}</td>\n        <td>{{ prof.profissao }}</td>\n        <td>\n          <a [routerLink]=\"['/edit', prof.id]\" class=\"btn btn-primary\"> <fa name=\"edit\"></fa> Alterar</a>\n        </td>\n        <td>\n          <a (click)=\"deleteProf(prof.id)\" class=\"btn btn-danger\"><fa name=\"minus-circle\"></fa> Excluir</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/index/index.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
// index.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(apiservice) {
        this.apiservice = apiservice;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        // INICIO CARREGANDO A LISTA DE PROFISSIONAIS VINDO DO SERVICE.METODO GET
        this.apiservice
            .getProfissionais()
            .subscribe(function (data) {
            _this.listaProf = data;
        });
    };
    // REMOVE O REGISTRO DO PROFISSIONAL PELO ID, CHAMO O SERVICE.METODO DELETE
    IndexComponent.prototype.deleteProf = function (id) {
        this.apiservice.deleteProfissional(id).subscribe(function (res) {
            window.location.reload();
        });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- search.component.html -->\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"nome\">Nome:</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nomeFilter.nome\" name=\"nome\" placeholder=\"Digite o Nome\">\n        </div>\n      </div>\n      <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"selProf\">Profissão:</label>\n          <select class=\"form-control\" [(ngModel)]=\"selProf\" name=\"selProf\">\n              <option value=\"\">Todas Profissões</option>\n            <option *ngFor=\"let itemProf of listaProfTotal\" value=\"{{itemProf.profissao}}\">{{itemProf.profissao}}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"table-responsive table-hover\">\n<table class=\"table\" width=\"100%\">\n  <thead>\n    <tr>\n      <th scope=\"col\">ID</th>\n      <th scope=\"col\">Nome</th>\n      <th scope=\"col\">Sobrenome</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Sexo</th>\n      <th scope=\"col\">Data</th>\n      <th scope=\"col\">Estado</th>\n      <th scope=\"col\">Cidade</th>\n      <th scope=\"col\">Área de Formação</th>\n      <th scope=\"col\">Profissão</th>\n      <th scope=\"col\" colspan=\"2\">Ações</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let item of listaProf | filterBy: nomeFilter | filterByProf: selProf\">\n      <th scope=\"row\">{{ item.id }}</th>\n      <td>{{ item.nome }}</td>\n      <td>{{ item.sobrenome }}</td>\n      <td>{{ item.email }}</td>\n      <td>{{ item.sexo }}</td>\n      <td>{{ item.datacriacao | date:'dd/MM/yyyy' }}</td>\n      <td>{{ item.estadonome }}</td>\n      <td>{{ item.cidadenome }}</td>\n      <td>{{ item.areaformacao }}</td>\n      <td>{{ item.profissao }}</td>\n      <td>\n        <a [routerLink]=\"['/edit', item.id, {modal: 'true'}]\"class=\"btn btn-primary\">\n          <fa name=\"edit\"></fa> Alterar</a>\n      </td>\n      <td>\n        <a (click)=\"deleteProf(item.id)\" class=\"btn btn-danger\">\n          <fa name=\"minus-circle\"></fa> Excluir</a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<p class=\"center\" *ngIf=\"(listaProf | filterBy: nomeFilter).length === 0 || (listaProf | filterByProf: selProf).length === 0 \"><span><strong>Não foram encontrados resultados.</strong></span></p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
// search.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(apiservice, filterPipe) {
        this.apiservice = apiservice;
        this.filterPipe = filterPipe;
        this.listaProf = [];
        this.nomeFilter = { nome: null };
        this.listaProfTotal = [
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
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // INICIO CARREGANDO A LISTA DE PROFISSIONAIS VINDO DO SERVICE.METODO GET
        this.apiservice
            .getProfissionais()
            .subscribe(function (data) {
            _this.listaProf = data;
        });
    };
    // FECHA A MODAL FAZENDO O RELOAD NA TELA
    SearchComponent.prototype.closeModal = function () {
        window.location.reload();
    };
    // REMOVE O REGISTRO DO PROFISSIONAL PELO ID, CHAMO O SERVICE.METODO DELETE
    SearchComponent.prototype.deleteProf = function (id) {
        this.apiservice.deleteProfissional(id).subscribe(function (res) {
            window.location.reload();
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter-by-prof.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/filter-by-prof.pipe.ts ***!
  \**********************************************/
/*! exports provided: FilterByProfPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByProfPipe", function() { return FilterByProfPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByProfPipe = /** @class */ (function () {
    function FilterByProfPipe() {
    }
    // AQUI FAZ O FILTRO CONFORME A PROFISSÃO SELECIONADA
    FilterByProfPipe.prototype.transform = function (items, selProf) {
        return selProf ? items.filter(function (sal) { return sal.profissao === selProf; }) : items;
    };
    FilterByProfPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterByProf'
        })
    ], FilterByProfPipe);
    return FilterByProfPipe;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// api.service.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        // URL DA MINHA API LOCALHOST
        this.uri = 'http://localhost:3000/profissionais';
    }
    // GET - SELECIONA LISTA DE PROFISSIONAIS CADASTRADOS
    ApiService.prototype.getProfissionais = function () {
        return this.http.get("" + this.uri);
    };
    // POST - ADICIONA PROFISSIONAL
    ApiService.prototype.addProfissional = function (nome, sobrenome, email, sexo, datacriacao, estadoid, estadonome, cidadeid, cidadenome, areaformacao, profissao) {
        var _this = this;
        var obj = {
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
            .subscribe(function (result) {
        }, function (error) {
            _this.errors = error;
        }, function () {
            _this.router.navigate(['index']);
        });
    };
    // ACESSA O REGISTRO A SER EDITADO CONFORME ID
    ApiService.prototype.editProfissional = function (id) {
        return this
            .http
            .get(this.uri + "/" + id);
    };
    // PUT - FAZ O UPDATE DOS DADOS DO PROFISSIONAL CONFORME ID
    ApiService.prototype.updateProfissional = function (nome, sobrenome, email, sexo, datacriacao, estadoid, estadonome, cidadeid, cidadenome, areaformacao, profissao, id) {
        var _this = this;
        var obj = {
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
            .put(this.uri + "/" + id, obj)
            .subscribe(function (result) {
        }, function (error) {
            _this.errors = error;
        }, function () {
            _this.router.navigate(['index']);
        });
    };
    // DELETE - PARA DELETAR O REGISTRO CONFORME O ID
    ApiService.prototype.deleteProfissional = function (id) {
        return this
            .http
            .delete(this.uri + "/" + id);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Program Files\nodejs\teste-frontend\aplicacao-theos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map