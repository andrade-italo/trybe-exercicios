var lista = []
var lista1 = []
var x = 0

while (true) {
    x++
    lista.push(x);
    if (x ==25) {
        break
    }
}
for (i in lista) {
    lista1.push(lista[i]/2)
}

console.log(lista1)