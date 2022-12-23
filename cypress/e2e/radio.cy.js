/// <reference types="Cypress" />

describe('Assertivas', () => {

    before('Acessar o site', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=> {
        cy.reload()
    })

    it('Radio', () =>{    
        cy.get('#formSexoFem')
        .click()
        .should('be.checked')       
        
        cy.get('#formSexoMasc').should('not.be.checked')                
    })   
  })