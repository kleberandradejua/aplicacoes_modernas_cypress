/// <reference types="cypress" />

describe('Elementos', () => {
    it('Text', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
    }) 

    it.only('Link', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        /*cy.get('a').click({multiple:true})
        cy.get('#resultado').should('have.text', 'Voltou!')*/

        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

})