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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_join_join_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/join/join.component */ "./src/app/components/join/join.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inactive/inactive.component */ "./src/app/components/inactive/inactive.component.ts");
/* harmony import */ var _components_menu_grupo_menu_grupo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu-grupo/menu-grupo.component */ "./src/app/components/menu-grupo/menu-grupo.component.ts");
/* harmony import */ var _components_personas_personas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/personas/personas.component */ "./src/app/components/personas/personas.component.ts");
/* harmony import */ var _components_finanzas_finanzas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/finanzas/finanzas.component */ "./src/app/components/finanzas/finanzas.component.ts");
/* harmony import */ var _components_estado_cuenta_estado_cuenta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/estado-cuenta/estado-cuenta.component */ "./src/app/components/estado-cuenta/estado-cuenta.component.ts");
/* harmony import */ var _components_lista_deudores_lista_deudores_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/lista-deudores/lista-deudores.component */ "./src/app/components/lista-deudores/lista-deudores.component.ts");
/* harmony import */ var _components_recibo_recibo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/recibo/recibo.component */ "./src/app/components/recibo/recibo.component.ts");
/* harmony import */ var _components_notificaciones_notificaciones_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/notificaciones/notificaciones.component */ "./src/app/components/notificaciones/notificaciones.component.ts");
/* harmony import */ var _components_propuestas_propuestas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/propuestas/propuestas.component */ "./src/app/components/propuestas/propuestas.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_lista_recibo_lista_recibo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/lista-recibo/lista-recibo.component */ "./src/app/components/lista-recibo/lista-recibo.component.ts");




















var routes = [
    { path: '', component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_18__["WelcomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: ':uid', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/join', component: _components_join_join_component__WEBPACK_IMPORTED_MODULE_7__["JoinComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/create', component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/inactive/:idgrupo', component: _components_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_9__["InactiveComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/menu/:idgrupo', component: _components_menu_grupo_menu_grupo_component__WEBPACK_IMPORTED_MODULE_10__["MenuGrupoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/personas/:idgrupo', component: _components_personas_personas_component__WEBPACK_IMPORTED_MODULE_11__["PersonasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/finanzas/:idgrupo', component: _components_finanzas_finanzas_component__WEBPACK_IMPORTED_MODULE_12__["FinanzasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/estadoCuenta/:idgrupo', component: _components_estado_cuenta_estado_cuenta_component__WEBPACK_IMPORTED_MODULE_13__["EstadoCuentaComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/listaDeudores/:idgrupo', component: _components_lista_deudores_lista_deudores_component__WEBPACK_IMPORTED_MODULE_14__["ListaDeudoresComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/recibo', component: _components_recibo_recibo_component__WEBPACK_IMPORTED_MODULE_15__["ReciboComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/listaRecibo', component: _components_lista_recibo_lista_recibo_component__WEBPACK_IMPORTED_MODULE_19__["ListaReciboComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/notificaciones/:idgrupo', component: _components_notificaciones_notificaciones_component__WEBPACK_IMPORTED_MODULE_16__["NotificacionesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':uid/propuestas/:idgrupo', component: _components_propuestas_propuestas_component__WEBPACK_IMPORTED_MODULE_17__["PropuestasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Condos - Administrador de Condominios';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_finanzas_finanzas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/finanzas/finanzas.component */ "./src/app/components/finanzas/finanzas.component.ts");
/* harmony import */ var _components_menu_grupo_menu_grupo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/menu-grupo/menu-grupo.component */ "./src/app/components/menu-grupo/menu-grupo.component.ts");
/* harmony import */ var _components_propuestas_propuestas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/propuestas/propuestas.component */ "./src/app/components/propuestas/propuestas.component.ts");
/* harmony import */ var _components_join_join_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/join/join.component */ "./src/app/components/join/join.component.ts");
/* harmony import */ var _components_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/inactive/inactive.component */ "./src/app/components/inactive/inactive.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_notificaciones_notificaciones_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/notificaciones/notificaciones.component */ "./src/app/components/notificaciones/notificaciones.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/auth.service.service */ "./src/app/services/auth.service.service.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _components_personas_personas_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/personas/personas.component */ "./src/app/components/personas/personas.component.ts");
/* harmony import */ var _components_estado_cuenta_estado_cuenta_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/estado-cuenta/estado-cuenta.component */ "./src/app/components/estado-cuenta/estado-cuenta.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_lista_deudores_lista_deudores_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/lista-deudores/lista-deudores.component */ "./src/app/components/lista-deudores/lista-deudores.component.ts");
/* harmony import */ var _components_recibo_recibo_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/recibo/recibo.component */ "./src/app/components/recibo/recibo.component.ts");
/* harmony import */ var _components_lista_recibo_lista_recibo_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/lista-recibo/lista-recibo.component */ "./src/app/components/lista-recibo/lista-recibo.component.ts");


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_14__["CreateComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _components_finanzas_finanzas_component__WEBPACK_IMPORTED_MODULE_15__["FinanzasComponent"],
                _components_menu_grupo_menu_grupo_component__WEBPACK_IMPORTED_MODULE_16__["MenuGrupoComponent"],
                _components_propuestas_propuestas_component__WEBPACK_IMPORTED_MODULE_17__["PropuestasComponent"],
                _components_notificaciones_notificaciones_component__WEBPACK_IMPORTED_MODULE_22__["NotificacionesComponent"],
                _components_join_join_component__WEBPACK_IMPORTED_MODULE_18__["JoinComponent"],
                _components_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_19__["InactiveComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_23__["ModalComponent"],
                _components_personas_personas_component__WEBPACK_IMPORTED_MODULE_27__["PersonasComponent"],
                _components_estado_cuenta_estado_cuenta_component__WEBPACK_IMPORTED_MODULE_28__["EstadoCuentaComponent"],
                _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_29__["WelcomeComponent"],
                _components_lista_deudores_lista_deudores_component__WEBPACK_IMPORTED_MODULE_30__["ListaDeudoresComponent"],
                _components_recibo_recibo_component__WEBPACK_IMPORTED_MODULE_31__["ReciboComponent"],
                _components_lista_recibo_lista_recibo_component__WEBPACK_IMPORTED_MODULE_32__["ListaReciboComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
            ],
            providers: [
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                _services_auth_service_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"],
                _services_data_service__WEBPACK_IMPORTED_MODULE_24__["DataService"],
                _services_modal_service__WEBPACK_IMPORTED_MODULE_26__["ModalService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-self: center;\n    text-align: center;\n    align-items: center;\n}\nh2{\n    margin:1em;\n}\np{\n    color: #635b5b;\n    font-size: 13px;\n    margin-bottom: 1rem;\n    width: 300px;\n}\n.check{\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 24px;\n    line-height: 28px;\n    color: #000000;\n\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n    margin: 0.4em;\n}\nbutton{\n    margin: 1em;\n}\n#Crear{\n    width: 90px;\n    height: 40px;\n    \n    font-family: Roboto;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 18px;\n    line-height: 21px;\n    align-items: center;\n    text-align: center;\n\n    margin: 1em;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7O0lBRWQsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7SUFFbEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5oMntcbiAgICBtYXJnaW46MWVtO1xufVxucHtcbiAgICBjb2xvcjogIzYzNWI1YjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbi5jaGVja3tcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcblxuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gICAgbWFyZ2luOiAwLjRlbTtcbn1cbmJ1dHRvbntcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuI0NyZWFye1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIG1hcmdpbjogMWVtO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <a routerLink=\"/{{this.uid}}\"> <img class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-48.png\" alt=\"cerrar\"></a>\n  <h2 class=\"Title2\">Crear Grupo</h2>\n  <div class=\"empty\"></div>\n</header>\n<div class=\"container\">\n  <form [formGroup]=\"group\">\n      Nombre: <br> <input class=\"textin\" type=\"text\"  formControlName=\"nombre\">\n      <p >Ingresa el nombre de la residencia/urbanización/conjunto...</p>\n      Dirección: <br> <input class=\"textin\" type=\"text\"  formControlName=\"direccion\">\n      <p >Ingresa la dirección del condominio</p>\n      Código: <br> <input class=\"textin\" type=\"text\"  formControlName=\"codigo\">\n      <p >Este es el código que vas a compartir con los residente para que se unan al grupo. Mínimo: 8 carácteres entre letras y numeros.</p>\n      <h2>Agrega tu información de residente:</h2>\n      <form [formGroup]=\"groupUser\">\n          Alícuota: <br> <input class=\"textin\" type=\"text\" placeholder=\"0.00\"  formControlName=\"alicuota\" (keyup)=\"format(this.groupUser.value.alicuota)\" >\n          <p >Ingresa la alícuota correspondiente a tu unidad residencial (porcentaje que pagas del total del condominio)</p>\n          Unidad: <br> <input class=\"textin\" type=\"text\"  placeholder=\"Ejs: A-43, Quinta Jasmin\" formControlName=\"unidad\">\n      </form>\n      <p >Aquí debes ingresar el numero de apartamento/casa de manera de poder distingirla con las demás</p>\n      \n  </form>\n  <button (click)=\"ToDataBase()\"  [disabled]=\"groupUser.invalid\" [disabled]=\"group.invalid\">Crear condominio</button>\n</div>\n  \n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_usuario_grupo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/usuario-grupo */ "./src/app/models/usuario-grupo.ts");








var CreateComponent = /** @class */ (function () {
    function CreateComponent(fb, route, router, flashMensaje, dataService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.dataService = dataService;
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.uid = this.route.snapshot.params['uid'];
        this.group = this.fb.group({
            nombre: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            direccion: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            codigo: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
                ]]
        });
        this.groupUser = this.fb.group({
            alicuota: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9](\.[0-9]+)?$")
                ]],
            unidad: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
    };
    CreateComponent.prototype.format = function (str) {
        if (str.length == 1) {
            this.groupUser.get('alicuota').setValue('0.0' + str);
        }
        if (str.slice(1, 2) == '.' && str.slice(0, 1) == '0' && str.length > 4) {
            var str1;
            str1 = str.slice(2);
            str1 = str1.slice(0, 1) + '.' + str1.slice(1);
            this.groupUser.get('alicuota').setValue(str1);
        }
        if (str.length > 4 && str.slice(0, 1) != '0') {
            this.groupUser.get('alicuota').setValue(str.slice(0, 4));
        }
        if (str.length == 3) {
            var str2;
            str2 = '0.' + str.slice(0, 1) + str.slice(2);
            this.groupUser.get('alicuota').setValue(str2);
        }
    };
    CreateComponent.prototype.ToDataBase = function () {
        var _this = this;
        this.dataService.userGroup = new _models_usuario_grupo__WEBPACK_IMPORTED_MODULE_6__["UsuarioGrupo"];
        this.dataService.userGroup.alicuota = this.groupUser.value.alicuota;
        this.dataService.userGroup.unit = this.groupUser.value.unidad;
        this.dataService.userGroup.uid = localStorage.currentUserID;
        this.dataService.addGrupo(this.group.value).subscribe(function (group) {
            _this.dataService.userGroup.idgrupo = group.idgrupo;
            if (group) {
                localStorage.joinGroup = group;
            }
            _this.dataService.addUserGrupos(_this.dataService.userGroup).subscribe(function (group) {
                _this.dataService.userGroup.idgrupo = group.idgrupo;
                if (group) {
                    _this.router.navigate(['/' + _this.uid]);
                }
            });
        });
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#create, #join{\n    width: 200px;\n    margin: 1rem;\n}\n\nh1{\n    margin: 2em;\n}\n\n#condos{\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 24px;\n    line-height: 28px;\n    color: #000000;\n}\n\n.buttons{\n    display: flex;\n    flex-direction: column;\n}\n\n.nogroup{\n    padding: 3rem;\n    justify-content: center;\n    text-align: center;\n    font-size: 24px;\n}\n\nspan{\n    font-size: 50px;\n    font-weight: bolder;\n}\n\np{\n    color: rgb(212, 200, 200);\n    font-size: 13px;\n    text-align: left;\n}\n\nimg#plus{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NyZWF0ZSwgI2pvaW57XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuaDF7XG4gICAgbWFyZ2luOiAyZW07XG59XG5cbiNjb25kb3N7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vZ3JvdXB7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5zcGFue1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5we1xuICAgIGNvbG9yOiByZ2IoMjEyLCAyMDAsIDIwMCk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5pbWcjcGx1c3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <header>\n    <img class=\"logo\" id=\"plus\" src=\"../../../assets/icons/icons8-más-filled-64.png\" alt=\"+\" (click)=\"openModal('create-join')\">\n    <img class=\"logo\" src=\"../../../assets/icons/Condo.png\" alt=\"logo\" >\n    <a routerLink=\"/\" (click)=\"onClickLogout()\"> <img src=\"../../../assets/icons/icons8-salida-32.png\" alt=\"logout\"></a>\n  </header>\n  <h1 id=\"condos\">Condominios:</h1>\n  <div class=\"nogroup\" *ngIf=\"this.condos.length == 0\"> <h2>No pertences a ningún grupo aún, crea uno o únete a uno en el botón</h2> <span>+</span> </div>\n  <div *ngIf=\"this.condos.length > 0\" class=\"tarjetero\">\n    <div *ngFor=\"let condo of condos; index as i\" >\n      <div class=\"tarjeta\" *ngIf=\"this.condos[i] != undefined\">\n          <a routerLink=\"/{{this.uid}}/menu/{{this.condos[i].idgrupo}}\">\n            <div>\n                <h2>{{condos[i].nombre}}</h2>\n                <p>{{condos[i].direccion}}</p>\n            </div></a>\n            <img class=\"logo\" (click)=\"selectedCondo(condos[i].idgrupo)\" (click)=\"openModal('eliminar')\" src=\"../../../assets/icons/icons8-basura-48.png\" alt=\"Options\">\n      </div>\n    </div>\n  </div>\n<jw-modal id=\"create-join\">\n  <form>\n    <a routerLink=\"/{{this.uid}}/create\"><button id=\"create\">Crea un condominio</button></a> \n    <a routerLink=\"/{{this.uid}}/join\"><button id=\"join\" >Unete a un condominio</button></a> \n  </form>\n</jw-modal>\n<jw-modal id=\"eliminar\">\n  <form>\n    <p id=\"pregunta\">¿Estás seguro que deseas salirte de este condominio? esta acción es irreversible.</p>\n    <div id=\"sino\"> \n      <a><button class=\"boton\" id=\"yesno\" (click)=\"deleteFromGroup()\" (click)=\"closeModal('eliminar')\">Si</button></a> \n      <a><button class=\"boton\" id=\"yesno\" (click)=\"closeModal('eliminar')\" >No</button></a>\n    </div>\n  </form>\n</jw-modal>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service.service */ "./src/app/services/auth.service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_userChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/userChanged */ "./src/app/models/userChanged.ts");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, route, router, modalService, dataService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.dataService = dataService;
        this.condos = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uid = this.route.snapshot.params['uid'];
        this.dataService.getUserGrupos().subscribe(function (condos) {
            _this.condos = condos;
            console.log(_this.condos);
        });
        if (localStorage.joinGroup != undefined) {
            this.condos.push(localStorage.joinGroup);
            localStorage.joinGroup = undefined;
        }
    };
    DashboardComponent.prototype.onClickLogout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    DashboardComponent.prototype.selectedCondo = function (s) {
        this.selected = s;
    };
    DashboardComponent.prototype.deleteFromGroup = function () {
        var _this = this;
        this.userChanged = new _models_userChanged__WEBPACK_IMPORTED_MODULE_6__["UserChanged"];
        this.userChanged.idgrupo = this.selected;
        this.userChanged.uid = this.uid;
        this.dataService.deleteUserGrupos(this.userChanged).subscribe(function (res) {
            if (res) {
                var i = void 0;
                for (var index = 0; index < _this.condos.length; index++) {
                    if (_this.condos[index].idgrupo == _this.selected) {
                        i = index;
                    }
                }
                _this.condos[i] = undefined;
            }
        });
    };
    DashboardComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    DashboardComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/estado-cuenta/estado-cuenta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/estado-cuenta/estado-cuenta.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#balanceVerde{\n    background: #27AE60;\n    display: inline-block;\n    height: 70px;\n}\n#balanceRojo{\n    background: #ED0F0F;\n    display: inline-block;\n    height: 70px;\n}\n#money{\n    color: #eeeeee;\n    align-items: center;\n    display: flex;\n    font-size: 48px;\n    height: 70px;\n    padding-left: 8px;\n}\n#historial{\n    background: #F2F2F2;\n    height: 140px;\n    display: inline-block;\n}\n#mas, #seguro{\n    justify-content: center;\n}\n#pregunta{\n    text-align: center;\n    margin-top: 0.5em;\n}\n.boton{\n    width: 200px;\n    margin: 0.5em;\n}\n#yesno{\n    width: 50px;\n    justify-content: space-between;\n    align-items: center;\n}\n#sino{\n    margin-top: 0.5em;\n}\n#rojo{\n    background: #ED0F0F;\n}\nselect{\n    display: block;\n    width: 300px;\n    height: 45px;\n    background: #FFFFFF;\n    /* Blue 1 */\n    border: 2px solid #2F80ED;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 5px;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 24px;\n    line-height: 28px;\n    color: #000000;\n    box-sizing: border-box;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n    margin: 0.4em;\n    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),\n      linear-gradient(to bottom, #ffffff 0%,#ffffff 100%);\n    background-repeat: no-repeat, repeat;\n    background-position: right .7em top 50%, 0 0;\n    background-size: .65em auto, 100%;\n}\nselect::-ms-expand {\n    display: none;\n}\nselect option {\n    font-weight:normal;\n}\n@media screen and (max-width:505px){\n    #money{\n        font-size: 40px;\n    }\n\n   #gasto{\n        zoom: 80%;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lc3RhZG8tY3VlbnRhL2VzdGFkby1jdWVudGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2I7eURBQ3FEO0lBQ3JELG9DQUFvQztJQUNwQyw0Q0FBNEM7SUFDNUMsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7R0FFRDtRQUNLLFNBQVM7SUFDYjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXN0YWRvLWN1ZW50YS9lc3RhZG8tY3VlbnRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFsYW5jZVZlcmRle1xuICAgIGJhY2tncm91bmQ6ICMyN0FFNjA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogNzBweDtcbn1cbiNiYWxhbmNlUm9qb3tcbiAgICBiYWNrZ3JvdW5kOiAjRUQwRjBGO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG4jbW9uZXl7XG4gICAgY29sb3I6ICNlZWVlZWU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbiNoaXN0b3JpYWx7XG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI21hcywgI3NlZ3Vyb3tcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3ByZWd1bnRhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuLmJvdG9ue1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDAuNWVtO1xufVxuXG4jeWVzbm97XG4gICAgd2lkdGg6IDUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNzaW5ve1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4jcm9qb3tcbiAgICBiYWNrZ3JvdW5kOiAjRUQwRjBGO1xufVxuXG5zZWxlY3R7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIC8qIEJsdWUgMSAqL1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyRjgwRUQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbiAgICBtYXJnaW46IDAuNGVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB3aWR0aCUzRCUyMjI5Mi40JTIyJTIwaGVpZ2h0JTNEJTIyMjkyLjQlMjIlM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzAwN0NCMiUyMiUyMGQlM0QlMjJNMjg3JTIwNjkuNGExNy42JTIwMTcuNiUyMDAlMjAwJTIwMC0xMy01LjRIMTguNGMtNSUyMDAtOS4zJTIwMS44LTEyLjklMjA1LjRBMTcuNiUyMDE3LjYlMjAwJTIwMCUyMDAlMjAwJTIwODIuMmMwJTIwNSUyMDEuOCUyMDkuMyUyMDUuNCUyMDEyLjlsMTI4JTIwMTI3LjljMy42JTIwMy42JTIwNy44JTIwNS40JTIwMTIuOCUyMDUuNHM5LjItMS44JTIwMTIuOC01LjRMMjg3JTIwOTVjMy41LTMuNSUyMDUuNC03LjglMjA1LjQtMTIuOCUyMDAtNS0xLjktOS4yLTUuNS0xMi44eiUyMiUyRiUzRSUzQyUyRnN2ZyUzRScpLFxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiAwJSwjZmZmZmZmIDEwMCUpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAuN2VtIHRvcCA1MCUsIDAgMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IC42NWVtIGF1dG8sIDEwMCU7XG59XG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5zZWxlY3Qgb3B0aW9uIHtcbiAgICBmb250LXdlaWdodDpub3JtYWw7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTA1cHgpe1xuICAgICNtb25leXtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cblxuICAgI2dhc3Rve1xuICAgICAgICB6b29tOiA4MCU7XG4gICAgfVxuXG59Il19 */"

/***/ }),

/***/ "./src/app/components/estado-cuenta/estado-cuenta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/estado-cuenta/estado-cuenta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <a routerLink=\"/{{this.uid}}/finanzas/{{this.idgrupo}}/\"><img  class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-48.png\" alt=\"cerrar\"></a>\n  <h2 class=\"Title2\">Estado de Cuenta</h2>\n <img *ngIf=\"admin\" class=\"logo\" src=\"../../../assets/icons/icons8-más-filled-64.png\" alt=\"mas\" (click)=\"openModal('mas')\">\n <div *ngIf=\"!admin\" class=\"empty\"> </div>\n</header>\n<div class=\"tarjetero\">\n  \n  <form [formGroup]=\"mes\">\n      <a *ngIf=\"admin\" ><button *ngIf=\"this.gastosTotal > 0\"  class=\"boton\"  (click)=\"openModal('seguro')\" >Cierre de mes</button></a> \n      <h2>Ver Estado de cuenta de:</h2>\n      <select id=\"mes\" formControlName=\"month\" (change)=\"selectedYM()\" (change)=\"getEntradas()\" >\n      <option value=\"01\">Enero</option>\n      <option value=\"02\">Febrero</option>\n      <option value=\"03\">Marzo</option>\n      <option value=\"04\">Abril</option>\n      <option value=\"05\">Mayo</option>\n      <option value=\"06\">Junio</option>\n      <option value=\"07\">Julio</option>\n      <option value=\"08\">Agosto</option>\n      <option value=\"09\">Septiembre</option>\n      <option value=\"10\">Octubre</option>\n      <option value=\"11\">Noviembre</option>\n      <option value=\"12\">Diciembre</option>\n    </select>\n  </form>\n  <h2>Balance</h2>\n  <div *ngIf=\"positivo\" class=\"tarjeta\" id=\"balanceVerde\">\n      <h2 id=\"money\"><div class=\"empty\"> </div>Bs.{{this.balance}}</h2>\n  </div>\n  <div *ngIf=\"!positivo\" class=\"tarjeta\" id=\"balanceRojo\">\n    <h2 id=\"money\">Bs.{{this.balance}}</h2>\n</div>\n  <h2>Historial</h2>\n  <div *ngFor=\"let entrada of pagos; index as i \" class=\"tarjeta\" id=\"historial\">\n    <div id=\"nameDate\">\n      <p id=\"contenido\">Transacción ID: {{pagos[i].ref}}</p>\n      <p id=\"contenido\">{{pagos[i].date}}</p>\n    </div>\n    <p id=\"contenido\">Pago mensualidad {{pagos[i].unit}}</p>\n    <p class=\"monto\" >Bs.{{pagos[i].monto}}</p>\n  </div>\n  <div *ngFor=\"let entrada of gastos; index as i \" class=\"tarjeta\" id=\"historial\">\n    <div id=\"nameDate\">\n      <p id=\"contenido\">Transacción ID: {{gastos[i].id}}</p>\n      <p id=\"contenido\">Fecha: {{gastos[i].month}}/{{gastos[i].year}}</p>\n    </div>\n    <p id=\"contenido\">{{gastos[i].desc}}</p>\n    <p class=\"monto\" id=\"rojo\">Bs.{{gastos[i].monto}}</p>\n  </div>\n</div>\n<jw-modal id=\"mas\">\n  <form>\n    <a><button class=\"boton\" (click)=\"openModal('gasto')\" (click)=\"closeModal('mas')\">Agregar nuevo gasto</button></a> \n  </form>\n</jw-modal>\n<jw-modal id=\"seguro\">\n  <form>\n    <p id=\"pregunta\">¿Estás seguro que deseas cerrar mes? esta acción es irreversible.</p>\n    <div id=\"sino\"> \n      <a><button class=\"boton\" id=\"yesno\" (click)=\"closeModal('seguro')\" (click)=\"cierreMes()\" >Si</button></a> \n      <a><button class=\"boton\" id=\"yesno\" (click)=\"closeModal('seguro')\" >No</button></a>\n    </div>\n  </form>\n</jw-modal>\n<jw-modal id=\"gasto\">\n  <header class=\"hModal\">\n    <div class=\"empty\"> </div>\n    <h2 class=\"Title2\">Gasto</h2>\n    <div class=\"empty\"> </div>\n  </header>\n  <form [formGroup]=\"gasto\">\n    Monto: <br> <input type=\"text\" placeholder=\"0.00\" (keyup)=\"format(this.gasto.value.monto)\" formControlName=\"monto\">\n    Descripción: <br> <input type=\"text\"  formControlName=\"desc\">\n    Año: <select id=\"mes\" formControlName=\"year\">\n      <option value=\"{{this.lastYear}}\">{{this.lastYear}}</option>\n      <option value=\"{{this.currentYear}}\">{{this.currentYear}}</option>\n    </select>\n    Mes: <select id=\"mes\" formControlName=\"month\">\n      <option value=\"1\">Enero</option>\n      <option value=\"2\">Febrero</option>\n      <option value=\"3\">Marzo</option>\n      <option value=\"4\">Abril</option>\n      <option value=\"5\">Mayo</option>\n      <option value=\"6\">Junio</option>\n      <option value=\"7\">Julio</option>\n      <option value=\"8\">Agosto</option>\n      <option value=\"9\">Septiembre</option>\n      <option value=\"10\">Octubre</option>\n      <option value=\"11\">Noviembre</option>\n      <option value=\"12\">Diciembre</option>\n    </select>\n    <button class=\"button\"  [disabled]=\"gasto.invalid\" id=\"confirm\" (click)=\"this.confirmGasto('gasto')\">Confirmar</button>\n  </form>\n</jw-modal>\n"

/***/ }),

