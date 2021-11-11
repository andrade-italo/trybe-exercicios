function repeat(rep) {
valorParametro = 0
valor =0
numero = 0

for (x in rep) {
    for (y = x; y <= rep.length; y++) {
        if (rep[x] == rep[y]) {
            valor += 1
        }}
    if (valor > valorParametro) {
        valorParametro = valor
        numero = rep[x]
    }
    valor = 0
}
if (valorParametro > 1) {
    resposta = 'O numero que mais se repete é o: ' + numero + 
    ', ele se repete: ' + valorParametro + ' vezes'
}
else {
    resposta = 'Nenhum numero se repete'
}
return resposta
}
console.log(repeat([2,2,3,5,7]))