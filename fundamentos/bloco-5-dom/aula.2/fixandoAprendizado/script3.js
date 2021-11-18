//Remova os elementos filhos de pai exceto elementoOndeVoceEsta e primeiroFilhoDoFilho.

let pai = document.getElementById("pai").childNodes
let segundo = document.getElementById("segundoEUltimoFilhoDoFilho")
segundo.remove()

for (let x = pai.length -1; x >=0; x -=1) {
    if (pai[x].id !== 'elementoOndeVoceEsta') {
        pai[x].parentNode.removeChild(pai[x])
    }

}

