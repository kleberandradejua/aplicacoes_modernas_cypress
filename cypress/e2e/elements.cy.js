/// <reference types="cypress" />

describe('Elementos', () => {
    it('Text', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
    }) 

    it('Link', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        /*cy.get('a').click({multiple:true})
        cy.get('#resultado').should('have.text', 'Voltou!')*/

        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('combo', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('[data-test=dataEscolaridade]')
        .select('2o grau completo')
        .should('have.value', '2graucomp')

        cy.get('[data-test=dataEscolaridade]')
        .select('1graucomp')
        .should('have.value', '1graucomp')

        cy.get('[data-test="dataEscolaridade"] option').should('have.length', 8)
        cy.get('[data-test="dataEscolaridade"] option').then($arr => {
            const values = []
            $arr.each(function(){
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(["Superior", "Mestrado"])
        })
    })

    it.only('combo múltiplo', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('[data-testid=dataEsportes]').select(['natacao', 'Corrida', 'nada'])
        cy.get('[data-testid=dataEsportes]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
            expect($el.val()).to.have.length(3)
        })

        cy.get('[data-testid=dataEsportes]').invoke('val').should('eql',['natacao', 'Corrida', 'nada'])


    })

})