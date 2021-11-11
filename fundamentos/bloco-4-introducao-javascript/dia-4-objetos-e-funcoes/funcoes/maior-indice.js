function maiorIndex(lista) {
valor = 0
index = 0
for (x in lista) {
    if (lista[x] > valor) {
        valor = lista[x]
        index = x
    }
}
return index
}


lista = [2, 3, 6, 7, 10, 1]
console.log(maiorIndex(lista))