/// <reference types="Cypress" />

describe('Assertivas', () => {

    before('Acessar o site', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=> {
        cy.reload()
    })

    it('Checkbox', () =>{    
        cy.get('#formComidaCarne')
        .click()
        .should('be.checked')
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')
        cy.get('[name=formComidaFavorita]').click({multiple:true})

        cy.get('#formComidaCarne').should('not.be.checked')
        cy.get('#formComidaPizza').should('not.be.checked')
                     
    })   
  })