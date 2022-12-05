/// <reference types="Cypress" />

describe('Assertivas', () => {
    it('Equality', () => {
      const a = 1;

      expect(a).to.be.equal(1)
      expect(a, 'Deveria ser 1').not.to.be.equal(2)

    })

    it('Truthy', () => {
        const a = true;

        expect(a).to.be.true;
        expect(true).to.be.true;
        //expect(b).to.be.null;
        expect(b).to.be.undefined;
    })

    it('Object Equality', () => {
        const obj = {
            a: 1,
            b: 2
        }

        expect(obj).equal(obj)
        //expect(obj).to.be.equal({a:1, b:2})
        expect(obj).to.be.deep.equal({a:1, b:2})
        expect(obj).to.not.be.empty //verifica que o objeto não está vazio
    })

    it('Arrays', () => {
        const arr = [1,2,3]

        expect(arr).to.have.members([1,2,3])
        expect(arr).to.include.members([1,3]) //verifica os membros contidos no array, pode ser usado no object também
        
    })

    it('Types', () => {
        const num = 1
        const str = 'String'

        expect(num).to.be.a('number')
        expect(str).to.be.a('string')
    })

    it('String', () => {
        const str = 'String de teste'

        expect(str).to.have.length(15)
        expect(str).to.contains('de')
    })

    it.only('Numbers', () => {
        const number = 4
        const floatNumber = 5.867

        expect(number).to.be.above(3) //verifica se o número está acima de 3
        expect(number).to.be.below(7) //verifica se o número está  abaixo de 7
        expect(floatNumber).to.be.closeTo(5.8, 0.1) //verifica se o número é próximo de 5.8

    })
  })