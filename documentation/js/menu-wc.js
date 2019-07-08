'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">condos-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-31d71f6db5f364131a2bf3ac2e6af7f1"' : 'data-target="#xs-components-links-module-AppModule-31d71f6db5f364131a2bf3ac2e6af7f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-31d71f6db5f364131a2bf3ac2e6af7f1"' :
                                            'id="xs-components-links-module-AppModule-31d71f6db5f364131a2bf3ac2e6af7f1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EstadoCuentaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EstadoCuentaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FinanzasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FinanzasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InactiveComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InactiveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JoinComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JoinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaDeudoresComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListaDeudoresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaReciboComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListaReciboComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuGrupoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuGrupoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificacionesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificacionesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PropuestasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PropuestasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReciboComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReciboComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-31d71f6db5f364131a2bf3ac2e6af7f1"' : 'data-target="#xs-injectables-links-module-AppModule-31d71f6db5f364131a2bf3ac2e6af7f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-31d71f6db5f364131a2bf3ac2e6af7f1"' :
                                        'id="xs-injectables-links-module-AppModule-31d71f6db5f364131a2bf3ac2e6af7f1"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ModalService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ModalService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Gasto.html" data-type="entity-link">Gasto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Grupo.html" data-type="entity-link">Grupo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Like.html" data-type="entity-link">Like</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginPage.html" data-type="entity-link">LoginPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notificacion.html" data-type="entity-link">Notificacion</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pago.html" data-type="entity-link">Pago</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagoUser.html" data-type="entity-link">PagoUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/Propuesta.html" data-type="entity-link">Propuesta</a>
                            </li>
                            <li class="link">
                                <a href="classes/Recibos.html" data-type="entity-link">Recibos</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserChanged.html" data-type="entity-link">UserChanged</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsuarioGrupo.html" data-type="entity-link">UsuarioGrupo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link">DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link">ModalService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});