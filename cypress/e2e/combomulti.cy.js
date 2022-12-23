/// <reference types="Cypress" />

describe('Assertivas', () => {

    before('Acessar o site', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=> {
        cy.reload()
    })

    it('Combo múltiplo', () =>{
        cy.get('[data-testid="dataEsportes"]')
        .select(['Futebol', 'Natacao'])        
        .should('have.value', ['natacao','futebol'])          
                     
    })   
  })