/***/ "./src/app/components/estado-cuenta/estado-cuenta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/estado-cuenta/estado-cuenta.component.ts ***!
  \*********************************************************************/
/*! exports provided: EstadoCuentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoCuentaComponent", function() { return EstadoCuentaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _models_recibos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/recibos */ "./src/app/models/recibos.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EstadoCuentaComponent = /** @class */ (function () {
    function EstadoCuentaComponent(route, modalService, dataService, fb, router) {
        this.route = route;
        this.modalService = modalService;
        this.dataService = dataService;
        this.fb = fb;
        this.router = router;
        this.gastos = [];
        this.pagos = [];
        this.recibos = [];
        this.positivo = true;
        this.admin = false;
    }
    EstadoCuentaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uid = this.route.snapshot.params['uid'];
        this.idgrupo = this.route.snapshot.params['idgrupo'];
        this.dataService.getUserGrupo(this.idgrupo).subscribe(function (user) {
            _this.admin = user.admin;
        });
        var fecha = new Date();
        this.currentYear = fecha.getFullYear();
        this.lastYear = this.currentYear - 1;
        this.gasto = this.fb.group({
            desc: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
                ]],
            monto: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("[-+]?[0-9]*[.]?[0-9]+")
                ]],
            month: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
                ]],
            year: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                ]]
        });
        this.mes = this.fb.group({
            month: ['', []]
        });
    };
    EstadoCuentaComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    EstadoCuentaComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    EstadoCuentaComponent.prototype.selectedYM = function () {
        var fecha = new Date();
        this.selectedMonth = parseInt(this.mes.value.month);
        console.log(this.selectedMonth);
        if (fecha.getMonth() + 1 >= this.selectedMonth) {
            this.selectedYear = fecha.getFullYear();
        }
        else {
            this.selectedYear = fecha.getFullYear() - 1;
        }
        console.log(this.selectedYear);
    };
    EstadoCuentaComponent.prototype.getEntradas = function () {
        var _this = this;
        this.dataService.getPagos(this.idgrupo, this.mes.value.month, this.selectedYear).subscribe(function (pagos) {
            _this.pagos = pagos;
            console.log(pagos);
            _this.pagosTotal = 0;
            for (var index = 0; index < _this.pagos.length; index++) {
                _this.pagosTotal = _this.pagosTotal + parseFloat(_this.pagos[index].monto);
            }
            _this.dataService.getGastos(_this.idgrupo, _this.selectedMonth, _this.selectedYear).subscribe(function (gastos) {
                _this.gastos = gastos;
                console.log(gastos);
                _this.gastosTotal = 0;
                for (var index = 0; index < _this.gastos.length; index++) {
                    _this.gastosTotal = _this.gastosTotal + parseFloat(_this.gastos[index].monto);
                }
                _this.balance = (_this.pagosTotal - _this.gastosTotal).toFixed(2);
                if ((_this.pagosTotal - _this.gastosTotal) >= 0) {
                    _this.positivo = true;
                }
                else {
                    _this.positivo = false;
                }
            });
        });
    };
    EstadoCuentaComponent.prototype.confirmGasto = function (id) {
        var _this = this;
        this.Gasto = this.gasto.value;
        this.Gasto.uid = this.uid;
        this.Gasto.idgrupo = this.idgrupo;
        this.dataService.addGasto(this.Gasto).subscribe(function (res) {
            console.log('res:', res);
            console.log('this.mes.value.month', _this.mes.value.month);
            console.log('this.Gasto.month', _this.Gasto.month);
            if (res && parseInt(_this.mes.value.month) == _this.Gasto.month) {
                _this.gastos.push(res);
                _this.balance = _this.balance - parseInt(res.monto);
                if (_this.balance < 0) {
                    _this.positivo = false;
                }
                else {
                    _this.positivo = true;
                }
            }
        });
        this.closeModal(id);
    };
    EstadoCuentaComponent.prototype.format = function (str) {
        if (str.length == 1) {
            this.gasto.get('monto').setValue('0.0' + str);
        }
        if (str.slice(1, 2) == '.' && str.slice(0, 1) == '0' && str.length > 4) {
            var str1;
            str1 = str.slice(2);
            str1 = str1.slice(0, 1) + '.' + str1.slice(1);
            this.gasto.get('monto').setValue(str1);
        }
        if (str.length > 4 && str.slice(0, 1) != '0') {
            var str3;
            str3 = str.slice(0, str.length - 4) + str.slice(str.length - 3);
            str3 = str3.slice(0, str3.length - 2) + '.' + str3.slice(str3.length - 2);
            this.gasto.get('monto').setValue(str3);
        }
        if (str.slice(str.length - 2, str.length - 1) == '.') {
            var str4;
            str4 = str.slice(0, str.length - 2) + str.slice(str.length - 1);
            str4 = str4.slice(0, str4.length - 2) + '.' + str4.slice(str4.length - 2);
            this.gasto.get('monto').setValue(str4);
        }
        if (str.length == 3) {
            var str2;
            str2 = '0.' + str.slice(0, 1) + str.slice(2);
            this.gasto.get('monto').setValue(str2);
        }
    };
    EstadoCuentaComponent.prototype.cierreMes = function () {
        var _this = this;
        var usuarios = [];
        this.dataService.getUserAlicuota(this.idgrupo).subscribe(function (users) {
            console.log(users);
            usuarios = users;
            _this.recibos = new Array(usuarios.length);
            for (var index = 0; index < usuarios.length; index++) {
                _this.recibos[index] = new _models_recibos__WEBPACK_IMPORTED_MODULE_4__["Recibos"];
                _this.recibos[index].idgrupo = _this.idgrupo;
            }
            for (var index = 0; index < usuarios.length; index++) {
                _this.recibos[index].uid = usuarios[index].usuarioUid;
                _this.recibos[index].monto = (_this.gastosTotal * (parseFloat(usuarios[index].alicuota) / 100)).toFixed(2);
                _this.recibos[index].month = _this.selectedMonth;
                _this.recibos[index].year = _this.selectedYear;
            }
            console.log(_this.recibos);
            var _loop_1 = function (index) {
                _this.dataService.addRecibos(_this.recibos[index]).subscribe(function (res) {
                    if (res && (index == _this.recibos.length - 1)) {
                        _this.router.navigate(['/' + _this.uid + '/finanzas/' + _this.idgrupo]);
                    }
                });
            };
            for (var index = 0; index < _this.recibos.length; index++) {
                _loop_1(index);
            }
        });
    };
    EstadoCuentaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estado-cuenta',
            template: __webpack_require__(/*! ./estado-cuenta.component.html */ "./src/app/components/estado-cuenta/estado-cuenta.component.html"),
            styles: [__webpack_require__(/*! ./estado-cuenta.component.css */ "./src/app/components/estado-cuenta/estado-cuenta.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EstadoCuentaComponent);
    return EstadoCuentaComponent;
}());



