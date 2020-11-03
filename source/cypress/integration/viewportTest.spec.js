/// <reference types="cypress" />


describe('Viewport Tests', () => {
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })


context('iphone X', () => {
    beforeEach('shifts to the device viewport', () => {
        cy.viewport('iphone-x')
})


    it('should login', () => {
        cy.get('h2').should('exist')
        cy.wait(200)
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').should('be.visible').click()
    })

    it('should reach the secure page', () => {
        cy.get('h2').should('exist')
    })

    it('should log out', () => {
        cy.get('.button').click()
        cy.wait(2000)
        cy.url().should('include', '/login')
    })
})

context('iphone X, landscape', () => {
    beforeEach('shifts to the device viewport', () => {
        cy.viewport('iphone-x', 'landscape')
        cy.wait(200)
    })


    it('should login', () => {
        cy.get('h2').should('exist')
        cy.wait(200)
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').should('be.visible').click()
    })

    it('should reach the secure page', () => {      
        cy.get('h2').should('exist')
    })

    it('should log out', () => {
        cy.get('.button').click()
        cy.wait(2000)
        cy.url().should('include', '/login')
    })
})

context('Galaxy 10', () => {
    beforeEach('shifts to the device viewport', () => {
        cy.viewport('samsung-s10')
        cy.wait(200)
    })


    it('should login', () => {
        cy.get('h2').should('exist')
        cy.wait(200)
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').should('be.visible').click()
    })

    it('should reach the secure page', () => {
        cy.get('h2').should('exist')
    })

    it('should log out', () => {
        cy.get('.button').click()
        cy.wait(2000)
        cy.url().should('include', '/login')
    })
})

context('Galaxy 10, landscape', () => {
    beforeEach('shifts to the device viewport', () => {
        cy.viewport('samsung-s10', 'landscape')
        cy.wait(200)
    })


    it('should login', () => {
        cy.get('h2').should('exist')
        cy.wait(200)
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').should('be.visible').click()
    })

    it('should reach the secure page', () => {
        cy.get('h2').should('exist')
    })

    it('should log out', () => {
        cy.get('.button').click()
        cy.wait(2000)
        cy.url().should('include', '/login')
    })
})

context('IPad', () => {
    beforeEach('shifts to the device viewport', () => {
        cy.viewport('ipad-2', 'landscape')
        cy.wait(200)
    })


    it('should login', () => {
        cy.get('h2').should('exist')
        cy.wait(200)
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').should('be.visible').click()
    })

    it('should reach the secure page', () => {
        cy.get('h2').should('exist')
    })

    it('should log out', () => {
        cy.get('.button').click()
        cy.wait(2000)
        cy.url().should('include', '/login')
    })
})

context('IPad, portrait', () => {
    beforeEach('shifts to the device viewport', () => {
        cy.viewport('ipad-2', 'portrait')
        cy.wait(200)
    })


    it('should login', () => {
        cy.get('h2').should('exist')
        cy.wait(200)
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').should('be.visible').click()
    })

    it('should reach the secure page', () => {
        cy.get('h2').should('exist')
    })

    it('should log out', () => {
        cy.get('.button').click()
        cy.wait(2000)
        cy.url().should('include', '/login')
    })
})
})