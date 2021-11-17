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