/***/ }),

/***/ "./src/app/components/finanzas/finanzas.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/finanzas/finanzas.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#balanceRojo{\n    background: #B10000;\n    display: inline-block;\n    height: 70px;\n}\n\n#balanceVerde{\n    background: #27AE60;\n    display: inline-block;\n    height: 70px;\n}\n\n#generico{\n    background: #F2F2F2;;\n}\n\n#no{\n    display: flex;           \n    flex-direction: column;  \n    justify-content: center; \n    align-items: center;\n    background: #F2F2F2; \n}\n\n#money{\n    color: #eeeeee;\n    align-items: center;\n    display: flex;\n    font-size: 48px;\n    height: 70px;\n    padding-left: 8px;\n}\n\n#recibo{\n    background: #F2F2F2;\n    min-height: 105px;\n    display: inline-block;\n}\n\n#debt{\n    background: #B10000;\n}\n\n#pago{\n    background: #27AE60;\n}\n\n#payment{\n    height: 30px;\n    width: 280px;\n    color: #eeeeee;\n    padding-left: 5px;\n    padding-right: 5px;\n    margin: 0;\n}\n\n#cuadro{\n    border-radius: 5px; \n    background: rgb(155, 161, 192);\n    border: solid 1px #000000;\n    min-height: 200px;\n    margin: 1em;\n}\n\ninput{\n    width: 280px;\n    height: 40px;\n    background: #FFFFFF;\n    /* Blue 1 */\n    border: 2px solid #2F80ED;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 5px;\n\n}\n\nselect{\n    display: block;\n    width: 300px;\n    height: 45px;\n    background: #FFFFFF;\n    /* Blue 1 */\n    border: 2px solid #2F80ED;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 5px;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 24px;\n    line-height: 28px;\n    color: #000000;\n    box-sizing: border-box;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n    margin: 0.4em;\n    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),\n      linear-gradient(to bottom, #ffffff 0%,#ffffff 100%);\n    background-repeat: no-repeat, repeat;\n    background-position: right .7em top 50%, 0 0;\n    background-size: .65em auto, 100%;\n}\n\nselect::-ms-expand {\n    display: none;\n}\n\nselect option {\n    font-weight:normal;\n}\n\n@media screen and (max-width:505px){\n    #payment{\n       width: 100px;\n    }\n\n    #pay{\n        zoom: 80%;\n    }\n\n    #money{\n        font-size: 36px;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maW5hbnphcy9maW5hbnphcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDJDQUEyQztJQUMzQyxrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2I7eURBQ3FEO0lBQ3JELG9DQUFvQztJQUNwQyw0Q0FBNEM7SUFDNUMsaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO09BQ0csWUFBWTtJQUNmOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmluYW56YXMvZmluYW56YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWxhbmNlUm9qb3tcbiAgICBiYWNrZ3JvdW5kOiAjQjEwMDAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG5cbiNiYWxhbmNlVmVyZGV7XG4gICAgYmFja2dyb3VuZDogIzI3QUU2MDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuXG4jZ2VuZXJpY297XG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjs7XG59XG5cbiNub3tcbiAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgICAgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7IFxufVxuXG4jbW9uZXl7XG4gICAgY29sb3I6ICNlZWVlZWU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbiNyZWNpYm97XG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgICBtaW4taGVpZ2h0OiAxMDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNkZWJ0e1xuICAgIGJhY2tncm91bmQ6ICNCMTAwMDA7XG59XG5cbiNwYWdve1xuICAgIGJhY2tncm91bmQ6ICMyN0FFNjA7XG59XG5cbiNwYXltZW50e1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgY29sb3I6ICNlZWVlZWU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuI2N1YWRyb3tcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIGJhY2tncm91bmQ6IHJnYigxNTUsIDE2MSwgMTkyKTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDAwMDAwO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbjogMWVtO1xufVxuaW5wdXR7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIC8qIEJsdWUgMSAqL1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyRjgwRUQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbn1cbnNlbGVjdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgLyogQmx1ZSAxICovXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJGODBFRDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuICAgIG1hcmdpbjogMC40ZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHdpZHRoJTNEJTIyMjkyLjQlMjIlMjBoZWlnaHQlM0QlMjIyOTIuNCUyMiUzRSUzQ3BhdGglMjBmaWxsJTNEJTIyJTIzMDA3Q0IyJTIyJTIwZCUzRCUyMk0yODclMjA2OS40YTE3LjYlMjAxNy42JTIwMCUyMDAlMjAwLTEzLTUuNEgxOC40Yy01JTIwMC05LjMlMjAxLjgtMTIuOSUyMDUuNEExNy42JTIwMTcuNiUyMDAlMjAwJTIwMCUyMDAlMjA4Mi4yYzAlMjA1JTIwMS44JTIwOS4zJTIwNS40JTIwMTIuOWwxMjglMjAxMjcuOWMzLjYlMjAzLjYlMjA3LjglMjA1LjQlMjAxMi44JTIwNS40czkuMi0xLjglMjAxMi44LTUuNEwyODclMjA5NWMzLjUtMy41JTIwNS40LTcuOCUyMDUuNC0xMi44JTIwMC01LTEuOS05LjItNS41LTEyLjh6JTIyJTJGJTNFJTNDJTJGc3ZnJTNFJyksXG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmIDAlLCNmZmZmZmYgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC43ZW0gdG9wIDUwJSwgMCAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogLjY1ZW0gYXV0bywgMTAwJTtcbn1cbnNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbnNlbGVjdCBvcHRpb24ge1xuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MDVweCl7XG4gICAgI3BheW1lbnR7XG4gICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cblxuICAgICNwYXl7XG4gICAgICAgIHpvb206IDgwJTtcbiAgICB9XG5cbiAgICAjbW9uZXl7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/finanzas/finanzas.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/finanzas/finanzas.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <a routerLink=\"/{{this.uid}}/menu/{{this.idgrupo}}\"><img class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-48.png\" alt=\"USER\"> </a>\n  <h2 class=\"Title2\">Finanzas</h2>\n  <div class=\"empty\"> </div>\n</header>\n<div class=\"tarjetero\">\n  <a routerLink=\"/{{this.uid}}/estadoCuenta/{{this.idgrupo}}/\">\n    <div id=\"generico\" class=\"tarjeta\">\n      <h2>Estado de Cuenta del Condominio</h2>\n    </div>\n  </a>\n  <a routerLink=\"/{{this.uid}}/listaDeudores/{{this.idgrupo}}/\">\n    <div id=\"generico\" class=\"tarjeta\">\n      <h2>Lista de Acreedores y Deudores</h2>\n    </div> \n  </a>\n  <h2 class=\"Title2\">Deuda actual</h2>\n  <div *ngIf=\"this.deudaActual == '0'\" id=\"balanceVerde\" class=\"tarjeta\">\n      <h2 id=\"money\">Bs. {{this.stringDeuda}}</h2>\n  </div>\n  <div *ngIf=\"this.deudaActual != '0'\" id=\"balanceRojo\" class=\"tarjeta\">\n      <h2 id=\"money\">Bs. {{this.stringDeuda}}</h2>\n  </div>\n  <h2 class=\"Title2\">Mis Recibos recientes</h2>\n  <div  class=\"tarjeta\" id=\"no\" *ngIf=\"recibos.length == 0\">\n    <p id=\"no\">Usted aún no posee recibos</p> \n  </div>\n  <div *ngFor=\"let recibo of recibos; index as i\" class=\"tarjeta\" id=\"recibo\">\n    <div id=\"nameDate\">\n      <p id=\"contenido\">Fecha: {{recibos[i].month}}/{{recibos[i].year}} </p> \n      <button id=\"payment\" *ngIf=\"recibos[i].pagado == 0\" (click)=\"selectRecibo(recibos[i].id,i)\" (click)=\"openModal('pay')\">Pagar</button>\n    </div>\n      <p class=\"monto\" *ngIf=\"recibos[i].pagado == 1\" id=\"pago\">Bs. {{recibos[i].monto}}</p>\n      <p class=\"monto\" *ngIf=\"recibos[i].pagado == 0\" id=\"debt\">Bs. {{recibos[i].monto}}</p>\n  </div>\n  <h2 class=\"Title2\">Mis Pagos recientes</h2>\n  <div  class=\"tarjeta\" id=\"no\" *ngIf=\"pagos.length == 0\">\n    <p id=\"no\">Usted aún no ha realizado pagos</p> \n  </div>\n  <div *ngFor=\"let pago of pagos; index as i\" class=\"tarjeta\" id=\"recibo\">\n    <p id=\"contenido\">Fecha: {{pagos[i].date}}</p>\n    <p id=\"contenido\">Núm referencia: {{pagos[i].ref}}</p>\n    <p class=\"monto\" id=\"pago\">Bs. {{pagos[i].monto}}</p>\n  </div>\n</div>\n<jw-modal id=\"pay\">\n    <header class=\"hModal\">\n        <div class=\"empty\"> </div>\n        <h2 class=\"Title2\">Pagar</h2>\n        <div class=\"empty\"> </div>\n    </header>\n    <form [formGroup]=\"pago\">\n        Número de referencia: <br> <input type=\"text\"  formControlName=\"ref\">\n        Banco: <br> <select formControlName=\"banco\">\n          <option value=\"2\">Banco Provincial</option>\n          <option value=\"12\">Banesco</option>\n          <option value=\"22\">Mercantil</option>\n          <option value=\"32\">Banplus</option>\n        </select>\n        Monto: <br> <input type=\"text\"  placeholder=\"0.00\" (keyup)=\"format(this.pago.value.monto)\" formControlName=\"monto\" >\n        Fecha: <br> <input type=\"date\" formControlName=\"date\">\n        <button class=\"button\" id=\"confirm\"   [disabled]=\"pago.invalid\"  (click)=\"this.confirmPayment('pay')\">Confirmar</button>\n    </form>\n  </jw-modal>\n"

/***/ }),

/***/ "./src/app/components/finanzas/finanzas.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/finanzas/finanzas.component.ts ***!
  \***********************************************************/
/*! exports provided: FinanzasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanzasComponent", function() { return FinanzasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_recibos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/recibos */ "./src/app/models/recibos.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");







