/// <reference types="cypress" />

describe('Cypress basics', () => {

    before('Acessar o site', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=> {
        cy.reload()
    })

    it('Deve visitar a página e verificar o título', () =>{       

        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')

        const title = cy.title()
        console.log(title)

        
    })

    it('Encontrar e interagir com um elemento', () => {        
        
        cy.get('input[id="buttonSimple"]')
        .should('have.value', 'Clique Me!')
        .click()
        .should('have.value', 'Obrigado!')

    })
    
})