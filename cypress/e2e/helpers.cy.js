/// <reference types="cypress" />

describe('Cypress basics', () => {

    before('Acessar o site', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=> {
        cy.reload()
    })

    it('Invoke', () =>{
        const getValue = () => 1;
        const soma = (a, b) => a+b;

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({fn: soma}).invoke('fn', 5, 2).should('be.equal', 7)

        cy.get('#formNome').invoke('val', 'Texto via invoke') //apenas um exemplo de uso do invoke, o ideal é utilizar o type.

        cy.window().invoke('alert', 'Dá pra ver?')

        cy.get('#resultado').invoke('html', '<input type="button" value="hacked"/>')
        
    })

   
    
})