var FinanzasComponent = /** @class */ (function () {
    function FinanzasComponent(route, modalService, fb, dataService) {
        this.route = route;
        this.modalService = modalService;
        this.fb = fb;
        this.dataService = dataService;
        this.recibos = [];
        this.pagos = [];
    }
    FinanzasComponent.prototype.ngOnInit = function () {
        this.uid = this.route.snapshot.params['uid'];
        this.idgrupo = this.route.snapshot.params['idgrupo'];
        this.pago = this.fb.group({
            ref: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]],
            monto: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[-+]?[0-9]*[.]?[0-9]+")
                ]],
            date: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]],
            banco: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]]
        });
        this.getRecibos();
        this.getPagos();
    };
    FinanzasComponent.prototype.format = function (str) {
        if (str.length == 1) {
            this.pago.get('monto').setValue('0.0' + str);
        }
        if (str.slice(1, 2) == '.' && str.slice(0, 1) == '0' && str.length > 4) {
            var str1;
            str1 = str.slice(2);
            str1 = str1.slice(0, 1) + '.' + str1.slice(1);
            this.pago.get('monto').setValue(str1);
        }
        if (str.length > 4 && str.slice(0, 1) != '0') {
            var str3;
            str3 = str.slice(0, str.length - 4) + str.slice(str.length - 3);
            str3 = str3.slice(0, str3.length - 2) + '.' + str3.slice(str3.length - 2);
            this.pago.get('monto').setValue(str3);
        }
        if (str.slice(str.length - 2, str.length - 1) == '.') {
            var str4;
            str4 = str.slice(0, str.length - 2) + str.slice(str.length - 1);
            str4 = str4.slice(0, str4.length - 2) + '.' + str4.slice(str4.length - 2);
            this.pago.get('monto').setValue(str4);
        }
        if (str.length == 3) {
            var str2;
            str2 = '0.' + str.slice(0, 1) + str.slice(2);
            this.pago.get('monto').setValue(str2);
        }
    };
    FinanzasComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    FinanzasComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    FinanzasComponent.prototype.confirmPayment = function (id) {
        var _this = this;
        this.Pago = this.pago.value;
        this.Pago.uid = this.uid;
        this.Pago.idgrupo = this.idgrupo;
        this.Pago.recibo = this.currentPago;
        this.idRecibo = new _models_recibos__WEBPACK_IMPORTED_MODULE_5__["Recibos"];
        this.idRecibo.id = this.currentPago;
        this.dataService.addPago(this.Pago).subscribe(function (pago) {
            if (pago) {
                _this.pagos.push(pago);
                _this.recibos[_this.currentRecibo].pagado = 1;
                _this.deudaActual = _this.deudaActual - parseFloat(_this.recibos[_this.currentRecibo].monto);
                _this.stringDeuda = _this.deudaActual.toFixed(2);
                _this.dataService.updateRecibo(_this.idRecibo).subscribe();
            }
        });
        this.closeModal(id);
    };
    FinanzasComponent.prototype.getRecibos = function () {
        var _this = this;
        this.deudaActual = 0;
        this.dataService.getRecibos(this.idgrupo, this.uid).subscribe(function (recibos) {
            _this.recibos = recibos;
            for (var index = 0; index < _this.recibos.length; index++) {
                if (!_this.recibos[index].pagado) {
                    _this.deudaActual = _this.deudaActual + parseFloat(_this.recibos[index].monto);
                }
            }
            _this.stringDeuda = _this.deudaActual.toFixed(2);
        });
    };
    FinanzasComponent.prototype.getPagos = function () {
        var _this = this;
        this.dataService.getPagosUser(this.idgrupo, this.uid).subscribe(function (pagos) {
            _this.pagos = pagos;
        });
    };
    FinanzasComponent.prototype.selectRecibo = function (id, index) {
        this.currentPago = id;
        this.currentRecibo = index;
    };
    FinanzasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finanzas',
            template: __webpack_require__(/*! ./finanzas.component.html */ "./src/app/components/finanzas/finanzas.component.html"),
            styles: [__webpack_require__(/*! ./finanzas.component.css */ "./src/app/components/finanzas/finanzas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], FinanzasComponent);
    return FinanzasComponent;
}());



/***/ }),

/***/ "./src/app/components/inactive/inactive.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/inactive/inactive.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nform{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    font-weight: 300;\n    padding: 3rem;\n    text-align: center;\n\n\n}\n.image{\n    margin: 1rem;\n    width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmFjdGl2ZS9pbmFjdGl2ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCOzs7QUFHdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmFjdGl2ZS9pbmFjdGl2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblxufVxuLmltYWdle1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB3aWR0aDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/inactive/inactive.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/inactive/inactive.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <a routerLink=\"/{{this.uid}}/menu/{{this.idgrupo}}\"> <img class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-48.png\" alt=\"cerrar\"></a>\n  <h2 >Función Inactiva</h2>\n  <div class=\"empty\"> </div>\n</header>\n<form >\n    \n  Lo sentimos, la funcionalidad a la que intenta acceder no está disponible, esta estará disponible en próximas versiones de la aplicación\n\n  <img class=\"image\" src=\"../../../assets/icons/inactive.jpg\">\n\n</form>\n\n"

/***/ }),

/***/ "./src/app/components/inactive/inactive.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/inactive/inactive.component.ts ***!
  \***********************************************************/
/*! exports provided: InactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactiveComponent", function() { return InactiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var InactiveComponent = /** @class */ (function () {
    function InactiveComponent(route) {
        this.route = route;
    }
    InactiveComponent.prototype.ngOnInit = function () {
        this.uid = this.route.snapshot.params['uid'];
        this.idgrupo = this.route.snapshot.params['idgrupo'];
    };
    InactiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inactive',
            template: __webpack_require__(/*! ./inactive.component.html */ "./src/app/components/inactive/inactive.component.html"),
            styles: [__webpack_require__(/*! ./inactive.component.css */ "./src/app/components/inactive/inactive.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], InactiveComponent);
    return InactiveComponent;
}());



/***/ }),

/***/ "./src/app/components/join/join.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/join/join.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    padding-top: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    text-align: center;\n    flex-direction: column;\n}\n\nh2{\n    margin:1em;\n}\n\np{\n    color: #635b5b;\n    font-size: 13px;\n    margin-bottom: 1rem;\n    width: 300px;\n}\n\n.empty{\n    width: 42px;\n    height: 49px;\n}\n\n#OK{\n    width: 60px;\n    height: 40px;\n    margin: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2luL2pvaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFLQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9qb2luL2pvaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaDJ7XG4gICAgbWFyZ2luOjFlbTtcbn1cbnB7XG4gICAgY29sb3I6ICM2MzViNWI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuLmVtcHR5e1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNDlweDtcbn1cblxuXG5cblxuI09Le1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDFlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/join/join.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/join/join.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <a routerLink=\"/{{this.uid}}\"> <img class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-48.png\" alt=\"cerrar\"></a>\n  <h2 class=\"Title2\">Unirse a un Grupo</h2>\n  <div class=\"empty\"> </div>\n</header>\n<form class=\"container\"  [formGroup]=\"join\">\n  Código: <input class=\"textin\" type=\"text\" formControlName=\"codigo\">\n  <p id=\"texto\">Pregúntale a un miembro de tu Junta de Condominio o Asociación de Vecinos el código del grupo</p> \n  <h2>Agrega tu información de residente:</h2>\n  Alícuota: <br> <input class=\"textin\" type=\"text\" placeholder=\"0.00\" formControlName=\"alicuota\" (keyup)=\"format(this.join.value.alicuota)\">\n  <p >Ingresa la alícuota correspondiente a tu unidad residencial (porcentaje que pagas del total del condominio)</p>\n  Unidad: <br> <input class=\"textin\" type=\"text\" placeholder=\"Ejs: A-43, Quinta Jasmin\" formControlName=\"unit\">\n  <p >Aquí debes ingresar el numero de apartamento/casa de manera de poder distingirla con las demás</p>\n  <button (click)=\"ToDataBase()\" [disabled]=\"join.invalid\" id=\"OK\">OK</button>\n</form>\n\n   \n\n\n"

/***/ }),

/***/ "./src/app/components/join/join.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/join/join.component.ts ***!
  \***************************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_usuario_grupo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/usuario-grupo */ "./src/app/models/usuario-grupo.ts");








var JoinComponent = /** @class */ (function () {
    function JoinComponent(fb, route, router, flashMensaje, dataService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.dataService = dataService;
    }
    JoinComponent.prototype.ngOnInit = function () {
        this.uid = this.route.snapshot.params['uid'];
        this.join = this.fb.group({
            codigo: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            alicuota: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9](\.[0-9]+)?$")
                ]],
            unit: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
    };
    JoinComponent.prototype.format = function (str) {
        if (str.length == 1) {
            this.join.get('alicuota').setValue('0.0' + str);
        }
        if (str.slice(1, 2) == '.' && str.slice(0, 1) == '0' && str.length > 4) {
            var str1;
            str1 = str.slice(2);
            str1 = str1.slice(0, 1) + '.' + str1.slice(1);
            this.join.get('alicuota').setValue(str1);
        }
        if (str.length > 4 && str.slice(0, 1) != '0') {
            this.join.get('alicuota').setValue(str.slice(0, 4));
        }
        if (str.length == 3) {
            var str2;
            str2 = '0.' + str.slice(0, 1) + str.slice(2);
            this.join.get('alicuota').setValue(str2);
        }
    };
    JoinComponent.prototype.ToDataBase = function () {
        var _this = this;
        this.dataService.userGroup = new _models_usuario_grupo__WEBPACK_IMPORTED_MODULE_6__["UsuarioGrupo"];
        this.dataService.userGroup.codigo = this.join.value.codigo;
        this.dataService.userGroup.alicuota = this.join.value.alicuota;
        this.dataService.userGroup.unit = this.join.value.unit;
        this.dataService.userGroup.uid = localStorage.currentUserID;
        this.dataService.joinGroup(this.dataService.userGroup).subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/' + _this.uid]);
            }
        });
    };
    JoinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-join',
            template: __webpack_require__(/*! ./join.component.html */ "./src/app/components/join/join.component.html"),
            styles: [__webpack_require__(/*! ./join.component.css */ "./src/app/components/join/join.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], JoinComponent);
    return JoinComponent;
}());



/***/ }),

