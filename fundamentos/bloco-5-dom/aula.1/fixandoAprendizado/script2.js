// 01 - Adicione uma classe igual para os dois parágrafos.


// 02 - Recupere os parágrafos via JS, usando a função getElementsByClassName ;
const paragraf = document.querySelectorAll('.paragraph');
console.log(paragraf)

// 03 - Altere algum estilo do primeiro deles.

paragraf[0].style.color = "blue";

// 04 - Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .
let subtitulo = document.querySelector('h4')
console.log(subtitulo)
