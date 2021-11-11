function menorIndex(lista) {
    valor = lista[0]
    index = 0
    for (x in lista) {
        if (lista[x] < valor) {
            valor = lista[x]
            index = x
        }
    }
    return index
    }
    
    
    lista = [2, 4, 6, 7, 10, 0, -3]
    console.log(menorIndex(lista))