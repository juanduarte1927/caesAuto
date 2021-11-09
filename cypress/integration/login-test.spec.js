/// <reference types="cypress" />

before('Cargar Data', () => {
    cy.fixture('login').then(function (login) {
        this.login = login;
    })
})

describe('hacer registro en e-commerce', () => {
    
    it('exitoso', function () {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click();
        cy.get('#email_create').type(this.login.correoRegistroExitoso1)
        cy.get('#SubmitCreate > span').click();
        cy.wait(2000)
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(this.login.nombre)
        cy.get('#customer_lastname').type(this.login.apellido)
        cy.get('#passwd').type(this.login.clave)
        cy.get('#address1').type(this.login.direccion)
        cy.get('#city').type(this.login.ciudad)
        cy.get('#phone_mobile').type(this.login.telefono)
        cy.get('#id_state').select(this.login.estado)
        cy.get('#postcode').type(this.login.zip)
        cy.get('#submitAccount > span').click();
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').should('be.visible')     //esta    
    })

    it('fallido por código postal', function () {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click();
        cy.get('#email_create').type(this.login.correoRegistroExitoso2)
        cy.get('#SubmitCreate > span').click();
        cy.wait(2000)
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(this.login.nombre)
        cy.get('#customer_lastname').type(this.login.apellido)
        cy.get('#passwd').type(this.login.clave)
        cy.get('#address1').type(this.login.direccion)
        cy.get('#city').type(this.login.ciudad)
        cy.get('#phone_mobile').type(this.login.telefono)
        cy.get('#id_state').select(this.login.estado)
        cy.get('#postcode').type(this.login.zipFallido)
        cy.get('#submitAccount > span').click();
        cy.get('ol > li').should('contain', this.login.mensajeZipIncorrecto)     
    })

    it('hacer login', function () {
//implementado
    })

    it('hacer login fallido por credenciales incorrectas', function () {
//en proceso
    })

})