  /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
         */

 // 01. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
let p2 = document.getElementsByTagName("p")[1].innerText = 'Em 2 anos quero trazer algo inovador'

// 02. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
let quadradoAmarelo = document.getElementsByClassName("main-content")[0]
quadradoAmarelo.style.background = "rgb(76,164,109)" 

// 03. Crie uma função que mude a cor do quadrado vermelho para branco.
let quadradoVermelho = document.getElementsByClassName("center-content")[0]
quadradoVermelho.style.background = "white" 

// 04. Crie uma função que corrija o texto da tag <h1>.
let h1 = document.getElementsByClassName("title")[0]
h1.innerText = "Exercício 5.1 - JavaScript"

// 05. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
let p = document.getElementsByTagName("p")
for (let x of p) {
  x.style.textTransform = "uppercase"
}

// 06. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
console.log(p)