/***/ "./src/app/components/lista-deudores/lista-deudores.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/lista-deudores/lista-deudores.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#deuda{\n    background: #F2F2F2;\n    height: 140px;\n    display: inline-block;\n}\n\n#debt{\n    background: #B10000;\n}\n\n#noDebt{\n    background: #27AE60;\n}\n\nselect{\n    display: block;\n    width: 300px;\n    height: 45px;\n    background: #FFFFFF;\n    /* Blue 1 */\n    border: 2px solid #2F80ED;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 5px;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 24px;\n    line-height: 28px;\n    color: #000000;\n    box-sizing: border-box;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n    margin: 0.4em;\n    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),\n      linear-gradient(to bottom, #ffffff 0%,#ffffff 100%);\n    background-repeat: no-repeat, repeat;\n    background-position: right .7em top 50%, 0 0;\n    background-size: .65em auto, 100%;\n}\n\nselect::-ms-expand {\n    display: none;\n}\n\nselect option {\n    font-weight:normal;\n}\n\n@media screen and (max-width:505px){\n    #noDebt, #debt{\n        font-size: 28px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0YS1kZXVkb3Jlcy9saXN0YS1kZXVkb3Jlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYjt5REFDcUQ7SUFDckQsb0NBQW9DO0lBQ3BDLDRDQUE0QztJQUM1QyxpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3RhLWRldWRvcmVzL2xpc3RhLWRldWRvcmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGV1ZGF7XG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI2RlYnR7XG4gICAgYmFja2dyb3VuZDogI0IxMDAwMDtcbn1cblxuI25vRGVidHtcbiAgICBiYWNrZ3JvdW5kOiAjMjdBRTYwO1xufVxuXG5zZWxlY3R7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIC8qIEJsdWUgMSAqL1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyRjgwRUQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbiAgICBtYXJnaW46IDAuNGVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB3aWR0aCUzRCUyMjI5Mi40JTIyJTIwaGVpZ2h0JTNEJTIyMjkyLjQlMjIlM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzAwN0NCMiUyMiUyMGQlM0QlMjJNMjg3JTIwNjkuNGExNy42JTIwMTcuNiUyMDAlMjAwJTIwMC0xMy01LjRIMTguNGMtNSUyMDAtOS4zJTIwMS44LTEyLjklMjA1LjRBMTcuNiUyMDE3LjYlMjAwJTIwMCUyMDAlMjAwJTIwODIuMmMwJTIwNSUyMDEuOCUyMDkuMyUyMDUuNCUyMDEyLjlsMTI4JTIwMTI3LjljMy42JTIwMy42JTIwNy44JTIwNS40JTIwMTIuOCUyMDUuNHM5LjItMS44JTIwMTIuOC01LjRMMjg3JTIwOTVjMy41LTMuNSUyMDUuNC03LjglMjA1LjQtMTIuOCUyMDAtNS0xLjktOS4yLTUuNS0xMi44eiUyMiUyRiUzRSUzQyUyRnN2ZyUzRScpLFxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiAwJSwjZmZmZmZmIDEwMCUpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAuN2VtIHRvcCA1MCUsIDAgMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IC42NWVtIGF1dG8sIDEwMCU7XG59XG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5zZWxlY3Qgb3B0aW9uIHtcbiAgICBmb250LXdlaWdodDpub3JtYWw7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTA1cHgpe1xuICAgICNub0RlYnQsICNkZWJ0e1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/lista-deudores/lista-deudores.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/lista-deudores/lista-deudores.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <a routerLink=\"/{{this.uid}}/finanzas/{{this.idgrupo}}/\"><img class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-48.png\" alt=\"cerrar\"></a>\n  <h2 class=\"Title2\">Lista de Acreedores y Deudores</h2>\n  <div class=\"empty\"></div>\n</header>\n<div class=\"tarjetero\">\n<h2>Lista del mes:</h2>\n  <form [formGroup]=\"mes\">\n    <select id=\"mes\" formControlName=\"month\" (change)=\"selectedYM()\" (change)=\"getEntradas()\" >\n      <option value=\"01\">Enero</option>\n      <option value=\"02\">Febrero</option>\n      <option value=\"03\">Marzo</option>\n      <option value=\"04\">Abril</option>\n      <option value=\"05\">Mayo</option>\n      <option value=\"06\">Junio</option>\n      <option value=\"07\">Julio</option>\n      <option value=\"08\">Agosto</option>\n      <option value=\"09\">Septiembre</option>\n      <option value=\"10\">Octubre</option>\n      <option value=\"11\">Noviembre</option>\n      <option value=\"12\">Diciembre</option>\n    </select>\n  </form>\n<div *ngFor=\"let persona of personas; index as i\" class=\"tarjetero\">\n    <div *ngIf=\"personas[i].pagado == 1\" class=\"tarjeta\" id=\"deuda\">\n        <p id=\"contenido\">{{personas[i].first}} {{personas[i].last}}</p>\n        <p id=\"contenido\">{{personas[i].unit}}</p>\n        <p class=\"monto\" id=\"noDebt\">Pagado: {{personas[i].monto}}</p>\n      </div>\n  <div *ngIf=\"personas[i].pagado == 0\" class=\"tarjeta\" id=\"deuda\">\n    <p id=\"contenido\">{{personas[i].first}} {{personas[i].last}}</p>\n    <p id=\"contenido\">{{personas[i].unit}}</p>\n    <p class=\"monto\" id=\"debt\">Por pagar: {{personas[i].monto}}</p>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/lista-deudores/lista-deudores.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/lista-deudores/lista-deudores.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListaDeudoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDeudoresComponent", function() { return ListaDeudoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ListaDeudoresComponent = /** @class */ (function () {
    function ListaDeudoresComponent(route, modalService, dataService, fb) {
        this.route = route;
        this.modalService = modalService;
        this.dataService = dataService;
        this.fb = fb;
        this.personas = [];
    }
    ListaDeudoresComponent.prototype.ngOnInit = function () {
        this.mes = this.fb.group({
            month: ['', []]
        });
        this.uid = this.route.snapshot.params['uid'];
        this.idgrupo = this.route.snapshot.params['idgrupo'];
    };
    ListaDeudoresComponent.prototype.getEntradas = function () {
        var _this = this;
        this.dataService.getDeudores(this.idgrupo, this.selectedMonth, this.selectedYear).subscribe(function (array) {
            _this.personas = array;
            console.log(array);
        });
    };
    ListaDeudoresComponent.prototype.selectedYM = function () {
        var fecha = new Date();
        this.selectedMonth = parseInt(this.mes.value.month);
        console.log(this.selectedMonth);
        if (fecha.getMonth() + 1 >= this.selectedMonth) {
            this.selectedYear = fecha.getFullYear();
        }
        else {
            this.selectedYear = fecha.getFullYear() - 1;
        }
        console.log(this.selectedYear);
    };
    ListaDeudoresComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    ListaDeudoresComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    ListaDeudoresComponent.prototype.confirmEdit = function (id) {
        this.closeModal(id);
    };
    ListaDeudoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-deudores',
            template: __webpack_require__(/*! ./lista-deudores.component.html */ "./src/app/components/lista-deudores/lista-deudores.component.html"),
            styles: [__webpack_require__(/*! ./lista-deudores.component.css */ "./src/app/components/lista-deudores/lista-deudores.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ListaDeudoresComponent);
    return ListaDeudoresComponent;
}());



/***/ }),

/***/ "./src/app/components/lista-recibo/lista-recibo.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/lista-recibo/lista-recibo.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#recibo{\n    background: #F2F2F2;\n    height: 105px;\n    display: inline-block;\n}\n\n#debt{\n    background: #B10000;\n}\n\n#payment{\n    background: #27AE60;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0YS1yZWNpYm8vbGlzdGEtcmVjaWJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGEtcmVjaWJvL2xpc3RhLXJlY2liby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlY2lib3tcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICAgIGhlaWdodDogMTA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jZGVidHtcbiAgICBiYWNrZ3JvdW5kOiAjQjEwMDAwO1xufVxuXG4jcGF5bWVudHtcbiAgICBiYWNrZ3JvdW5kOiAjMjdBRTYwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/lista-recibo/lista-recibo.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/lista-recibo/lista-recibo.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <!--Falta el router link para poder salir de Lista de Recibos y volver a finanzas-->\n  <a><img class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-48.png\" alt=\"cerrar\"></a>\n  <h2 class=\"Title2\">Lista de Recibos</h2>\n  <div class=\"empty\"></div>\n</header>\n<div class=\"tarjetero\">\n  <div class=\"tarjeta\" id=\"recibo\">\n    <p id=\"contenido\">Mes, Año</p>\n    <p class=\"monto\" id=\"payment\">$25000</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/lista-recibo/lista-recibo.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/lista-recibo/lista-recibo.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListaReciboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaReciboComponent", function() { return ListaReciboComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListaReciboComponent = /** @class */ (function () {
    function ListaReciboComponent() {
    }
    ListaReciboComponent.prototype.ngOnInit = function () {
    };
    ListaReciboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-recibo',
            template: __webpack_require__(/*! ./lista-recibo.component.html */ "./src/app/components/lista-recibo/lista-recibo.component.html"),
            styles: [__webpack_require__(/*! ./lista-recibo.component.css */ "./src/app/components/lista-recibo/lista-recibo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListaReciboComponent);
    return ListaReciboComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.Title{\n\n    margin-top: 0.2em;\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 50px;\n    line-height: 59px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    display: block;\n    align-self: auto;\n\n    color: #000000;\n\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n#OK{\n    width: 60px;\n    height: 40px;\n    margin: 1em;\n}\n\n.text{\n    margin-bottom: 0;\n}\n\nimg{\n    width: 100px;\n    height: 120px;\n    margin-top: 10px;\n\n    mix-blend-mode: normal;\n    display: block;\n    align-self: auto;\n}\n\n@media screen and (max-width:321px){\n    img{\n        width: 80px;\n        height: 96px;\n    }\n\n    h1.Title{\n        /*width: 160px;\n        height: 36px;*/\n        font-size: 35px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjs7SUFFaEIsY0FBYzs7SUFFZCw0Q0FBNEM7QUFDaEQ7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCOztJQUVoQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSTtzQkFDYztRQUNkLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxle1xuXG4gICAgbWFyZ2luLXRvcDogMC4yZW07XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNTlweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFsaWduLXNlbGY6IGF1dG87XG5cbiAgICBjb2xvcjogIzAwMDAwMDtcblxuICAgIHRleHQtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG5cbiNPS3tcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi50ZXh0e1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmltZ3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMXB4KXtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDk2cHg7XG4gICAgfVxuXG4gICAgaDEuVGl0bGV7XG4gICAgICAgIC8qd2lkdGg6IDE2MHB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7Ki9cbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <img src=\"../../../assets/icons/Condo.png\" alt=\"logo\">\n  <h1 class=\"Title\">CONDOS</h1>\n  <h2 class=\"Title2\" id=\"Title2mar\">Inicio de Sesión</h2>\n  <form > \n    E-mail: <br> <input class=\"textin\" type=\"email\" name=\"email\" [(ngModel)]=\"email\"> \n    Contraseña: <br> <input class=\"textin\" type=\"password\" name=\"contraseña\" [(ngModel)]=\"password\">\n    <button id=\"OK\" (click)=\"onSubmitLogIn()\">OK</button>\n  </form>\n  <p class=\"text\">¿No tienes cuenta? <br> <a routerLink=\"/signup\"> Registrate</a> </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service.service */ "./src/app/services/auth.service.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMensaje, dataService) {
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.dataService = dataService;
        this.message = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmitLogIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.loginEmail(this.email, this.password)
                            .then(function (res) {
                            _this.message = 'OK';
                            _this.flashMensaje.show('Bienvenido a Condos', { cssClass: '', timeout: 3000 });
                            _this.router.navigate(['/' + res]);
                        }).catch(function (err) {
                            _this.flashMensaje.show(err.message, { cssClass: '', timeout: 6000 });
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menu-grupo/menu-grupo.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/menu-grupo/menu-grupo.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Fin{\n    background: url('Finanzas4.jpeg') no-repeat center;\n}\n\n#Props{\n    background: url('Propuestas.jpeg') no-repeat center;\n}\n\n#Nots{\n    background: url('Comunicacion2.jpeg') no-repeat center;\n}\n\n#Docs{\n    background: url('documentos.jpeg') no-repeat center;\n}\n\n#Seg{\n    background: url('Seguridad.jpeg') no-repeat center;\n}\n\nh2{\n    text-align: center;\n}\n\n@media screen and (max-width:330px){\n    h2{\n        font-size: 18px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LWdydXBvL21lbnUtZ3J1cG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtEQUFzRTtBQUMxRTs7QUFFQTtJQUNJLG1EQUF1RTtBQUMzRTs7QUFFQTtJQUNJLHNEQUEwRTtBQUM5RTs7QUFFQTtJQUNJLG1EQUF1RTtBQUMzRTs7QUFFQTtJQUNJLGtEQUFzRTtBQUMxRTs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51LWdydXBvL21lbnUtZ3J1cG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNGaW57XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy9GaW5hbnphczQuanBlZykgbm8tcmVwZWF0IGNlbnRlcjtcbn1cblxuI1Byb3Bze1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbnMvUHJvcHVlc3Rhcy5qcGVnKSBuby1yZXBlYXQgY2VudGVyO1xufVxuXG4jTm90c3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb25zL0NvbXVuaWNhY2lvbjIuanBlZykgbm8tcmVwZWF0IGNlbnRlcjtcbn1cblxuI0RvY3N7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy9kb2N1bWVudG9zLmpwZWcpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG5cbiNTZWd7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy9TZWd1cmlkYWQuanBlZykgbm8tcmVwZWF0IGNlbnRlcjtcbn1cbmgye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzMwcHgpe1xuICAgIGgye1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/menu-grupo/menu-grupo.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/menu-grupo/menu-grupo.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <a routerLink=\"/{{this.uid}}\"> <img class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-48.png\" alt=\"cerrar\"></a>\n  <h2>{{this.grupo?.nombre}}</h2>\n  <a routerLink=\"/{{this.uid}}/personas/{{this.grupo?.idgrupo}}\"><img class=\"logo\" src=\"../../../assets/icons/icons8-grupos-de-usuarios-32.png\" alt=\"USER\"></a> \n</header>\n<div class=\"tarjetero\">\n  \n  <a routerLink=\"/{{this.uid}}/finanzas/{{this.grupo?.idgrupo}}\"><div id=\"Fin\" class=\"tarjeta\">\n    <h2>Finanzas</h2>\n  </div></a>\n  <a routerLink=\"/{{this.uid}}/propuestas/{{this.grupo?.idgrupo}}\"><div id=\"Props\" class=\"tarjeta\">\n    <h2>Propuestas</h2>\n  </div></a>\n  <a routerLink=\"/{{this.uid}}/notificaciones/{{this.grupo?.idgrupo}}\"><div id=\"Nots\" class=\"tarjeta\">\n    <h2>Notificaciones</h2>\n  </div></a>\n  <a routerLink=\"/{{this.uid}}/inactive/{{this.grupo?.idgrupo}}\"><div id=\"Seg\" class=\"tarjeta\">\n    <h2>Seguridad</h2>\n  </div></a>\n  <a routerLink=\"/{{this.uid}}/inactive/{{this.grupo?.idgrupo}}\"><div id=\"Docs\" class=\"tarjeta\">\n      <h2>Documentos</h2>\n    </div></a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/menu-grupo/menu-grupo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/menu-grupo/menu-grupo.component.ts ***!
  \***************************************************************/
/*! exports provided: MenuGrupoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGrupoComponent", function() { return MenuGrupoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




var MenuGrupoComponent = /** @class */ (function () {
    function MenuGrupoComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    MenuGrupoComponent.prototype.ngOnInit = function () {
        this.uid = this.route.snapshot.params['uid'];
        var idgrupo = this.route.snapshot.params['idgrupo'];
        this.getGroupInfo(idgrupo);
    };
    MenuGrupoComponent.prototype.getGroupInfo = function (idgrupo) {
        var _this = this;
        this.dataService.getGrupoByID(idgrupo).subscribe(function (grupo) {
            _this.grupo = grupo;
        });
    };
    MenuGrupoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-grupo',
            template: __webpack_require__(/*! ./menu-grupo.component.html */ "./src/app/components/menu-grupo/menu-grupo.component.html"),
            styles: [__webpack_require__(/*! ./menu-grupo.component.css */ "./src/app/components/menu-grupo/menu-grupo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], MenuGrupoComponent);
    return MenuGrupoComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/modal/modal.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.jw-modal {\n    \n    /* modal container fixed across whole screen */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    /* z-index must be higher than .jw-modal-background */\n    z-index: 1000;\n    \n    /* enables scrolling for tall modals */\n    overflow: auto;\n}\n.jw-modal-body {\n    padding: 20px;\n    background: #fff;\n    border-radius: 5px;\n    border-style: solid;\n    border-width: 5px;\n    border-color: #2F80ED;\n    /* margin exposes part of the modal background */\n    margin: 40px;\n}\n.jw-modal-background {\n    /* modal background fixed across whole screen */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    /* semi-transparent black  */\n    background-color: #000;\n    opacity: 0.75;\n    \n    /* z-index must be below .jw-modal and above everything else  */\n    z-index: 900;\n}\nbody.jw-modal-open {\n    /* body overflow is hidden to hide main scrollbar when modal window is open */\n    overflow: hidden;\n}\nbutton{\n   width: 30px;\n   height: 30px;\n   border-radius: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIscURBQXFEO0lBQ3JELGFBQWE7O0lBRWIsc0NBQXNDO0lBQ3RDLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdEQUFnRDtJQUNoRCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87O0lBRVAsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixhQUFhOztJQUViLCtEQUErRDtJQUMvRCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw2RUFBNkU7SUFDN0UsZ0JBQWdCO0FBQ3BCO0FBSUE7R0FDRyxXQUFXO0dBQ1gsWUFBWTtHQUNaLGtCQUFrQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmp3LW1vZGFsIHtcbiAgICBcbiAgICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIFxuICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLmp3LW1vZGFsLWJvZHkge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBib3JkZXItY29sb3I6ICMyRjgwRUQ7XG4gICAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xuICAgIG1hcmdpbjogNDBweDtcbn1cblxuLmp3LW1vZGFsLWJhY2tncm91bmQge1xuICAgIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBcbiAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gICAgei1pbmRleDogOTAwO1xufVxuYm9keS5qdy1tb2RhbC1vcGVuIHtcbiAgICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cblxuYnV0dG9ue1xuICAgd2lkdGg6IDMwcHg7XG4gICBoZWlnaHQ6IDMwcHg7XG4gICBib3JkZXItcmFkaXVzOiA4MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/services/modal.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jw-modal',
            template: "<div class=\"jw-modal\">\n            <div class=\"jw-modal-body\">\n            <button (click)=\"this.close()\" >X</button>\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"jw-modal-background\"></div>",
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/notificaciones/notificaciones.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/notificaciones/notificaciones.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notiA{\n    background: #F2C94C;\n    display: inline-block;\n    height: 110px;\n}\n\n#notiR{\n    background: #ED0F0F;\n    display: inline-block;\n    height: 110px;\n}\n\n#texto{\n    height: 70px;\n}\n\n#profileA{\n    background: #F2994A;\n    display: flex-end;           \n    align-items: center;\n    height: 40px;\n    font-size: 18px;\n    border-radius: 5px;  \n    border: 0;\n    width: 472px;\n    color: #eeeeee;\n}\n\n#profileR{\n    background:#B10000;\n    display: flex-end;           \n    align-items: center;\n    height: 40px;\n    font-size: 18px;\n    border-radius: 5px;  \n    border: 0;\n    width: 472px;\n    color: #eeeeee;\n}\n\n@media screen and (max-width:505px){\n    #profileR, #profileA{\n        width: 272px;\n    }\n\n    #crear{\n        zoom: 80%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYWNpb25lcy9ub3RpZmljYWNpb25lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYWNpb25lcy9ub3RpZmljYWNpb25lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGlBe1xuICAgIGJhY2tncm91bmQ6ICNGMkM5NEM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTEwcHg7XG59XG5cbiNub3RpUntcbiAgICBiYWNrZ3JvdW5kOiAjRUQwRjBGO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDExMHB4O1xufVxuXG4jdGV4dG97XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuXG4jcHJvZmlsZUF7XG4gICAgYmFja2dyb3VuZDogI0YyOTk0QTtcbiAgICBkaXNwbGF5OiBmbGV4LWVuZDsgICAgICAgICAgIFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICBcbiAgICBib3JkZXI6IDA7XG4gICAgd2lkdGg6IDQ3MnB4O1xuICAgIGNvbG9yOiAjZWVlZWVlO1xufVxuXG4jcHJvZmlsZVJ7XG4gICAgYmFja2dyb3VuZDojQjEwMDAwO1xuICAgIGRpc3BsYXk6IGZsZXgtZW5kOyAgICAgICAgICAgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgIFxuICAgIGJvcmRlcjogMDtcbiAgICB3aWR0aDogNDcycHg7XG4gICAgY29sb3I6ICNlZWVlZWU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTA1cHgpe1xuICAgICNwcm9maWxlUiwgI3Byb2ZpbGVBe1xuICAgICAgICB3aWR0aDogMjcycHg7XG4gICAgfVxuXG4gICAgI2NyZWFye1xuICAgICAgICB6b29tOiA4MCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/notificaciones/notificaciones.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/notificaciones/notificaciones.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <a routerLink=\"/{{this.uid}}/menu/{{this.idgrupo}}\"> <img class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-42 (1).png\" alt=\"USER\"></a>\n  <h2>Notificaciones</h2>\n  <a (click)=\"openModal('crear')\"> <img class=\"logo\" src=\"../../../assets/icons/icons8-más-filled-64.png\" alt=\"mas\"></a>\n</header>\n<div class=\"tarjetero\">\n  <div *ngFor=\"let notificacion of notificaciones; index as i\">\n    <div *ngIf=\"this.notificacion.isAR == '1'\" id=\"notiA\" class=\"tarjeta\">\n      <div id=\"titulo\">\n        <h2 id=\"texto\">{{notificaciones[i].titulo}}</h2>\n        <a (click)=\"selectNoti(notificaciones[i])\" (click)=\"openModal('abrir')\"><img class=\"logo\" src=\"../../../assets/icons/icons8-open-view-48.png\"\n            alt=\"Options\"></a>\n      </div>\n      <div>\n        <p class=\"monto\" id=\"profileA\">Por: {{notificaciones[i].first}} {{notificaciones[i].last}}</p>\n      </div>\n    </div>\n    <div *ngIf=\"this.notificacion.isAR == '0'\" id=\"notiR\" class=\"tarjeta\">\n        <div id=\"titulo\">\n          <h2 id=\"texto\">{{notificaciones[i].titulo}}</h2>\n          <a (click)=\"selectNoti(notificaciones[i])\" (click)=\"openModal('abrir')\"><img class=\"logo\" src=\"../../../assets/icons/icons8-open-view-48.png\"\n              alt=\"Options\"></a>\n        </div>\n        <div>\n          <p class=\"monto\" id=\"profileR\">Por: {{notificaciones[i].first}} {{notificaciones[i].last}}</p>\n        </div>\n    </div> \n  </div>\n</div>\n\n<jw-modal id=\"crear\">\n  <header class=\"hModal\">\n    <div class=\"empty\"> </div>\n    <h2 class=\"Title2\">Crear Notificación</h2>\n    <div class=\"empty\"> </div>\n  </header>\n  <form [formGroup]=\"notificacion\">\n      Título: <br> <input type=\"text\" formControlName=\"titulo\">\n      Contenido: <br> <textarea name=\"Contenido\" class=\"textin\" id=\"textbox\" formControlName=\"mensaje\"></textarea>\n      Tipo de notificación: <br> <select class=\"textin\" formControlName=\"isAR\">\n        <option value=true >Anuncio</option>\n        <option value=false >Reclamo</option>\n      </select>\n      <button class=\"button\" id=\"confirm\" (click)=\"this.addNotificacion('crear')\">Crear</button>\n  </form>\n</jw-modal>\n\n<jw-modal id=\"eliminar\">\n  <form>\n    <p id=\"pregunta\">¿Estás seguro que deseas eliminar esta notificación? esta acción es irreversible.</p>\n    <div id=\"sino\">\n      <a><button class=\"boton\" id=\"yesno\" (click)=\"closeModal('eliminar')\">Si</button></a>\n      <a><button class=\"boton\" id=\"yesno\" (click)=\"closeModal('eliminar')\">No</button></a>\n    </div>\n  </form>\n</jw-modal>\n\n<jw-modal id=\"abrir\">\n  <header class=\"hModal\">\n    <div class=\"empty\"> </div>\n    <h2 class=\"Title2\">{{noti?.titulo}}</h2>\n    <div class=\"empty\"> </div>\n  </header>\n  <p id=\"content\">Por: {{noti?.first}} {{noti?.last}}</p>\n  <p class=\"descripcion\">{{noti?.mensaje}}</p>\n</jw-modal>"

/***/ }),

/***/ "./src/app/components/notificaciones/notificaciones.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/notificaciones/notificaciones.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotificacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesComponent", function() { return NotificacionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_notificaciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/notificaciones */ "./src/app/models/notificaciones.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");







var NotificacionesComponent = /** @class */ (function () {
    function NotificacionesComponent(route, modalService, dataService, fb) {
        this.route = route;
        this.modalService = modalService;
        this.dataService = dataService;
        this.fb = fb;
        this.notificaciones = [];
    }
    NotificacionesComponent.prototype.ngOnInit = function () {
        this.uid = this.route.snapshot.params['uid'];
        this.idgrupo = this.route.snapshot.params['idgrupo'];
        this.notificacion = this.fb.group({
            titulo: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]],
            mensaje: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]],
            isAR: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]]
        });
        this.getNotificaciones();
    };
    NotificacionesComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    NotificacionesComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    NotificacionesComponent.prototype.selectNoti = function (noti) {
        this.noti = new _models_notificaciones__WEBPACK_IMPORTED_MODULE_5__["Notificacion"];
        this.noti = noti;
        console.log(this.noti);
    };
    NotificacionesComponent.prototype.addNotificacion = function (id) {
        var _this = this;
        this.Notificacion = this.notificacion.value;
        this.Notificacion.idgrupo = this.idgrupo;
        this.Notificacion.uid = this.uid;
        console.log(this.Notificacion);
        this.dataService.addNotificaciones(this.Notificacion).subscribe(function (res) {
            if (res) {
                _this.notificaciones.push(res);
            }
        });
        this.closeModal(id);
    };
    NotificacionesComponent.prototype.getNotificaciones = function () {
        var _this = this;
        this.dataService.getNotificaciones(this.idgrupo).subscribe(function (notificaciones) {
            _this.notificaciones = notificaciones;
            console.log(_this.notificaciones);
        });
    };
    NotificacionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notificaciones',
            template: __webpack_require__(/*! ./notificaciones.component.html */ "./src/app/components/notificaciones/notificaciones.component.html"),
            styles: [__webpack_require__(/*! ./notificaciones.component.css */ "./src/app/components/notificaciones/notificaciones.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], NotificacionesComponent);
    return NotificacionesComponent;
}());



/***/ }),

/***/ "./src/app/components/personas/personas.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/personas/personas.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#J{\n    background: #FAFF00;\n}\n\n#R{\n    background: #56CCF2;\n}\n\n#delete{\n    width: 200px;\n    margin: 1rem;\n}\n\n.move{\n    width: 200px;\n    margin: 1rem;\n}\n\n.logo{\n    cursor: pointer;\n}\n\n#move, #move-delete{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJzb25hcy9wZXJzb25hcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZXJzb25hcy9wZXJzb25hcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jSntcbiAgICBiYWNrZ3JvdW5kOiAjRkFGRjAwO1xufVxuXG4jUntcbiAgICBiYWNrZ3JvdW5kOiAjNTZDQ0YyO1xufVxuXG4jZGVsZXRle1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbi5tb3Zle1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbi5sb2dve1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI21vdmUsICNtb3ZlLWRlbGV0ZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/personas/personas.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/personas/personas.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <a routerLink=\"/{{this.uid}}/menu/{{this.idgrupo}}\"> <img class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-48.png\" alt=\"cerrar\"></a>\n  <h2>Personas</h2>\n  <div class=\"empty\"></div>\n</header>\n<div *ngIf=\"this.isadmin\" class=\"tarjetero\">\n  <h2 id=\"sub\">Junta de Condominio</h2>\n  <div *ngFor=\"let personas of admins; index as i\" id=\"J\" class=\"tarjeta\">\n    <h2>{{admins[i]?.first}} {{admins[i]?.last}}</h2>\n    <img *ngIf=\"!(admins[i]?.uid == this.uid)\" class=\"logo\" src=\"../../../assets/icons/icons8-pencil-filled-48.png\" alt=\"Options\" (click)=\"thisUser( admins[i]?.uid, admins[i]?.usuario_grupos.admin,  admins[i]?.usuario_grupos.grupoVecinalIdgrupo)\" (click)=\"openModal('move')\">\n  </div>\n  <h2>Residentes</h2>\n  <div *ngFor=\"let people of residentes; index as i\" id=\"R\" class=\"tarjeta\">\n    <h2>{{residentes[i]?.first}} {{residentes[i]?.last}}</h2>\n    <img class=\"logo\" src=\"../../../assets/icons/icons8-pencil-filled-48.png\" alt=\"Options\" (click)=\"thisUser( residentes[i]?.uid, residentes[i]?.usuario_grupos.admin, residentes[i]?.usuario_grupos.grupoVecinalIdgrupo )\" (click)=\"openModal('move-delete')\">\n  </div>\n</div>\n<div *ngIf=\"!this.isadmin\" class=\"tarjetero\">\n  <h2 id=\"sub\">Junta de Condominio</h2>\n  <div *ngFor=\"let personas of admins; index as i\" id=\"J\" class=\"tarjeta\">\n    <h2>{{admins[i]?.first}} {{admins[i]?.last}}</h2>\n  </div>\n  <h2 id=\"sub\">Residentes</h2>\n  <div *ngFor=\"let people of residentes; index as i\" id=\"R\" class=\"tarjeta\">\n    <h2>{{residentes[i]?.first}} {{residentes[i]?.last}}</h2>\n  </div>\n</div>\n<jw-modal id=\"move\">\n  <form>\n      Desea sacar a este miembro de la Junta de Condominio?\n      <a><button (click)=\"this.move('move')\" class=\"move\">Mover</button></a> \n  </form>\n</jw-modal>\n<jw-modal id=\"move-delete\">\n  <form>\n    Desea hacer a este residente MIEMBRO de la Junta de Condominio?\n    <a><button (click)=\"this.move('move-delete')\" class=\"move\">Mover</button></a> \n    Desea eliminar a este residente del Condominio? Esto no podrá revertirse.\n    <a><button (click)=\"this.delete('move-delete')\" id=\"delete\" >Eliminar</button></a> \n  </form>\n</jw-modal>"

/***/ }),

/***/ "./src/app/components/personas/personas.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/personas/personas.component.ts ***!
  \***********************************************************/
/*! exports provided: PersonasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonasComponent", function() { return PersonasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service.service */ "./src/app/services/auth.service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_userChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/userChanged */ "./src/app/models/userChanged.ts");








var PersonasComponent = /** @class */ (function () {
    function PersonasComponent(authService, route, router, modalService, dataService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.dataService = dataService;
        this.usuarios = [];
        this.admins = [];
        this.residentes = [];
    }
    PersonasComponent.prototype.ngOnInit = function () {
        this.userChanged = new _models_userChanged__WEBPACK_IMPORTED_MODULE_6__["UserChanged"];
        this.uid = this.route.snapshot.params['uid'];
        this.idgrupo = this.route.snapshot.params['idgrupo'];
        this.getPersonas(this.idgrupo);
    };
    PersonasComponent.prototype.getPersonas = function (idgrupo) {
        var _this = this;
        this.dataService.getUsuarios(idgrupo).subscribe(function (usuarios) {
            _this.usuarios = usuarios;
            _this.separatePeople();
            _this.isadmin = _this.isAdmin();
        });
    };
    PersonasComponent.prototype.isAdmin = function () {
        for (var index = 0; index < this.usuarios.length; index++) {
            if (this.usuarios[index].uid == this.uid) {
                if (this.usuarios[index].usuario_grupos.admin) {
                    index = this.usuarios.length;
                    return true;
                }
                else {
                    index = this.usuarios.length;
                    return false;
                }
            }
        }
    };
    PersonasComponent.prototype.separatePeople = function () {
        var contAdmins = 0;
        var contRes = 0;
        for (var index = 0; index < this.usuarios.length; index++) {
            if (this.usuarios[index].usuario_grupos.admin) {
                contAdmins++;
            }
        }
        contRes = this.usuarios.length - contAdmins;
        this.admins = new Array(contAdmins);
        this.residentes = new Array(contRes);
        var start = 0;
        for (var i = 0; i < this.admins.length; i++) {
            for (var j = start; j < this.usuarios.length; j++) {
                if (this.usuarios[j].usuario_grupos.admin) {
                    this.admins[i] = this.usuarios[j];
                    start = j + 1;
                    j = this.usuarios.length;
                }
            }
        }
        var empezar = 0;
        for (var k = 0; k < this.residentes.length; k++) {
            for (var l = empezar; l < this.usuarios.length; l++) {
                if (!this.usuarios[l].usuario_grupos.admin) {
                    this.residentes[k] = this.usuarios[l];
                    empezar = l + 1;
                    l = this.usuarios.length;
                }
            }
        }
    };
    PersonasComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    PersonasComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    PersonasComponent.prototype.thisUser = function (uid, admin, idgrupo) {
        this.userChanged.uid = uid;
        this.userChanged.admin = (!admin);
        this.userChanged.idgrupo = idgrupo;
    };
    PersonasComponent.prototype.move = function (id) {
        var _this = this;
        this.dataService.updateUserGrupos(this.userChanged).subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/' + _this.uid + '/menu/' + _this.idgrupo]);
            }
        });
        this.closeModal(id);
    };
    PersonasComponent.prototype.delete = function (id) {
        var _this = this;
        this.dataService.deleteUserGrupos(this.userChanged).subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/' + _this.uid + '/menu/' + _this.idgrupo]);
            }
        });
        this.closeModal(id);
    };
    PersonasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personas',
            template: __webpack_require__(/*! ./personas.component.html */ "./src/app/components/personas/personas.component.html"),
            styles: [__webpack_require__(/*! ./personas.component.css */ "./src/app/components/personas/personas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], PersonasComponent);
    return PersonasComponent;
}());



/***/ }),

