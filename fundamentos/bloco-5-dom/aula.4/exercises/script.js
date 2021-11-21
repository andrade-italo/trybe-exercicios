let body = document.querySelector('body')


//Cor de fundo da tela;
let fundo = document.getElementById('fundo')
let setFundo = document.createElement("input");
setFundo.type = "text";
setFundo.placeholder = "Escreva aqui a cor de fundo"
setFundo.className = "caixaFundo";
fundo.appendChild(setFundo)

let btnFundo = document.createElement('button')
btnFundo.id = 'btnFundo'
btnFundo.innerText = 'OK'
fundo.appendChild(btnFundo)


//Cor do texto;
let cor = document.getElementById('cor')
let setCor = document.createElement("input");
setCor.type = "text";
setCor.placeholder = "Escreva aqui a cor da letra"
setCor.className = "caixaCor";
cor.appendChild(setCor)

let btnCor = document.createElement('button')
btnCor.id = 'btnCor'
btnCor.innerText = 'OK'
cor.appendChild(btnCor)

//Tipo da fonte;
let fonte = document.getElementById('fonte')
let setFonte = document.createElement("input");
setFonte.type = "text";
setFonte.placeholder = "Escreva aqui a fonte desejada"
setFonte.className = "caixaFonte";
fonte.appendChild(setFonte)

let btnFonte = document.createElement('button')
btnFonte.id = 'btnFonte'
btnFonte.innerText = "OK"
fonte.appendChild(btnFonte)




//Tamanho da fonte.
let tamanho = document.getElementById('tamanho')
let setTamanho = document.createElement("input");
setTamanho.type = "text";
setTamanho.placeholder = "Escreva aqui o tamanho da fonte desejado"
setTamanho.className = "caixaTamanho";
tamanho.appendChild(setTamanho)

let btnTamanho = document.createElement('button')
btnTamanho.id = 'btnTamanho'
btnTamanho.innerText = 'OK'
tamanho.appendChild(btnTamanho)



//Espaçamento entre as linhas do texto;
let linha = document.getElementById('linha')
let setLinha = document.createElement("input");
setLinha.type = "text";
setLinha.placeholder = "Escreva aqui o espaçamento desejado"
setLinha.className = "caixaLinha";
linha.appendChild(setLinha)

let btnLinha = document.createElement('button')
btnLinha.id = 'btnLinha'
btnLinha.innerText = 'OK'
linha.appendChild(btnLinha)


//Parte 2 Interatividade com o usuario

//tamanho do botao
function caixaBotaoTam(botoes, y, z) {
    for (let x of botoes) {
        x.style.width = y
        x.style.height = z
    }
}

let botoes = document.getElementsByTagName('button')
let caixas = document.getElementsByTagName('input')
caixaBotaoTam(botoes, '40px', '26px')
caixaBotaoTam(caixas, '400px', '20px')


//faz funcionar tudo
function space() {
    body.style.lineHeight = `${setLinha.value}px`
    localStorage.setItem('Espaçamento das linhas', body.style.lineHeight)
    setLinha.value = ''
}

function corDeFundo() {
    body.style.background = setFundo.value
    localStorage.setItem('Cor de fundo', body.style.background)
    setFundo.value = ''
}

function corDaLetra() {
    body.style.color = setCor.value
    localStorage.setItem('Cor da letra', body.style.color)
    setCor.value = ''
}
function tam() {
    body.style.fontSize = `${setTamanho.value}pt`
    localStorage.setItem('Tamanho da letra', body.style.fontSize)
    setTamanho.value = ''
}
function fonteFam() {
    body.style.fontFamily = setFonte.value
    localStorage.setItem('Fonte family', body.style.fontFamily)
    setFonte.value = ''
}


btnCor.addEventListener('click', corDaLetra)
btnFundo.addEventListener('click', corDeFundo)
btnLinha.addEventListener('click', space)
btnTamanho.addEventListener('click', tam)
btnFonte.addEventListener('click', fonteFam)



if (localStorage.getItem('Fonte family') !== null){
    body.style.fontFamily = localStorage.getItem('Fonte family')
}
if (localStorage.getItem('Tamanho da letra')!== null){
    body.style.fontSize = localStorage.getItem('Tamanho da letra')
}
if (localStorage.getItem('Cor da letra') !== null){
    body.style.color = localStorage.getItem('Cor da letra')
}
if (localStorage.getItem('Cor de fundo') !== null){
    body.style.background = localStorage.getItem('Cor de fundo')
}
if (localStorage.getItem('Espaçamento das linhas') !== null){
    body.style.lineHeight = localStorage.getItem('Espaçamento das linhas')
}
console.log(localStorage.getItem('Espaçamento das linhas'))