/// <reference types="cypress" />

before('Cargar Data', () => {
    cy.fixture('login').then(function (login) {
        this.login = login;
    })
})

beforeEach('Visitar Website', () => {
    cy.visit('http://automationpractice.com/index.php')
})

describe('hacer registro en e-commerce', () => {
    
    it('exitoso', function () {
        cy.llenarRegistro(this.login.correoRegistroExitoso1);
        cy.llenarFormularioNuevoUsuario(this.login.nombre, this.login.apellido, this.login.clave, this.login.direccion, this.login.ciudad, 
                                        this.login.telefono, this.login.estado, this.login.zip)
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').should('be.visible')  
    })

    it('fallido por código postal', function () {
        cy.llenarRegistro(this.login.correoRegistroExitoso2)
        cy.llenarFormularioNuevoUsuario(this.login.nombre, this.login.apellido, this.login.clave, this.login.direccion, this.login.ciudad, 
            this.login.telefono, this.login.estado, this.login.zipFallido)
        cy.get('ol > li').should('contain', this.login.mensajeZipIncorrecto)
    })

    it('hacer login', function () {
        cy.Login(this.login.correoRegistroExitoso1,this.login.clave);
        cy.get('.info-account').should('contain', 'Welcome to your account');
    })

    it('hacer login fallido por credenciales incorrectas', function () {
        cy.Login(this.login.correoRegistroExitoso1,this.login.claveFallida);
        cy.get('ol > li').should('contain', 'Authentication failed.');
    })

})