/***/ "./src/app/components/propuestas/propuestas.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/propuestas/propuestas.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pro{\n    background: #6FCF97;\n    display: inline-block;\n}\n\na{\n    cursor: pointer;\n}\n\n#pre{\n    margin-bottom: 8px;\n}\n\n#center{\n    width: auto;\n}\n\n#vote{\n    justify-content: center;\n}\n\n#upvote, #downvote{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n\n#voto{\n    display: flex;\n    padding-right: 8px;\n    padding-left: 8px;\n}\n\n#voted{\n    cursor: not-allowed;\n    opacity: 0.3;\n}\n\n@media screen and (max-width:505px){\n\n    #add, #center{\n        zoom: 80%;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9wdWVzdGFzL3Byb3B1ZXN0YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUk7UUFDSSxTQUFTO0lBQ2I7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb3B1ZXN0YXMvcHJvcHVlc3Rhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb3tcbiAgICBiYWNrZ3JvdW5kOiAjNkZDRjk3O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuYXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuI3ByZXtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbiNjZW50ZXJ7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbiN2b3Rle1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jdXB2b3RlLCAjZG93bnZvdGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuI3ZvdG97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbiN2b3RlZHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IDAuMztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MDVweCl7XG5cbiAgICAjYWRkLCAjY2VudGVye1xuICAgICAgICB6b29tOiA4MCU7XG4gICAgfVxuXG59Il19 */"

