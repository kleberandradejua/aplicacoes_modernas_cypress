/// <reference types="cypress" />

describe('Cypress basics', () => {

    before('Acessar o site', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=> {
        cy.reload()
    })

    it('Campos de texto', () =>{    
        cy.get('#formNome')
        .click()
        .type('teste de campo de texto')
        .should('have.value', 'teste de campo de texto')          
        cy.get('#elementosForm\\:sugestoes')        
        .type('text area teste, várias palavras')
        .should('have.value', 'text area teste, várias palavras')     

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .click()
        .type('texto aqui')

        cy.get('[data-cy="dataSobrenome"]')
        .type('Teste12345{backspace}{backspace}')

        cy.get('#elementosForm\\:sugestoes')        
        .clear()
        .type('Erro{selectall}acerto', {delay:100})
        .should('have.value', 'acerto') 



        
    })

   
    
})