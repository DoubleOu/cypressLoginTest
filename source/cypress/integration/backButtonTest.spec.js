/// <reference types="cypress" />

//NOTE: This specific test is meant to fail.  A "caught bug" scenario

describe('Clicking the back button after log in', () => {
    it('Visits the login page', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    it('should login', () => {
        cy.get('h2').should('exist')
        cy.wait(200)
        //Enter correct user name and password
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
    })

    it('reaches the secure page', () => {
        cy.get('h2').should('exist')
    })

    it('should go click the back button and stay in session', () => {
        cy.go('back')
        cy.wait(1000)
        cy.url().should('include', '/secure')
    })
})