/***/ }),

/***/ "./src/app/components/propuestas/propuestas.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/propuestas/propuestas.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <a routerLink=\"/{{this.uid}}/menu/{{this.idgrupo}}\"> <img class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-42 (1).png\" alt=\"USER\"> </a>\n  <h2>Propuestas</h2>\n  <a *ngIf=\"admin\" (click)=\"openModal('add')\"> <img class=\"logo\" src=\"../../../assets/icons/icons8-más-filled-64.png\" alt=\"\"> </a>\n  <div *ngIf=\"!admin\" class=\"empty\"> </div>\n</header>\n<div class=\"tarjetero\">\n    <div *ngFor=\"let propuesta of propuestas; index as i\" id=\"pro\" class=\"tarjeta\">\n      <div id=\"titulo\">\n        <h2>{{propuestas[i].titulo}}</h2>\n        <a (click)=\"selectPro(propuestas[i])\" (click)=\"openModal('abrir')\"><img class=\"logo\" src=\"../../../assets/icons/icons8-open-view-48.png\" alt=\"Options\"></a>\n      </div>\n      <div>\n        <p class=\"monto\" *ngIf=\"propuestas[i].presupuesto != null\">Bs. {{propuestas[i].presupuesto}}</p>\n      </div>\n    </div>\n  </div>\n\n  <jw-modal id=\"add\">\n    <header class=\"hModal\">\n        <div class=\"empty\"> </div>\n        <h2 class=\"Title2\">Nueva Propuesta</h2>\n        <div class=\"empty\"> </div>\n    </header>\n    <form [formGroup]=\"propuesta\">\n        Título: <br> <input type=\"text\" formControlName=\"titulo\">\n        Descripción: <br> <textarea class=\"textin\" id=\"textbox\" formControlName=\"descripcion\"> </textarea>\n        Presupuesto: <br> <input type=\"text\" placeholder=\"0.00\" (keyup)=\"format(this.propuesta.value.presupuesto)\" formControlName=\"presupuesto\" >\n        <button class=\"button\" id=\"confirm\"   [disabled]=\"propuesta.invalid\"  (click)=\"this.addPropuesta('add')\">Crear</button>\n    </form>\n  </jw-modal>\n\n  <jw-modal id=\"eliminar\">\n    <form>\n      <p id=\"pregunta\">¿Estás seguro que deseas eliminar esta propuesta? esta acción es irreversible.</p>\n      <div id=\"sino\"> \n        <a><button class=\"boton\" id=\"yesno\" (click)=\"closeModal('eliminar')\">Si</button></a> \n        <a><button class=\"boton\" id=\"yesno\" (click)=\"closeModal('eliminar')\" >No</button></a>\n      </div>\n    </form>\n  </jw-modal>\n\n  <jw-modal id=\"abrir\">\n    <header class=\"hModal\">\n      <div class=\"empty\"> </div>\n      <h2 class=\"Title2\">{{pro?.titulo}}</h2>\n      <div class=\"empty\"> </div>\n    </header>\n    <p class=\"descripcion\">{{pro?.descripcion}}</p>\n    <h2 id=\"pre\">Presupuesto:</h2>\n    <p class=\"monto\" id=\"center\">Bs. {{pro?.presupuesto}}</p>\n    <footer *ngIf=\"this.isLiked\" class=\"hModal\" id=\"vote\">\n      <div id=\"downvote\">\n       <img id=\"voted\" class=\"logo\" src=\"../../../assets/icons//downvote 48.png\" alt=\"mas\"> \n        <p id=\"voto\">{{this.dislikes}}</p>\n      </div>\n      <div id=\"upvote\">\n        <p id=\"voto\">{{this.likes}}</p>\n       <img id=\"voted\" class=\"logo\" src=\"../../../assets/icons/upvote 48.png\" alt=\"mas\"> \n      </div>\n    </footer>\n    <footer *ngIf=\"!this.isLiked\" class=\"hModal\" id=\"vote\">\n      <div id=\"downvote\">\n        <a (click)=\"like(true, pro.id, 'abrir')\"> <img class=\"logo\" src=\"../../../assets/icons//downvote 48.png\" alt=\"mas\"> </a>\n        <p id=\"voto\">{{this.dislikes}}</p>\n      </div>\n      <div id=\"upvote\">\n        <p id=\"voto\">{{this.likes}}</p>\n        <a (click)=\"like(false, pro.id, 'abrir' )\" > <img class=\"logo\" src=\"../../../assets/icons/upvote 48.png\" alt=\"mas\"> </a>\n      </div>\n    </footer>\n  </jw-modal>\n"

/***/ }),

/***/ "./src/app/components/propuestas/propuestas.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/propuestas/propuestas.component.ts ***!
  \***************************************************************/
/*! exports provided: PropuestasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropuestasComponent", function() { return PropuestasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_propuestas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/propuestas */ "./src/app/models/propuestas.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_likes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/likes */ "./src/app/models/likes.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");








var PropuestasComponent = /** @class */ (function () {
    function PropuestasComponent(route, modalService, fb, dataService) {
        this.route = route;
        this.modalService = modalService;
        this.fb = fb;
        this.dataService = dataService;
        this.propuestas = [];
        this.admin = false;
        this.isLiked = false;
    }
    PropuestasComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.uid = this.route.snapshot.params['uid'];
                        this.idgrupo = this.route.snapshot.params['idgrupo'];
                        this.dataService.getUserGrupo(this.idgrupo).subscribe(function (user) {
                            _this.admin = user.admin;
                        });
                        this.propuesta = this.fb.group({
                            titulo: ['', [
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                                ]],
                            descripcion: ['', [
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                                ]],
                            presupuesto: ['', [
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[-+]?[0-9]*[.]?[0-9]+")
                                ]]
                        });
                        return [4 /*yield*/, this.getPropuestas()];
                    case 1:
                        _a.sent();
                        console.log(this.propuestas);
                        return [2 /*return*/];
                }
            });
        });
    };
    PropuestasComponent.prototype.format = function (str) {
        if (str.length == 1) {
            this.propuesta.get('presupuesto').setValue('0.0' + str);
        }
        if (str.slice(1, 2) == '.' && str.slice(0, 1) == '0' && str.length > 4) {
            var str1;
            str1 = str.slice(2);
            str1 = str1.slice(0, 1) + '.' + str1.slice(1);
            this.propuesta.get('presupuesto').setValue(str1);
        }
        if (str.length > 4 && str.slice(0, 1) != '0') {
            var str3;
            str3 = str.slice(0, str.length - 4) + str.slice(str.length - 3);
            str3 = str3.slice(0, str3.length - 2) + '.' + str3.slice(str3.length - 2);
            this.propuesta.get('presupuesto').setValue(str3);
        }
        if (str.slice(str.length - 2, str.length - 1) == '.') {
            var str4;
            str4 = str.slice(0, str.length - 2) + str.slice(str.length - 1);
            str4 = str4.slice(0, str4.length - 2) + '.' + str4.slice(str4.length - 2);
            this.propuesta.get('presupuesto').setValue(str4);
        }
        if (str.length == 3) {
            var str2;
            str2 = '0.' + str.slice(0, 1) + str.slice(2);
            this.propuesta.get('presupuesto').setValue(str2);
        }
    };
    PropuestasComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    PropuestasComponent.prototype.selectPro = function (pro) {
        var _this = this;
        this.pro = new _models_propuestas__WEBPACK_IMPORTED_MODULE_3__["Propuesta"];
        this.pro = pro;
        this.dataService.countLikes(this.pro.id, 0).subscribe(function (likes) {
            _this.likes = likes[0].cantidad;
        });
        this.dataService.countLikes(this.pro.id, 1).subscribe(function (likes) {
            _this.dislikes = likes[0].cantidad;
        });
        this.dataService.findLike(this.pro.id, this.uid).subscribe(function (like) {
            if (like.length == 0) {
                _this.isLiked = false;
            }
            else {
                _this.isLiked = true;
            }
        });
    };
    PropuestasComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    PropuestasComponent.prototype.addPropuesta = function (id) {
        var _this = this;
        this.Propuesta = this.propuesta.value;
        this.Propuesta.idgrupo = this.idgrupo;
        this.Propuesta.uid = this.uid;
        this.dataService.addPropuestas(this.Propuesta).subscribe(function (res) {
            if (res) {
                _this.propuestas.push(res);
            }
        });
        this.closeModal(id);
    };
    PropuestasComponent.prototype.getPropuestas = function () {
        var _this = this;
        this.dataService.getPropuestas(this.idgrupo).subscribe(function (propuestas) {
            _this.propuestas = propuestas;
        });
    };
    PropuestasComponent.prototype.like = function (like, id, modal) {
        this.liked = new _models_likes__WEBPACK_IMPORTED_MODULE_6__["Like"];
        this.liked.id = id;
        this.liked.isLike = like;
        this.liked.uid = this.uid;
        this.dataService.addLike(this.liked).subscribe();
        this.closeModal(modal);
    };
    PropuestasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-propuestas',
            template: __webpack_require__(/*! ./propuestas.component.html */ "./src/app/components/propuestas/propuestas.component.html"),
            styles: [__webpack_require__(/*! ./propuestas.component.css */ "./src/app/components/propuestas/propuestas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
    ], PropuestasComponent);
    return PropuestasComponent;
}());



/***/ }),

/***/ "./src/app/components/recibo/recibo.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/recibo/recibo.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gastoMes{\n    background: #F2F2F2;\n    height: 285px;\n    display: inline-block;\n}\n\n#recibo{\n    background: #F2F2F2;\n    height: 175px;\n    display: inline-block;\n}\n\n#gasto{\n    height: 40px;\n    background: #B10000;\n}\n\n#contribucion{\n    height: 70px;\n    background: #2F80ED;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpYm8vcmVjaWJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY2liby9yZWNpYm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNnYXN0b01lc3tcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICAgIGhlaWdodDogMjg1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jcmVjaWJve1xuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gICAgaGVpZ2h0OiAxNzVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNnYXN0b3tcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogI0IxMDAwMDtcbn1cblxuI2NvbnRyaWJ1Y2lvbntcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZDogIzJGODBFRDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/recibo/recibo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/recibo/recibo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <!--Falta el router link para poder salir del recibo y volver a la lista de recibos-->\n  <a><img class=\"logo\" src=\"../../../assets/icons/icons8-eliminar-48.png\" alt=\"cerrar\"></a>\n  <h2 class=\"Title2\">*Mes, Año*</h2>\n  <div class=\"empty\"></div>\n</header>\n<div class=\"tarjetero\">\n    <h2>Gastos del mes</h2>\n      <div class=\"tarjeta\" id=\"gastoMes\">\n        <div id=\"nameDate\">\n          <p id=\"contenido\">Nombre</p>\n          <p id=\"contenido\">fecha</p>\n        </div>\n        <p id=\"contenido\">numero de Transferencia</p>\n        <p id=\"contenido\">Descripcion</p>\n        <p id=\"contenido\">Gasto:</p>\n        <p class=\"monto\" id=\"gasto\">$2,000,000.00</p>\n        <p id=\"contenido\">Tu contribución:</p>\n        <p class=\"monto\" id=\"contribucion\">$25,000.00</p>\n      </div>\n    <h2>Recibo</h2>\n    <div class=\"tarjeta\" id=\"recibo\">\n        <div id=\"nameDate\">\n          <p id=\"contenido\">Total gastos:</p>\n          <p id=\"contenido\">$2,000,000.00</p>\n        </div>\n        <div id=\"nameDate\">\n          <p id=\"contenido\">Alícuota:</p>\n          <p id=\"contenido\">0.70</p>\n        </div>\n        <p id=\"contenido\">Total contribución:</p>\n        <p class=\"monto\" id=\"contribucion\">$25,000.00</p>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/recibo/recibo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/recibo/recibo.component.ts ***!
  \*******************************************************/
