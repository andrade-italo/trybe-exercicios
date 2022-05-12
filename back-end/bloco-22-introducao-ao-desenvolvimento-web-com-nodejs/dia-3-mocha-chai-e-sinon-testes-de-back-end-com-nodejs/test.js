const { expect, assert } = require('chai');
const poloFind = require('./index.js');

describe('teste se: ', () => {
    it('Essa função irá receber um número como parâmetro e retornar uma string como resposta', ()=> {
        assert.typeOf(poloFind(1), 'string');
    })
    it('Quando o número passado for maior que 0 deverá retornar "positivo"', ()=> {
        expect(poloFind(1)).equals('Positivo');
    })
    it('quando for menor que 0 deverá retornar "negativo"', ()=> {
        expect(poloFind(-1)).to.be.equals('Negativo');
    })
    it('Quando o número passado for 0 deverá retornar "neutro"', ()=> {
        expect(poloFind(0)).equals('Neutro');
    })
    it('Quando o parametro não for número, deverá retornar "Is not a number"', ()=> {
        expect(poloFind('potato')).equals("Is not a number");
    })
})
