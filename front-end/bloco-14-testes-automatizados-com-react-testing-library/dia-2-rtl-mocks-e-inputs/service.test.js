let { randomNumber } = require('./service');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
    randomNumber = jest.fn().mockReturnValue(10)

    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
});

/* Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.
Essa implementação deve ocorrer uma única vez.
Defina o mock da função para a nova funcionalidade da função.
Teste se a função foi chamada e a nova implementação de divisão foi aplicada.
Verifique se a aplicação da nova implementação acontece apenas uma vez.
 */
test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    randomNumber = jest.fn().mockImplementationOnce((param1, param2) => {
        return param1/param2
    })

    expect(randomNumber(4,2)).toBe(2);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(4, 2);
});

/* Use a mesma função do primeiro exercício
Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
Retorne a multiplicação dos parâmetros.
Realize os testes que achar necessário.
Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
Faça os testes que achar necessário. */
describe("testando implementações", () => {
    test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
        randomNumber = jest.fn().mockImplementationOnce((param1, param2, param3) => {
            return param1*param2*param3
        })
    
        expect(randomNumber(4,2,1)).toBe(8);
        expect(randomNumber).toHaveBeenCalled();
        expect(randomNumber).toHaveBeenCalledTimes(1);
        expect(randomNumber).toHaveBeenCalledWith(4, 2, 1);
    });
    
    test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
        randomNumber.mockReset();
        expect(randomNumber).toHaveBeenCalledTimes(0);
    
        randomNumber.mockImplementation(a => a * 2);
    
        expect(randomNumber(5)).toBe(10);
        expect(randomNumber).toHaveBeenCalled();
        expect(randomNumber).toHaveBeenCalledTimes(1);
        expect(randomNumber).toHaveBeenCalledWith(5);
      });
});