/*! exports provided: ReciboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReciboComponent", function() { return ReciboComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReciboComponent = /** @class */ (function () {
    function ReciboComponent() {
    }
    ReciboComponent.prototype.ngOnInit = function () {
    };
    ReciboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recibo',
            template: __webpack_require__(/*! ./recibo.component.html */ "./src/app/components/recibo/recibo.component.html"),
            styles: [__webpack_require__(/*! ./recibo.component.css */ "./src/app/components/recibo/recibo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReciboComponent);
    return ReciboComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.Title{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 50px;\n    line-height: 59px;\n    \n    color: #000000;\n\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n#Registrate{\n    width: 100px;\n    margin:1em;\n}\n\n.custom{\n    display: flex;\n    align-items: center;\n}\n\n.text{\n    margin-bottom: 0;\n}\n\n.logo{\n    width: 42px;\n    height: 49px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCOztJQUVqQixjQUFjOztJQUVkLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZXtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNTlweDtcbiAgICBcbiAgICBjb2xvcjogIzAwMDAwMDtcblxuICAgIHRleHQtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4jUmVnaXN0cmF0ZXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOjFlbTtcbn1cbi5jdXN0b217XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGV4dHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubG9nb3tcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"custom\">\n    <img class=\"logo\" src=\"../../../assets/icons/Condo.png\" alt=\"logo\">\n    <h1 class=\"Title\">ONDOS</h1>\n  </div>\n  <h2 class=\"Title2\" id=\"Title2mar\">Registro de Usuario</h2>\n  <form [formGroup]=\"user\">\n      Nombre: <br> <input id=\"textin\" type=\"text\"  formControlName=\"first\" >\n      Apellido: <br> <input id=\"textin\" type=\"text\" formControlName=\"last\"  >\n      Cédula: <br> <input id=\"textin\" type=\"text\" formControlName=\"cedula\" >\n      <span  class=\"error\" *ngIf=\"cedula.errors?.min && cedula.touched\">\n          Cédula no valida\n      </span>\n      E-mail: <br> <input id=\"textin\" type=\"email\" formControlName=\"email\">\n      <span class=\"error\" *ngIf=\"email.invalid && email.touched\">\n          Tu email no parece bien escrito\n      </span>\n      Contraseña: <br> <input id=\"textin\" type=\"password\"  formControlName=\"password\" >\n      <span class=\"error\" *ngIf=\"password.invalid && password.touched\">\n          Tu contraseña debe tener al menos 1 letra y 1 número\n      </span>\n   <button class=\"Registrate\" [disabled]=\"user.invalid\" (click)=\"AddUser()\" >Registrate</button>\n  </form>\n  <p class=\"text\">¿Tienes cuenta? <br> <a routerLink=\"/login\"> Inicia Sesión</a> </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service.service */ "./src/app/services/auth.service.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");







var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, authService, router, flashMensaje, dataService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.dataService = dataService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            first: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            last: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            cedula: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10000)
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){8}$')
                ]]
        });
    };
    SignupComponent.prototype.AddUser = function () {
        this.authService.registerUser(this.user.value.email, this.user.value.password);
        this.toDataBase();
    };
    SignupComponent.prototype.toDataBase = function () {
        this.dataService.userInfo(this.user.value);
        this.retroToUser();
    };
    SignupComponent.prototype.retroToUser = function () {
        this.flashMensaje.show('Congrats! You have succesfully sign up into Condos System', { cssClass: '', timeout: 6000 });
        this.router.navigate(['/']);
    };
    Object.defineProperty(SignupComponent.prototype, "email", {
        get: function () {
            return this.user.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () {
            return this.user.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "first", {
        get: function () {
            return this.user.get('first');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "last", {
        get: function () {
            return this.user.get('last');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "cedula", {
        get: function () {
            return this.user.get('cedula');
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nheader{\n    background-color: #2F80ED;\n    border-bottom-width: 3px;\n}\n\n.Title{\n\n    margin-top: 0.2em;\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 50px;\n    line-height: 59px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    display: block;\n    align-self: auto;\n\n    color: #000000;\n\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n#Title{\n    margin: 1em;\n}\n\np{\n    font-size: 25px;\n    text-align: center;\n    margin: 1rem;\n}\n\n#login{\n    width: 120px;\n    height: 40px;\n    margin: 1em;\n}\n\n.text{\n    margin-bottom: 0;\n}\n\nimg{\n    width: 100px;\n    height: 120px;\n    margin-top: 10px;\n\n    mix-blend-mode: normal;\n    display: block;\n    align-self: auto;\n}\n\n@media screen and (max-width:321px){\n    img{\n        width: 80px;\n        height: 96px;\n    }\n\n    h1.Title{\n        /*width: 160px;\n        height: 36px;*/\n        font-size: 35px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCOztJQUVoQixjQUFjOztJQUVkLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7O0lBRWhCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJO3NCQUNjO1FBQ2QsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjgwRUQ7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xufVxuXG4uVGl0bGV7XG5cbiAgICBtYXJnaW4tdG9wOiAwLjJlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1OXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYWxpZ24tc2VsZjogYXV0bztcblxuICAgIGNvbG9yOiAjMDAwMDAwO1xuXG4gICAgdGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbiNUaXRsZXtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxucHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuXG4jbG9naW57XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnRleHR7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFsaWduLXNlbGY6IGF1dG87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIxcHgpe1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogOTZweDtcbiAgICB9XG5cbiAgICBoMS5UaXRsZXtcbiAgICAgICAgLyp3aWR0aDogMTYwcHg7XG4gICAgICAgIGhlaWdodDogMzZweDsqL1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n</header>\n<div class=\"container\" >\n    <h2 class=\"Title2\" id=\"title\">Bienvenido a:</h2>\n  <img src=\"../../../assets/icons/Condo.png\" alt=\"logo\">\n  <h1 class=\"Title\">CONDOS</h1>\n  <p>La nueva manera de administrar condominios!</p>\n  <a routerLink=\"/login\"><button id=\"login\">Inicia Sesión</button></a>\n  <a routerLink=\"/signup\"><button id=\"login\">Regístrate</button></a>\n</div>"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/components/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service.service */ "./src/app/services/auth.service.service.ts");







var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.afAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (authState) { return !!authState; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
        }));
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        return true;
    };
    AuthGuard.prototype.canLoad = function (route, segments) {
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/likes.ts":
/*!*********************************!*\
  !*** ./src/app/models/likes.ts ***!
  \*********************************/
/*! exports provided: Like */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Like", function() { return Like; });
var Like = /** @class */ (function () {
    function Like() {
    }
    return Like;
}());



/***/ }),

/***/ "./src/app/models/notificaciones.ts":
/*!******************************************!*\
  !*** ./src/app/models/notificaciones.ts ***!
  \******************************************/
/*! exports provided: Notificacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notificacion", function() { return Notificacion; });
var Notificacion = /** @class */ (function () {
    function Notificacion() {
    }
    return Notificacion;
}());



/***/ }),

/***/ "./src/app/models/propuestas.ts":
/*!**************************************!*\
  !*** ./src/app/models/propuestas.ts ***!
  \**************************************/
/*! exports provided: Propuesta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Propuesta", function() { return Propuesta; });
var Propuesta = /** @class */ (function () {
    function Propuesta() {
    }
    return Propuesta;
}());



/***/ }),

/***/ "./src/app/models/recibos.ts":
/*!***********************************!*\
  !*** ./src/app/models/recibos.ts ***!
  \***********************************/
/*! exports provided: Recibos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recibos", function() { return Recibos; });
var Recibos = /** @class */ (function () {
    function Recibos() {
    }
    return Recibos;
}());



/***/ }),

/***/ "./src/app/models/userChanged.ts":
/*!***************************************!*\
  !*** ./src/app/models/userChanged.ts ***!
  \***************************************/
/*! exports provided: UserChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChanged", function() { return UserChanged; });
var UserChanged = /** @class */ (function () {
    function UserChanged() {
    }
    return UserChanged;
}());



/***/ }),

/***/ "./src/app/models/usuario-grupo.ts":
/*!*****************************************!*\
  !*** ./src/app/models/usuario-grupo.ts ***!
  \*****************************************/
/*! exports provided: UsuarioGrupo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioGrupo", function() { return UsuarioGrupo; });
var UsuarioGrupo = /** @class */ (function () {
    function UsuarioGrupo() {
    }
    return UsuarioGrupo;
}());



/***/ }),

/***/ "./src/app/models/usuarios.ts":
/*!************************************!*\
  !*** ./src/app/models/usuarios.ts ***!
  \************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/services/auth.service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/auth.service.service.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, dataService) {
        this.afAuth = afAuth;
        this.dataService = dataService;
    }
    AuthService.prototype.registerUser = function (email, pass) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.afAuth.auth.createUserWithEmailAndPassword(email, pass).then(function (userData) {
                        return _this.createUser(userData.user.uid);
                    })];
            });
        });
    };
    AuthService.prototype.loginEmail = function (email, pass) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(function (userData) {
                        return _this.currentUser(userData.user.uid);
                    })];
            });
        });
    };
    AuthService.prototype.createUser = function (uid) {
        this.dataService.user.uid = uid;
        this.dataService.addUsuario(this.dataService.user).subscribe();
    };
    AuthService.prototype.currentUser = function (uid) {
        localStorage.currentUserID = uid;
        return uid;
    };
    AuthService.prototype.updateEmail = function (email) {
        this.afAuth.auth.currentUser.updateEmail(email).then(function () {
            console.log(" Update successful.");
        }).catch(function (error) {
            console.log("  An error happened.", error);
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        return this.afAuth.auth.signOut();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_usuarios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/usuarios */ "./src/app/models/usuarios.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.usuariosUrl = 'https://condos3.herokuapp.com/api/usuarios'; // URL to web api
        this.gruposUrl = 'https://condos3.herokuapp.com/api/grupo'; // URL to web api
        this.usuarioGrupoUrl = 'https://condos3.herokuapp.com/api/user_grupo'; // URL to web api
        this.personasUrl = 'https://condos3.herokuapp.com/api/personas'; // URL to web api
        this.pagosUrl = 'https://condos3.herokuapp.com/api/pagos'; // URL to web api
        this.gastosUrl = 'https://condos3.herokuapp.com/api/gastos'; // URL to web api
        this.deudoresUrl = 'https://condos3.herokuapp.com/api/deudores'; // URL to web api
        this.recibosUrl = 'https://condos3.herokuapp.com/api/recibos'; // URL to web api
        this.userAlicuotasUrl = 'https://condos3.herokuapp.com/api/user_grupo/users'; // URL to web api
        this.propuestasUrl = 'https://condos3.herokuapp.com/api/propuestas'; // URL to web api
        this.notificacionesUrl = 'https://condos3.herokuapp.com/api/notificaciones'; // URL to web api
        this.likesUrl = 'https://condos3.herokuapp.com/api/likes'; // URL to web api
        this.findLikesUrl = 'https://condos3.herokuapp.com/api/likes/find'; // URL to web api
    }
    DataService.prototype.userInfo = function (usuario) {
        this.user = usuario;
    };
    DataService.prototype.userInit = function () {
        this.user = new _models_usuarios__WEBPACK_IMPORTED_MODULE_3__["Usuario"];
        this.user.uid = localStorage.currentUserID;
    };
    //Métodos http para Usuarios
    DataService.prototype.addUsuario = function (usuario) {
        var body = JSON.stringify(usuario);
        return this.http.post(this.usuariosUrl, body, httpOptions);
    };
    //Métodos http para Grupos
    DataService.prototype.getGrupoByID = function (idgrupo) {
        var url = this.gruposUrl + "/" + idgrupo;
        return this.http.get(url);
    };
    DataService.prototype.addGrupo = function (grupo) {
        var body = JSON.stringify(grupo);
        return this.http.post(this.gruposUrl, body, httpOptions);
    };
    //Métodos http para usuarioGrupo
    DataService.prototype.addUserGrupos = function (usuarioGrupo) {
        var body = JSON.stringify(usuarioGrupo);
        return this.http.post(this.usuarioGrupoUrl, body, httpOptions);
    };
    DataService.prototype.getUserGrupos = function () {
        var url = this.usuarioGrupoUrl + "/" + localStorage.currentUserID;
        return this.http.get(url);
    };
    DataService.prototype.getUserAlicuota = function (idgrupo) {
        var url = this.userAlicuotasUrl + "/" + idgrupo;
        return this.http.get(url);
    };
    DataService.prototype.getUserGrupo = function (idgrupo) {
        var url = this.usuarioGrupoUrl + "/" + localStorage.currentUserID + "/" + idgrupo;
        return this.http.get(url);
    };
    DataService.prototype.joinGroup = function (usuarioGrupo) {
        var url = this.usuarioGrupoUrl + "/" + usuarioGrupo.codigo;
        var body = JSON.stringify(usuarioGrupo);
        return this.http.post(url, body, httpOptions);
    };
    DataService.prototype.getUsuarios = function (idgrupo) {
        var url = this.personasUrl + "/" + idgrupo;
        return this.http.get(url);
    };
    DataService.prototype.updateUserGrupos = function (usuario) {
        return this.http.put(this.usuarioGrupoUrl, usuario, httpOptions);
    };
    DataService.prototype.deleteUserGrupos = function (usuario) {
        var url = this.usuarioGrupoUrl + "/" + usuario.uid + "/" + usuario.idgrupo;
        return this.http.delete(url, httpOptions);
    };
    //Metodos http para pagos
    DataService.prototype.addPago = function (pago) {
        var body = JSON.stringify(pago);
        return this.http.post(this.pagosUrl, body, httpOptions);
    };
    DataService.prototype.getPagos = function (idgrupo, mes, año) {
        var url = this.pagosUrl + "/" + idgrupo + "/" + mes + "/" + año;
        return this.http.get(url);
    };
    DataService.prototype.getPagosUser = function (idgrupo, uid) {
        var url = this.pagosUrl + "/" + idgrupo + "/" + uid;
        return this.http.get(url);
    };
    //Metodos http para gastos
    DataService.prototype.addGasto = function (gasto) {
        var body = JSON.stringify(gasto);
        return this.http.post(this.gastosUrl, body, httpOptions);
    };
    DataService.prototype.getGastos = function (idgrupo, mes, año) {
        var url = this.gastosUrl + "/" + idgrupo + "/" + mes + "/" + año;
        return this.http.get(url);
    };
    DataService.prototype.getDeudores = function (idgrupo, mes, year) {
        var url = this.deudoresUrl + "/" + idgrupo + "/" + mes + "/" + year;
        return this.http.get(url);
    };
    //Metodos http para gastos
    DataService.prototype.getRecibos = function (idgrupo, uid) {
        var url = this.recibosUrl + "/" + idgrupo + "/" + uid;
        return this.http.get(url);
    };
    DataService.prototype.addRecibos = function (recibo) {
        var body = JSON.stringify(recibo);
        return this.http.post(this.recibosUrl, body, httpOptions);
    };
    DataService.prototype.updateRecibo = function (recibo) {
        var body = JSON.stringify(recibo);
        return this.http.put(this.recibosUrl, body, httpOptions);
    };
    //Metodos http para propuestas
    DataService.prototype.getPropuestas = function (idgrupo) {
        var url = this.propuestasUrl + "/" + idgrupo;
        return this.http.get(url);
    };
    DataService.prototype.addPropuestas = function (propuesta) {
        var body = JSON.stringify(propuesta);
        return this.http.post(this.propuestasUrl, body, httpOptions);
    };
    DataService.prototype.addLike = function (like) {
        var body = JSON.stringify(like);
        return this.http.post(this.likesUrl, body, httpOptions);
    };
    DataService.prototype.countLikes = function (id, like) {
        var url = this.likesUrl + "/" + id + "/" + like;
        return this.http.get(url);
    };
    DataService.prototype.findLike = function (id, uid) {
        var url = this.findLikesUrl + "/" + id + "/" + uid;
        return this.http.get(url);
    };
    //Metodos http para notificaciones
    DataService.prototype.getNotificaciones = function (idgrupo) {
        var url = this.notificacionesUrl + "/" + idgrupo;
        return this.http.get(url);
    };
    DataService.prototype.addNotificaciones = function (notificacion) {
        var body = JSON.stringify(notificacion);
        return this.http.post(this.notificacionesUrl, body, httpOptions);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/modal.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ModalService);
    return ModalService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBZMOrhS-KjI-ncu-qhTjYAkTyjGNARgGE",
        authDomain: "condos-a774b.firebaseapp.com",
        databaseURL: "https://condos-a774b.firebaseio.com",
        projectId: "condos-a774b",
        storageBucket: "condos-a774b.appspot.com",
        messagingSenderId: "338649366204",
        appId: "1:338649366204:web:a74e29cb7eced9c0"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/yekomaster/Desktop/Condos/CondosApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map