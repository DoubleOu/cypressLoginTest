/// <reference types="cypress" />



describe('logout test', () => {
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

    it('should reach the secure page', () => {
        cy.wait(2000)
        cy.url().should('include', '/secure')
    })

    it('should log out', () => {
        cy.get('.button').click()
        cy.wait(2000)
        cy.url().should('include', '/login')
    })
})