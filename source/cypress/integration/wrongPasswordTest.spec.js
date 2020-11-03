/// <reference types="cypress" />



describe('Wrong Password', () => {
    it('Visits the login page', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    it('should attempt to login with a false password', () => {
        cy.get('h2').should('exist')
        cy.wait(200)
        //Enter correct user name and password
        cy.get('#username').type('test')
        cy.get('#password').type('test!')
        cy.get('.radius').click()
    })

    it('should get an alert', () => {
        cy.get('#flash').contains('Your username is invalid!')
    })
})

describe('Space error', () => {
    it('should attempt to login with a false password', () => {
        cy.get('h2').should('exist')
        cy.wait(200)
        //Enter correct user name and password
        cy.get('#username').type('tomsmith ')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
    })

    it('should get an alert', () => {
        cy.get('#flash').contains('Your username is invalid!')
    })
})

describe('Case error', () => {
    it('should attempt to login with a false password', () => {
        cy.get('h2').should('exist')
        cy.wait(200)
        //Enter correct user name and password
        cy.get('#username').type('TOMSMITH')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
    })

    it('should get an alert', () => {
        cy.get('#flash').contains('Your username is invalid!')
    })
})