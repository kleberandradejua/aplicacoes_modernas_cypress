/// <reference types="Cypress" />

describe('Assertivas', () => {

    before('Acessar o site', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=> {
        cy.reload()
    })

    it('Combo múltiplo', () =>{
        cy.get('#buttonDelay').click()   
        cy.get('#novoCampo').should('exist')          
                     
    })   
  })

  //Importante usar o timeout em apenas uma consulta que demora mais que o necessário;
  //Não é interessante aplicar o timeout no config js, para que toda aplicação fique com lentidão.