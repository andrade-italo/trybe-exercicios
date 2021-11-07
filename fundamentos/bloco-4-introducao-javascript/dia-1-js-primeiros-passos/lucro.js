const cpv = 10*1.2
const venda = 15
lucro = venda - cpv
var qtd = -1000

if (cpv < 0 || venda < 0 || qtd < 0) {
    console.log('Erro')
}
else {
    lucro_total = lucro * qtd
    console.log(lucro_total)
}