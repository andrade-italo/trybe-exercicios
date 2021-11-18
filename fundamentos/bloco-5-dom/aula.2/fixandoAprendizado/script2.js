let whereIs = document.getElementById('elementoOndeVoceEsta')
let pai = whereIs.parentNode
let filhoDoFilho = whereIs.firstElementChild
// 01.Crie um irmão para elementoOndeVoceEsta .
let brother = document.createElement('p')
brother.id = "brother"
brother.innerText = "Eu sou o dougras, você não é o dougras"
pai.appendChild(brother)

// 02.Crie um filho para elementoOndeVoceEsta .
let ultimoFilhoDoFilho = document.createElement('p')
ultimoFilhoDoFilho.id = "ultimoFilhoDoFilho"
ultimoFilhoDoFilho.innerText = "Novo ultimo filho do filho que é filho do Where is"
whereIs.appendChild(ultimoFilhoDoFilho)

// 03.Crie um filho para primeiroFilhoDoFilho .
let filhoDofilhoAoQuadrado = document.createElement('section')
filhoDofilhoAoQuadrado.id = "filhoDoFilhoAoQuadrado"
filhoDofilhoAoQuadrado.innerText = "Filho do filho elevado ao quadrado"
filhoDoFilho.appendChild(filhoDofilhoAoQuadrado)

// 04.A partir desse filho criado, acesse terceiroFilho .
let terceiroFilho = filhoDofilhoAoQuadrado.parentElement.parentElement.nextElementSibling
console.log(terceiroFilho)