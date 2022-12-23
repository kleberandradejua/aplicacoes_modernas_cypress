/// <reference types="Cypress" />

describe('Assertivas', () => {

    before('Acessar o site', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=> {
        cy.reload()
    })

    it('Combo', () =>{
        cy.get('[data-test="dataEscolaridade"]')
        .select('2o grau completo') 
        .should('have.value', '2graucomp')      
                     
    })   
  })