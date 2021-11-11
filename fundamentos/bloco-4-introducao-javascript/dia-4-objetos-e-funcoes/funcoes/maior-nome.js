function maior(nome) { 
    maior_nome = ''
    for (x in nome) {
        if (nome[x].length > maior_nome.length){
            maior_nome = nome[x]
        }
    }
    return maior_nome
}


lista = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maior(lista))