/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Deve visitar a página e verificar o título', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')

        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)
        })

        /*const title = cy.title()
        console.log(title)

        cy.get('#formNome').type(title)*/

    })

    it('Encontrar e interagir com um elemento', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.pause()

        cy.get('input[id="buttonSimple"]')
        .should('have.value', 'Clique Me!')
        .click()
        .should('have.value', 'Obrigado!')

    })
    
})