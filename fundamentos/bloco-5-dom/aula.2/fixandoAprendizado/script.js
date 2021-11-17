// 01.Acesse o elemento elementoOndeVoceEsta .
let whereIs = document.getElementById('elementoOndeVoceEsta')


// 02.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = whereIs.parentNode
pai.style.color = 'blue'

// 03.Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = whereIs.firstElementChild
primeiroFilhoDoFilho.innerText = "Adicionei um texto"


// 04.Acesse o primeiroFilho a partir de pai .
let primeiroFilhoPai = pai.firstElementChild 
console.log(primeiroFilhoPai)


// 05.Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let primeiroFilho = whereIs.previousElementSibling
console.log(primeiroFilho)
// 06.Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let atencao = whereIs.nextSibling
console.log(atencao)

// 07.Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = whereIs.nextElementSibling
console.log(terceiroFilho)

// 08.Agora acesse o terceiroFilho a partir de pai .
let terceiroFilhoPai = pai.lastElementChild.previousElementSibling
console.log(terceiroFilhoPai)